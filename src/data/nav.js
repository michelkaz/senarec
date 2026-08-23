import { ACTUALITES_CATEGORIES, RESSOURCES_CATEGORIES } from './categories';

export const NAV_ITEMS = [
  { label: 'Accueil', to: '/' },
  {
    label: 'À propos',
    children: [
      { label: 'Présentation institutionnelle', to: '/a-propos/presentation' },
      { label: 'Gouvernance', to: '/a-propos/gouvernance' },
      { label: 'CEARC', to: '/a-propos/cearc' },
    ],
  },
  { label: 'Projets', to: '/projets' },
  {
    label: 'Actualités & activités',
    children: [
      { label: 'Toutes les actualités', to: '/actualites' },
      ...ACTUALITES_CATEGORIES.map((c) => ({ label: c.label, to: `/actualites/${c.slug}` })),
    ],
  },
  {
    label: 'Ressources',
    children: [
      { label: 'Toutes les ressources', to: '/ressources' },
      ...RESSOURCES_CATEGORIES.map((c) => ({ label: c.label, to: `/ressources/${c.slug}` })),
    ],
  },
  { label: 'Contact', to: '/contact' },
];
