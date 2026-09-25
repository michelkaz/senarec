import { useLocation } from 'react-router-dom';
import { NAV_TREE } from '../../data/site';

const BASE = 'SENAREC';
const DEFAULT_DESC = "SENAREC — Secrétariat National pour le Renforcement des Capacités, guichet unique des activités de renforcement des capacités en République Démocratique du Congo.";

const flat = [];
NAV_TREE.forEach((n) => {
  flat.push([n.to, n.label, n.desc]);
  n.children?.forEach((c) => flat.push([c.to, c.label, c.desc]));
});

// React 19 remonte <title> et <meta> dans <head> : un titre et une description par page.
export default function Seo() {
  const { pathname } = useLocation();
  const page = flat.find(([to]) => to === pathname);
  const home = pathname === '/';
  const label = home ? null : page?.[1] ?? 'Page introuvable';
  const title = home ? 'SENAREC — Guichet unique du renforcement des capacités en RDC' : `${label} | ${BASE}`;
  const desc = (page?.[2] && `${page[2]} — ${BASE}, République Démocratique du Congo.`) || DEFAULT_DESC;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_CD" />
      <meta property="og:image" content="/images/projets/6.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      {!page && !home && <meta name="robots" content="noindex" />}
    </>
  );
}
