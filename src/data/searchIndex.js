// Index de recherche statique : interroge les pages institutionnelles, les
// programmes, les domaines de formation, les activités, les structures, les
// actualités et les partenaires. Construit à partir des mêmes données que les
// pages (aucune donnée supplémentaire).
import { NAV_TREE } from './site';
import { PROGRAMMES, DOMAINES_FORMATION, ACTIVITES_TYPES, STRUCTURES, ACTUALITES_PRETES, PARTENAIRES } from './cahier';

const entries = [];

NAV_TREE.forEach((n) => {
  if (n.to !== '/') entries.push({ type: 'Page', title: n.label, desc: n.desc, to: n.to });
  n.children?.forEach((c) => entries.push({ type: 'Page', title: c.label, desc: c.desc, to: c.to }));
});

PROGRAMMES.forEach((p) => entries.push({ type: 'Programme', title: p.nom, desc: p.titre, to: `/renforcement-capacites/programmes/${p.slug}` }));
DOMAINES_FORMATION.forEach((d) => entries.push({ type: 'Formation', title: d.domaine, desc: d.objectif, to: '/renforcement-capacites/formations' }));
ACTIVITES_TYPES.forEach((a) => entries.push({ type: 'Activité', title: a.type, desc: a.contenu, to: '/renforcement-capacites/activites' }));
STRUCTURES.forEach((s) => entries.push({ type: 'Structure', title: s.nom, desc: `${s.localisation} — ${s.statut}`, to: '/renforcement-capacites/structures' }));
ACTUALITES_PRETES.forEach((a) => entries.push({ type: 'Actualité', title: a.titre, desc: a.chapo, to: '/actualites' }));
PARTENAIRES.forEach((p) => entries.push({ type: 'Partenaire', title: p.categorie, desc: p.entites, to: '/partenaires' }));

export const SEARCH_INDEX = entries;

export function search(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return SEARCH_INDEX.filter((e) => `${e.title} ${e.desc}`.toLowerCase().includes(q));
}
