import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { LEGAL, PROJECTS } from '../data/content';
import FullPhoto from '../components/gov/FullPhoto';
import { Accent, Alternate, Block, Card, HeroAccent, InProgress, PageHero, Text } from '../components/gov/ui';

const crumbs = (label) => [{ label: 'Ressources', to: '/ressources' }, { label }];

function Simple({ label, title, lead, inProgress }) {
  return (
    <>
      <PageHero crumbs={crumbs(label)} eyebrow="Ressources" title={title} lead={lead} />
      <Alternate>
        <Block eyebrow={label} title={<>Bientôt <Accent>disponible</Accent></>}>
          <InProgress title={inProgress.title} text={inProgress.text} />
        </Block>
      </Alternate>
    </>
  );
}

export function Publications() {
  return (
    <Simple
      label="Publications"
      title={<><HeroAccent>Publications</HeroAccent></>}
      lead="Publications institutionnelles du SENAREC."
      inProgress={{ title: 'Publications en cours de rédaction', text: 'Les publications seront mises en ligne avec leur notice et leur fichier dès validation.' }}
    />
  );
}

export function Rapports() {
  return (
    <Simple
      label="Rapports & études"
      title={<>Rapports &amp; <HeroAccent>études</HeroAccent></>}
      lead="Rapports d'activités et d'évaluation du SENAREC."
      inProgress={{ title: 'Rapports en cours de rédaction', text: 'Les rapports et études seront publiés avec leur période couverte et leur version.' }}
    />
  );
}

export function Guides() {
  return (
    <>
      <PageHero crumbs={crumbs('Guides & documents')} eyebrow="Ressources" title={<>Guides &amp; <HeroAccent>documents</HeroAccent></>} lead="Textes légaux, arrêtés et décrets fondateurs du SENAREC et du cadre CEARC, et notes conceptuelles encadrant ses programmes." />
      <Alternate>
        <Block eyebrow="Textes fondateurs" title={<>Le cadre <Accent>légal</Accent></>}>
          <ul className="grid md:grid-cols-3 gap-5">
            {Object.values(LEGAL).map((l, i) => (
              <Card key={l.label} as="li" accent={['border-l-rdcBlue', 'border-l-rdcGold', 'border-l-rdcRed'][i]}>
                <p className="font-bold text-sm">{l.label}</p>
                <p className="text-xs opacity-75 mt-1">{l.date}</p>
                {l.note && <p className="text-xs opacity-75 mt-1">{l.note}</p>}
              </Card>
            ))}
          </ul>
          <Text className="mt-6 text-sm">Les versions téléchargeables de ces textes seront ajoutées après validation.</Text>
        </Block>
        <Block eyebrow="Notes conceptuelles" title={<>Notes et <Accent>guides</Accent></>}>
          <InProgress title="Notes conceptuelles en cours de rédaction" text="Les notes encadrant les programmes et projets, et les guides pratiques, seront publiés ici." compact />
        </Block>
      </Alternate>
    </>
  );
}

// Toutes les photos proviennent de l'ancien site ; seules celles des projets ont un titre connu.
const PHOTOS = PROJECTS.map((p) => ({ src: p.img, title: p.title }));

function Lightbox({ item, onClose }) {
  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', esc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', esc);
      document.body.style.overflow = '';
    };
  }, [onClose]);
  return (
    <div role="dialog" aria-modal="true" aria-label={item.title} className="fixed inset-0 z-[70] bg-black/90 flex flex-col items-center justify-center p-4" onClick={onClose}>
      <button type="button" aria-label="Fermer" autoFocus onClick={onClose} className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"><X size={22} /></button>
      <img src={item.src} alt={item.title} className="max-h-[80vh] max-w-full object-contain rounded" onClick={(e) => e.stopPropagation()} />
      <p className="text-white mt-4 text-sm font-semibold text-center">{item.title}</p>
    </div>
  );
}

export function Mediatheque() {
  const [open, setOpen] = useState(null);
  return (
    <>
      <PageHero crumbs={crumbs('Médiathèque')} eyebrow="Ressources" title={<HeroAccent>Médiathèque</HeroAccent>} lead="Photographies des activités du SENAREC." />
      <Alternate>
        <Block eyebrow="Photos" title={<>En <Accent>images</Accent></>}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PHOTOS.map((p) => (
              <Card key={p.src} as="button" type="button" onClick={() => setOpen(p)} className="group !p-0 overflow-hidden text-left" aria-label={`Agrandir : ${p.title}`}>
                <FullPhoto src={p.src} alt="" className="aspect-[3/2]" imgClassName="group-hover:scale-[1.03] transition-transform duration-700" />
                <span className="block p-4 text-xs font-bold leading-snug">{p.title}</span>
              </Card>
            ))}
          </div>
        </Block>
        <Block eyebrow="Vidéos & documents" title={<>Bientôt <Accent>disponibles</Accent></>}>
          <InProgress title="Vidéos et albums en cours de rédaction" text="Les vidéos sous-titrées et les albums légendés seront ajoutés après validation." compact />
        </Block>
      </Alternate>
      {open && <Lightbox item={open} onClose={() => setOpen(null)} />}
    </>
  );
}
