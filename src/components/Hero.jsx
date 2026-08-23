import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { ArrowRight, Pause, Play } from 'lucide-react';

const SLIDES = ['/images/hero-1.png', '/images/hero-2.jpeg', '/images/hero-3.jpg'];
const SLIDE_DURATION = 8000;

export default function Hero() {
  const rootRef = useRef(null);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-anim',
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !playing) return undefined;
    const id = setInterval(() => setActive((a) => (a + 1) % SLIDES.length), SLIDE_DURATION);
    return () => clearInterval(id);
  }, [playing]);

  return (
    <section id="top" ref={rootRef} className="relative h-dvh min-h-[640px] w-full overflow-hidden noise-overlay">
      <div className="absolute inset-0 z-0">
        {SLIDES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out"
            style={{ opacity: i === active ? 1 : 0, transitionDuration: '1800ms' }}
          />
        ))}
      </div>
      <div className="absolute inset-0 z-[5] bg-black/40" />
      <div className="absolute inset-0 z-[5] bg-gradient-to-t from-black via-nuit/80 to-profond/45" />
      <div
        className="absolute inset-0 z-[5]"
        style={{
          background:
            'linear-gradient(100deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 32%, rgba(0,0,0,0.3) 58%, transparent 78%)',
        }}
      />

      <div className="relative z-10 h-full max-w-content mx-auto px-6 md:px-10 flex flex-col justify-end pb-24 md:pb-32">
        <p className="hero-anim font-mono text-xs md:text-sm text-horizon tracking-widest uppercase mb-4">
          Bienvenue sur le site officiel du
        </p>
        <h1 className="hero-anim font-heading font-extrabold text-white text-4xl md:text-6xl lg:text-7xl leading-[1.05] max-w-3xl text-balance">
          Le guichet unique du{' '}
          <span className="font-serif italic font-medium text-horizon">renforcement des capacités.</span>
        </h1>
        <p className="hero-anim text-white/85 text-base md:text-lg max-w-xl mt-6 leading-relaxed">
          Le Secrétariat National pour le Renforcement des Capacités (SENAREC) coordonne le
          Programme National de Renforcement des Capacités (PRONAREC) et accompagne la
          modernisation de l'Administration Publique en République Démocratique du Congo.
        </p>

        <div className="hero-anim flex flex-wrap gap-4 mt-9">
          <Link
            to="/a-propos/presentation"
            className="btn-sheen group inline-flex items-center gap-2 rounded-xl bg-horizon text-profond font-heading font-semibold px-6 py-3.5 hover:scale-[1.02] transition-transform duration-200 ease-posed"
          >
            <span className="sheen" />
            <span className="group-hover:text-white transition-colors">Découvrir notre mission</span>
            <ArrowRight size={18} className="group-hover:text-white transition-colors" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/30 text-white font-heading font-semibold px-6 py-3.5 hover:border-horizon hover:-translate-y-px transition-all duration-200 ease-posed"
          >
            Nous contacter
          </Link>
        </div>
      </div>

      <div className="absolute z-10 bottom-6 md:bottom-8 right-6 md:right-10 flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          {SLIDES.map((s, i) => (
            <button
              key={s}
              type="button"
              aria-label={`Aller à l'image ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? 'w-6 bg-horizon' : 'w-1.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label={playing ? 'Mettre en pause le diaporama' : 'Reprendre le diaporama'}
          onClick={() => setPlaying((p) => !p)}
          className="w-8 h-8 rounded-full border border-white/30 text-white flex items-center justify-center hover:border-horizon transition-colors"
        >
          {playing ? <Pause size={13} /> : <Play size={13} />}
        </button>
      </div>
    </section>
  );
}
