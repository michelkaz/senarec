import Welcome from '../components/gov/Welcome';
import GovHero from '../components/gov/GovHero';
import { Indicators, PartnersBand, Mandat, Projets, Actualites, Ressources, ContactBand } from '../components/gov/GovSections';

export default function Home() {
  return (
    <>
      <Welcome />
      <GovHero />
      <PartnersBand />
      <Indicators />
      <Mandat />
      <Projets />
      <Actualites />
      <Ressources />
      <ContactBand />
    </>
  );
}
