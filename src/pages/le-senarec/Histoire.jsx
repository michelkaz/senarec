import { HISTOIRE } from '../../data/cahier';
import { Accent, Alternate, Block, HeroAccent, PageHero, Text, useTone } from '../../components/gov/ui';

function Timeline() {
  const dark = useTone() === 'dark';
  return (
    <ol className="relative border-l-2 border-rdcGold/60 ml-3 space-y-10">
      {HISTOIRE.map((e, i) => (
        <li key={e.periode} className="reveal-card pl-8 relative">
          <span className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 ${dark ? 'border-govDark' : 'border-sable'} ${['bg-rdcBlue', 'bg-rdcGold', 'bg-rdcRed'][i % 3]}`} />
          <p className="text-sm font-extrabold text-redText">{e.periode}</p>
          <h3 className="font-bold text-lg mt-0.5">{e.titre}</h3>
          <Text className="mt-2 max-w-2xl">{e.text}</Text>
        </li>
      ))}
    </ol>
  );
}

export default function Histoire() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Le SENAREC', to: '/le-senarec' }, { label: 'Notre histoire' }]}
        eyebrow="Le SENAREC"
        title={<>Notre <HeroAccent>histoire</HeroAccent></>}
        lead="Les grandes étapes institutionnelles du SENAREC, de l'initiative de 1987 au développement de la Banque Nationale des Compétences et de l'Expertise."
      />
      <Alternate>
        <Block eyebrow="Chronologie" title={<>Les étapes <Accent>institutionnelles</Accent></>}>
          <Timeline />
        </Block>
      </Alternate>
    </>
  );
}
