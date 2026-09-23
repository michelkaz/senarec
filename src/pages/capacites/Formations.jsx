import { Alternate, Block, HeroAccent, InProgress, PageHero, Text, TextLink } from '../../components/gov/ui';

export default function Formations() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Renforcement des capacités', to: '/renforcement-capacites' }, { label: 'Formations' }]}
        eyebrow="Renforcement des capacités"
        title={<><HeroAccent>Formations</HeroAccent></>}
        lead="Offres et sessions de formation destinées aux institutions publiques."
      />
      <Alternate>
        <Block eyebrow="Catalogue" title="Le catalogue de formations">
          <InProgress title="Catalogue en cours de rédaction" text="Les formations, leurs objectifs, publics et modalités seront publiés dès leur validation officielle." />
        </Block>
        <Block eyebrow="En attendant" title="Découvrir nos réalisations">
          <Text className="mb-4">Les formations déjà menées, comme la formation PMP selon les standards du PMI, figurent parmi les programmes et projets du SENAREC.</Text>
          <TextLink to="/renforcement-capacites/programmes">Voir les programmes &amp; projets</TextLink>
        </Block>
      </Alternate>
    </>
  );
}
