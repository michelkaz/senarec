import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { OG_IMAGE, SITE, routeMeta } from '../../data/seo';

const setMeta = (sel, attr, key, value) => {
  let el = document.head.querySelector(sel);
  if (!el) {
    el = document.createElement(attr === 'href' ? 'link' : 'meta');
    if (attr === 'href') el.setAttribute('rel', key);
    else el.setAttribute(sel.includes('property') ? 'property' : 'name', key);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

// Les balises sont déjà présentes dans le HTML pré-généré (scripts/postbuild.mjs) ;
// ici on les met à jour à chaque navigation, sans jamais en dupliquer.
export default function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const m = routeMeta(pathname);
    const url = `${SITE}${m.path === '/' ? '' : m.path}`;
    document.title = m.title;
    setMeta('meta[name="description"]', 'content', 'description', m.description);
    setMeta('meta[name="robots"]', 'content', 'robots', m.indexable ? 'index, follow' : 'noindex, follow');
    if (m.path === '/404') document.head.querySelector('link[rel="canonical"]')?.remove();
    else setMeta('link[rel="canonical"]', 'href', 'canonical', url);
    setMeta('meta[property="og:url"]', 'content', 'og:url', m.path === '/404' ? SITE : url);
    setMeta('meta[property="og:title"]', 'content', 'og:title', m.title);
    setMeta('meta[property="og:description"]', 'content', 'og:description', m.description);
    setMeta('meta[property="og:image"]', 'content', 'og:image', OG_IMAGE);
    setMeta('meta[name="twitter:title"]', 'content', 'twitter:title', m.title);
    setMeta('meta[name="twitter:description"]', 'content', 'twitter:description', m.description);
    setMeta('meta[name="twitter:image"]', 'content', 'twitter:image', OG_IMAGE);
  }, [pathname]);
  return null;
}
