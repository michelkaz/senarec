import Hero from '../components/Hero';
import AboutIntro from '../components/blocks/AboutIntro';
import MissionSection from '../components/home/MissionSection';
import Manifeste from '../components/Manifeste';
import Stats from '../components/Stats';
import ProjectsSection from '../components/home/ProjectsSection';
import ActualitesSection from '../components/home/ActualitesSection';
import RessourcesSection from '../components/home/RessourcesSection';
import InstitutionalSection from '../components/home/InstitutionalSection';
import ContactCta from '../components/home/ContactCta';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <MissionSection />
      <Manifeste />
      <Stats />
      <ProjectsSection />
      <ActualitesSection />
      <RessourcesSection />
      <InstitutionalSection />
      <ContactCta />
    </>
  );
}
