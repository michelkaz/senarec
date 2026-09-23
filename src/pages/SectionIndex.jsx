import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { section } from '../data/site';
import { Alternate, Block, Card, PageHero } from '../components/gov/ui';

const PHOTOS = {
  '/le-senarec': ['/images/hero-3.jpg', 'Siège du SENAREC à Kinshasa'],
  '/renforcement-capacites': ['/images/hero-2.jpeg', 'Cohorte de cadres formés avec leurs certificats'],
  '/ressources': ['/images/projets/5.png', 'Séminaire gouvernemental national'],
};

// Page d'entrée d'une rubrique : présente ses sous-pages, pour ne pas dépendre du seul menu.
export default function SectionIndex({ to, lead, title }) {
  const s = section(to);
  const [photo, alt] = PHOTOS[to] || [];
  return (
    <>
      <PageHero crumbs={[{ label: s.label }]} eyebrow="Rubrique" title={title} lead={lead || s.desc} photo={photo} photoAlt={alt} />
      <Alternate>
        <Block eyebrow={s.label} title="Explorer la rubrique">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {s.children.map((c, i) => (
              <Card key={c.to} as={Link} to={c.to} accent={['border-l-rdcBlue', 'border-l-rdcGold', 'border-l-rdcRed'][i % 3]} className="group flex flex-col">
                <h3 className="font-bold text-lg">{c.label}</h3>
                <p className="text-sm opacity-80 mt-2 flex-1">{c.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-redText group-hover:gap-3 transition-all">
                  Consulter <ArrowRight size={16} />
                </span>
              </Card>
            ))}
          </div>
        </Block>
      </Alternate>
    </>
  );
}
