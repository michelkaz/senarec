import { ACTIVITES } from '../../data/site';
import { Accent, Alternate, Block, Card, HeroAccent, PageHero } from '../../components/gov/ui';

export default function Activites() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Renforcement des capacités', to: '/renforcement-capacites' }, { label: 'Activités' }]}
        eyebrow="Renforcement des capacités"
        title={<><HeroAccent>Activités</HeroAccent> du SENAREC</>}
        lead="Ateliers, conférences, États généraux et séminaires organisés ou suivis par le SENAREC."
      />
      <Alternate>
        <Block eyebrow="Nos formats" title={<>Quatre types <Accent>d'activités</Accent></>}>
          <div className="grid sm:grid-cols-2 gap-5">
            {ACTIVITES.map((a, i) => (
              <Card key={a.label} accent={['border-l-rdcBlue', 'border-l-rdcGold', 'border-l-rdcRed', 'border-l-rdcBlue'][i]}>
                <h3 className="font-bold text-lg">{a.label}</h3>
                <p className="text-sm opacity-85 mt-2">{a.desc}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-redText">
                  <span className="dot-pulse w-2 h-2 rounded-full bg-rdcGold" /> Comptes rendus en cours de rédaction
                </span>
              </Card>
            ))}
          </div>
        </Block>
      </Alternate>
    </>
  );
}
