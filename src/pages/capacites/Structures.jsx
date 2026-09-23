import { CEARC, SUPPORT_POOLS } from '../../data/content';
import { Accent, Alternate, Block, Card, HeroAccent, InProgress, PageHero } from '../../components/gov/ui';

export default function Structures() {
  const cpparc = CEARC.organes.find((o) => o.name.includes('CPPARC'));
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Renforcement des capacités', to: '/renforcement-capacites' }, { label: 'Structures / centres' }]}
        eyebrow="Renforcement des capacités"
        title={<>Structures / <HeroAccent>centres</HeroAccent></>}
        lead="Les structures qui relaient l'action du SENAREC dans les provinces et l'appuient techniquement."
      />
      <Alternate>
        <Block eyebrow="Dans les provinces" title={<>Comités <Accent>provinciaux</Accent></>}>
          <Card accent="border-l-rdcBlue" className="max-w-2xl">
            <h3 className="font-bold">{cpparc.name}</h3>
            <p className="text-sm opacity-85 mt-2">{cpparc.desc}</p>
          </Card>
        </Block>
        <Block eyebrow="Appui technique" title={<>Pools <Accent>d'appui</Accent></>}>
          <ul className="grid sm:grid-cols-3 gap-4">
            {SUPPORT_POOLS.map((p, i) => (
              <Card key={p} as="li" accent={['border-l-rdcBlue', 'border-l-rdcGold', 'border-l-rdcRed'][i]} className="font-bold">{p}</Card>
            ))}
          </ul>
        </Block>
        <Block eyebrow="Répertoire" title="Liste des structures">
          <InProgress title="Répertoire en cours de rédaction" text="La liste des structures et centres, avec leur localisation et leur rôle, sera publiée après validation." compact />
        </Block>
      </Alternate>
    </>
  );
}
