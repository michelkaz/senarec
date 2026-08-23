import { FileClock } from 'lucide-react';

export default function EmptyState({ title = 'Contenu en cours de publication', hint }) {
  return (
    <div className="border border-nuit/10 rounded-xl2 bg-white px-8 py-16 md:py-24 flex flex-col items-center text-center">
      <div className="w-14 h-14 rounded-xl bg-horizon/10 text-profond flex items-center justify-center mb-6">
        <FileClock size={26} aria-hidden="true" />
      </div>
      <h3 className="font-heading font-semibold text-lg text-nuit mb-2">{title}</h3>
      <p className="text-sm text-nuit/60 max-w-sm leading-relaxed">
        {hint ??
          "Cette rubrique sera alimentée avec des contenus officiels validés par l'institution. Revenez prochainement."}
      </p>
    </div>
  );
}
