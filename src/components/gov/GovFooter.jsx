import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { CONTACT, SOCIALS } from '../../data/content';
import { NAV_TREE } from '../../data/site';
import { FacebookIcon, XIcon, LinkedinIcon, YoutubeIcon, WhatsappIcon } from '../SocialIcons';

const ICONS = { facebook: FacebookIcon, x: XIcon, linkedin: LinkedinIcon, youtube: YoutubeIcon, whatsapp: WhatsappIcon };

const COLS = NAV_TREE.filter((n) => n.children).map((n) => ({
  title: n.label,
  links: n.children.map((c) => [c.label, c.to]),
}));
const QUICK = NAV_TREE.filter((n) => !n.children && n.to !== '/');

function Title({ children }) {
  return (
    <h4 className="text-sm font-bold uppercase tracking-wide pb-2 mb-4 border-b border-white/10 relative">
      {children}
      <span className="absolute -bottom-px left-0 h-0.5 w-10 bg-rdcGold" />
    </h4>
  );
}

export default function GovFooter() {
  return (
    <footer className="bg-govNight text-white">
      <div className="h-1 w-full flex" aria-hidden="true">
        <div className="w-[40%] bg-rdcBlue" />
        <div className="w-[40%] bg-rdcGold" />
        <div className="w-[20%] bg-rdcRed" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-7 bg-rdcGold" aria-hidden="true" />
            <span className="font-extrabold text-lg uppercase tracking-wide">SENAREC</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Secrétariat National pour le Renforcement des Capacités en République Démocratique du Congo, sous la
            coordination du Ministère du Plan.
          </p>
          <div className="flex gap-4 items-start text-xs">
            <span className="text-[10px] font-bold uppercase text-rdcGold leading-tight w-16">Devise nationale</span>
            <span className="text-slate-300">Justice • Paix • Travail</span>
          </div>
          <ul className="flex gap-3 pt-1">
            {SOCIALS.map((s) => {
              const Icon = ICONS[s.key];
              return (
                <li key={s.key}>
                  <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-rdcGold hover:text-rdcGold hover:-translate-y-0.5 transition-all">
                    <Icon className="w-4 h-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {COLS.map((c) => (
          <div key={c.title}>
            <Title>{c.title}</Title>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {c.links.map(([l, to]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-white hover:pl-1 transition-all">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <Title>Informations &amp; contact</Title>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-300 mb-4">
            {QUICK.map((q) => (
              <li key={q.to}><Link to={q.to} className="hover:text-white underline-offset-4 hover:underline">{q.label}</Link></li>
            ))}
          </ul>
          <ul className="space-y-3 text-xs text-slate-300">
            <li className="flex gap-2.5"><MapPin size={16} className="text-rdcGold shrink-0 mt-0.5" />{CONTACT.address}</li>
            <li className="flex gap-2.5"><Phone size={16} className="text-rdcGold shrink-0" /><a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="hover:text-white hover:underline">{CONTACT.phone}</a></li>
            <li className="flex gap-2.5"><Mail size={16} className="text-rdcGold shrink-0" /><a href={`mailto:${CONTACT.email}`} className="hover:text-white hover:underline">{CONTACT.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="bg-black/40 text-slate-300 text-[11px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} République Démocratique du Congo — SENAREC. Tous droits réservés.</span>
          <Link to="/confidentialite" className="hover:text-white underline-offset-4 hover:underline">Confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}
