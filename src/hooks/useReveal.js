import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function useReveal(selector, opts = {}) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const targets = Array.from(root.querySelectorAll(selector));
    if (!targets.length) return undefined;

    gsap.set(targets, { opacity: 0, y: opts.y ?? 20 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = targets.indexOf(entry.target);
          gsap.to(entry.target, {
            opacity: 1,
            y: 0,
            duration: opts.duration ?? 0.6,
            delay: index * (opts.stagger ?? 0.1),
            ease: opts.ease ?? 'power3.out',
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: opts.threshold ?? 0.15 }
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [selector]);

  return rootRef;
}
