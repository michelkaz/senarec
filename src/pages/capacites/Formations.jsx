import { DOMAINES_FORMATION } from '../../data/cahier';
import { Accent, Alternate, Block, DataTable, HeroAccent, InProgress, PageHero } from '../../components/gov/ui';
import Process from '../../components/gov/Process';

export default function Formations() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Renforcement des capacités', to: '/renforcement-capacites' }, { label: 'Formations' }]}
        eyebrow="Renforcement des capacités"
        title={<><HeroAccent>Formations</HeroAccent></>}
        lead="Le catalogue distingue les domaines permanents de formation des sessions effectivement ouvertes. Une session n'est annoncée comme ouverte que lorsque ses dates, son lieu, ses conditions d'éligibilité, son nombre de places, son coût éventuel et son responsable sont validés."
      />
      <Alternate>
        <Block eyebrow="Domaines" title={<>Huit <Accent>domaines</Accent> de formation</>}>
          <DataTable
            keyField="domaine"
            columns={[
              { key: 'domaine', label: 'Domaine', render: (r) => <span className="font-bold">{r.domaine}</span> },
              { key: 'objectif', label: 'Objectif' },
              { key: 'public', label: 'Public prioritaire' },
              { key: 'modalite', label: 'Modalité' },
            ]}
            rows={DOMAINES_FORMATION}
          />
        </Block>
        <Block eyebrow="Processus" title={<>De la demande à la <Accent>certification</Accent></>}>
          <Process />
        </Block>
        <Block eyebrow="Sessions" title="Sessions ouvertes">
          <InProgress title="Aucune session ouverte actuellement" text="Les sessions seront publiées ici avec leurs dates, leur lieu, leurs conditions d'éligibilité et leur responsable dès leur validation officielle." />
        </Block>
      </Alternate>
    </>
  );
}
