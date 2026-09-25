import { NAV_TREE, THIN_PAGES, UTILITY_PAGES } from './site.js';

export const SITE = 'https://senarec-ochre.vercel.app';
export const OG_IMAGE = `${SITE}/images/og.jpg`;
const NAME = 'SENAREC';
const HOME_TITLE = 'SENAREC — Guichet unique du renforcement des capacités en RDC';

const list = [];
NAV_TREE.forEach((n) => {
  list.push({ path: n.to, label: n.label, desc: n.desc });
  n.children?.forEach((c) => list.push({ path: c.to, label: c.label, desc: c.desc }));
});
UTILITY_PAGES.forEach((u) => list.push({ path: u.to, label: u.label, desc: u.desc, utility: true }));

export const ROUTES = list.map((r) => ({
  ...r,
  title: r.path === '/' ? HOME_TITLE : `${r.label} | ${NAME}`,
  description: r.path === '/' ? r.desc : `${r.desc} ${NAME}, République Démocratique du Congo.`,
  indexable: !r.utility && !THIN_PAGES.includes(r.path),
}));

export const NOT_FOUND = { path: '/404', title: `Page introuvable | ${NAME}`, description: "Cette adresse n'existe pas ou a été déplacée.", indexable: false };

export const routeMeta = (path) => ROUTES.find((r) => r.path === path) || NOT_FOUND;
