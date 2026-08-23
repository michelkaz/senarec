import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_ITEMS } from '../data/nav';

function DesktopItem({ item }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);
  const wrapRef = useRef(null);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    if (!item.children) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onClickOutside = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, [item.children]);

  if (!item.children) {
    return (
      <NavLink
        to={item.to}
        className={({ isActive }) =>
          `link-underline text-sm font-medium transition-colors ${
            isActive ? 'text-white' : 'text-white/85 hover:text-white'
          }`
        }
      >
        {item.label}
      </NavLink>
    );
  }

  return (
    <div ref={wrapRef} className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="flex items-center gap-1 text-sm font-medium text-white/85 hover:text-white transition-colors"
      >
        {item.label}
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-64">
          <div className="rounded-xl bg-profond/95 backdrop-blur-xl border border-horizon/20 shadow-xl shadow-black/30 p-2">
            {item.children.map((c) => (
              <NavLink
                key={c.to}
                to={c.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2.5 text-sm transition-colors ${
                    isActive ? 'bg-horizon/15 text-white' : 'text-white/80 hover:bg-white/5 hover:text-white'
                  }`
                }
              >
                {c.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MobileItem({ item, onNavigate }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <NavLink
        to={item.to}
        onClick={onNavigate}
        className="block text-white text-lg font-heading font-medium py-2"
      >
        {item.label}
      </NavLink>
    );
  }

  return (
    <div className="border-b border-white/10 pb-2">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between w-full text-white text-lg font-heading font-medium py-2"
      >
        {item.label}
        <ChevronDown size={18} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pl-3 flex flex-col gap-1 pb-2">
          {item.children.map((c) => (
            <NavLink
              key={c.to}
              to={c.to}
              onClick={onNavigate}
              className="text-white/70 text-sm py-1.5"
            >
              {c.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const { pathname } = useLocation();
  const onHome = pathname === '/';

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);

      const delta = y - lastY.current;
      if (y < 120) {
        setHidden(false);
      } else if (delta > 6) {
        setHidden(true);
      } else if (delta < -6) {
        setHidden(false);
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  // Le fond transparent ne fonctionne que sur l'Accueil, au-dessus du Hero
  // sombre. Sur les autres pages, qui s'ouvrent sur des fonds clairs, la
  // barre reste toujours pleine pour garantir la lisibilité du texte blanc.
  const solid = scrolled || !onHome;

  return (
    <header
      className={`fixed top-3 md:top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-content rounded-2xl transition-all duration-500 ease-posed ${
        hidden ? '-translate-y-[calc(100%+2rem)]' : 'translate-y-0'
      } ${
        solid
          ? 'bg-profond/95 backdrop-blur-xl border border-horizon/20 shadow-lg shadow-black/20'
          : 'bg-white/5 backdrop-blur-sm border border-white/10'
      }`}
    >
      <div className="flex items-center justify-between px-4 md:px-6 py-2.5">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src="/images/logo.png" alt="SENAREC" className="h-9 w-9 rounded-lg object-cover" />
          <div className="leading-tight">
            <div className="font-heading font-bold text-white text-sm tracking-tight">SENAREC</div>
            <div className="font-mono text-[10px] text-horizon tracking-wide">Ministère du Plan — RDC</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <DesktopItem key={item.label} item={item} />
          ))}
        </nav>

        <Link
          to="/contact"
          className="btn-sheen group hidden lg:inline-flex items-center rounded-xl bg-horizon text-profond font-heading font-semibold text-sm px-5 py-2.5 hover:scale-[1.02] transition-transform duration-200 ease-posed"
        >
          <span className="sheen" />
          <span className="group-hover:text-white transition-colors">Nous contacter</span>
        </Link>

        <button
          aria-label="Ouvrir le menu"
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {open &&
        createPortal(
          <div className="fixed inset-0 z-[60] lg:hidden">
            <div className="absolute inset-0 bg-nuit/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-profond p-6 flex flex-col gap-3 shadow-2xl overflow-y-auto">
              <button aria-label="Fermer le menu" className="self-end text-white p-2" onClick={() => setOpen(false)}>
                <X size={22} />
              </button>
              {NAV_ITEMS.map((item) => (
                <MobileItem key={item.label} item={item} onNavigate={() => setOpen(false)} />
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-horizon text-profond font-heading font-semibold text-sm px-5 py-3"
              >
                Nous contacter
              </Link>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}
