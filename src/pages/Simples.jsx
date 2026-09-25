import { ACTIVITES, COMMUNICATIONS } from '../data/site';
import { Accent, Alternate, Block, Card, HeroAccent, InProgress, PageHero, Text } from '../components/gov/ui';

export function Actualites() {
  const cats = [...COMMUNICATIONS, ...ACTIVITES];
  return (
    <>
      <PageHero crumbs={[{ label: 'Actualités' }]} eyebrow="Actualités" title={<HeroAccent>Actualités</HeroAccent>} lead="Communiqués, comptes rendus et informations institutionnelles du SENAREC." />
      <Alternate>
        <Block eyebrow="Publications" title={<>Dernières <Accent>publications</Accent></>}>
          <InProgress title="Actualités en cours de rédaction" text="Les communiqués et comptes rendus seront publiés ici dès leur validation officielle." />
        </Block>
        <Block eyebrow="Rubriques" title={<>Nos <Accent>rubriques</Accent></>}>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cats.map((c, i) => (
              <Card key={c.label} as="li" accent={['border-l-rdcBlue', 'border-l-rdcGold', 'border-l-rdcRed'][i % 3]}>
                <h3 className="font-bold">{c.label}</h3>
                <p className="text-sm opacity-85 mt-2">{c.desc}</p>
              </Card>
            ))}
          </ul>
        </Block>
      </Alternate>
    </>
  );
}

export function Evenements() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Événements' }]} eyebrow="Événements" title={<>Agenda des <HeroAccent>événements</HeroAccent></>} lead="Les prochains rendez-vous du SENAREC : dates, lieux et modalités de participation." />
      <Alternate>
        <Block eyebrow="À venir" title={<>Prochains <Accent>rendez-vous</Accent></>}>
          <InProgress title="Agenda en cours de rédaction" text="Aucun événement n'est annoncé pour le moment. Les rendez-vous à venir, en cours et passés seront listés ici." />
        </Block>
      </Alternate>
    </>
  );
}

const PARTNER_GROUPS = ['Partenaires institutionnels', 'Partenaires techniques et financiers', 'Partenaires de mise en œuvre', 'Structures partenaires'];

export function Partenaires() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Partenaires' }]} eyebrow="Partenaires" title={<>Nos <HeroAccent>partenaires</HeroAccent></>} lead="Les institutions et organisations avec lesquelles le SENAREC collabore." />
      <Alternate>
        <Block eyebrow="Tutelle" title={<>Sous la coordination du <Accent>Ministère du Plan</Accent></>}>
          <Text>Le SENAREC est un service public créé sous la coordination du Ministère du Plan de la République Démocratique du Congo.</Text>
          <img src="/images/minplan.png" alt="Ministère du Plan" width="370" height="148" loading="lazy" className="mt-6 h-20 w-auto rounded bg-white p-2 border border-sableDeep" />
        </Block>
        <Block eyebrow="Collaborations" title={<>Quatre catégories de <Accent>partenaires</Accent></>}>
          <ul className="grid sm:grid-cols-2 gap-5 mb-8">
            {PARTNER_GROUPS.map((g, i) => (
              <Card key={g} as="li" accent={['border-l-rdcBlue', 'border-l-rdcGold', 'border-l-rdcRed', 'border-l-rdcBlue'][i]}>
                <h3 className="font-bold">{g}</h3>
                <span className="mt-3 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-rdcGold [.bg-white_&]:text-redText">
                  <span className="dot-pulse w-2 h-2 rounded-full bg-rdcGold" /> En cours de rédaction
                </span>
              </Card>
            ))}
          </ul>
          <InProgress title="Liste des partenaires en cours de rédaction" text="Logos, nature de la collaboration et programmes associés seront publiés après validation." compact />
        </Block>
      </Alternate>
    </>
  );
}
