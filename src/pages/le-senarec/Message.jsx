import { TEAM } from '../../data/content';
import { Alternate, Block, HeroAccent, InProgress, PageHero } from '../../components/gov/ui';

export default function Message() {
  const coord = TEAM[0];
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Le SENAREC', to: '/le-senarec' }, { label: 'Message du Coordonnateur' }]}
        eyebrow="Le SENAREC"
        title={<>Message du <HeroAccent>Coordonnateur</HeroAccent></>}
        lead={`${coord.name} — ${coord.role}`}
      />
      <Alternate>
        <Block>
          <InProgress title="Message en cours de rédaction" text="Le message du Coordonnateur National sera publié ici, avec son portrait officiel, dès sa validation." />
        </Block>
      </Alternate>
    </>
  );
}
