import Breadcrumb from '../components/layout/Breadcrumb';
import TricolorMark from '../components/blocks/TricolorMark';
import { useReveal } from '../hooks/useReveal';
import { PROJECTS } from '../data/content';

const ACCENTS = ['border-t-horizon', 'border-t-energie', 'border-t-signal'];

export default function Projets() {
  const rootRef = useReveal('.project-card', { stagger: 0.08, y: 24 });
  const [featured, ...rest] = PROJECTS;

  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 px-6 md:px-10">
        <div className="max-w-content mx-auto">
          <Breadcrumb crumbs={[{ label: 'Projets' }]} />
          <div className="flex items-center gap-3 mt-8 mb-5">
            <TricolorMark />
            <span className="font-mono text-xs text-profond tracking-widest uppercase">
              Programmes &amp; initiatives
            </span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-nuit max-w-2xl text-balance">
            Projets
          </h1>
          <p className="text-nuit/70 leading-relaxed max-w-xl mt-5">
            Les instruments et initiatives à travers lesquels le SENAREC renforce les capacités et
            modernise la gestion publique en République Démocratique du Congo.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-10 mb-16 md:mb-20">
        <div className="max-w-content mx-auto rounded-xl3 overflow-hidden bg-nuit grid lg:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-[16/10] lg:aspect-auto lg:min-h-[26rem]">
            <img
              src={featured.img}
              alt={featured.title}
              className="w-full h-full object-cover object-[50%_25%]"
            />
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-center relative">
            <span className="absolute top-0 left-8 md:left-12 -translate-y-1/2 bg-signal text-white font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full">
              À la une
            </span>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-white leading-snug text-balance">
              {featured.title}
            </h2>
            {featured.note && <p className="text-white/60 text-sm mt-3">{featured.note}</p>}
            <div className="w-10 h-1 rounded-full bg-energie mt-6" />
          </div>
        </div>
      </section>

      <section ref={rootRef} className="pb-20 md:pb-28 px-6 md:px-10">
        <div className="max-w-content mx-auto">
          <div className="project-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((p, i) => (
              <div
                key={p.title}
                className={`project-card group rounded-xl2 overflow-hidden border border-nuit/10 border-t-4 ${ACCENTS[i % ACCENTS.length]} bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-sm text-nuit leading-snug">{p.title}</h3>
                  {p.note && <p className="text-xs text-nuit/50 mt-2">{p.note}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
