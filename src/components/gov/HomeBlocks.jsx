import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, Database } from 'lucide-react';
import { useReveal } from '../../hooks/useReveal';
import { ENGAGEMENTS, CADRE, DOMAINES, PROGRAMMES, BNCE_INFO } from '../../data/cahier';
import { EVENEMENTS_ARCHIVES } from '../../data/cahier';
import NewsletterForm from './NewsletterForm';

const wrap = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';

function Head({ eyebrow, title, dark }) {
  return (
    <div className="mb-10 max-w-3xl">
      <span className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 ${dark ? 'text-rdcGold' : 'text-redText'}`}>
        <span className={`w-2 h-2 rounded-full ${dark ? 'bg-rdcGold' : 'bg-rdcRed'}`} /> {eyebrow}
      </span>
      <h2 className={`text-2xl sm:text-4xl font-extrabold mt-1 ${dark ? 'text-white' : 'text-govDark'}`}>{title}</h2>
    </div>
  );
}

/** Quatre engagements : Planifier, Coordonner, Garantir la qualité, Transformer. */
export function Engagements() {
  const rootRef = useReveal('.reveal-card', { stagger: 0.1, y: 24 });
  return (
    <section ref={rootRef} className="bg-sable py-20">
      <div className={wrap}>
        <Head eyebrow="Le SENAREC en bref" title={<>Quatre <span className="text-redText">engagements</span></>} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ENGAGEMENTS.map((e, i) => (
            <div key={e.title} className="reveal-card bg-white border-l-4 rounded-lg p-6 shadow-sm" style={{ borderLeftColor: ['#0072CE', '#F7D618', '#E53935', '#002b5c'][i] }}>
              <span className="text-3xl font-extrabold text-rdcGold">0{i + 1}</span>
              <h3 className="font-bold text-lg mt-2 text-govDark">{e.title}</h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">{e.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Cadre stratégique : vision, valeurs, publics cibles. */
export function CadreStrategique() {
  const rootRef = useReveal('.reveal-card', { stagger: 0.08, y: 24 });
  return (
    <section ref={rootRef} className="bg-govDark py-20 text-white">
      <div className={wrap}>
        <Head dark eyebrow="Cadre stratégique" title={<>Vision &amp; <span className="text-rdcGold">valeurs</span></>} />
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 reveal-card">
            <p className="text-[11px] font-bold uppercase tracking-widest text-rdcGold mb-2">Vision</p>
            <p className="text-lg sm:text-xl leading-relaxed">{CADRE.vision}</p>
            <p className="text-[11px] font-bold uppercase tracking-widest text-rdcGold mb-3 mt-8">Publics accompagnés</p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-slate-200">
              {CADRE.publics.map((p) => (
                <li key={p} className="flex items-start gap-2"><span className="w-1.5 h-1.5 mt-2 rounded-full bg-rdcGold shrink-0" />{p}</li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 reveal-card">
            <p className="text-[11px] font-bold uppercase tracking-widest text-rdcGold mb-3">Nos valeurs</p>
            <ul className="space-y-2.5">
              {CADRE.valeurs.map((v) => (
                <li key={v} className="bg-white/5 border border-white/15 rounded-lg px-4 py-3 font-semibold">{v}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Quatre domaines d'intervention. */
export function DomainesIntervention() {
  const rootRef = useReveal('.reveal-card', { stagger: 0.1, y: 24 });
  return (
    <section ref={rootRef} className="bg-sable py-20">
      <div className={wrap}>
        <Head eyebrow="Domaines d'intervention" title={<>Quatre <span className="text-redText">axes</span> d'action</>} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DOMAINES.map((d, i) => (
            <div key={d.axe} className="reveal-card bg-white rounded-lg border border-sableDeep p-6 shadow-sm">
              <span className="text-3xl font-extrabold text-rdcGold">0{i + 1}</span>
              <h3 className="font-bold text-base mt-2 text-govDark">{d.axe}</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">{d.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Trois programmes prioritaires (texte structuré, issus du portefeuille officiel). */
export function ProgrammesPrioritaires() {
  const rootRef = useReveal('.reveal-card', { stagger: 0.1, y: 24 });
  const picks = PROGRAMMES.filter((p) => ['pronarec-ii', 'bnce', 'senarec-atp'].includes(p.slug));
  return (
    <section ref={rootRef} className="bg-govDark py-20 text-white">
      <div className={wrap}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <Head dark eyebrow="Programmes prioritaires" title={<>Ce que fait le <span className="text-rdcGold">SENAREC</span></>} />
          <Link to="/renforcement-capacites/programmes" className="inline-flex items-center gap-1 text-sm font-bold text-rdcGold hover:text-white mb-10 md:mb-0 shrink-0">
            Tous les programmes <ArrowRight size={18} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6 -mt-4">
          {picks.map((p) => (
            <Link key={p.slug} to={`/renforcement-capacites/programmes/${p.slug}`} className="reveal-card group bg-white/5 border border-white/15 hover:border-rdcGold/60 rounded-lg p-6 transition-all flex flex-col">
              <span className={`self-start text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${p.statut === 'À confirmer' ? 'border-amber-400/60 text-amber-300' : 'border-emerald-400/60 text-emerald-300'}`}>{p.statut}</span>
              <h3 className="font-bold text-lg mt-3 group-hover:text-rdcGold transition-colors">{p.nom}</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed flex-1">{p.titre}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-rdcGold">Consulter la fiche <ArrowRight size={16} /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Encart BNCE + agenda + newsletter, en bas de page d'accueil. */
export function BnceAgendaNewsletter() {
  const rootRef = useReveal('.reveal-card', { stagger: 0.1, y: 24 });
  const archive = EVENEMENTS_ARCHIVES[0];
  return (
    <section ref={rootRef} className="bg-govDark py-20 text-white">
      <div className={`${wrap} grid lg:grid-cols-3 gap-6`}>
        <div className="reveal-card bg-white/5 border border-white/15 rounded-xl p-7 flex flex-col">
          <Database size={24} className="text-rdcGold" />
          <h3 className="font-bold text-lg mt-3">Banque Nationale des Compétences et de l’Expertise</h3>
          <p className="text-sm text-slate-200 mt-2 leading-relaxed flex-1">{BNCE_INFO.resume}</p>
          <Link to="/renforcement-capacites/programmes/bnce" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-rdcGold hover:text-white">Découvrir la BNCE <ArrowRight size={16} /></Link>
        </div>
        <div className="reveal-card bg-white/5 border border-white/15 rounded-xl p-7 flex flex-col">
          <CalendarDays size={24} className="text-rdcGold" />
          <h3 className="font-bold text-lg mt-3">Agenda</h3>
          <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mt-3">Dernier événement archivé</p>
          <p className="text-sm font-semibold mt-1">{archive.titre}</p>
          <p className="text-xs text-slate-300 mt-1">{archive.dates} — {archive.lieu}</p>
          <p className="text-sm text-slate-300 mt-3 leading-relaxed flex-1">Aucun événement à venir n'est annoncé pour le moment.</p>
          <Link to="/evenements" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-rdcGold hover:text-white">Voir l'agenda <ArrowRight size={16} /></Link>
        </div>
        <div className="reveal-card bg-white/5 border border-white/15 rounded-xl p-7">
          <h3 className="font-bold text-lg">Rester informé</h3>
          <p className="text-sm text-slate-300 mt-2 mb-4 leading-relaxed">Recevez les actualités du SENAREC par courriel.</p>
          <NewsletterForm dark />
        </div>
      </div>
    </section>
  );
}
