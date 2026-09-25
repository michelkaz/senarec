import { Alternate, Block, HeroAccent, InProgress, PageHero, Text } from '../components/gov/ui';

export default function Confidentialite() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Confidentialité' }]} eyebrow="Informations légales" title={<HeroAccent>Confidentialité</HeroAccent>} lead="Information sur le traitement des données personnelles collectées par ce site." />
      <Alternate>
        <Block>
          <Text className="mb-6">Le formulaire de contact collecte votre nom, votre adresse email, votre organisme et votre téléphone (facultatifs) et votre message, uniquement pour traiter votre demande.</Text>
          <InProgress title="Politique de confidentialité en cours de rédaction" text="Le texte complet (responsable du traitement, durée de conservation, vos droits) sera publié après validation officielle." compact />
        </Block>
      </Alternate>
    </>
  );
}
