import manifest from '../../data/imgmanifest.json';

const keyOf = (src) => src.replace(/^\/images\//, '').replace(/\.[a-z]+$/i, '').replace(/\//g, '-');
export const photoInfo = (src) => manifest[keyOf(src)];
export const photoUrl = (src, w) => {
  const k = keyOf(src);
  const m = manifest[k];
  if (!m) return src;
  const width = m.widths.find((x) => x >= w) ?? m.widths.at(-1);
  return `/images/opt/${k}-${width}.webp`;
};

/** Image responsive (WebP, srcset, dimensions réservées). Ne recadre jamais : à combiner avec object-contain. */
export default function Photo({ src, alt = '', sizes = '100vw', eager = false, className = '' }) {
  const k = keyOf(src);
  const m = manifest[k];
  if (!m) return <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" className={className} />;
  const srcSet = m.widths.map((w) => `/images/opt/${k}-${w}.webp ${w}w`).join(', ');
  return (
    <img
      src={`/images/opt/${k}-${m.widths.at(-1)}.webp`}
      srcSet={srcSet}
      sizes={sizes}
      width={m.w}
      height={m.h}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      decoding="async"
      className={className}
    />
  );
}

/** Fond décoratif flouté : vignette de 48 px agrandie (quelques centaines d'octets). */
export function Backdrop({ src, className = '' }) {
  const k = keyOf(src);
  return <img src={manifest[k] ? `/images/opt/${k}-xs.webp` : src} alt="" aria-hidden="true" loading="lazy" decoding="async" className={className} />;
}
