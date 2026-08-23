import { Link } from 'react-router-dom';
import { ArrowRight, Newspaper } from 'lucide-react';
import Breadcrumb from '../../components/layout/Breadcrumb';
import TricolorMark from '../../components/blocks/TricolorMark';
import { useReveal } from '../../hooks/useReveal';
import { ACTUALITES_CATEGORIES } from '../../data/categories';

export default function ActualitesIndex() {
  const rootRef = useReveal('.magazine-tile', { stagger: 0.1 });
  const featured = ACTUALITES_CATEGORIES.find((c) => c.slug === 'conferences');
  const rest = ACTUALITES_CATEGORIES.filter((c) => c.slug !== 'conferences');

  return (
    <>
      <section className="pt-32 md:pt-40 pb-12 px-6 md:px-10">
        <div className="max-w-content mx-auto">
          <Breadcrumb crumbs={[{ label: 'Actualités & activités' }]} />
          <div className="flex items-center gap-3 mt-8 mb-5">
            <TricolorMark />
            <span className="font-mono text-xs text-profond tracking-widest uppercase">
              Le journal officiel
            </span>
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-nuit max-w-2xl text-balance">
            Actualités &amp; activités
          </h1>
          <p className="text-nuit/70 leading-relaxed max-w-xl mt-5">
            Ateliers, communiqués officiels, conférences, états généraux et séminaires du SENAREC.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28 px-6 md:px-10">
        <div ref={rootRef} className="max-w-content mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <Link
            to={`/actualites/${featured.slug}`}
            className="magazine-tile group relative md:col-span-2 md:row-span-2 rounded-xl3 overflow-hidden bg-nuit min-h-[22rem]"
          >
            <img
              src={featured.img}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nuit via-nuit/40 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-7 md:p-9">
              <span className="font-mono text-[10px] uppercase tracking-widest text-energie mb-2">
                Rubrique en vedette
              </span>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-white">{featured.label}</h2>
              <p className="text-white/70 text-sm mt-2 max-w-sm">{featured.desc}</p>
              <span className="inline-flex items-center gap-2 text-energie text-sm font-semibold mt-5">
                Consulter
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>

          {rest.map((c) => (
            <Link
              key={c.slug}
              to={`/actualites/${c.slug}`}
              className={`magazine-tile group rounded-xl2 border ${c.border} ${c.soft} p-6 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out`}
            >
              <div className={`w-9 h-9 rounded-lg ${c.dot} flex items-center justify-center`}>
                <Newspaper size={16} className="text-white" aria-hidden="true" />
              </div>
              <h2 className={`font-heading font-semibold text-base ${c.text}`}>{c.label}</h2>
              <p className={`text-xs leading-relaxed ${c.text} opacity-70`}>{c.desc}</p>
              <span className={`mt-auto inline-flex items-center gap-2 text-sm font-semibold ${c.text}`}>
                Consulter
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
