import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../../hooks/useReveal';
import FullPhoto from './FullPhoto';
import { useCountUp } from '../../hooks/useCountUp';
import { ArrowRight, Landmark, Mail, MapPin, Phone } from 'lucide-react';
import { ABOUT, CONTACT, LEGAL, MANDATE, PROJECTS, STATS } from '../../data/content';
import { ACTIVITES, COMMUNICATIONS, section } from '../../data/site';

const wrap = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';

function Head({ eyebrow, title, to, link, dark }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
      <div>
        <span className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 ${dark ? 'text-rdcGold' : 'text-redText'}`}>
          <span className={`w-2 h-2 rounded-full ${dark ? 'bg-rdcGold' : 'bg-rdcRed'}`} /> {eyebrow}
        </span>
        <h2 className={`text-2xl sm:text-4xl font-extrabold mt-1 ${dark ? 'text-white' : 'text-govDark'}`}>{title}</h2>
      </div>
      {to && (
        <Link to={to} className={`inline-flex items-center gap-1 text-sm font-bold ${dark ? 'text-rdcGold hover:text-white' : 'text-redText hover:text-govDark'}`}>
          {link} <ArrowRight size={18} />
        </Link>
      )}
    </div>
  );
}

const Y = ({ children }) => <span className="text-rdcGold">{children}</span>;
const R = ({ children }) => <span className="text-redText">{children}</span>;

const BG = ['/images/projets/5.png', '/images/hero-2.jpeg', '/images/projets/2.png', '/images/projets/8.png'];

function Stat({ s }) {
  const [ref, v] = useCountUp(s.value);
  return (
    <div className="stat bg-govDark/75 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-rdcGold/60 hover:-translate-y-1 transition-all">
      <div ref={ref} className="text-4xl lg:text-5xl font-extrabold text-rdcGold mb-2 tabular-nums">
        {v.toLocaleString('fr-FR')}{s.suffix}
      </div>
      <p className="text-xs text-slate-100 uppercase tracking-wider font-semibold">{s.label}</p>
    </div>
  );
}

export function Indicators() {
  const [bg, setBg] = useState(0);
  const rootRef = useReveal('.stat', { stagger: 0.12, y: 30 });
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const t = setInterval(() => setBg((n) => (n + 1) % BG.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative text-white py-20 overflow-hidden bg-govNight">
      {BG.map((src, n) => (
        <img key={src} src={src} alt="" aria-hidden="true" className={`absolute inset-0 w-full h-full object-cover blur-3xl scale-125 transition-opacity duration-[1500ms] ${n === bg ? 'opacity-100' : 'opacity-0'}`} />
      ))}
      <div className="absolute inset-0 bg-govNight/85" />
      <div className="absolute inset-0 grid-move" aria-hidden="true" />
      <div ref={rootRef} className={`${wrap} relative`}>
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-rdcGold mb-2">En chiffres</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight">Le SENAREC en quelques <Y>indicateurs</Y></h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((s) => <Stat key={s.key} s={s} />)}
        </div>
        {/* À COMPLÉTER : période et source de chaque chiffre */}
      </div>
    </section>
  );
}

const PARTNERS = ['PNUD', 'Banque mondiale', 'ONU Femmes', 'PMI RDC', 'Cisco', 'Ministère du Plan'];

export function PartnersBand() {
  const items = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];
  return (
    <section aria-label="Partenaires visibles dans les supports du SENAREC" className="bg-sable border-y border-sableDeep py-6 overflow-hidden marquee">
      {/* À COMPLÉTER : logos officiels et nature de chaque partenariat, à valider */}
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap" aria-hidden="true">
        {items.map((p, n) => (
          <span key={n} className="text-xl font-extrabold text-govDark/30 hover:text-redText uppercase tracking-widest transition-colors">{p}</span>
        ))}
      </div>
    </section>
  );
}

export function Mandat() {
  return (
    <section className="bg-sable py-20">
      <div className={`${wrap} grid lg:grid-cols-12 gap-12 items-center`}>
        <div className="lg:col-span-7 space-y-5">
          <span className="flex items-center gap-2 text-xs font-bold text-redText uppercase tracking-widest"><Landmark size={20} /> Le SENAREC</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-govDark leading-tight">Guichet unique des activités de <R>renforcement des capacités</R></h2>
          <p className="text-sm text-slate-700 leading-relaxed">{ABOUT.role}</p>
          <p className="text-sm text-slate-700 leading-relaxed">{ABOUT.legal}</p>
          <div className="grid sm:grid-cols-3 gap-4 pt-2">
            {MANDATE.map((m, i) => (
              <div key={m.title} className={`border-l-2 pl-3 ${['border-gov', 'border-rdcGold', 'border-rdcRed'][i]}`}>
                <span className="block font-bold text-sm text-slate-900">{m.title}</span>
                <span className="text-xs text-slate-500">{m.ref}</span>
              </div>
            ))}
          </div>
          <div className="pt-3 flex gap-4 items-center">
            <Link to="/le-senarec/presentation" className="inline-flex items-center gap-2 bg-govDark hover:bg-gov text-white text-xs font-bold px-5 py-3 rounded">Présentation institutionnelle</Link>
            <Link to="/le-senarec/organisation" className="text-redText text-xs font-bold inline-flex items-center gap-1">Organisation <ArrowRight size={16} /></Link>
          </div>
        </div>
        <figure className="lg:col-span-5">
          <img src="/images/hero-3.jpg" alt="Siège du SENAREC à Kinshasa" className="w-full h-[400px] object-cover rounded-lg shadow-xl border-b-8 border-rdcGold" />
        </figure>
      </div>
    </section>
  );
}

export function Projets() {
  const rootRef = useReveal('.reveal-card', { stagger: 0.1, y: 30 });
  return (
    <section ref={rootRef} className="bg-govDark py-20">
      <div className={wrap}>
        <Head dark eyebrow="Projets" title={<>Programmes et <Y>initiatives</Y></>} to="/renforcement-capacites/programmes" link="Tous les projets" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.slice(0, 4).map((p) => (
            <article key={p.title} className="reveal-card group bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col">
              <FullPhoto src={p.img} alt={p.title} className="aspect-[3/2]" imgClassName="group-hover:scale-[1.03] transition-transform duration-700" />
              <div className="p-5"><h3 className="text-sm font-bold text-slate-900 leading-snug">{p.title}</h3></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Actualites() {
  const rootRef = useReveal('.reveal-card', { stagger: 0.08, y: 30 });
  return (
    <section ref={rootRef} className="bg-sable py-20">
      <div className={wrap}>
        <Head eyebrow="Actualités & activités" title={<>Ce que fait le <R>SENAREC</R></>} to="/actualites" link="Toutes les actualités" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[...COMMUNICATIONS, ...ACTIVITES].map((c) => (
            <Link key={c.label} to={COMMUNICATIONS.includes(c) ? '/actualites' : '/renforcement-capacites/activites'} className="reveal-card border border-slate-200 rounded-lg p-5 hover:border-gov hover:shadow-md hover:-translate-y-1 transition-all bg-white">
              <span className="block font-bold text-sm text-slate-900 mb-1">{c.label}</span>
              <span className="text-xs text-slate-500 leading-relaxed">{c.desc}</span>
            </Link>
          ))}
        </div>
        {/* À COMPLÉTER : trois dernières publications réelles dès qu'elles sont saisies */}
      </div>
    </section>
  );
}

export function Ressources() {
  const rootRef = useReveal('.reveal-card', { stagger: 0.08, y: 20 });
  return (
    <section ref={rootRef} className="bg-govNight py-20">
      <div className={wrap}>
        <Head dark eyebrow="Ressources" title={<>Documents et <Y>publications</Y></>} to="/ressources" link="Toutes les ressources" />
        <ul className="divide-y divide-white/15 border-y border-white/15">
          {section('/ressources').children.map((c) => (
            <li key={c.to} className="reveal-card">
              <Link to={c.to} className="group py-5 px-2 flex items-center justify-between gap-4 hover:bg-white/5 transition-colors">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-rdcGold transition-colors">{c.label}</h3>
                  <p className="text-xs text-slate-300 mt-1">{c.desc}</p>
                </div>
                <ArrowRight size={20} className="text-rdcGold shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ContactBand() {
  return (
    <section className="bg-sable py-16">
      <div className={wrap}>
        <div className="bg-govDark rounded-xl p-8 lg:p-12 text-white grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold text-rdcGold uppercase tracking-widest">Contact</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold">Écrire au <Y>SENAREC</Y></h2>
            <ul className="grid sm:grid-cols-2 gap-3 text-xs text-slate-200 pt-2">
              <li className="flex items-center gap-2.5"><MapPin size={18} className="text-rdcGold" />{CONTACT.address}</li>
              <li className="flex items-center gap-2.5"><Phone size={18} className="text-rdcGold" />{CONTACT.phone}</li>
              <li className="flex items-center gap-2.5"><Mail size={18} className="text-rdcGold" />{CONTACT.email}</li>
              <li className="flex items-center gap-2.5 text-slate-300">{LEGAL.decret35.label}</li>
            </ul>
          </div>
          <div className="lg:col-span-4">
            <Link to="/contact" className="block text-center bg-rdcGold hover:bg-yellow-400 text-slate-900 font-extrabold text-xs uppercase tracking-wider px-5 py-3.5 rounded">Envoyer un message</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
