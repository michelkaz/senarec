import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { NAV_TREE } from '../../data/site';

function TriBar() {
  return (
    <div className="h-1 w-full flex" aria-hidden="true">
      <div className="h-full w-[60%] bg-rdcBlue" />
      <div className="h-full w-[20%] bg-rdcGold" />
      <div className="h-full w-[20%] bg-rdcRed" />
    </div>
  );
}

function Desktop() {
  const [open, setOpen] = useState(null);
  const ref = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => setOpen(null), [pathname]);
  useEffect(() => {
    const away = (e) => ref.current && !ref.current.contains(e.target) && setOpen(null);
    const esc = (e) => e.key === 'Escape' && setOpen(null);
    document.addEventListener('mousedown', away);
    document.addEventListener('keydown', esc);
    return () => {
      document.removeEventListener('mousedown', away);
      document.removeEventListener('keydown', esc);
    };
  }, []);

  const base = 'whitespace-nowrap px-2.5 py-2 text-[13px] font-semibold rounded-md transition-colors';
  return (
    <nav ref={ref} aria-label="Navigation principale" className="hidden xl:flex items-center gap-0.5">
      {NAV_TREE.map((item, i) =>
        item.children ? (
          <div key={item.label} className="relative">
            <button
              type="button"
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? null : i)}
              className={`${base} inline-flex items-center gap-1 ${pathname.startsWith(item.to) ? 'bg-gov text-white' : 'text-white/85 hover:text-white hover:bg-white/10'}`}
            >
              {item.label}
              <ChevronDown size={14} />
            </button>
            {open === i && (
              <ul className="absolute left-0 top-full mt-1 w-72 bg-white border border-slate-200 rounded-lg shadow-xl py-2 z-50">
                <li>
                  <Link to={item.to} className="block px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-redText hover:bg-slate-50">
                    Vue d’ensemble →
                  </Link>
                </li>
                {item.children.map((c) => (
                  <li key={c.to}>
                    <Link to={c.to} className="block px-4 py-2 text-[13px] font-semibold text-govDark hover:bg-slate-50 hover:text-gov">
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `${base} ${isActive ? 'bg-gov text-white' : 'text-white/85 hover:text-white hover:bg-white/10'}`
            }
          >
            {item.label}
          </NavLink>
        ),
      )}
    </nav>
  );
}

function Mobile({ onClose }) {
  const panel = useRef(null);
  useEffect(() => {
    const prev = document.activeElement;
    panel.current?.querySelector('a,button')?.focus();
    const esc = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', esc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', esc);
      document.body.style.overflow = '';
      prev?.focus?.();
    };
  }, [onClose]);

  return (
    <div ref={panel} role="dialog" aria-modal="true" aria-label="Menu" className="xl:hidden fixed inset-0 top-[120px] bg-white z-40 overflow-y-auto">
      <ul className="px-4 py-4">
        {NAV_TREE.map((item) => (
          <li key={item.label} className="border-b border-slate-100 py-2">
            {!item.children ? (
              <Link to={item.to} onClick={onClose} className="block py-2 font-bold text-govDark">
                {item.label}
              </Link>
            ) : (
              <details>
                <summary className="py-2 font-bold text-govDark cursor-pointer">{item.label}</summary>
                <ul className="pl-4 pb-2">
                  <li>
                    <Link to={item.to} onClick={onClose} className="block py-2 text-xs font-bold uppercase tracking-wider text-redText">Vue d’ensemble</Link>
                  </li>
                  {item.children.map((c) => (
                    <li key={c.to}>
                      <Link to={c.to} onClick={onClose} className="block py-2 text-sm text-slate-700">
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function GovHeader() {
  const [menu, setMenu] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setMenu(false), [pathname]);

  return (
    <header className="fixed top-0 w-full z-50 bg-govDark shadow-lg">
      <a href="#contenu" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:bg-gov focus:text-white focus:px-4 focus:py-2 focus:z-[60]">
        Aller au contenu
      </a>
      <div className="bg-govNight text-white text-xs border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="font-bold tracking-wider uppercase truncate">République Démocratique du Congo</span>
            <span className="text-white/30 hidden md:inline">•</span>
            <span className="text-white/80 hidden md:inline uppercase text-[11px] tracking-wide truncate">
              Ministère du Plan
            </span>
          </div>
          <Link to="/contact" className="hidden sm:inline text-white/80 hover:text-white text-[11px] font-medium shrink-0">
            Contact institutionnel
          </Link>
        </div>
      </div>

      <div className="bg-govDark">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="SENAREC — accueil">
            <img src="/images/minplan.png" alt="Ministère du Plan — République Démocratique du Congo" width="370" height="148" className="h-12 w-auto bg-white rounded-md px-2 py-1 max-sm:h-10" />
            <span className="hidden sm:block w-px h-10 bg-white/25" aria-hidden="true" />
            <span className="flex flex-col items-center bg-white rounded-md px-2.5 pt-1 pb-0.5">
              <img src="/images/emblem.png" alt="" width="470" height="385" className="h-8 w-auto" />
              <span className="text-[11px] font-extrabold tracking-widest text-govDark leading-none mt-0.5">SENAREC</span>
            </span>
          </Link>
          <Desktop />
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              aria-label={menu ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menu}
              onClick={() => setMenu((m) => !m)}
              className="xl:hidden w-11 h-11 rounded flex items-center justify-center text-white hover:bg-white/10"
            >
              {menu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <TriBar />
      {menu && <Mobile onClose={() => setMenu(false)} />}
    </header>
  );
}
