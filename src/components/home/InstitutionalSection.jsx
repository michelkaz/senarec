import { useReveal } from '../../hooks/useReveal';
import { LEGAL } from '../../data/content';

export default function InstitutionalSection() {
  const rootRef = useReveal('.inst-anim', { stagger: 0.1 });

  return (
    <section ref={rootRef} className="py-16 md:py-20 px-6 md:px-10 border-y border-nuit/10">
      <div className="max-w-content mx-auto flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
        <div className="inst-anim md:w-1/3">
          <p className="font-mono text-xs text-profond/70 tracking-widest uppercase mb-3">
            Ancrage institutionnel
          </p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-nuit text-balance">
            Un service public sous tutelle du Ministère du Plan
          </h2>
        </div>
        <div className="inst-anim md:w-2/3 grid sm:grid-cols-3 gap-4">
          {Object.values(LEGAL).map((l) => (
            <div key={l.label} className="rounded-xl border border-nuit/10 bg-mineral px-5 py-4">
              <p className="font-mono text-[11px] text-signal/70 tracking-wide mb-2">{l.date}</p>
              <p className="text-sm text-nuit/80 leading-snug">{l.label}</p>
              {l.note && <p className="text-xs text-nuit/50 mt-1">{l.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
