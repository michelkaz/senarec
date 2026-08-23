import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import PresentationInstitutionnelle from './pages/apropos/PresentationInstitutionnelle';
import Gouvernance from './pages/apropos/Gouvernance';
import Cearc from './pages/apropos/Cearc';
import Projets from './pages/Projets';
import ActualitesIndex from './pages/actualites/ActualitesIndex';
import ActualiteCategory from './pages/actualites/ActualiteCategory';
import RessourcesIndex from './pages/ressources/RessourcesIndex';
import RessourceCategory from './pages/ressources/RessourceCategory';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="a-propos/presentation" element={<PresentationInstitutionnelle />} />
          <Route path="a-propos/gouvernance" element={<Gouvernance />} />
          <Route path="a-propos/cearc" element={<Cearc />} />
          <Route path="projets" element={<Projets />} />
          <Route path="actualites" element={<ActualitesIndex />} />
          <Route path="actualites/:slug" element={<ActualiteCategory />} />
          <Route path="ressources" element={<RessourcesIndex />} />
          <Route path="ressources/:slug" element={<RessourceCategory />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
