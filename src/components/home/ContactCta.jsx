import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { CONTACT } from '../../data/content';

export default function ContactCta() {
  const rootRef = useReveal('.cta-anim', { stagger: 0.1 });

  return (
    <section ref={rootRef} className="py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-content mx-auto rounded-xl3 bg-profond noise-overlay px-8 py-14 md:px-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div className="cta-anim max-w-xl">
          <p className="font-mono text-xs text-horizon tracking-widest uppercase mb-3">
            Le pont administratif
          </p>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-white mb-4 text-balance">
            Une question, un partenariat, une demande d'information ?
          </h2>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-white/70 text-sm">
            <span className="flex items-center gap-2">
              <Phone size={15} className="text-horizon" /> {CONTACT.phone}
            </span>
            <span className="flex items-center gap-2">
              <Mail size={15} className="text-horizon" /> {CONTACT.email}
            </span>
          </div>
        </div>
        <Link
          to="/contact"
          className="cta-anim btn-sheen group inline-flex items-center gap-2 rounded-xl bg-horizon text-profond font-heading font-semibold px-6 py-3.5 hover:scale-[1.02] transition-transform duration-200 ease-posed shrink-0"
        >
          <span className="sheen" />
          <span className="group-hover:text-white transition-colors">Nous contacter</span>
          <ArrowRight size={18} className="group-hover:text-white transition-colors" />
        </Link>
      </div>
    </section>
  );
}
