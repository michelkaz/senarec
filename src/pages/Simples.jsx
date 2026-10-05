import { CalendarDays, MapPin } from 'lucide-react';
import { ACTUALITES_PRETES, EVENEMENTS_ARCHIVES, PARTENAIRES } from '../data/cahier';
import { Accent, Alternate, Block, Card, HeroAccent, InProgress, PageHero, StatusBadge, Text } from '../components/gov/ui';

export function Actualites() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Actualités' }]} eyebrow="Actualités" title={<HeroAccent>Actualités</HeroAccent>} lead="Communiqués, comptes rendus et informations institutionnelles du SENAREC." />
      <Alternate>
        <Block eyebrow="Publications" title={<>Dernières <Accent>publications</Accent></>}>
          <div className="grid lg:grid-cols-2 gap-6">
            {ACTUALITES_PRETES.map((a) => (
              <Card key={a.slug} as="article" className="flex flex-col">
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-redText [.bg-govDark_&]:text-rdcGold">
                  <span>{a.categorie}</span><span aria-hidden="true">•</span><span>{a.date}</span>{a.lieu && <><span aria-hidden="true">•</span><span>{a.lieu}</span></>}
                </div>
                <h3 className="font-bold text-lg mt-2">{a.titre}</h3>
                <p className="text-sm font-semibold opacity-90 mt-2">{a.chapo}</p>
                <Text className="mt-3 text-sm flex-1">{a.corps}</Text>
                {a.complement && <p className="text-xs italic opacity-70 mt-3 border-t border-current/10 pt-3">{a.complement}</p>}
              </Card>
            ))}
          </div>
        </Block>
        <Block eyebrow="Communiqués officiels" title={<>Communications <Accent>officielles</Accent></>}>
          <Text className="mb-6">Communications officielles du Secrétariat National pour le Renforcement des Capacités.</Text>
          <InProgress title="Communiqués en cours de rédaction" text="Les communiqués signés ou officiellement approuvés seront publiés ici." compact />
        </Block>
      </Alternate>
    </>
  );
}

export function Evenements() {
  const archive = EVENEMENTS_ARCHIVES[0];
  return (
    <>
      <PageHero crumbs={[{ label: 'Événements' }]} eyebrow="Événements" title={<>Agenda des <HeroAccent>événements</HeroAccent></>} lead="Les prochains rendez-vous du SENAREC : dates, lieux et modalités de participation." />
      <Alternate>
        <Block eyebrow="À venir" title={<>Prochains <Accent>rendez-vous</Accent></>}>
          <InProgress title="Agenda en cours de rédaction" text="Aucun événement n'est annoncé pour le moment. Les rendez-vous confirmés seront listés ici avec leur statut, leur date, leur lieu et leurs modalités de participation." />
        </Block>
        <Block eyebrow="Archives" title={<>Événement <Accent>passé</Accent></>}>
          <Card className="max-w-xl">
            <StatusBadge status={archive.statut} />
            <h3 className="font-bold text-lg mt-3">{archive.titre}</h3>
            <div className="flex items-center gap-4 text-xs opacity-75 mt-2">
              <span className="flex items-center gap-1.5"><CalendarDays size={14} /> {archive.dates}</span>
              <span className="flex items-center gap-1.5"><MapPin size={14} /> {archive.lieu}</span>
            </div>
            <Text className="mt-3 text-sm">{archive.desc}</Text>
          </Card>
        </Block>
      </Alternate>
    </>
  );
}

export function Partenaires() {
  return (
    <>
      <PageHero crumbs={[{ label: 'Partenaires' }]} eyebrow="Partenaires" title={<>Nos <HeroAccent>partenaires</HeroAccent></>} lead="Les institutions et organisations dont la collaboration avec le SENAREC est documentée." />
      <Alternate>
        <Block eyebrow="Catégories" title={<>Cinq catégories de <Accent>partenaires</Accent></>}>
          <div className="grid sm:grid-cols-2 gap-5">
            {PARTENAIRES.map((p, i) => (
              <Card key={p.categorie} accent={['border-l-rdcBlue', 'border-l-rdcGold', 'border-l-rdcRed', 'border-l-rdcBlue', 'border-l-rdcGold'][i]}>
                <span className="text-[11px] font-bold uppercase tracking-widest text-redText [.bg-govDark_&]:text-rdcGold">{p.categorie}</span>
                <h3 className="font-bold text-base mt-1">{p.entites}</h3>
                <p className="text-xs opacity-75 mt-2">{p.traitement}</p>
              </Card>
            ))}
          </div>
          <div className="mt-6">
            <img src="/images/minplan.png" alt="Ministère du Plan" width="370" height="148" loading="lazy" className="h-16 w-auto rounded bg-white p-2 border border-sableDeep" />
          </div>
        </Block>
      </Alternate>
    </>
  );
}
