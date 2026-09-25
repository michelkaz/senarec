import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Mail } from 'lucide-react';

const WORDS = ['Former', 'pour', 'transformer'];

// Première section : accueil animé avec la photographie institutionnelle affichée en entier.
export default function Welcome() {
  return (
    <section aria-labelledby="bienvenue" className="relative overflow-hidden bg-govNight text-white">
      <img src="/images/projets/6.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover blur-3xl scale-125 opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-govNight via-govDark/90 to-govDark/60" />
      <div className="absolute inset-0 grid-move" aria-hidden="true" />
      <span className="orb absolute -top-24 -left-24 w-80 h-80 rounded-full bg-rdcBlue/30 blur-3xl" aria-hidden="true" />
      <span className="orb orb-b absolute -bottom-32 right-1/4 w-96 h-96 rounded-full bg-rdcRed/20 blur-3xl" aria-hidden="true" />
      <span className="orb absolute top-1/3 right-0 w-64 h-64 rounded-full bg-rdcGold/15 blur-3xl" aria-hidden="true" />

      <div className="relative max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <span className="rise inline-flex items-center gap-2 bg-rdcGold/15 border border-rdcGold/50 text-rdcGold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-5">
            <span className="w-2 h-2 rounded-full bg-rdcGold animate-ping" /> Site officiel
          </span>
          <p className="rise text-lg sm:text-xl font-semibold text-slate-200" style={{ animationDelay: '.1s' }}>Bienvenue sur le site du</p>
          <h1 id="bienvenue" className="rise text-5xl sm:text-6xl font-extrabold tracking-tight leading-none mt-1" style={{ animationDelay: '.2s' }}>
            <span className="shine-text">SENAREC</span>
          </h1>
          <p className="rise mt-4 text-sm sm:text-base font-bold uppercase tracking-widest text-rdcGold" style={{ animationDelay: '.3s' }}>
            {WORDS.map((w, i) => (
              <span key={w} className="inline-block mr-2 rise" style={{ animationDelay: `${0.5 + i * 0.25}s` }}>{w}</span>
            ))}
          </p>
          <p className="rise mt-6 text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl" style={{ animationDelay: '.45s' }}>
            Le Secrétariat National pour le Renforcement des Capacités coordonne le Programme National de Renforcement des
            Capacités (PRONAREC) et accompagne la modernisation de l'Administration Publique en République Démocratique du Congo.
          </p>
          <div className="rise mt-8 flex flex-wrap gap-3" style={{ animationDelay: '.6s' }}>
            <Link to="/le-senarec/presentation" className="group inline-flex items-center gap-2 bg-rdcGold hover:bg-yellow-300 text-slate-900 font-bold text-sm px-6 py-3.5 rounded-lg shadow-lg shadow-rdcGold/20 transition-all hover:-translate-y-0.5">
              Découvrir le SENAREC <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/renforcement-capacites" className="inline-flex items-center gap-2 bg-rdcRed hover:bg-red-500 text-white font-bold text-sm px-6 py-3.5 rounded-lg transition-all hover:-translate-y-0.5">
              Renforcement des capacités
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-white/40 hover:bg-white hover:text-govDark text-white font-bold text-sm px-6 py-3.5 rounded-lg transition-all">
              <Mail size={16} /> Nous contacter
            </Link>
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2 rise" style={{ animationDelay: '.25s' }}>
          <div className="float-y relative">
            <span className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-rdcBlue via-rdcGold to-rdcRed opacity-60 blur-xl" aria-hidden="true" />
            <div className="relative aspect-[3/2] rounded-xl overflow-hidden bg-govNight shadow-2xl border-b-4 border-rdcGold">
              <img src="/images/projets/6.jpg" alt="Intervention lors d'une cérémonie du SENAREC en présence de ses partenaires" fetchpriority="high" decoding="async" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>

      <a href="#axes" aria-label="Descendre vers la suite" className="hidden lg:flex absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border border-white/30 text-white items-center justify-center bounce-y hover:border-rdcGold hover:text-rdcGold">
        <ChevronDown size={20} />
      </a>
    </section>
  );
}
