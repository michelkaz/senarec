import { Link } from 'react-router-dom';
import { Alternate, Block, HeroAccent, PageHero } from '../components/gov/ui';

export default function NotFound() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Page introuvable' }]} eyebrow="Erreur 404" title={<>Page <HeroAccent>introuvable</HeroAccent></>} lead="Cette adresse n'existe pas ou a été déplacée." />
      <Alternate>
        <Block>
          <Link to="/" className="inline-block bg-govDark hover:bg-gov text-white font-bold text-sm px-6 py-3 rounded">Retour à l'accueil</Link>
        </Block>
      </Alternate>
    </>
  );
}
