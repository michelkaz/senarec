/**
 * Bordure diagonale entre deux sections — écho discret à la dynamique
 * du drapeau RDC, jamais une bande tricolore littérale.
 */
export default function DiagonalEdge({ color = '#EAF5FC', flip = false, className = '' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 64"
      preserveAspectRatio="none"
      className={`block w-full h-10 md:h-16 ${flip ? '-scale-x-100' : ''} ${className}`}
    >
      <polygon points="0,64 1440,0 1440,64" fill={color} />
    </svg>
  );
}
