import { PROCESSUS } from '../../data/cahier';
import { useTone } from './ui';

// Diagramme du processus d'intervention en 6 étapes (cahier éditorial, section « Renforcement des capacités »).
export default function Process() {
  const dark = useTone() === 'dark';
  return (
    <ol className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
      {PROCESSUS.map((p, i) => (
        <li key={p.n} className={`reveal-card relative rounded-lg border p-5 ${dark ? 'bg-white/5 border-white/15' : 'bg-white border-sableDeep shadow-sm'}`}>
          <span className={`text-3xl font-extrabold ${dark ? 'text-rdcGold' : 'text-rdcGold'}`}>0{p.n}</span>
          <h3 className="font-bold text-sm mt-2">{p.etape}</h3>
          <p className="text-xs opacity-80 mt-2 leading-relaxed">{p.contenu}</p>
          <p className="text-[11px] font-semibold mt-3 opacity-60 uppercase tracking-wide">{p.livrable}</p>
          {i < PROCESSUS.length - 1 && (
            <span aria-hidden="true" className={`hidden lg:block absolute top-1/2 -right-2.5 -translate-y-1/2 w-5 h-5 rounded-full border-2 ${dark ? 'border-rdcGold bg-govDark' : 'border-rdcGold bg-sable'}`} />
          )}
        </li>
      ))}
    </ol>
  );
}
