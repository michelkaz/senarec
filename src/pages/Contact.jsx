import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT, SOCIALS } from '../data/content';
import { FacebookIcon, XIcon, LinkedinIcon, YoutubeIcon, WhatsappIcon } from '../components/SocialIcons';
import { Accent, Alternate, Block, Card, HeroAccent, PageHero } from '../components/gov/ui';

const ICONS = { facebook: FacebookIcon, x: XIcon, linkedin: LinkedinIcon, youtube: YoutubeIcon, whatsapp: WhatsappIcon };
const LIMIT = 3000;

function Form() {
  const [f, setF] = useState({ nom: '', email: '', organisme: '', telephone: '', message: '' });
  const [err, setErr] = useState({});
  const set = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const n = {};
    if (!f.nom.trim()) n.nom = 'Votre nom est requis.';
    if (!f.email.trim()) n.email = 'Votre adresse email est requise.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) n.email = 'Adresse email invalide.';
    if (!f.message.trim()) n.message = 'Votre message est requis.';
    setErr(n);
    if (Object.keys(n).length) return;
    // Pas encore de service d'envoi côté serveur : on ouvre le client mail de l'utilisateur.
    const body = `${f.message}\n\n—\n${f.nom}${f.organisme ? `, ${f.organisme}` : ''}\n${f.email}${f.telephone ? `\n${f.telephone}` : ''}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`Message de ${f.nom}`)}&body=${encodeURIComponent(body)}`;
  };

  const inp = 'w-full rounded border bg-white px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-gov/30';
  const field = (k, label, type = 'text', req) => (
    <div>
      <label htmlFor={k} className="block text-sm font-semibold text-govDark mb-1">{label}{req && <span className="text-redText"> *</span>}</label>
      <input id={k} type={type} value={f[k]} onChange={set(k)} required={req} aria-invalid={!!err[k]} aria-describedby={err[k] ? `${k}-e` : undefined} className={`${inp} ${err[k] ? 'border-rdcRed' : 'border-sableDeep'}`} />
      {err[k] && <p id={`${k}-e`} className="text-xs text-redText mt-1">{err[k]}</p>}
    </div>
  );
  return (
    <form onSubmit={submit} noValidate className="grid sm:grid-cols-2 gap-5 bg-white rounded-lg border border-sableDeep p-6 sm:p-8 shadow-sm">
      {field('nom', 'Votre nom', 'text', true)}
      {field('email', 'Votre adresse email', 'email', true)}
      {field('organisme', 'Organisme (facultatif)')}
      {field('telephone', 'Téléphone (facultatif)', 'tel')}
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block text-sm font-semibold text-govDark mb-1">Message <span className="text-redText">*</span></label>
        <textarea id="message" rows={6} maxLength={LIMIT} value={f.message} onChange={set('message')} aria-invalid={!!err.message} className={`${inp} resize-y ${err.message ? 'border-rdcRed' : 'border-sableDeep'}`} />
        <div className="flex justify-between text-xs mt-1">
          <span className="text-redText">{err.message}</span>
          <span className="text-slate-400 tabular-nums">{f.message.length}/{LIMIT}</span>
        </div>
      </div>
      <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
        <button type="submit" className="bg-govDark hover:bg-gov text-white font-bold text-sm px-7 py-3.5 rounded uppercase tracking-wider">Préparer l’envoi</button>
        <p className="text-xs text-slate-500 max-w-md">Votre logiciel de messagerie s’ouvrira avec le message prérempli, à destination de {CONTACT.email}.</p>
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
              <p className="flex gap-3 text-sm"><MapPin size={20} className="text-rdcGold shrink-0" />{CONTACT.address}</p>
              <p className="flex gap-3 text-sm"><Phone size={20} className="text-rdcGold shrink-0" /><a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="hover:underline">{CONTACT.phone}</a></p>
              <p className="flex gap-3 text-sm"><Mail size={20} className="text-rdcGold shrink-0" /><a href={`mailto:${CONTACT.email}`} className="hover:underline">{CONTACT.email}</a></p>
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
            <iframe title="Localisation du SENAREC — 5 Avenue Lubefu, Kinshasa, RDC" src="https://www.google.com/maps?q=5+Avenue+Lubefu,+Kinshasa,+RDC&z=17&output=embed" className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </Block>
      </Alternate>
    </>
  );
}
