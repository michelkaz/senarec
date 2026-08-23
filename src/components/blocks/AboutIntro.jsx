import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { ABOUT } from '../../data/content';

export default function AboutIntro() {
  const rootRef = useReveal('.about-anim', { stagger: 0.12 });

  return (
    <section ref={rootRef} className="py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-content mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="about-anim rounded-xl2 overflow-hidden shadow-xl shadow-profond/10 order-2 md:order-1">
          <img
            src="/images/about.png"
            alt="SENAREC — Renforcement des capacités"
            className="w-full h-auto object-cover"
            width={1097}
            height={976}
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="about-anim font-mono text-xs text-profond/70 tracking-widest uppercase mb-3">
            Qui est le SENAREC
          </p>
          <h2 className="about-anim font-heading font-bold text-3xl md:text-4xl text-nuit mb-6 text-balance">
            Une institution publique au service des capacités de l'État
          </h2>
          <p className="about-anim text-nuit/70 leading-relaxed mb-4">{ABOUT.role}</p>
          <p className="about-anim text-nuit/70 leading-relaxed mb-8">{ABOUT.origin}</p>
          <Link
            to="/a-propos/presentation"
            className="about-anim link-underline inline-flex items-center gap-2 text-profond font-heading font-semibold"
          >
            Présentation institutionnelle complète
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
