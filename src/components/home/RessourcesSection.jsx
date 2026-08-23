import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { RESSOURCES_CATEGORIES } from '../../data/categories';

export default function RessourcesSection() {
  const rootRef = useReveal('.res-card', { stagger: 0.08 });

  return (
    <section className="py-20 md:py-28 px-6 md:px-10 bg-azur">
      <div ref={rootRef} className="max-w-content mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="font-mono text-xs text-profond/70 tracking-widest uppercase mb-3">
              Centre de ressources
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-nuit mb-4 text-balance">
              Accès rapide aux ressources
            </h2>
          </div>
          <Link
            to="/ressources"
            className="link-underline shrink-0 inline-flex items-center gap-2 text-profond font-heading font-semibold"
          >
            Voir toutes les ressources
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {RESSOURCES_CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              to={`/ressources/${c.slug}`}
              className="res-card group bg-white border border-nuit/10 rounded-xl p-5 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out"
            >
              <span className={`w-8 h-8 rounded-lg ${c.soft} ${c.accent ?? c.text} flex items-center justify-center`}>
                <FileText size={15} aria-hidden="true" />
              </span>
              <span className="font-heading font-semibold text-sm text-nuit">{c.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
