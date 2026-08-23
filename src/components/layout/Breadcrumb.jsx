import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumb({ crumbs = [], dark = false }) {
  const muted = dark ? 'text-white/50' : 'text-nuit/45';
  const strong = dark ? 'text-white/85 hover:text-white' : 'text-nuit/70 hover:text-nuit';
  const current = dark ? 'text-white' : 'text-nuit';

  return (
    <nav aria-label="Fil d'Ariane" className={`flex items-center flex-wrap gap-1.5 text-xs ${muted}`}>
      <Link to="/" className={`transition-colors ${strong}`}>
        Accueil
      </Link>
      {crumbs.map((c) => (
        <span key={c.label} className="flex items-center gap-1.5">
          <ChevronRight size={11} aria-hidden="true" />
          {c.to ? (
            <Link to={c.to} className={`transition-colors ${strong}`}>
              {c.label}
            </Link>
          ) : (
            <span className={current}>{c.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
