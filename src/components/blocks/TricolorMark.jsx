/**
 * Signature graphique inspirée de la diagonale du drapeau RDC —
 * trois traits inclinés bleu/jaune/rouge, jamais un drapeau littéral.
 */
export default function TricolorMark({ className = '' }) {
  return (
    <span className={`inline-flex items-end gap-1 ${className}`} aria-hidden="true">
      <span className="w-1 h-5 rounded-full bg-horizon -skew-x-[18deg]" />
      <span className="w-1 h-4 rounded-full bg-energie -skew-x-[18deg]" />
      <span className="w-1 h-3 rounded-full bg-signal -skew-x-[18deg]" />
    </span>
  );
}
