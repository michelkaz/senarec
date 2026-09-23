import { CEARC, LEGAL } from '../../data/content';
import { Accent, Alternate, Block, Card, HeroAccent, PageHero, Text } from '../../components/gov/ui';

export default function Gouvernance() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Le SENAREC', to: '/le-senarec' }, { label: 'Gouvernance' }]}
        eyebrow="Le SENAREC"
        title={<><HeroAccent>Gouvernance</HeroAccent> du cadre CEARC</>}
        lead={CEARC.intro}
      />
      <Alternate>
        <Block eyebrow="Organes de pilotage" title={<>Quatre <Accent>organes</Accent></>}>
          <div className="grid sm:grid-cols-2 gap-5">
            {CEARC.organes.map((o, i) => (
              <Card key={o.name} accent={['border-l-rdcBlue', 'border-l-rdcGold', 'border-l-rdcRed', 'border-l-rdcBlue'][i]}>
                <h3 className="font-bold">{o.name}</h3>
                <p className="text-sm opacity-85 mt-2 leading-relaxed">{o.desc}</p>
              </Card>
            ))}
          </div>
        </Block>
        <Block eyebrow="Base légale" title={<>Les textes <Accent>fondateurs</Accent></>}>
          <Text className="mb-6">{CEARC.legal}</Text>
          <ul className="grid md:grid-cols-3 gap-4">
            {Object.values(LEGAL).map((l, i) => (
              <Card key={l.label} as="li" accent={['border-l-rdcBlue', 'border-l-rdcGold', 'border-l-rdcRed'][i]}>
                <p className="font-bold text-sm">{l.label}</p>
                <p className="text-xs opacity-75 mt-1">{l.date}</p>
                {l.note && <p className="text-xs opacity-75 mt-1">{l.note}</p>}
              </Card>
            ))}
          </ul>
        </Block>
      </Alternate>
    </>
  );
}
