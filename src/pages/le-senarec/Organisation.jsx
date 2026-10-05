import { SUPPORT_POOLS, TEAM } from '../../data/content';
import { ORGANISATION_STRUCTURE } from '../../data/cahier';
import { Accent, Alternate, Block, Card, DataTable, HeroAccent, InProgress, PageHero } from '../../components/gov/ui';

const initials = (n) => n.split(' ').map((w) => w[0]).slice(0, 2).join('');

export default function Organisation() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Le SENAREC', to: '/le-senarec' }, { label: 'Organisation' }]}
        eyebrow="Le SENAREC"
        title={<>Organi<HeroAccent>sation</HeroAccent></>}
        lead="Structure organisationnelle du Secrétariat National pour le Renforcement des Capacités."
      />
      <Alternate>
        <Block eyebrow="Structure" title={<>Niveaux et <Accent>responsabilités</Accent></>}>
          <DataTable
            keyField="entite"
            columns={[
              { key: 'niveau', label: 'Niveau', render: (r) => <span className="font-bold">{r.niveau}</span> },
              { key: 'entite', label: 'Entité' },
              { key: 'resp', label: 'Responsabilités' },
            ]}
            rows={ORGANISATION_STRUCTURE}
          />
        </Block>
        <Block eyebrow="Direction" title={<>L'équipe de <Accent>direction</Accent></>}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEAM.map((m, i) => (
              <Card key={m.name} accent={['border-l-rdcBlue', 'border-l-rdcGold', 'border-l-rdcRed'][i % 3]} className="flex items-center gap-4">
                <span className="w-14 h-14 shrink-0 rounded-xl bg-govDark text-rdcGold font-extrabold flex items-center justify-center">{initials(m.name)}</span>
                <span>
                  <span className="block font-bold text-sm">{m.name}</span>
                  <span className="block text-xs opacity-70 mt-0.5">{m.role}</span>
                </span>
              </Card>
            ))}
          </div>
        </Block>
        <Block eyebrow="Appui" title={<>Structures de <Accent>support</Accent></>}>
          <ul className="flex flex-wrap gap-3 mb-8">
            {SUPPORT_POOLS.map((p) => (
              <Card key={p} as="li" className="!py-3 !px-5 font-bold text-sm">{p}</Card>
            ))}
          </ul>
          <InProgress title="Organigramme en cours de rédaction" text="L'organigramme complet et le détail des cellules spécialisées seront publiés après validation." compact />
        </Block>
      </Alternate>
    </>
  );
}
