// Après `vite build` : HTML pré-généré par route (balises SEO correctes sans JavaScript),
// sitemap.xml, robots.txt et 404.html (servi par Vercel avec un vrai statut 404).
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { ROUTES, NOT_FOUND, SITE, OG_IMAGE } from '../src/data/seo.js';
import { NAV_TREE } from '../src/data/site.js';

const dist = 'dist';
const tpl = readFileSync(join(dist, 'index.html'), 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function head(m) {
  const url = `${SITE}${m.path === '/' || m.path === '/404' ? '' : m.path}`;
  const canon = m.path === '/404' ? '' : `    <link rel="canonical" href="${url}" />\n`;
  return `<!--seo:start-->
    <title>${esc(m.title)}</title>
    <meta name="description" content="${esc(m.description)}" />
    <meta name="robots" content="${m.indexable ? 'index, follow' : 'noindex, follow'}" />
${canon}    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="SENAREC" />
    <meta property="og:locale" content="fr_CD" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${esc(m.title)}" />
    <meta property="og:description" content="${esc(m.description)}" />
    <meta property="og:image" content="${OG_IMAGE}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(m.title)}" />
    <meta name="twitter:description" content="${esc(m.description)}" />
    <meta name="twitter:image" content="${OG_IMAGE}" />
    <!--seo:end-->`;
}

const links = NAV_TREE.flatMap((n) => [n, ...(n.children || [])]).map((n) => `<li><a href="${n.to}">${esc(n.label)}</a></li>`).join('');
function noscript(m) {
  return `<noscript><p><strong>${esc(m.title)}</strong></p><p>${esc(m.description)}</p><nav aria-label="Navigation"><ul>${links}</ul></nav></noscript>`;
}

function page(m) {
  return tpl.replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, head(m)).replace('<!--noscript-->', noscript(m));
}

for (const m of ROUTES) {
  const file = m.path === '/' ? join(dist, 'index.html') : join(dist, m.path, 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, page(m));
}
writeFileSync(join(dist, '404.html'), page(NOT_FOUND));

const today = new Date().toISOString().slice(0, 10);
const urls = ROUTES.filter((r) => r.indexable);
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((r) => `  <url><loc>${SITE}${r.path === '/' ? '/' : r.path}</loc><lastmod>${today}</lastmod></url>`)
    .join('\n')}\n</urlset>\n`,
);
writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`postbuild: ${ROUTES.length} pages, ${urls.length} dans le sitemap`);
