import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Users, MapPin, CalendarClock, Layers } from 'lucide-react';
import { STATS } from '../data/content';

const ICONS = { agents: Users, provinces: MapPin, experience: CalendarClock, programmes: Layers };

export default function Stats() {
  const rootRef = useRef(null);
  const gridRef = useRef(null);
  const played = useRef(false);

  useEffect(() => {
    const cards = Array.from(rootRef.current.querySelectorAll('.stat-card'));
    gsap.set(cards, { opacity: 0, y: 20 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || played.current) return;
          played.current = true;

          gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
          });

          cards.forEach((card) => {
            const numberEl = card.querySelector('.stat-number');
            const target = Number(numberEl.dataset.value);
            const obj = { val: 0 };
            gsap.to(obj, {
              val: target,
              duration: 1.6,
              ease: 'power2.out',
              onUpdate: () => {
                numberEl.textContent = Math.round(obj.val).toLocaleString('fr-FR');
              },
            });
          });

          observer.disconnect();
        });
      },
      { threshold: 0.2 }
    );

    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={rootRef} className="bg-profond py-16 md:py-20 px-6 md:px-10 noise-overlay">
      <div className="max-w-content mx-auto">
        <div ref={gridRef} className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {STATS.map(({ key, value, suffix, label }) => {
            const Icon = ICONS[key];
            return (
              <div key={key} className="stat-card text-center md:text-left">
                <Icon className="text-horizon mb-3 mx-auto md:mx-0" size={26} aria-hidden="true" />
                <div className="font-heading font-extrabold text-3xl md:text-4xl text-white">
                  <span className="stat-number" data-value={value}>
                    0
                  </span>
                  <span className="text-horizon">{suffix}</span>
                </div>
                <p className="text-white/70 text-sm mt-1">{label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
