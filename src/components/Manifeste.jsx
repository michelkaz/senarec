import { useReveal } from '../hooks/useReveal';
import { ABOUT } from '../data/content';

export default function Manifeste() {
  const rootRef = useReveal('.manifeste-line', { stagger: 0.12, y: 24, duration: 0.7 });

  return (
    <section ref={rootRef} className="relative bg-nuit py-24 md:py-36 px-6 md:px-10 noise-overlay overflow-hidden">
      <div className="max-w-content mx-auto relative z-10 text-center">
        <p className="manifeste-line font-mono text-xs text-horizon/70 tracking-widest uppercase mb-8">
          La doctrine
        </p>
        <p className="manifeste-line text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-4">
          Beaucoup d'administrations traitent le renforcement des capacités comme une formation
          ponctuelle, isolée, sans suite.
        </p>
        <h2 className="manifeste-line font-serif italic font-medium text-3xl md:text-5xl lg:text-6xl text-white leading-tight max-w-4xl mx-auto text-balance">
          Le SENAREC en fait un{' '}
          <span className="text-horizon">guichet unique</span>, permanent, piloté par les résultats.
        </h2>
        <p className="manifeste-line font-mono text-sm text-horizon/80 tracking-widest uppercase mt-10">
          « {ABOUT.devise} »
        </p>
      </div>
    </section>
  );
}
