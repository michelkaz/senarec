import Breadcrumb from '../../components/layout/Breadcrumb';
import TricolorMark from '../../components/blocks/TricolorMark';
import { useReveal } from '../../hooks/useReveal';
import { TEAM, SUPPORT_POOLS } from '../../data/content';

function initials(name) {
  return name.split(' ').map((n) => n[0]).slice(0, 2).join('');
}

export default function Gouvernance() {
  const rootRef = useReveal('.team-card', { stagger: 0.1 });

  return (
    <>
      <section className="pt-32 md:pt-40 pb-14 px-6 md:px-10">
        <div className="max-w-content mx-auto">
          <Breadcrumb crumbs={[{ label: 'À propos' }, { label: 'Gouvernance' }]} />
          <div className="flex items-center gap-3 mt-8 mb-5">
            <TricolorMark />
            <span className="font-mono text-xs text-profond tracking-widest uppercase">À propos</span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-nuit max-w-2xl text-balance">
            Gouvernance
          </h1>
          <p className="text-nuit/70 leading-relaxed max-w-xl mt-5">
            Structure organisationnelle du Secrétariat National pour le Renforcement des Capacités.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 mb-16 md:mb-20">
        <div className="max-w-content mx-auto rounded-xl3 overflow-hidden h-56 md:h-80 relative">
          <img src="/images/hero-1.png" alt="Formation SENAREC" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-nuit/60 via-transparent to-transparent" />
        </div>
      </section>

      <section ref={rootRef} className="pb-20 md:pb-28 px-6 md:px-10">
        <div className="max-w-content mx-auto">
          <div className="team-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {TEAM.map((m, i) => (
              <div
                key={m.name}
                className={`team-card bg-white border-t-4 ${
                  ['border-t-horizon', 'border-t-energie', 'border-t-signal', 'border-t-profond', 'border-t-horizon'][i % 5]
                } border border-nuit/10 rounded-xl2 p-6 flex items-center gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out`}
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-profond text-horizon font-heading font-bold flex items-center justify-center text-sm">
                  {initials(m.name)}
                </div>
                <div>
                  <div className="font-heading font-semibold text-nuit text-sm">{m.name}</div>
                  <div className="text-xs text-nuit/60 mt-0.5">{m.role}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="font-mono text-xs text-profond/70 tracking-widest uppercase mb-4">
            Structures de support
          </p>
          <div className="flex flex-wrap gap-3">
            {SUPPORT_POOLS.map((s) => (
              <span key={s} className="font-mono text-xs text-profond border border-profond/20 rounded-lg px-4 py-2">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
