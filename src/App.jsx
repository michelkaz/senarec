import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import SectionIndex from './pages/SectionIndex';
import Presentation from './pages/le-senarec/Presentation';
import Missions from './pages/le-senarec/Missions';
import Organisation from './pages/le-senarec/Organisation';
import Gouvernance from './pages/le-senarec/Gouvernance';
import Histoire from './pages/le-senarec/Histoire';
import Message from './pages/le-senarec/Message';
import Formations from './pages/capacites/Formations';
import Programmes from './pages/capacites/Programmes';
import Activites from './pages/capacites/Activites';
import Structures from './pages/capacites/Structures';
import { Publications, Rapports, Guides, Mediatheque } from './pages/ressources-pages';
import { Actualites, Evenements, Partenaires } from './pages/Simples';
import Contact from './pages/Contact';
import Confidentialite from './pages/Confidentialite';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="le-senarec" element={<SectionIndex to="/le-senarec" title="Le SENAREC" />} />
          <Route path="le-senarec/presentation" element={<Presentation />} />
          <Route path="le-senarec/missions-attributions" element={<Missions />} />
          <Route path="le-senarec/organisation" element={<Organisation />} />
          <Route path="le-senarec/gouvernance" element={<Gouvernance />} />
          <Route path="le-senarec/histoire" element={<Histoire />} />
          <Route path="le-senarec/message-coordonnateur" element={<Message />} />
          <Route path="renforcement-capacites" element={<SectionIndex to="/renforcement-capacites" title="Renforcement des capacités" />} />
          <Route path="renforcement-capacites/formations" element={<Formations />} />
          <Route path="renforcement-capacites/programmes" element={<Programmes />} />
          <Route path="renforcement-capacites/activites" element={<Activites />} />
          <Route path="renforcement-capacites/structures" element={<Structures />} />
          <Route path="ressources" element={<SectionIndex to="/ressources" title="Ressources" />} />
          <Route path="ressources/publications" element={<Publications />} />
          <Route path="ressources/rapports-etudes" element={<Rapports />} />
          <Route path="ressources/guides-documents" element={<Guides />} />
          <Route path="ressources/mediatheque" element={<Mediatheque />} />
          <Route path="actualites" element={<Actualites />} />
          <Route path="evenements" element={<Evenements />} />
          <Route path="partenaires" element={<Partenaires />} />
          <Route path="contact" element={<Contact />} />
          <Route path="confidentialite" element={<Confidentialite />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
