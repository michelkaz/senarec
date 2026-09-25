import { useState } from 'react';
import { CheckCircle2, Loader2, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT, SOCIALS } from '../data/content';
import { FacebookIcon, XIcon, LinkedinIcon, YoutubeIcon, WhatsappIcon } from '../components/SocialIcons';
import { Accent, Alternate, Block, Card, HeroAccent, PageHero } from '../components/gov/ui';

const ICONS = { facebook: FacebookIcon, x: XIcon, linkedin: LinkedinIcon, youtube: YoutubeIcon, whatsapp: WhatsappIcon };
const LIMIT = 3000;

const EMAIL_RE = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;
const NAME_RE = /^[\p{L}\p{M}][\p{L}\p{M}' .,\-()]*$/u;
const PHONE_RE = /^\+?[0-9 ().\-]{6,30}$/;

// Validation côté navigateur = confort. La validation qui fait foi est refaite côté serveur (api/contact.js).
function check(f) {
  const n = {};
  const nom = f.nom.trim();
  const email = f.email.trim();
  if (!nom) n.nom = 'Votre nom est requis.';
  else if (nom.length < 2 || !NAME_RE.test(nom)) n.nom = 'Nom invalide.';
  if (!email) n.email = 'Votre adresse email est requise.';
  else if (!EMAIL_RE.test(email) || email.includes('..')) n.email = 'Adresse email invalide.';
  if (f.organisme && /[<>{}]/.test(f.organisme)) n.organisme = 'Caractères non autorisés.';
  if (f.telephone.trim() && !PHONE_RE.test(f.telephone.trim())) n.telephone = 'Numéro de téléphone invalide.';
  const m = f.message.trim();
  if (!m) n.message = 'Votre message est requis.';
  else if (m.length < 10) n.message = 'Message trop court (10 caractères minimum).';
  return n;
}

function Form() {
  const empty = { nom: '', email: '', organisme: '', telephone: '', message: '', website: '' };
  const [f, setF] = useState(empty);
  const [err, setErr] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [notice, setNotice] = useState('');
  const [opened] = useState(() => Date.now());
  const set = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    const n = check(f);
    setErr(n);
    const firstBad = ['nom', 'email', 'organisme', 'telephone', 'message'].find((k) => n[k]);
    if (firstBad) {
      document.getElementById(firstBad)?.focus();
      return;
    }
    setStatus('sending');
    setNotice('');
    try {
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...f, t: opened }),
      });
      const data = await r.json().catch(() => ({}));
      if (r.ok && data.ok) {
        setStatus('sent');
        setF(empty);
        return;
      }
      if (data.fields) setErr(data.fields);
      setNotice(data.error || "L'envoi a échoué. Veuillez réessayer.");
    } catch {
      setNotice('Connexion impossible. Vérifiez votre réseau et réessayez.');
    }
    setStatus('error');
  };

  const inp = 'w-full rounded border bg-white px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-gov/30';
  const field = (k, label, type = 'text', req, auto) => (
    <div>
      <label htmlFor={k} className="block text-sm font-semibold text-govDark mb-1">{label}{req && <span className="text-redText"> *</span>}</label>
      <input id={k} name={k} type={type} value={f[k]} onChange={set(k)} required={req} aria-required={req || undefined} maxLength={k === 'email' ? 254 : 150} autoComplete={auto} aria-invalid={!!err[k]} aria-describedby={err[k] ? `${k}-e` : undefined} className={`${inp} ${err[k] ? 'border-rdcRed' : 'border-sableDeep'}`} />
      {err[k] && <p id={`${k}-e`} role="alert" className="text-xs text-redText mt-1">{err[k]}</p>}
    </div>
  );

  if (status === 'sent') {
    return (
      <div role="status" aria-live="polite" className="bg-white rounded-lg border border-sableDeep p-8 shadow-sm text-center">
        <CheckCircle2 size={44} className="mx-auto text-emerald-600" />
        <h3 className="text-xl font-bold text-govDark mt-4">Message envoyé</h3>
        <p className="text-sm text-slate-600 mt-2">Merci, votre message a bien été transmis au SENAREC.</p>
        <button type="button" onClick={() => setStatus('idle')} className="mt-6 text-sm font-bold text-redText hover:text-govDark">Envoyer un autre message</button>
      </div>
    );
  }
  return (
    <form onSubmit={submit} noValidate className="grid sm:grid-cols-2 gap-5 bg-white rounded-lg border border-sableDeep p-6 sm:p-8 shadow-sm">
      {field('nom', 'Votre nom', 'text', true, 'name')}
      {field('email', 'Votre adresse email', 'email', true, 'email')}
      {field('organisme', 'Organisme (facultatif)', 'text', false, 'organization')}
      {field('telephone', 'Téléphone (facultatif)', 'tel', false, 'tel')}
      {/* Champ piège anti-robots : invisible pour les humains */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Ne pas remplir</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" value={f.website} onChange={set('website')} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm font-semibold text-govDark mb-1">Message <span className="text-redText">*</span></label>
        <textarea id="message" name="message" required aria-required="true" rows={6} maxLength={LIMIT} value={f.message} onChange={set('message')} aria-invalid={!!err.message} aria-describedby={err.message ? 'message-e' : undefined} className={`${inp} resize-y ${err.message ? 'border-rdcRed' : 'border-sableDeep'}`} />
        <div className="flex justify-between text-xs mt-1">
          <span id="message-e" role="alert" className="text-redText">{err.message}</span>
          <span className="text-slate-500 tabular-nums">{f.message.length}/{LIMIT}</span>
        </div>
      </div>
      <p className="sr-only" role="status" aria-live="polite">{status === 'sending' ? 'Envoi en cours…' : status === 'error' ? notice : ''}</p>
      {notice && <p role="alert" className="sm:col-span-2 text-sm text-redText bg-red-50 border border-red-200 rounded px-4 py-3">{notice}</p>}
      <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
        <button type="submit" disabled={status === 'sending'} className="inline-flex items-center gap-2 bg-govDark hover:bg-gov disabled:opacity-60 text-white font-bold text-sm px-7 py-3.5 rounded uppercase tracking-wider">
          {status === 'sending' ? <><Loader2 size={16} className="animate-spin" /> Envoi…</> : 'Envoyer'}
        </button>
        <p className="text-xs text-slate-500 max-w-md">Vos informations servent uniquement à traiter votre demande. <Link to="/confidentialite" className="underline font-semibold">Confidentialité</Link></p>
      </div>
    </form>
  );
}

