import { Link } from 'react-router-dom';
import { LEGAL, CONTACT } from '../data/content';

const NAV = [
  { to: '/a-propos/presentation', label: 'À propos' },
  { to: '/projets', label: 'Projets' },
  { to: '/actualites', label: 'Actualités & activités' },
  { to: '/ressources', label: 'Ressources' },
  { to: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-profond rounded-t-xl3 px-6 md:px-10 pt-16 pb-8 noise-overlay">
      <div className="max-w-content mx-auto grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <Link to="/" className="flex items-center gap-3 mb-4">
            <img src="/images/logo.png" alt="SENAREC" className="h-10 w-10 rounded-lg object-cover" />
            <div>
              <div className="font-heading font-bold text-white text-sm">SENAREC</div>
              <div className="font-mono text-[10px] text-horizon">Ministère du Plan — RDC</div>
            </div>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed max-w-sm">
            Le Secrétariat National pour le Renforcement des Capacités (SENAREC) est une
            institution publique de la République Démocratique du Congo, créée par le{' '}
            {LEGAL.decret35.label} du {LEGAL.decret35.date}.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-xs text-horizon/80 uppercase tracking-widest mb-4">Navigation</h4>
          <ul className="flex flex-col gap-2.5">
            {NAV.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="link-underline text-white/70 hover:text-white text-sm">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs text-horizon/80 uppercase tracking-widest mb-4">Cadre légal</h4>
          <ul className="flex flex-col gap-2.5 font-mono text-xs text-white/50">
            {Object.values(LEGAL).map((l) => (
              <li key={l.label}>
                {l.label} — {l.date}
              </li>
            ))}
          </ul>
          <p className="text-white/40 text-xs mt-5">
            {CONTACT.phone} · {CONTACT.email}
          </p>
        </div>
      </div>

      <div className="max-w-content mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/40 text-xs">Service public — République Démocratique du Congo</p>
        <p className="text-white/40 text-xs">© {new Date().getFullYear()} SENAREC. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
