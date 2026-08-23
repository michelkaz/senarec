import Breadcrumb from '../../components/layout/Breadcrumb';
import TricolorMark from '../../components/blocks/TricolorMark';
import { useReveal } from '../../hooks/useReveal';
import { CEARC } from '../../data/content';

export default function CearcPage() {
  const rootRef = useReveal('.cearc-anim', { stagger: 0.1 });

  return (
    <>
      <section className="pt-32 md:pt-40 px-6 md:px-10">
        <div className="max-w-content mx-auto">
          <Breadcrumb crumbs={[{ label: 'À propos' }, { label: 'CEARC' }]} />
        </div>
      </section>

      <section className="px-6 md:px-10 py-10 md:py-14">
        <div className="max-w-content mx-auto rounded-xl3 bg-profond relative overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            <img src="/images/hero-2.jpeg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-profond via-profond/85 to-transparent" />
          <div className="relative grid lg:grid-cols-2 gap-10 px-8 py-14 md:px-16 md:py-20">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <TricolorMark />
                <span className="font-mono text-xs text-horizon tracking-widest uppercase">À propos</span>
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-white leading-[1.05] text-balance">
                CEARC
              </h1>
              <p className="text-white/75 leading-relaxed max-w-lg mt-6 text-lg">{CEARC.intro}</p>
              <p className="text-white/60 leading-relaxed max-w-lg mt-4 text-sm">{CEARC.legal}</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={rootRef} className="py-14 md:py-20 px-6 md:px-10">
        <div className="max-w-content mx-auto grid lg:grid-cols-3 gap-16">
          <div className="cearc-anim lg:col-span-1">
            <h2 className="font-heading font-semibold text-xl text-nuit mb-4">Missions principales</h2>
            <ul className="space-y-3">
              {CEARC.missions.map((m) => (
                <li
                  key={m}
                  className="rounded-xl bg-white border border-nuit/10 px-4 py-3 text-sm text-nuit/75 border-l-4 border-l-energie"
                >
                  {m}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="font-mono text-[11px] text-profond/70 tracking-widest uppercase mb-4">
              Quatre organes
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {CEARC.organes.map((o, i) => (
                <div key={o.name} className="cearc-anim rounded-xl2 bg-white border border-nuit/10 p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-signal shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-heading font-semibold text-sm text-profond leading-snug">
                      {o.name}
                    </h3>
                  </div>
                  <p className="text-xs text-nuit/60 leading-relaxed">{o.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
