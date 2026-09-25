import Photo, { Backdrop } from './Photo';

// Affiche toujours la photo en entier (aucun recadrage). Le fond flouté de la même
// image comble l'espace si le cadre n'a pas exactement le même ratio.
export default function FullPhoto({ src, alt = '', className = '', imgClassName = '', sizes = '(min-width:1024px) 33vw, 100vw', eager = false }) {
  return (
    <div className={`relative overflow-hidden bg-govNight ${className}`}>
      <Backdrop src={src} className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-60" />
      <Photo src={src} alt={alt} sizes={sizes} eager={eager} className={`relative w-full h-full object-contain ${imgClassName}`} />
    </div>
  );
}
