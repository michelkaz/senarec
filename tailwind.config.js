/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // "Horizon Capacités" — SENAREC art direction, système chromatique RDC
        // Bleus — quatre nuances, du plus clair au plus profond
        azur: '#EAF5FC', // Bleu très clair, presque blanc — fonds de section tintés
        horizon: '#6EC1E4', // Bleu ciel — accent institutionnel principal
        profond: '#164A7A', // Bleu institutionnel — surfaces fortes, boutons, navbar
        nuit: '#0B1F33', // Bleu profond — contraste, sections les plus sombres
        mineral: '#F6F8FA', // Blanc Minéral — fond neutre
        // Jaune — force graphique à part entière, pas un simple accent
        energie: '#F6C400',
        energieDeep: '#C89600', // pour texte/contraste sur fond jaune clair
        // Rouge — intensité maîtrisée
        signal: '#CE1126',
        signalDeep: '#8F0C1B',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        content: '1400px',
      },
      borderRadius: {
        xl2: '28px',
        xl3: '36px',
      },
      transitionTimingFunction: {
        posed: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      height: {
        dvh: '100dvh',
      },
    },
  },
  plugins: [],
}
