export const LEGAL = {
  arrete: { label: 'Arrêté Ministériel n°003/CAB/MIN.PL/98', date: '21 février 1998' },
  decret33: { label: 'Décret-loi n°011/33', date: '09 août 2011', note: 'création du cadre institutionnel CEARC' },
  decret35: { label: 'Décret-loi n°011/35', date: '13 août 2011', note: 'organisation et fonctionnement' },
};

export const ABOUT = {
  origin:
    "Le Secrétariat National pour le Renforcement des Capacités (SENAREC) a été initié en 1987 par le Professeur Wenceslas Rudy CHIZUNGU, diplômé de l'Université de Stanford, actuellement Coach international de la Banque mondiale et Expert en Initiative à Résultats Rapides (IRR).",
  legal:
    "Créé comme service public sous la coordination du Ministère du Plan par l'Arrêté Ministériel n°003/CAB/MIN.PL/98 du 21 février 1998, il a été renforcé par le Décret-loi n°011/33 du 09 août 2011 créant le cadre institutionnel CEARC, puis par le Décret-loi n°011/35 du 13 août 2011.",
  role:
    "L'institution agit comme « Guichet Unique des activités de renforcement des capacités » en République Démocratique du Congo, chargée d'élaborer et de coordonner le Programme National de Renforcement des Capacités (PRONAREC).",
  mission: [
    'Renforcer les capacités des institutions publiques',
    'Appuyer la mise en œuvre des politiques publiques',
    'Accompagner les réformes de l’État',
    'Promouvoir la formation, l’expertise et l’innovation administrative',
  ],
  vision:
    "La vision privilégie l'impact durable des institutions publiques par la formation continue, considérée comme un levier stratégique de changement.",
  devise: 'Former pour transformer',
  values: ['Intégrité', 'Excellence', 'Professionnalisme'],
};

export const MANDATE = [
  {
    title: 'Guichet Unique — PRONAREC',
    desc: "Le SENAREC élabore et coordonne le Programme National de Renforcement des Capacités, principal cadre national d'intervention en matière de renforcement des capacités.",
    ref: 'Arrêté Min. n°003/CAB/MIN.PL/98 — 21.02.1998',
  },
  {
    title: 'Secrétariat Technique — CNRC & CTSARC',
    desc: 'Il assure le secrétariat technique du Conseil National de Renforcement des Capacités et du Comité Technique de Suivi des Activités de Renforcement des Capacités.',
    ref: 'Décret-loi n°011/35 — 13.08.2011',
  },
  {
    title: 'Banque de données & cartographie',
    desc: 'Il constitue une banque de données nationale sur les besoins de renforcement des capacités et cartographie les activités sectorielles à travers les provinces.',
    ref: 'Décret n°011/33 — 09.08.2011',
  },
];

export const CEARC = {
  intro:
    "Le CEARC (Cadre institutionnel d'Encadrement et d'Accompagnement des Activités de Renforcement des Capacités) a pour objet d'encadrer et d'accompagner les activités de renforcement des capacités en République Démocratique du Congo.",
  legal: "Le SENAREC a été créé par le Décret-loi n°011/35 du 13 août 2011 portant création, organisation et fonctionnement.",
  organes: [
    {
      name: 'Conseil National de Renforcement des Capacités (CNRC)',
      desc: "Organe d'orientation et de décision, chargé de définir les grandes orientations et de mobiliser les ressources. Composé de 8 ministres, dont le Ministre du Plan en tant que président.",
    },
    {
      name: "Comité Technique de Suivi des Activités (CTSARC)",
      desc: "Organe de suivi-évaluation identifiant les besoins de renforcement des capacités, composé des secrétaires généraux ministériels.",
    },
    {
      name: 'Secrétariat National pour le Renforcement des Capacités (SENAREC)',
      desc: '« Guichet Unique des activités de renforcement des capacités ».',
    },
    {
      name: 'Comités Provinciaux de Pilotage (CPPARC)',
      desc: 'Établis dans chaque province, présidés par le ministre provincial responsable du plan.',
    },
  ],
  missions: [
    "Élaborer les outils de suivi-évaluation",
    'Servir de guichet unique',
    'Cartographier les activités sectorielles',
    'Constituer une banque de données nationale',
    'Assurer la conformité aux standards internationaux',
    'Coordonner avec les partenaires techniques et financiers',
  ],
};

export const STATS = [
  { key: 'agents', value: 5500, suffix: '+', label: 'Agents et cadres formés' },
  { key: 'provinces', value: 26, suffix: '+', label: 'Provinces couvertes' },
  { key: 'experience', value: 15, suffix: '+', label: "Années d'expérience" },
  { key: 'programmes', value: 160, suffix: '+', label: 'Programmes et projets exécutés' },
];

export const PROJECTS = [
  { img: '/images/projets/1.jpg', title: "Projet d'Appui au Leadership féminin" },
  { img: '/images/projets/2.jpg', title: 'Séminaires Gouvernementaux en Province' },
  { img: '/images/projets/3.jpg', title: 'États Généraux du Patrimoine' },
  { img: '/images/projets/4.jpg', title: 'Formation PMP selon les standards du PMI' },
  { img: '/images/projets/5.jpg', title: 'Séminaire Gouvernemental National' },
  { img: '/images/projets/6.jpg', title: 'Renforcement des capacités des Assemblées provinciales' },
  {
    img: '/images/projets/7.jpg',
    title: 'Appui à la Gouvernance et au Développement des Compétences',
    note: 'En soutien au Programme de Transformation de l’Agriculture',
  },
  { img: '/images/projets/8.jpg', title: 'Appui à la planification, au suivi et à l’évaluation des politiques publiques' },
];

export const TEAM = [
  { name: 'Marcel KANDA MUKANYA', role: 'Coordonnateur National' },
  { name: 'Paulin ILUNGA KATAMBA', role: 'Coordonnateur National Adjoint' },
  { name: 'Sarah DOMBASI LUFUAKENDA', role: 'Directrice Administrative et Financière' },
  { name: 'EPENGE OMOTONDO LAUREINE', role: 'Direction des Ressources Humaines' },
  { name: 'Patricia MULAND KASAJ', role: 'Directrice Technique' },
];

export const SUPPORT_POOLS = ['Pool des assistants', 'Pool des Coachs', 'Pool des experts'];

export const CONTACT = {
  address: '5 Avenue Lubefu, Kinshasa, RDC',
  phone: '+243 993 696 171',
  email: 'info@senarec.cd',
};

export const SOCIALS = [
  { key: 'facebook', href: 'https://web.facebook.com/SenarecRdCongo', label: 'Facebook' },
  { key: 'x', href: 'https://x.com/Senarec_RdCongo', label: 'X (Twitter)' },
  { key: 'linkedin', href: 'https://www.linkedin.com/company/108034858', label: 'LinkedIn' },
  { key: 'youtube', href: 'https://www.youtube.com/@senarecrdcofficiel5317', label: 'YouTube' },
  { key: 'whatsapp', href: 'https://whatsapp.com/channel/0029Vb70kN94inorzTuXWM0u', label: 'WhatsApp' },
];
