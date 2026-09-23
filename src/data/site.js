// Architecture du portail — 8 rubriques principales.
// Les libellés et descriptions courtes ne contiennent aucune donnée métier inventée.

export const NAV_TREE = [
  { label: 'Accueil', to: '/' },
  {
    label: 'Le SENAREC',
    to: '/le-senarec',
    desc: "L'institution, son mandat, son organisation et son histoire.",
    children: [
      { label: 'Présentation', to: '/le-senarec/presentation', desc: 'Identité, mission, vision et valeurs.' },
      { label: 'Missions & attributions', to: '/le-senarec/missions-attributions', desc: 'Le mandat en trois axes et les missions principales.' },
      { label: 'Organisation', to: '/le-senarec/organisation', desc: 'Direction et structures de support.' },
      { label: 'Gouvernance', to: '/le-senarec/gouvernance', desc: 'Les organes de pilotage du cadre CEARC.' },
      { label: 'Notre histoire', to: '/le-senarec/histoire', desc: 'De 1987 aux décrets-lois de 2011.' },
      { label: 'Message du Coordonnateur', to: '/le-senarec/message-coordonnateur', desc: 'Le mot du Coordonnateur National.' },
    ],
  },
  {
    label: 'Renforcement des capacités',
    to: '/renforcement-capacites',
    desc: 'Les formations, programmes, activités et structures du SENAREC.',
    children: [
      { label: 'Formations', to: '/renforcement-capacites/formations', desc: 'Offres et sessions de formation.' },
      { label: 'Programmes & projets', to: '/renforcement-capacites/programmes', desc: 'Les interventions menées par le SENAREC.' },
      { label: 'Activités', to: '/renforcement-capacites/activites', desc: 'Ateliers, conférences, séminaires, États généraux.' },
      { label: 'Structures / centres', to: '/renforcement-capacites/structures', desc: 'Comités provinciaux et pools d’appui.' },
    ],
  },
  {
    label: 'Ressources',
    to: '/ressources',
    desc: 'Documents, publications, rapports et médias du SENAREC.',
    children: [
      { label: 'Publications', to: '/ressources/publications', desc: 'Publications institutionnelles.' },
      { label: 'Rapports & études', to: '/ressources/rapports-etudes', desc: "Rapports d'activités et d'évaluation." },
      { label: 'Guides & documents', to: '/ressources/guides-documents', desc: 'Textes légaux et notes conceptuelles.' },
      { label: 'Médiathèque', to: '/ressources/mediatheque', desc: 'Photographies et vidéos.' },
    ],
  },
  { label: 'Actualités', to: '/actualites' },
  { label: 'Événements', to: '/evenements' },
  { label: 'Partenaires', to: '/partenaires' },
  { label: 'Contact', to: '/contact' },
];

export const section = (to) => NAV_TREE.find((n) => n.to === to);

// Types d'activités et de communications repris de l'ancien site (rubrique « Actualités & activités »).
export const ACTIVITES = [
  { label: 'Ateliers', desc: 'Ateliers de renforcement des capacités organisés par le SENAREC et ses partenaires.' },
  { label: 'Conférences', desc: 'Conférences institutionnelles et interventions publiques du SENAREC.' },
  { label: 'États généraux', desc: 'États généraux et grandes concertations nationales portées ou suivies par le SENAREC.' },
  { label: 'Séminaires', desc: 'Séminaires gouvernementaux nationaux et provinciaux de renforcement des capacités.' },
];

export const COMMUNICATIONS = [
  { label: 'Communiqués officiels', desc: 'Communications officielles du Secrétariat National pour le Renforcement des Capacités.' },
];
