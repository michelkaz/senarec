import { ABOUT } from '../../data/content';
import { Accent, Alternate, Block, Card, HeroAccent, PageHero, Text } from '../../components/gov/ui';

export default function Presentation() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Le SENAREC', to: '/le-senarec' }, { label: 'Présentation' }]}
        eyebrow="Le SENAREC"
        title={<>Présentation <HeroAccent>institutionnelle</HeroAccent></>}
        lead={ABOUT.role}
        photo="/images/hero-3.jpg"
        photoAlt="Siège du SENAREC à Kinshasa"
      />
      <Alternate>
        <Block eyebrow="Origine" title={<>Une institution <Accent>née en 1987</Accent></>}>
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-5">
              <Text className="text-lg">{ABOUT.origin}</Text>
              <Text>{ABOUT.legal}</Text>
            </div>
            <Card accent="border-l-rdcGold">
              <p className="text-[11px] font-bold uppercase tracking-widest text-redText mb-2">Devise</p>
              <p className="text-2xl font-extrabold">« {ABOUT.devise} »</p>
            </Card>
          </div>
        </Block>
        <Block eyebrow="Notre mission" title={<>Quatre <Accent>engagements</Accent></>}>
          <ul className="grid sm:grid-cols-2 gap-4">
            {ABOUT.mission.map((m, i) => (
              <Card key={m} as="li" accent={['border-l-rdcBlue', 'border-l-rdcGold', 'border-l-rdcRed', 'border-l-rdcBlue'][i]} className="font-semibold">{m}</Card>
            ))}
          </ul>
        </Block>
        <Block eyebrow="Vision & valeurs" title={<>Ce qui nous <Accent>guide</Accent></>}>
          <div className="grid lg:grid-cols-2 gap-8">
            <Text className="text-lg">{ABOUT.vision}</Text>
            <ul className="grid sm:grid-cols-3 gap-4">
              {ABOUT.values.map((v, i) => (
                <Card key={v} as="li" accent={['border-l-rdcBlue', 'border-l-rdcGold', 'border-l-rdcRed'][i]} className="font-bold text-center">{v}</Card>
              ))}
            </ul>
          </div>
        </Block>
      </Alternate>
    </>
  );
}
