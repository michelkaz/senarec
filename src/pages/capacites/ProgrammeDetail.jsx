import { Navigate, useParams } from 'react-router-dom';
import { PROGRAMMES, BNCE_INFO } from '../../data/cahier';
import { Accent, Alternate, Block, Card, PageHero, StatusBadge, Text, TextLink } from '../../components/gov/ui';

export default function ProgrammeDetail() {
  const { slug } = useParams();
  const p = PROGRAMMES.find((x) => x.slug === slug);
  if (!p) return <Navigate to="/renforcement-capacites/programmes" replace />;

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Renforcement des capacités', to: '/renforcement-capacites' }, { label: 'Programmes & projets', to: '/renforcement-capacites/programmes' }, { label: p.nom }]}
        eyebrow="Programme"
        title={p.nom}
        lead={p.titre}
      />
      <Alternate>
        <Block>
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <StatusBadge status={p.statut} />
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-redText mb-2">Finalité</p>
                <Text className="text-lg">{p.finalite}</Text>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-redText mb-2">Éléments disponibles</p>
                <Text>{p.elements}</Text>
              </div>
            </div>
            <Card accent="border-l-rdcGold">
              <p className="text-[11px] font-bold uppercase tracking-widest text-redText mb-2">Bénéficiaires</p>
              <p className="text-sm leading-relaxed">{p.beneficiaires}</p>
            </Card>
          </div>
        </Block>

        {p.slug === 'bnce' && (
          <Block eyebrow="BNCE" title={<>Fonctions de la <Accent>plateforme</Accent></>}>
            <ul className="grid sm:grid-cols-2 gap-4">
              {BNCE_INFO.fonctions.map((f) => (
                <Card key={f} as="li" className="font-semibold">{f}</Card>
              ))}
            </ul>
          </Block>
        )}

        <Block eyebrow="Contenus associés" title="Le reste du portefeuille">
          <TextLink to="/renforcement-capacites/programmes">Retour au portefeuille de programmes</TextLink>
        </Block>
      </Alternate>
    </>
  );
}
