import { useReveal } from '../../hooks/useReveal';

export default function ProjectsGrid({ items }) {
  const rootRef = useReveal('.project-card', { stagger: 0.08, y: 24 });

  return (
    <div ref={rootRef} className="project-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {items.map((p) => (
        <div
          key={p.title}
          className="project-card group rounded-xl2 overflow-hidden border border-nuit/10 bg-white shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-out"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
          <div className="p-5">
            <h3 className="font-heading font-semibold text-sm text-nuit leading-snug">{p.title}</h3>
            {p.note && <p className="text-xs text-nuit/50 mt-2">{p.note}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
