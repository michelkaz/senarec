import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { section } from '../data/site';
import { DOMAINES, RESSOURCES_COLLECTIONS } from '../data/cahier';
import { Accent, Alternate, Block, Card, PageHero } from '../components/gov/ui';
import Process from '../components/gov/Process';

const PHOTOS = {
  '/le-senarec': ['/images/hero-3.jpg', 'Siège du SENAREC à Kinshasa'],
  '/renforcement-capacites': ['/images/hero-2.jpeg', 'Cohorte de cadres formés avec leurs certificats'],
  '/ressources': ['/images/projets/5.jpg', 'Séminaire gouvernemental national'],
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

        {to === '/renforcement-capacites' && (
          <Block eyebrow="Méthode" title={<>Le processus <Accent>d'intervention</Accent></>} lead="Le SENAREC accompagne les institutions dans tout le cycle de développement des capacités.">
            <Process />
          </Block>
        )}
        {to === '/renforcement-capacites' && (
          <Block eyebrow="Domaines d'intervention" title={<>Quatre <Accent>axes</Accent></>}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {DOMAINES.map((d) => (
                <Card key={d.axe}>
                  <h3 className="font-bold text-sm">{d.axe}</h3>
                  <p className="text-xs opacity-80 mt-2 leading-relaxed">{d.items}</p>
                </Card>
              ))}
            </div>
          </Block>
        )}

        {to === '/ressources' && (
          <Block eyebrow="Modèle documentaire" title={<>Six <Accent>collections</Accent></>} lead="Chaque document publié portera un titre, un auteur institutionnel, une date, une version, un résumé, des mots-clés, un format et un niveau de diffusion.">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {RESSOURCES_COLLECTIONS.map((c) => (
                <Card key={c.nom}>
                  <h3 className="font-bold text-sm">{c.nom}</h3>
                  <p className="text-xs opacity-80 mt-2 leading-relaxed">{c.desc}</p>
                </Card>
              ))}
            </div>
          </Block>
        )}
      </Alternate>
    </>
  );
}
