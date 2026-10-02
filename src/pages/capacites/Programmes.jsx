import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PROGRAMMES } from '../../data/cahier';
import { PROJECTS } from '../../data/content';
import FullPhoto from '../../components/gov/FullPhoto';
import { Accent, Alternate, Block, Caveat, HeroAccent, PageHero, StatusBadge } from '../../components/gov/ui';

export default function Programmes() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Renforcement des capacités', to: '/renforcement-capacites' }, { label: 'Programmes & projets' }]}
        eyebrow="Renforcement des capacités"
        title={<>Programmes &amp; <HeroAccent>projets</HeroAccent></>}
        lead="Les instruments et initiatives à travers lesquels le SENAREC renforce les capacités et modernise la gestion publique en République Démocratique du Congo."
      />
      <Alternate>
        <Block eyebrow="Portefeuille" title={<>Huit <Accent>programmes</Accent></>}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROGRAMMES.map((p) => (
              <Link key={p.slug} to={`/renforcement-capacites/programmes/${p.slug}`} className="reveal-card group bg-white border border-sableDeep rounded-lg p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col">
                <StatusBadge status={p.statut} />
                <h3 className="font-bold text-base mt-3 text-govDark group-hover:text-gov transition-colors">{p.nom}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed flex-1">{p.titre}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-redText">Consulter la fiche <ArrowRight size={16} /></span>
              </Link>
            ))}
          </div>
        </Block>

        <Block eyebrow="Réalisations en images" title={<>Illustrations <Accent>photographiques</Accent></>} lead="Photographies institutionnelles du SENAREC illustrant son action, sans correspondance stricte avec une fiche programme en particulier.">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROJECTS.map((p) => (
              <div key={p.title} className="reveal-card bg-white border border-sableDeep rounded-lg overflow-hidden shadow-sm flex flex-col">
                <FullPhoto src={p.img} alt={p.title} className="aspect-[3/2]" />
                <div className="p-4"><h3 className="font-bold text-xs leading-snug">{p.title}</h3></div>
              </div>
            ))}
          </div>
        </Block>

        <Block>
          <Caveat>Les fiches ci-dessus constituent un portefeuille éditorial initial ; elles ne remplacent pas les documents de projet officiels.</Caveat>
        </Block>
      </Alternate>
    </>
  );
}
