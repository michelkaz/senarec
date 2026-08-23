import { Link } from 'react-router-dom';
import { ArrowRight, Newspaper } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { ACTUALITES_CATEGORIES } from '../../data/categories';

export default function ActualitesSection() {
  const rootRef = useReveal('.actu-card', { stagger: 0.08 });

  return (
    <section className="py-20 md:py-28 px-6 md:px-10 bg-nuit noise-overlay">
      <div className="max-w-content mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="font-mono text-xs text-horizon tracking-widest uppercase mb-3">
              Le journal officiel
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-4 text-balance">
              Actualités &amp; activités
            </h2>
            <p className="text-white/60 leading-relaxed">
              Ateliers, communiqués, conférences, états généraux et séminaires du SENAREC seront
              publiés ici au fil de leur validation officielle.
            </p>
          </div>
          <Link
            to="/actualites"
            className="link-underline shrink-0 inline-flex items-center gap-2 text-horizon font-heading font-semibold"
          >
            Explorer les rubriques
            <ArrowRight size={16} />
          </Link>
        </div>

        <div ref={rootRef} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {ACTUALITES_CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              to={`/actualites/${c.slug}`}
              className="actu-card group bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col gap-3 hover:border-white/30 hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              <span className={`w-8 h-8 rounded-lg ${c.dot} flex items-center justify-center`}>
                <Newspaper size={15} className="text-white" aria-hidden="true" />
              </span>
              <span className="font-heading font-semibold text-sm text-white">{c.label}</span>
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-wide mt-auto">
                Bientôt disponible
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