export default function Contact() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Contact' }]} eyebrow="Contact" title={<>Écrire au <HeroAccent>SENAREC</HeroAccent></>} lead="Une question, un partenariat, une demande d'information ? Le SENAREC vous répond." />
      <Alternate>
        <Block eyebrow="Coordonnées" title={<>Nous <Accent>joindre</Accent></>}>
          <div className="grid lg:grid-cols-5 gap-6">
            <Card className="lg:col-span-2 space-y-5" accent="border-l-rdcBlue">
              <p className="flex gap-3 text-sm"><MapPin size={20} className="text-redText shrink-0" />{CONTACT.address}</p>
              <p className="flex gap-3 text-sm"><Phone size={20} className="text-redText shrink-0" /><a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="hover:underline">{CONTACT.phone}</a></p>
              <p className="flex gap-3 text-sm"><Mail size={20} className="text-redText shrink-0" /><a href={`mailto:${CONTACT.email}`} className="hover:underline">{CONTACT.email}</a></p>
              <ul className="flex gap-3 pt-2">
                {SOCIALS.map(({ key, href, label }) => {
                  const Icon = ICONS[key];
                  return (
                    <li key={key}>
                      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-10 h-10 rounded-full border border-current/30 flex items-center justify-center hover:text-rdcGold hover:-translate-y-0.5 transition-all">
                        <Icon width={17} height={17} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Card>
            <div className="lg:col-span-3"><Form /></div>
          </div>
        </Block>
        <Block eyebrow="Localisation" title={<>Où nous <Accent>trouver</Accent></>}>
          <div className="rounded-lg overflow-hidden border border-white/15 h-80 md:h-96">
            <iframe title="Localisation du SENAREC — 5 Avenue Lubefu, Kinshasa, RDC" src="https://www.openstreetmap.org/export/embed.html?bbox=15.2745%2C-4.3205%2C15.2855%2C-4.3150&layer=mapnik&marker=-4.3178539%2C15.2799543" className="w-full h-full border-0" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <a href="https://www.google.com/maps/search/?api=1&query=5+Avenue+Lubefu,+Kinshasa,+RDC" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-sm font-bold text-rdcGold hover:text-white"><MapPin size={16} /> Ouvrir dans Google Maps</a>
          <p className="text-xs text-slate-300 mt-2">Le repère indique l'Avenue Lubefu (Gombe, Kinshasa) ; le numéro 5 n'est pas localisable précisément sur la carte.</p>
        </Block>
      </Alternate>
    </>
  );
}
