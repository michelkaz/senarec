// Affiche toujours la photo en entier (aucun recadrage). Le fond flouté de la même
// image comble l'espace si le cadre n'a pas exactement le même ratio.
export default function FullPhoto({ src, alt = '', className = '', imgClassName = '' }) {
  return (
    <div className={`relative overflow-hidden bg-govNight ${className}`}>
      <img src={src} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-60" />
      <img src={src} alt={alt} loading="lazy" className={`relative w-full h-full object-contain ${imgClassName}`} />
    </div>
  );
}
