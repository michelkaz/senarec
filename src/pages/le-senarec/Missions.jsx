import { MISSIONS_ATTRIBUTIONS, MANDAT_FONCTIONS } from '../../data/cahier';
import { Accent, Alternate, Block, Card, DataTable, HeroAccent, PageHero } from '../../components/gov/ui';

export default function Missions() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Le SENAREC', to: '/le-senarec' }, { label: 'Missions & attributions' }]}
        eyebrow="Le SENAREC"
        title={<>Missions &amp; <HeroAccent>attributions</HeroAccent></>}
        lead="Le mandat du SENAREC en trois fonctions, et la synthèse des treize missions recensées dans la présentation institutionnelle de 2019."
      />
      <Alternate>
        <Block eyebrow="Mandat" title={<>Le mandat en <Accent>trois fonctions</Accent></>}>
          <DataTable
            keyField="fonction"
            columns={[
              { key: 'fonction', label: 'Fonction', render: (r) => <span className="font-bold">{r.fonction}</span> },
              { key: 'contenu', label: 'Contenu' },
              { key: 'preuve', label: 'Preuve attendue sur le site' },
            ]}
            rows={MANDAT_FONCTIONS}
          />
        </Block>
        <Block eyebrow="Missions" title={<>Treize <Accent>missions</Accent></>}>
          <ol className="grid sm:grid-cols-2 gap-3 list-none">
            {MISSIONS_ATTRIBUTIONS.map((m, i) => (
              <Card key={m} as="li" className="flex gap-3 items-start">
                <span className="shrink-0 w-7 h-7 rounded-full bg-govDark text-rdcGold text-xs font-extrabold flex items-center justify-center">{i + 1}</span>
                <span className="text-sm leading-relaxed">{m}</span>
              </Card>
            ))}
          </ol>
        </Block>
      </Alternate>
    </>
  );
}
