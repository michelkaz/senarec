import GovHero from '../components/gov/GovHero';
import { Indicators, PartnersBand, Mandat, Projets, Actualites, Ressources, ContactBand } from '../components/gov/GovSections';

export default function Home() {
  return (
    <>
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
