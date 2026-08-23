import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { PROJECTS } from '../../data/content';
import ProjectsGrid from '../blocks/ProjectsGrid';

export default function ProjectsSection() {
  const rootRef = useReveal('.projects-anim', { stagger: 0.1 });
  const featured = PROJECTS.slice(0, 4);

  return (
    <section className="py-20 md:py-28 px-6 md:px-10">
      <div ref={rootRef} className="max-w-content mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="projects-anim font-mono text-xs text-profond/70 tracking-widest uppercase mb-3">
              Programmes &amp; initiatives
            </p>
            <h2 className="projects-anim font-heading font-bold text-3xl md:text-4xl text-nuit mb-4 text-balance">
              Les instruments du renforcement des capacités
            </h2>
            <p className="projects-anim text-nuit/70 leading-relaxed">
              Le SENAREC agit à travers des axes prioritaires pour renforcer les capacités,
              accélérer la transformation numérique et améliorer la gouvernance publique.
            </p>
          </div>
          <Link
            to="/projets"
            className="projects-anim link-underline shrink-0 inline-flex items-center gap-2 text-profond font-heading font-semibold"
          >
            Voir tous les projets
            <ArrowRight size={16} />
          </Link>
        </div>
        <ProjectsGrid items={featured} />
      </div>
    </section>
  );
}
