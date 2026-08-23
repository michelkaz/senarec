import { useParams, Navigate, Link } from 'react-router-dom';
import { FileClock, ArrowRight } from 'lucide-react';
import Breadcrumb from '../../components/layout/Breadcrumb';
import { useReveal } from '../../hooks/useReveal';
import { ACTUALITES_CATEGORIES } from '../../data/categories';

export default function ActualiteCategory() {
  const { slug } = useParams();
  const category = ACTUALITES_CATEGORIES.find((c) => c.slug === slug);
  const rootRef = useReveal('.actu-anim', { stagger: 0.12 });

  if (!category) return <Navigate to="/actualites" replace />;

  const dark = category.dark;
  const others = ACTUALITES_CATEGORIES.filter((c) => c.slug !== slug);

  return (
    <div ref={rootRef}>
      <section
        className={`pt-32 md:pt-40 ${category.img ? 'pb-0' : 'pb-16 md:pb-20'} px-6 md:px-10 ${
          dark ? 'bg-nuit' : ''
        }`}
      >
        <div className="max-w-content mx-auto">
          <div className="actu-anim">
            <Breadcrumb
              dark={dark}
              crumbs={[{ label: 'Actualités & activités', to: '/actualites' }, { label: category.label }]}
            />
          </div>
          <div className="actu-anim flex items-center gap-3 mt-8 mb-5">
            <span className={`w-2.5 h-2.5 rounded-full ${category.dot} animate-pulse`} />
            <span
              className={`font-mono text-xs tracking-widest uppercase ${dark ? 'text-white/60' : 'text-nuit/50'}`}
            >
              Actualités &amp; activités
            </span>
          </div>
          <h1
            className={`actu-anim font-heading font-bold text-4xl md:text-5xl max-w-2xl text-balance ${
              dark ? 'text-white' : 'text-nuit'
            }`}
          >
            {category.label}
          </h1>
          <p className={`actu-anim leading-relaxed max-w-xl mt-5 ${dark ? 'text-white/70' : 'text-nuit/70'}`}>
            {category.desc}
          </p>
        </div>
      </section>

      {category.img && (
        <section className="actu-anim px-6 md:px-10 mt-10 mb-16 md:mb-20">
          <div className="max-w-content mx-auto rounded-xl3 overflow-hidden h-56 md:h-72">
            <img src={category.img} alt={category.label} className="w-full h-full object-cover" />
          </div>
        </section>
      )}

      <section className={`pb-20 md:pb-28 px-6 md:px-10 ${category.img ? '' : 'pt-4'}`}>
        <div className="max-w-content mx-auto">
          <div
            className={`actu-anim relative overflow-hidden rounded-xl2 border ${category.border} ${
              dark ? 'bg-nuit' : 'bg-white'
            } px-8 py-16 md:py-20 flex flex-col items-center text-center`}
          >
            <div
              className={`absolute -top-10 -right-10 w-40 h-40 rounded-full ${category.soft} opacity-60 blur-2xl animate-float-soft`}
              aria-hidden="true"
            />
            <div
              className={`absolute -bottom-14 -left-14 w-48 h-48 rounded-full ${category.soft} opacity-40 blur-3xl animate-float-soft`}
              style={{ animationDelay: '-3s' }}
              aria-hidden="true"
            />

            <div className="relative w-16 h-16 mb-6">
              <span
                className={`absolute inset-0 rounded-full border-2 border-dashed ${category.border} animate-spin-slow`}
                aria-hidden="true"
              />
              <div className={`absolute inset-2 rounded-xl ${category.soft} ${category.text} flex items-center justify-center`}>
                <FileClock size={24} aria-hidden="true" />
              </div>
            </div>

            <h3 className={`relative font-heading font-semibold text-lg mb-2 ${dark ? 'text-white' : 'text-nuit'}`}>
              Contenu en cours de publication
            </h3>
            <p className={`relative text-sm max-w-sm leading-relaxed ${dark ? 'text-white/60' : 'text-nuit/60'}`}>
              Les {category.label.toLowerCase()} du SENAREC seront publiés ici dès leur validation
              officielle.
            </p>
          </div>

          <div className="actu-anim mt-16">
            <p className="font-mono text-[11px] tracking-widest uppercase mb-4 text-nuit/40">
              Autres rubriques
            </p>
            <div className="flex flex-wrap gap-3">
              {others.map((c) => (
                <Link
                  key={c.slug}
                  to={`/actualites/${c.slug}`}
                  className={`group inline-flex items-center gap-2 rounded-lg border ${c.border} ${c.soft} ${c.text} px-4 py-2.5 text-xs font-semibold hover:-translate-y-0.5 transition-transform duration-200 ease-out`}
                >
                  {c.label}
                  <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
