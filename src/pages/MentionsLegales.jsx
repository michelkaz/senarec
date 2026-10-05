import { CONTACT } from '../data/content';
import { Alternate, Block, HeroAccent, InProgress, PageHero, Text } from '../components/gov/ui';

export default function MentionsLegales() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Mentions légales' }]} eyebrow="Informations légales" title={<>Mentions <HeroAccent>légales</HeroAccent></>} lead="Identification de l'éditeur du site et conditions d'utilisation." />
      <Alternate>
        <Block eyebrow="Éditeur" title="Identification">
          <ul className="space-y-2 text-sm">
            <li><strong>Dénomination :</strong> Secrétariat National pour le Renforcement des Capacités (SENAREC)</li>
            <li><strong>Nature :</strong> service public placé sous la tutelle du Ministère du Plan et de la Coordination de l'Aide au Développement</li>
            <li><strong>Siège :</strong> {CONTACT.address}</li>
            <li><strong>Téléphone :</strong> {CONTACT.phone}</li>
            <li><strong>Courriel :</strong> {CONTACT.email}</li>
          </ul>
        </Block>
        <Block eyebrow="Publication et hébergement" title="À compléter">
          <Text className="mb-6">Le directeur de publication, le responsable éditorial et les coordonnées de l'hébergeur seront précisés ici après désignation officielle.</Text>
          <InProgress title="Informations en cours de rédaction" text="Directeur de publication, hébergeur, propriété intellectuelle et droit applicable seront publiés après validation institutionnelle." compact />
        </Block>
        <Block eyebrow="Propriété intellectuelle" title="Utilisation des contenus">
          <Text>Les contenus de ce site (textes, photographies, documents) appartiennent au SENAREC, sauf mention contraire. Toute reproduction doit citer la source. Les photographies de partenaires ou de tiers restent soumises aux droits de leurs auteurs.</Text>
        </Block>
        <Block eyebrow="Données personnelles" title="Confidentialité">
          <Text>Les modalités de traitement des données collectées par les formulaires sont décrites dans la <a className="underline font-semibold text-redText" href="/confidentialite">politique de confidentialité</a>.</Text>
        </Block>
      </Alternate>
    </>
  );
}
