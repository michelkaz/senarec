import { ACTIVITES_TYPES } from '../../data/cahier';
import { Accent, Alternate, Block, DataTable, HeroAccent, InProgress, PageHero } from '../../components/gov/ui';

export default function Activites() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Renforcement des capacités', to: '/renforcement-capacites' }, { label: 'Activités' }]}
        eyebrow="Renforcement des capacités"
        title={<><HeroAccent>Activités</HeroAccent> du SENAREC</>}
        lead="Les interventions réalisées, reliées au programme concerné, au territoire, aux bénéficiaires, aux livrables et aux résultats."
      />
      <Alternate>
        <Block eyebrow="Typologie" title={<>Six types <Accent>d'activités</Accent></>}>
          <DataTable
            keyField="type"
            columns={[
              { key: 'type', label: 'Type', render: (r) => <span className="font-bold">{r.type}</span> },
              { key: 'contenu', label: 'Contenu minimal' },
              { key: 'indicateur', label: 'Indicateur conseillé' },
            ]}
            rows={ACTIVITES_TYPES}
          />
        </Block>
        <Block eyebrow="Journal des activités" title="Activités réalisées">
          <InProgress title="Journal en cours de constitution" text="Les ateliers, séminaires, conférences et missions réalisés seront publiés ici, avec leur date, leur lieu et leurs résultats, au fur et à mesure de leur validation." />
        </Block>
      </Alternate>
    </>
  );
}
