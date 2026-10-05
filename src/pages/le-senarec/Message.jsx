import { MESSAGE_COORDONNATEUR } from '../../data/cahier';
import { TEAM } from '../../data/content';
import { Alternate, Block, HeroAccent, PageHero, Text } from '../../components/gov/ui';

export default function Message() {
  const coord = TEAM[0];
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Le SENAREC', to: '/le-senarec' }, { label: 'Message du Coordonnateur' }]}
        eyebrow="Le SENAREC"
        title={<>Message du <HeroAccent>Coordonnateur</HeroAccent></>}
        lead={`${coord.name} — ${coord.role}`}
        photo="/images/projets/6.jpg"
        photoAlt="Marcel Kanda Mukanya, Coordonnateur national du SENAREC, lors d'une intervention publique"
      />
      <Alternate>
        <Block>
          <div className="max-w-3xl mx-auto space-y-5">
            {MESSAGE_COORDONNATEUR.texte.map((p, i) => (
              <Text key={i} className={i === 0 ? 'text-lg' : undefined}>{p}</Text>
            ))}
            <p className="font-bold text-govDark pt-2">
              {MESSAGE_COORDONNATEUR.signataire}
              <span className="block text-sm font-normal text-slate-600">{MESSAGE_COORDONNATEUR.fonction} — date de validation à renseigner</span>
            </p>
          </div>
        </Block>
      </Alternate>
    </>
  );
}
