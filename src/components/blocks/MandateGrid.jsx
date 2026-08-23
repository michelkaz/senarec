import { useReveal } from '../../hooks/useReveal';
import { MANDATE } from '../../data/content';

export default function MandateGrid() {
  const rootRef = useReveal('.mandate-card', { stagger: 0.15 });

  return (
    <div ref={rootRef} className="mandate-grid grid md:grid-cols-3 gap-6">
      {MANDATE.map((m) => (
        <div
          key={m.title}
          className="mandate-card bg-white border border-nuit/10 rounded-xl2 p-7 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out"
        >
          <h3 className="font-heading font-semibold text-lg text-profond mb-3">{m.title}</h3>
          <p className="text-sm text-nuit/70 leading-relaxed mb-4">{m.desc}</p>
          <p className="font-mono text-[11px] text-signal/70 tracking-wide">{m.ref}</p>
        </div>
      ))}
    </div>
  );
}
