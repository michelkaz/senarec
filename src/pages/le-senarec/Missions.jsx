import { ABOUT, CEARC, MANDATE } from '../../data/content';
import { Accent, Alternate, Block, Card, HeroAccent, PageHero } from '../../components/gov/ui';

export default function Missions() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Le SENAREC', to: '/le-senarec' }, { label: 'Missions & attributions' }]}
        eyebrow="Le SENAREC"
        title={<>Missions &amp; <HeroAccent>attributions</HeroAccent></>}
        lead="Le mandat du SENAREC en trois axes, tel que défini par les textes qui l'instituent."
      />
      <Alternate>
        <Block eyebrow="Mandat" title={<>Le mandat en <Accent>trois axes</Accent></>}>
          <div className="grid md:grid-cols-3 gap-5">
            {MANDATE.map((m, i) => (
              <Card key={m.title} accent={['border-l-rdcBlue', 'border-l-rdcGold', 'border-l-rdcRed'][i]} className="flex flex-col">
                <span className="text-4xl font-extrabold text-rdcGold/80">0{i + 1}</span>
                <h3 className="font-bold text-lg mt-2">{m.title}</h3>
                <p className="text-sm opacity-85 mt-3 flex-1">{m.desc}</p>
                <p className="text-xs font-semibold mt-4 opacity-70">{m.ref}</p>
              </Card>
            ))}
          </div>
        </Block>
        <Block eyebrow="Cadre CEARC" title={<>Missions <Accent>principales</Accent></>}>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CEARC.missions.map((m, i) => (
              <Card key={m} as="li" accent={['border-l-rdcBlue', 'border-l-rdcGold', 'border-l-rdcRed'][i % 3]} className="font-semibold">{m}</Card>
            ))}
          </ul>
        </Block>
        <Block eyebrow="Notre mission" title={<>Au service de <Accent>l'État</Accent></>}>
          <ul className="grid sm:grid-cols-2 gap-4">
            {ABOUT.mission.map((m) => (
              <Card key={m} as="li" accent="border-l-rdcRed" className="font-semibold">{m}</Card>
            ))}
          </ul>
        </Block>
      </Alternate>
    </>
  );
}
