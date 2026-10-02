import Welcome from '../components/gov/Welcome';
import GovHero from '../components/gov/GovHero';
import { Engagements, CadreStrategique, DomainesIntervention, ProgrammesPrioritaires, BnceAgendaNewsletter } from '../components/gov/HomeBlocks';
import { Indicators, PartnersBand, Mandat, Actualites, Ressources, ContactBand } from '../components/gov/GovSections';

export default function Home() {
  return (
    <>
      <Welcome />
      <GovHero />
      <Engagements />
      <CadreStrategique />
      <DomainesIntervention />
      <Indicators />
      <Mandat />
      <ProgrammesPrioritaires />
      <Actualites />
      <Ressources />
      <PartnersBand />
      <BnceAgendaNewsletter />
      <ContactBand />
    </>
  );
}
