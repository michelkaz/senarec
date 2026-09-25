import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const DURATION = 7000;

// Textes et images réels : ABOUT / PROJECTS de src/data/content.js.
const SLIDES = [
  {
    axe: 'Axe 01 • Mission',
    tab: 'Guichet unique du renforcement des capacités',
    img: '/images/hero-2.jpeg',
    title: 'Former pour transformer',
    text: "Le SENAREC élabore et coordonne le Programme National de Renforcement des Capacités (PRONAREC) et accompagne la modernisation de l'Administration Publique en RDC.",
    cta: ['Découvrir le SENAREC', '/le-senarec/presentation'],
  },
  {
    axe: 'Axe 02 • Concertation',
    tab: 'États généraux du Patrimoine',
    img: '/images/projets/3.jpg',
    title: 'États Généraux du Patrimoine',
    text: 'Grandes concertations nationales portées ou suivies par le SENAREC, en présence de ses partenaires.',
    cta: ['Voir les activités', '/renforcement-capacites/activites'],
  },
  {
    axe: 'Axe 03 • Certification',
    tab: 'Formation PMP selon les standards du PMI',
    img: '/images/projets/4.jpg',
    title: 'Formation PMP selon les standards du PMI',
    text: 'Des cadres et agents de l’État formés au management de projet selon les standards internationaux.',
    cta: ['Voir les programmes & projets', '/renforcement-capacites/programmes'],
  },
  {
    axe: 'Axe 04 • Réforme',
    tab: 'Séminaires gouvernementaux',
    img: '/images/projets/5.jpg',
    title: 'Séminaire Gouvernemental National',
    text: 'Concertation des responsables de l’État pour accompagner la mise en œuvre des politiques publiques et les réformes.',
    cta: ['Actualités & activités', '/renforcement-capacites/activites'],
  },
];

export default function GovHero() {
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(true);
  const go = (n) => setI((n + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    if (!playing || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const t = setTimeout(() => setI((n) => (n + 1) % SLIDES.length), DURATION);
    return () => clearTimeout(t);
  }, [playing, i]);

  const s = SLIDES[i];
  return (
    <section id="axes" aria-roledescription="carrousel" aria-label="À la une" className="relative bg-slate-900">
      <div className="relative overflow-hidden bg-govNight">
        {SLIDES.map((sl, n) => (
          <img
            key={sl.img}
            src={sl.img}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 w-full h-full object-cover blur-3xl scale-125 transition-opacity duration-1000 ${n === i ? 'opacity-60' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-govNight/90 via-govDark/70 to-govDark/30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 grid lg:grid-cols-12 gap-8 items-center">
          <div key={i} className="lg:col-span-5 text-white order-2 lg:order-1" aria-live="polite">
            <span className="rise inline-flex items-center gap-2 bg-rdcGold/20 border border-rdcGold/50 text-rdcGold px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-rdcGold animate-ping" /> {s.axe}
            </span>
            <h1 className="rise text-3xl sm:text-4xl xl:text-5xl font-extrabold leading-[1.1] tracking-tight mb-5" style={{ animationDelay: '.1s' }}>
              {s.title}
            </h1>
            <p className="rise text-base text-slate-200 mb-7 leading-relaxed" style={{ animationDelay: '.2s' }}>{s.text}</p>
            <div className="rise flex items-center gap-3" style={{ animationDelay: '.3s' }}>
              <Link to={s.cta[1]} className="group inline-flex items-center gap-2 bg-rdcGold hover:bg-yellow-400 text-slate-900 font-bold text-sm px-6 py-3 rounded shadow-lg transition-transform hover:-translate-y-0.5">
                {s.cta[0]} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="flex gap-2 mt-8">
              <button type="button" aria-label="Diapositive précédente" onClick={() => go(i - 1)} className="w-11 h-11 rounded-full bg-black/30 hover:bg-gov text-white flex items-center justify-center border border-white/15"><ChevronLeft size={22} /></button>
              <button type="button" aria-label={playing ? 'Mettre en pause' : 'Reprendre'} onClick={() => setPlaying((p) => !p)} className="w-11 h-11 rounded-full bg-black/30 hover:bg-gov text-white flex items-center justify-center border border-white/15">{playing ? <Pause size={18} /> : <Play size={18} />}</button>
              <button type="button" aria-label="Diapositive suivante" onClick={() => go(i + 1)} className="w-11 h-11 rounded-full bg-black/30 hover:bg-gov text-white flex items-center justify-center border border-white/15"><ChevronRight size={22} /></button>
            </div>
          </div>

          {/* Photo affichée en entier, sans recadrage */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative aspect-[3/2] rounded-lg overflow-hidden shadow-2xl border-b-4 border-rdcGold bg-govNight/60">
              {SLIDES.map((sl, n) => (
                <img
                  key={sl.img}
                  src={sl.img}
                  alt={n === i ? sl.title : ''}
                  className={`absolute inset-0 w-full h-full object-contain transition-all duration-1000 ${n === i ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.03]'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-govDark border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
          {SLIDES.map((sl, n) => (
            <button
              key={sl.axe}
              type="button"
              aria-current={n === i}
              onClick={() => setI(n)}
              className={`relative text-left p-4 lg:p-5 transition-colors flex flex-col gap-1 ${n === i ? 'bg-white/10' : 'hover:bg-white/5'}`}
            >
              <span className={`text-[10px] uppercase tracking-widest font-bold ${n === i ? 'text-rdcGold' : 'text-slate-300'}`}>{sl.axe}</span>
              <span className={`text-xs sm:text-sm font-bold leading-tight ${n === i ? 'text-white' : 'text-slate-200'}`}>{sl.tab}</span>
              <span className="absolute bottom-0 inset-x-0 h-1 bg-white/10" aria-hidden="true" />
              {n === i && (
                <span
                  key={`${i}-${playing}`}
                  aria-hidden="true"
                  className="absolute bottom-0 inset-x-0 h-1 bg-rdcGold origin-left"
                  style={{ animation: playing ? `progress ${DURATION}ms linear forwards` : 'none', transform: playing ? undefined : 'scaleX(1)' }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
