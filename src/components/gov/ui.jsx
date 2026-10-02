import { Children, cloneElement, createContext, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ChevronRight, Hammer } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import FullPhoto from './FullPhoto';
import { Backdrop } from './Photo';

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
      {photo && <Backdrop src={photo} className="absolute inset-0 w-full h-full object-cover blur-3xl scale-125 opacity-40" />}
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
            <FullPhoto src={photo} alt={photoAlt} sizes="(min-width:1024px) 40vw, 100vw" eager className="aspect-[3/2] rounded-lg shadow-2xl border-b-4 border-rdcGold" />
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

/** Encart « à confirmer » — rend visible un point de vigilance du cahier éditorial sans jamais le transformer en fait établi. */
export function Caveat({ children, label = 'À confirmer' }) {
  const tone = useTone();
  const dark = tone === 'dark';
  return (
    <div className={`reveal-card flex gap-3 rounded-lg border px-4 py-3.5 text-sm ${dark ? 'border-rdcGold/40 bg-rdcGold/10 text-amber-100' : 'border-amber-300 bg-amber-50 text-amber-900'}`}>
      <AlertTriangle size={18} className="shrink-0 mt-0.5 text-amber-500" aria-hidden="true" />
      <p><span className="font-bold uppercase tracking-wide text-xs mr-1.5">{label} —</span>{children}</p>
    </div>
  );
}

const STATUS_TONES = {
  'En cours': 'bg-emerald-600/15 text-emerald-700 border-emerald-500/40',
  Opérationnel: 'bg-emerald-600/15 text-emerald-700 border-emerald-500/40',
  Terminé: 'bg-slate-500/15 text-slate-600 border-slate-400/40',
  Préparation: 'bg-sky-600/15 text-sky-700 border-sky-500/40',
  'À confirmer': 'bg-amber-500/15 text-amber-700 border-amber-500/40',
};

export function StatusBadge({ status }) {
  const tone = useTone();
  const dark = tone === 'dark';
  const cls = STATUS_TONES[status] || STATUS_TONES['À confirmer'];
  return (
    <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${dark ? 'bg-white/10 border-white/25 text-white' : cls}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" /> {status}
    </span>
  );
}

/** Tableau simple et responsive (empilé en cartes sous md). */
export function DataTable({ columns, rows, keyField }) {
  const tone = useTone();
  const dark = tone === 'dark';
  const border = dark ? 'border-white/15' : 'border-sableDeep';
  return (
    <div className={`reveal-card rounded-lg border ${border} overflow-hidden`}>
      <table className="block md:table w-full text-sm">
        <caption className="sr-only">Tableau de données</caption>
        <thead className={`hidden md:table-header-group ${dark ? 'bg-white/10' : 'bg-govDark text-white'}`}>
          <tr>
            {columns.map((c) => (
              <th key={c.key} scope="col" className="text-left font-bold uppercase tracking-wide text-[11px] px-4 py-3">{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody className={`divide-y ${border} md:[&>tr]:table-row block md:table-row-group`}>
          {rows.map((r) => (
            <tr key={r[keyField]} className={`block md:table-row px-4 py-3 md:p-0 ${dark ? '' : 'odd:bg-white even:bg-sable/40'}`}>
              {columns.map((c) => (
                <td key={c.key} data-label={c.label} className="block md:table-cell px-4 py-1.5 md:py-3 before:content-[attr(data-label)] before:block before:text-[10px] before:font-bold before:uppercase before:tracking-wide before:opacity-60 md:before:content-none">
                  {c.render ? c.render(r) : r[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
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
