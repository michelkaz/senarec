import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Consentement explicite, case jamais précochée, traçabilité côté serveur (api/newsletter.js).
export default function NewsletterForm({ dark = false }) {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState('idle');
  const [msg, setMsg] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setStatus('error');
      setMsg('Adresse email invalide.');
      return;
    }
    if (!consent) {
      setStatus('error');
      setMsg('Veuillez cocher la case de consentement.');
      return;
    }
    setStatus('sending');
    try {
      const r = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, consent }),
      });
      const data = await r.json().catch(() => ({}));
      if (r.ok && data.ok) {
        setStatus('sent');
        setEmail('');
        setConsent(false);
        return;
      }
      setStatus('error');
      setMsg(data.error || "L'inscription n'a pas pu être enregistrée.");
    } catch {
      setStatus('error');
      setMsg('Connexion impossible. Réessayez plus tard.');
    }
  };

  if (status === 'sent') {
    return <p role="status" className={`text-sm font-semibold ${dark ? 'text-emerald-300' : 'text-emerald-700'}`}>Inscription enregistrée. Merci.</p>;
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-3">
      <label htmlFor="nl-email" className="sr-only">Adresse email</label>
      <input
        id="nl-email"
        type="email"
        required
        placeholder="votre@email.cd"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded border bg-white text-slate-800 px-3 py-2.5 text-sm border-sableDeep focus:outline-none focus:ring-2 focus:ring-gov/30"
      />
      <label className={`flex items-start gap-2 text-xs ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5" />
        <span>
          J'accepte de recevoir les actualités du SENAREC par courriel. Désabonnement possible à tout moment. Voir la{' '}
          <Link to="/confidentialite" className={`underline font-semibold ${dark ? 'text-rdcGold' : ''}`}>politique de confidentialité</Link>.
        </span>
      </label>
      {status === 'error' && <p role="alert" className={`text-xs font-semibold ${dark ? 'text-rdcGold' : 'text-redText'}`}>{msg}</p>}
      <button type="submit" disabled={status === 'sending'} className="inline-flex items-center gap-2 bg-govDark hover:bg-gov disabled:opacity-60 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded">
        {status === 'sending' ? <><Loader2 size={14} className="animate-spin" /> Envoi…</> : "S'inscrire"}
      </button>
    </form>
  );
}
