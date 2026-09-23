import { Outlet } from 'react-router-dom';
import GovHeader from '../gov/GovHeader';
import GovFooter from '../gov/GovFooter';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <div className="min-h-screen bg-mineral">
      <ScrollToTop />
      <GovHeader />
      <main id="contenu" className="pt-[120px]">
        <Outlet />
      </main>
      <GovFooter />
    </div>
  );
}
