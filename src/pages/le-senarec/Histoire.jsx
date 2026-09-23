import { ABOUT, LEGAL } from '../../data/content';
import { Accent, Alternate, Block, HeroAccent, InProgress, PageHero, Text, useTone } from '../../components/gov/ui';

const EVENTS = [
  { year: '1987', title: 'Initiative du SENAREC', text: ABOUT.origin },
  { year: '21 février 1998', title: LEGAL.arrete.label, text: 'Création comme service public sous la coordination du Ministère du Plan.' },
  { year: '09 août 2011', title: LEGAL.decret33.label, text: 'Création du cadre institutionnel CEARC.' },
  { year: '13 août 2011', title: LEGAL.decret35.label, text: 'Organisation et fonctionnement du SENAREC.' },
];

function Timeline() {
  const dark = useTone() === 'dark';
  return (
    <ol className="relative border-l-2 border-rdcGold/60 ml-3 space-y-10">
      {EVENTS.map((e, i) => (
        <li key={e.year} className="reveal-card pl-8 relative">
          <span className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 ${dark ? 'border-govDark' : 'border-sable'} ${['bg-rdcBlue', 'bg-rdcGold', 'bg-rdcRed', 'bg-rdcBlue'][i]}`} />
          <p className="text-sm font-extrabold text-redText">{e.year}</p>
          <h3 className="font-bold text-lg mt-0.5">{e.title}</h3>
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
        lead="Les grandes étapes institutionnelles du SENAREC, de l'initiative de 1987 aux décrets-lois de 2011."
      />
      <Alternate>
        <Block eyebrow="Chronologie" title={<>Les étapes <Accent>institutionnelles</Accent></>}>
          <Timeline />
        </Block>
        <Block eyebrow="Suite" title={<>L'histoire <Accent>continue</Accent></>}>
          <InProgress title="Chronologie détaillée en cours de rédaction" text="Les étapes plus récentes seront ajoutées après validation." compact />
        </Block>
      </Alternate>
    </>
  );
}
