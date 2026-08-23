import { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import Breadcrumb from '../components/layout/Breadcrumb';
import TricolorMark from '../components/blocks/TricolorMark';
import { FacebookIcon, XIcon, LinkedinIcon, YoutubeIcon, WhatsappIcon } from '../components/SocialIcons';
import { CONTACT, SOCIALS } from '../data/content';

const ICONS = {
  facebook: FacebookIcon,
  x: XIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
  whatsapp: WhatsappIcon,
};

const MESSAGE_LIMIT = 180;

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', telephone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const next = {};
    if (!form.nom.trim()) next.nom = 'Votre nom est requis.';
    if (!form.email.trim()) {
      next.email = 'Votre adresse email est requise.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Adresse email invalide.';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // TODO: connecter à un backend avec validation serveur (schéma Zod) et
    // protection anti-spam avant mise en production — voir audit sécurité.
    setSent(true);
    setForm({ nom: '', email: '', telephone: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  const field = (name, label, type = 'text', required = false) => (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-nuit/80">
        {label} {required && <span className="text-signal">*</span>}
      </label>
      <input
        id={name}
        type={type}
        value={form[name]}
        onChange={(e) => setForm((f) => ({ ...f, [name]: e.target.value }))}
        className={`rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-horizon/20 ${
          errors[name] ? 'border-signal' : 'border-nuit/15 focus:border-horizon'
        }`}
      />
      {errors[name] && <span className="text-xs text-signal">{errors[name]}</span>}
    </div>
  );

  return (
    <>
      <section className="pt-32 md:pt-40 pb-14 px-6 md:px-10">
        <div className="max-w-content mx-auto">
          <Breadcrumb crumbs={[{ label: 'Contact' }]} />
          <div className="flex items-center gap-3 mt-8 mb-5">
            <TricolorMark />
            <span className="font-mono text-xs text-profond tracking-widest uppercase">
              Le pont administratif
            </span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-nuit max-w-2xl text-balance">
            Contact
          </h1>
          <p className="text-nuit/70 leading-relaxed max-w-xl mt-5">
            Une question, un partenariat, une demande d'information ? Le SENAREC vous répond.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28 px-6 md:px-10">
        <div className="max-w-content mx-auto grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 rounded-xl3 bg-profond p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-energie mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-white/85 text-sm">{CONTACT.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-energie shrink-0" aria-hidden="true" />
                  <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="text-white/85 text-sm hover:text-white">
                    {CONTACT.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-energie shrink-0" aria-hidden="true" />
                  <a href={`mailto:${CONTACT.email}`} className="text-white/85 text-sm hover:text-white">
                    {CONTACT.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              {SOCIALS.map(({ key, href, label }) => {
                const Icon = ICONS[key];
                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-lg border border-white/15 flex items-center justify-center text-white/70 hover:border-energie hover:text-energie hover:-translate-y-0.5 transition-all duration-200 ease-out"
                  >
                    <Icon width={17} height={17} />
                  </a>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 grid sm:grid-cols-2 gap-5 relative">
            {field('nom', 'Votre nom', 'text', true)}
            {field('email', 'Votre adresse email', 'email', true)}
            <div className="sm:col-span-2">{field('telephone', 'Numéro de téléphone', 'tel')}</div>

            <div className="sm:col-span-2 flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-nuit/80">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                maxLength={MESSAGE_LIMIT}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="rounded-xl border border-nuit/15 bg-white px-4 py-3 text-sm outline-none resize-none transition-all duration-200 focus:border-horizon focus:ring-2 focus:ring-horizon/20"
              />
              <span className="text-xs text-nuit/40 self-end font-mono">
                {form.message.length}/{MESSAGE_LIMIT}
              </span>
            </div>

            <button
              type="submit"
              className="btn-sheen group sm:col-span-2 justify-self-start inline-flex items-center rounded-xl bg-profond text-white font-heading font-semibold px-6 py-3.5 hover:scale-[1.02] transition-transform duration-200 ease-posed"
            >
              <span className="sheen" style={{ backgroundColor: '#6EC1E4' }} />
              <span className="group-hover:text-profond transition-colors">Envoyer</span>
            </button>

            {sent && (
              <div className="sm:col-span-2 flex items-center gap-2 rounded-xl bg-profond/10 border border-profond/20 px-4 py-3 text-sm text-profond">
                <CheckCircle2 size={18} />
                Votre message a bien été enregistré. Nous vous répondrons rapidement.
              </div>
            )}
          </form>
        </div>
      </section>

      <section className="pb-20 md:pb-28 px-6 md:px-10">
        <div className="max-w-content mx-auto">
          <div className="rounded-xl3 overflow-hidden border border-nuit/10 h-80 md:h-96">
            <iframe
              title="Localisation du SENAREC — 5 Avenue Lubefu, Kinshasa, RDC"
              src="https://www.google.com/maps?q=5+Avenue+Lubefu,+Kinshasa,+RDC&z=17&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
