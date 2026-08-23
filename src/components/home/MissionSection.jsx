import { useReveal } from '../../hooks/useReveal';
import MandateGrid from '../blocks/MandateGrid';
import DiagonalEdge from '../blocks/DiagonalEdge';

export default function MissionSection() {
  const rootRef = useReveal('.mission-anim', { stagger: 0.1 });

  return (
    <section className="relative py-20 md:py-28 px-6 md:px-10 bg-azur">
      <DiagonalEdge color="#F6F8FA" className="absolute -top-px left-0" />
      <div ref={rootRef} className="max-w-content mx-auto">
        <div className="max-w-2xl mb-14">
          <p className="mission-anim font-mono text-xs text-profond/70 tracking-widest uppercase mb-3">
            Mission &amp; domaines d'intervention
          </p>
          <h2 className="mission-anim font-heading font-bold text-3xl md:text-4xl text-nuit mb-4 text-balance">
            Le mandat du SENAREC
          </h2>
          <p className="mission-anim text-nuit/70 leading-relaxed">
            Trois axes structurent l'intervention du SENAREC, ancrés dans son cadre légal et
            institutionnel.
          </p>
        </div>
        <MandateGrid />
      </div>
    </section>
  );
}
