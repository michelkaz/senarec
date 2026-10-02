// Inscription newsletter. Sans RESEND_API_KEY + RESEND_AUDIENCE_ID configurées,
// répond honnêtement que le service n'est pas encore disponible (aucun silence trompeur).
const EMAIL_RE = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;
const RATE = { max: 5, windowMs: 10 * 60 * 1000 };
const hits = new Map();

function send(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}

function clientIp(req) {
  return String(req.headers['x-forwarded-for'] || '').split(',')[0].trim() || req.socket?.remoteAddress || 'unknown';
}

function rateLimited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < RATE.windowMs);
  if (list.length >= RATE.max) return true;
  list.push(now);
  hits.set(ip, list);
  return false;
}

async function readJson(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') return JSON.parse(req.body);
  const chunks = [];
  for await (const c of req) chunks.push(c);
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return send(res, 405, { ok: false, error: 'Méthode non autorisée.' });
  }
  if (rateLimited(clientIp(req))) return send(res, 429, { ok: false, error: 'Trop de tentatives. Réessayez plus tard.' });

  let input;
  try {
    input = await readJson(req);
  } catch {
    return send(res, 400, { ok: false, error: 'Requête invalide.' });
  }
  const email = String(input?.email || '').trim().toLowerCase();
  if (!EMAIL_RE.test(email) || email.length > 254) return send(res, 422, { ok: false, error: 'Adresse email invalide.' });
  if (!input?.consent) return send(res, 422, { ok: false, error: 'Consentement requis.' });

  const key = process.env.RESEND_API_KEY;
  const audience = process.env.RESEND_AUDIENCE_ID;
  if (!key || !audience) {
    console.error('[newsletter] RESEND_API_KEY ou RESEND_AUDIENCE_ID manquante');
    return send(res, 503, { ok: false, error: "L'inscription à la newsletter n'est pas encore disponible." });
  }

  try {
    const r = await fetch(`https://api.resend.com/audiences/${audience}/contacts`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, unsubscribed: false }),
      signal: AbortSignal.timeout(10000),
    });
    if (!r.ok && r.status !== 409) {
      console.error('[newsletter] échec Resend', r.status, (await r.text()).slice(0, 300));
      return send(res, 502, { ok: false, error: "L'inscription a échoué. Réessayez plus tard." });
    }
  } catch (e) {
    console.error('[newsletter] erreur réseau', e.message);
    return send(res, 502, { ok: false, error: "L'inscription a échoué. Réessayez plus tard." });
  }
  return send(res, 200, { ok: true });
}
