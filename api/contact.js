// Endpoint du formulaire de contact (fonction serverless Vercel, aussi servie par `npm run dev`).
// Le destinataire n'existe QUE côté serveur : il ne transite jamais par le navigateur.
const RECIPIENT = process.env.CONTACT_TO || 'michelkaz05@gmail.com';
const FROM = process.env.CONTACT_FROM || 'Site SENAREC <onboarding@resend.dev>';

const MAX_BODY = 16 * 1024;
const LIMITS = { nom: 100, email: 254, organisme: 150, telephone: 30, message: 3000 };
const MIN_FILL_MS = 3000; // un humain met plus de 3 s à remplir le formulaire
const MAX_AGE_MS = 24 * 3600 * 1000;
const RATE = { max: 5, windowMs: 10 * 60 * 1000 };

const EMAIL_RE = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;
const NAME_RE = /^[\p{L}\p{M}][\p{L}\p{M}' .,\-()]*$/u;
const PHONE_RE = /^\+?[0-9 ().\-]{6,30}$/;
// eslint-disable-next-line no-control-regex
const CONTROL_RE = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F‪-‮⁦-⁩]/g;

const hits = new Map(); // limitation de débit « au mieux » (mémoire de l'instance)

const clean = (v) => (typeof v === 'string' ? v.normalize('NFC').replace(CONTROL_RE, '').trim() : '');
const oneLine = (v) => clean(v).replace(/[\r\n\t]+/g, ' ');
const esc = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.end(JSON.stringify(body));
}

function clientIp(req) {
  const xf = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  return xf || req.socket?.remoteAddress || 'unknown';
}

function rateLimited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < RATE.windowMs);
  if (list.length >= RATE.max) {
    hits.set(ip, list);
    return true;
  }
  list.push(now);
  hits.set(ip, list);
  if (hits.size > 5000) for (const [k, v] of hits) if (!v.some((t) => now - t < RATE.windowMs)) hits.delete(k);
  return false;
}

function originAllowed(req) {
  const origin = req.headers.origin;
  if (!origin) return false;
  let host;
  try {
    host = new URL(origin).host;
  } catch {
    return false;
  }
  const extra = (process.env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean);
  return host === req.headers.host || extra.includes(origin);
}

async function readJson(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') return JSON.parse(req.body);
  const chunks = [];
  let size = 0;
  for await (const c of req) {
    size += c.length;
    if (size > MAX_BODY) throw Object.assign(new Error('too large'), { code: 413 });
    chunks.push(c);
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

export function validate(input) {
  const errors = {};
  const v = {
    nom: oneLine(input.nom),
    email: oneLine(input.email).toLowerCase(),
    organisme: oneLine(input.organisme),
    telephone: oneLine(input.telephone),
    message: clean(input.message).replace(/\r\n?/g, '\n'),
  };
  for (const [k, max] of Object.entries(LIMITS)) if (v[k].length > max) errors[k] = 'Champ trop long.';
  if (!v.nom) errors.nom = 'Votre nom est requis.';
  else if (v.nom.length < 2 || !NAME_RE.test(v.nom)) errors.nom ||= 'Nom invalide.';
  if (!v.email) errors.email = 'Votre adresse email est requise.';
  else if (!EMAIL_RE.test(v.email) || v.email.includes('..')) errors.email ||= 'Adresse email invalide.';
  if (v.organisme && !/^[^<>{}]+$/.test(v.organisme)) errors.organisme ||= 'Caractères non autorisés.';
  if (v.telephone && !PHONE_RE.test(v.telephone)) errors.telephone ||= 'Numéro de téléphone invalide.';
  if (!v.message) errors.message = 'Votre message est requis.';
  else if (v.message.length < 10) errors.message ||= 'Message trop court (10 caractères minimum).';
  return { values: v, errors };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return send(res, 405, { ok: false, error: 'Méthode non autorisée.' });
  }
  if (!originAllowed(req)) return send(res, 403, { ok: false, error: 'Requête refusée.' });
  if (!/^application\/json\b/i.test(req.headers['content-type'] || '')) return send(res, 415, { ok: false, error: 'Format non supporté.' });
  if (rateLimited(clientIp(req))) {
    res.setHeader('Retry-After', String(Math.ceil(RATE.windowMs / 1000)));
    return send(res, 429, { ok: false, error: 'Trop de messages envoyés. Réessayez dans quelques minutes.' });
  }

  let input;
  try {
    input = await readJson(req);
    if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('bad');
  } catch (e) {
    return send(res, e.code === 413 ? 413 : 400, { ok: false, error: 'Requête invalide.' });
  }

  // Anti-robots : champ piège rempli, ou formulaire soumis trop vite / périmé -> succès silencieux, rien n'est envoyé.
  const age = Date.now() - Number(input.t);
  if (clean(input.website) || !Number.isFinite(age) || age < MIN_FILL_MS || age > MAX_AGE_MS) return send(res, 200, { ok: true });

  const { values, errors } = validate(input);
  if (Object.keys(errors).length) return send(res, 422, { ok: false, error: 'Veuillez corriger le formulaire.', fields: errors });

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error('[contact] RESEND_API_KEY manquante');
    return send(res, 503, { ok: false, error: "Le service d'envoi n'est pas disponible pour le moment." });
  }

  const subject = `[Site SENAREC] Message de ${values.nom}`.slice(0, 200);
  const lines = [
    ['Nom', values.nom],
    ['Email', values.email],
    ['Organisme', values.organisme || '—'],
    ['Téléphone', values.telephone || '—'],
  ];
  const text = `${lines.map(([k, v]) => `${k} : ${v}`).join('\n')}\n\n${values.message}\n`;
  const html = `<div style="font-family:Arial,sans-serif;font-size:14px;color:#111"><table cellpadding="4">${lines
    .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v)}</td></tr>`)
    .join('')}</table><hr><p style="white-space:pre-wrap">${esc(values.message)}</p></div>`;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: FROM, to: [RECIPIENT], reply_to: values.email, subject, text, html }),
      signal: AbortSignal.timeout(10000),
    });
    if (!r.ok) {
      console.error('[contact] échec Resend', r.status, (await r.text()).slice(0, 300));
      return send(res, 502, { ok: false, error: "L'envoi a échoué. Veuillez réessayer plus tard." });
    }
  } catch (e) {
    console.error('[contact] erreur réseau', e.message);
    return send(res, 502, { ok: false, error: "L'envoi a échoué. Veuillez réessayer plus tard." });
  }
  return send(res, 200, { ok: true });
}
