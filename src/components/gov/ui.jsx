import { Children, cloneElement, createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Hammer } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import FullPhoto from './FullPhoto';

export const wrap = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
const ToneContext = createContext('light');
export const useTone = () => useContext(ToneContext);

// Accents de titre : jaune sur fond bleu, rouge sur fond clair.
export function Accent({ children }) {
  const tone = useTone();
  return <span className={tone === 'dark' ? 'text-rdcGold' : 'text-redText'}>{children}</span>;
}
export const HeroAccent = ({ children }) => <span className="text-rdcGold">{children}</span>;

/** En-tête de page : bleu, fond animé, fil d'Ariane, titre à accent jaune. */
export function PageHero({ crumbs = [], eyebrow, title, lead, photo, photoAlt }) {
  return (
    <section className="relative overflow-hidden bg-govNight text-white">
      {photo && <img src={photo} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover blur-3xl scale-125 opacity-40" />}
      <div className="absolute inset-0 bg-gradient-to-r from-govNight via-govDark/90 to-govDark/60" />
      <div className="absolute inset-0 grid-move" aria-hidden="true" />
      <div className={`${wrap} relative py-12 lg:py-16 grid gap-10 ${photo ? 'lg:grid-cols-12 items-center' : ''}`}>
        <div className={photo ? 'lg:col-span-7' : 'max-w-3xl'}>
          <nav aria-label="Fil d'Ariane" className="rise flex flex-wrap items-center gap-1.5 text-xs text-white/60 mb-6">
            <Link to="/" className="hover:text-white">Accueil</Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1.5">
                <ChevronRight size={12} aria-hidden="true" />
                {c.to ? <Link to={c.to} className="hover:text-white">{c.label}</Link> : <span className="text-white">{c.label}</span>}
              </span>
            ))}
          </nav>
          {eyebrow && (
            <span className="rise inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rdcGold mb-3" style={{ animationDelay: '.05s' }}>
              <span className="w-8 h-0.5 bg-rdcGold" /> {eyebrow}
            </span>
          )}
          <h1 className="rise text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight" style={{ animationDelay: '.1s' }}>{title}</h1>
          {lead && <p className="rise mt-5 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl" style={{ animationDelay: '.2s' }}>{lead}</p>}
        </div>
        {photo && (
          <div className="rise lg:col-span-5" style={{ animationDelay: '.25s' }}>
            <FullPhoto src={photo} alt={photoAlt} className="aspect-[3/2] rounded-lg shadow-2xl border-b-4 border-rdcGold" />
          </div>
        )}
      </div>
    </section>
  );
}

/** Section : le ton (clair/bleu) est imposé par <Alternate>. */
export function Block({ tone = 'light', eyebrow, title, lead, children, id }) {
  const dark = tone === 'dark';
  const rootRef = useReveal('.reveal-card', { stagger: 0.08, y: 24 });
  return (
    <ToneContext.Provider value={tone}>
      <section id={id} ref={rootRef} className={`py-16 lg:py-20 ${dark ? 'bg-govDark text-white' : 'bg-sable text-slate-800'}`}>
        <div className={wrap}>
          {(eyebrow || title) && (
            <header className="mb-10 max-w-3xl">
              {eyebrow && (
                <span className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 ${dark ? 'text-rdcGold' : 'text-redText'}`}>
                  <span className={`w-2 h-2 rounded-full ${dark ? 'bg-rdcGold' : 'bg-rdcRed'}`} /> {eyebrow}
                </span>
              )}
              {title && <h2 className={`text-2xl sm:text-4xl font-extrabold mt-1 leading-tight ${dark ? 'text-white' : 'text-govDark'}`}>{title}</h2>}
              {lead && <p className={`mt-4 leading-relaxed ${dark ? 'text-slate-200' : 'text-slate-700'}`}>{lead}</p>}
            </header>
          )}
          {children}
        </div>
      </section>
    </ToneContext.Provider>
  );
}

/** Alterne automatiquement clair / bleu. `start` fixe le ton de la première section. */
export function Alternate({ children, start = 'light' }) {
  const order = start === 'light' ? ['light', 'dark'] : ['dark', 'light'];
  return Children.toArray(children).filter(Boolean).map((c, i) => cloneElement(c, { tone: order[i % 2] }));
}

export function Text({ children, className = '' }) {
  const tone = useTone();
  return <p className={`leading-relaxed ${tone === 'dark' ? 'text-slate-200' : 'text-slate-700'} ${className}`}>{children}</p>;
}

/** Carte : blanche sur fond clair, translucide sur fond bleu. */
export function Card({ children, className = '', accent, as: Tag = 'div', ...props }) {
  const tone = useTone();
  const dark = tone === 'dark';
  return (
    <Tag
      {...props}
      className={`reveal-card rounded-lg p-6 transition-all ${dark ? 'bg-white/5 border border-white/15 text-white hover:border-rdcGold/60' : 'bg-white border border-sableDeep text-slate-800 shadow-sm hover:shadow-lg'} ${accent ? `border-l-4 ${accent}` : ''} ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Page ou section « en cours de rédaction » — animée, sans faux contenu. */
export function InProgress({ title = 'Contenu en cours de rédaction', text, compact = false }) {
  const tone = useTone();
  const dark = tone === 'dark';
  return (
    <div className={`reveal-card relative overflow-hidden rounded-xl border ${dark ? 'border-white/15 bg-white/5' : 'border-sableDeep bg-white'} px-6 ${compact ? 'py-10' : 'py-16'} flex flex-col items-center text-center`}>
      <div className="relative w-24 h-24 mb-6" aria-hidden="true">
        <span className="orbit absolute inset-0 rounded-full border-2 border-dashed border-rdcGold/70" />
        <span className="orbit-rev absolute inset-3 rounded-full border-2 border-dashed border-rdcRed/60" />
        <span className={`absolute inset-6 rounded-full flex items-center justify-center ${dark ? 'bg-rdcGold text-govDark' : 'bg-govDark text-rdcGold'}`}>
          <Hammer size={20} />
        </span>
      </div>
      <h3 className={`text-lg font-bold mb-2 ${dark ? 'text-white' : 'text-govDark'}`}>{title}</h3>
      <p className={`text-sm max-w-md leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
        {text || 'Cette rubrique sera publiée dès la validation officielle des contenus.'}
      </p>
      <div className={`mt-6 h-1.5 w-56 rounded-full overflow-hidden relative ${dark ? 'bg-white/15' : 'bg-slate-200'}`} aria-hidden="true">
        <span className="shimmer-bar absolute inset-y-0 w-1/3 rounded-full bg-gradient-to-r from-rdcBlue via-rdcGold to-rdcRed" />
      </div>
      <div className="mt-4 flex gap-1.5" aria-hidden="true">
        {[0, 1, 2].map((n) => (
          <span key={n} className="dot-pulse w-2 h-2 rounded-full bg-rdcGold" style={{ animationDelay: `${n * 0.2}s` }} />
        ))}
      </div>
      <span className={`mt-4 text-[11px] font-bold uppercase tracking-widest ${dark ? 'text-rdcGold' : 'text-redText'}`}>En cours de rédaction</span>
    </div>
  );
}

export function TextLink({ to, children }) {
  const tone = useTone();
  return (
    <Link to={to} className={`inline-flex items-center gap-1.5 text-sm font-bold ${tone === 'dark' ? 'text-rdcGold hover:text-white' : 'text-redText hover:text-govDark'}`}>
      {children} <ChevronRight size={16} />
    </Link>
  );
}
