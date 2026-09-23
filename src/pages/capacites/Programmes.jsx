import { PROJECTS } from '../../data/content';
import FullPhoto from '../../components/gov/FullPhoto';
import { Accent, Alternate, Block, Card, HeroAccent, InProgress, PageHero } from '../../components/gov/ui';

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
        <Block eyebrow="Initiatives" title={<>Huit <Accent>initiatives</Accent> menées par le SENAREC</>}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROJECTS.map((p) => (
              <Card key={p.title} className="group !p-0 overflow-hidden flex flex-col">
                <FullPhoto src={p.img} alt={p.title} className="aspect-[3/2]" imgClassName="group-hover:scale-[1.03] transition-transform duration-700" />
                <div className="p-5">
                  <h3 className="font-bold text-sm leading-snug">{p.title}</h3>
                  {p.note && <p className="text-xs opacity-70 mt-2">{p.note}</p>}
                </div>
              </Card>
            ))}
          </div>
        </Block>
        <Block eyebrow="Fiches détaillées" title={<>Objectifs, période et <Accent>résultats</Accent></>}>
          <InProgress title="Fiches détaillées en cours de rédaction" text="Contexte, objectifs, zones d'intervention et résultats de chaque programme seront publiés après validation." compact />
        </Block>
      </Alternate>
    </>
  );
}
