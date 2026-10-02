import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Search as SearchIcon } from 'lucide-react';
import { search } from '../data/searchIndex';
import { Alternate, Block, Card, HeroAccent, PageHero } from '../components/gov/ui';

export default function Recherche() {
  const [params, setParams] = useSearchParams();
  const initial = params.get('q') || '';
  const [q, setQ] = useState(initial);
  useEffect(() => setQ(initial), [initial]);

  const results = useMemo(() => search(q), [q]);
  const submit = (e) => {
    e.preventDefault();
    setParams(q ? { q } : {});
  };

  return (
    <>
      <PageHero crumbs={[{ label: 'Recherche' }]} eyebrow="Recherche" title={<>Rechercher sur le <HeroAccent>portail</HeroAccent></>} lead="Pages institutionnelles, programmes, formations, activités, structures, actualités et partenaires." />
      <Alternate>
        <Block>
          <form onSubmit={submit} role="search" className="flex gap-2 max-w-xl mb-10">
            <label htmlFor="q" className="sr-only">Rechercher</label>
            <div className="relative flex-1">
              <SearchIcon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
              <input id="q" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Ex. : PRONAREC, formations, Kindu…" className="w-full pl-10 pr-3 py-3 rounded border border-sableDeep text-sm focus:outline-none focus:ring-2 focus:ring-gov/30" />
            </div>
            <button type="submit" className="bg-govDark hover:bg-gov text-white font-bold text-sm px-5 rounded">Rechercher</button>
          </form>

          {q && (
            <p className="text-sm font-semibold text-slate-600 mb-6">{results.length} résultat{results.length !== 1 ? 's' : ''} pour « {q} »</p>
          )}

          {q && results.length === 0 && (
            <p className="text-sm text-slate-600 max-w-md">Aucun résultat. Essayez un autre mot-clé, ou explorez directement les rubriques depuis le menu.</p>
          )}

          <div className="grid sm:grid-cols-2 gap-4">
            {results.map((r, i) => (
              <Card key={`${r.to}-${i}`} as={Link} to={r.to} className="group flex flex-col">
                <span className="text-[11px] font-bold uppercase tracking-wide text-redText">{r.type}</span>
                <h3 className="font-bold text-sm mt-1 group-hover:text-gov transition-colors">{r.title}</h3>
                <p className="text-xs opacity-75 mt-1 flex-1">{r.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-redText">Ouvrir <ArrowRight size={14} /></span>
              </Card>
            ))}
          </div>
        </Block>
      </Alternate>
    </>
  );
}
