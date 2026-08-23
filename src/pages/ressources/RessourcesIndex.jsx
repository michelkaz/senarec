import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';
import Breadcrumb from '../../components/layout/Breadcrumb';
import TricolorMark from '../../components/blocks/TricolorMark';
import { useReveal } from '../../hooks/useReveal';
import { RESSOURCES_CATEGORIES } from '../../data/categories';

export default function RessourcesIndex() {
  const rootRef = useReveal('.cover-card', { stagger: 0.08 });

  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 px-6 md:px-10">
        <div className="max-w-content mx-auto">
          <Breadcrumb crumbs={[{ label: 'Ressources' }]} />
          <div className="flex items-center gap-3 mt-8 mb-5">
            <TricolorMark />
            <span className="font-mono text-xs text-profond tracking-widest uppercase">
              Centre de ressources
            </span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-nuit max-w-2xl text-balance">
            Ressources
          </h1>
          <p className="text-nuit/70 leading-relaxed max-w-xl mt-5">
            Documents officiels, notes conceptuelles, partenariats, publications et rapports du
            SENAREC.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28 px-6 md:px-10">
        <div ref={rootRef} className="max-w-content mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {RESSOURCES_CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              to={`/ressources/${c.slug}`}
              className={`cover-card group rounded-xl2 border ${c.border} ${c.soft} aspect-[3/4] p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-out`}
            >
              <FileText size={22} className={c.accent} aria-hidden="true" />
              <div>
                <h2 className={`font-heading font-semibold text-base leading-snug mb-3 ${c.text}`}>
                  {c.label}
                </h2>
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${c.accent}`}>
                  Consulter
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
