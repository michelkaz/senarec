import Breadcrumb from '../../components/layout/Breadcrumb';
import TricolorMark from '../../components/blocks/TricolorMark';
import MandateGrid from '../../components/blocks/MandateGrid';
import { useReveal } from '../../hooks/useReveal';
import { ABOUT } from '../../data/content';

export default function PresentationInstitutionnelle() {
  const rootRef = useReveal('.pres-anim', { stagger: 0.1 });

  return (
    <>
      <section className="bg-azur pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-10">
        <div className="max-w-content mx-auto">
          <Breadcrumb crumbs={[{ label: 'À propos' }, { label: 'Présentation institutionnelle' }]} />

          <div className="grid lg:grid-cols-5 gap-12 items-end mt-8">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3 mb-5">
                <TricolorMark />
                <span className="font-mono text-xs text-profond tracking-widest uppercase">À propos</span>
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-nuit leading-[1.05] text-balance">
                Présentation <span className="font-serif italic font-medium text-profond">institutionnelle</span>
              </h1>
              <p className="text-nuit/70 leading-relaxed max-w-xl mt-6 text-lg">{ABOUT.role}</p>
            </div>
            <div className="lg:col-span-2 relative">
              <div className="rounded-xl3 overflow-hidden shadow-2xl shadow-profond/15">
                <img src="/images/hero-3.jpg" alt="Session du SENAREC" className="w-full h-72 object-cover" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-energie text-nuit rounded-xl2 px-5 py-4 shadow-lg max-w-[13rem] hidden sm:block">
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-70">Depuis</p>
                <p className="font-heading font-bold text-lg leading-tight">1987</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={rootRef} className="py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-content mx-auto grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-5">
            <p className="pres-anim text-nuit/75 leading-relaxed text-lg">{ABOUT.origin}</p>
            <p className="pres-anim text-nuit/75 leading-relaxed">{ABOUT.legal}</p>

            <div className="pres-anim pt-6">
              <h2 className="font-heading font-semibold text-xl text-nuit mb-4">Notre mission</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {ABOUT.mission.map((m) => (
                  <li
                    key={m}
                    className="rounded-xl bg-white border border-nuit/10 px-4 py-3 text-sm text-nuit/75 border-l-4 border-l-horizon"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pres-anim pt-6">
              <h2 className="font-heading font-semibold text-xl text-nuit mb-4">Notre vision</h2>
              <p className="text-nuit/75 leading-relaxed">{ABOUT.vision}</p>
            </div>
          </div>

          <aside className="pres-anim space-y-6">
            <div className="rounded-xl2 bg-profond p-7 text-center relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-energie/20 rounded-full blur-2xl" />
              <p className="font-mono text-[11px] text-horizon tracking-widest uppercase mb-2 relative">Devise</p>
              <p className="font-serif italic text-2xl text-white relative">« {ABOUT.devise} »</p>
            </div>
            <div className="rounded-xl2 bg-white border border-nuit/10 p-7">
              <p className="font-mono text-[11px] text-profond/70 tracking-widest uppercase mb-4">
                Nos valeurs
              </p>
              <ul className="space-y-2">
                {ABOUT.values.map((v, i) => (
                  <li key={v} className="text-sm text-nuit/80 flex items-center gap-2">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        ['bg-horizon', 'bg-energie', 'bg-signal'][i % 3]
                      }`}
                    />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="pb-20 md:pb-28 px-6 md:px-10">
        <div className="max-w-content mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-nuit mb-10 text-balance">
            Le mandat en trois axes
          </h2>
          <MandateGrid />
        </div>
      </section>
    </>
  );
}
