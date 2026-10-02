// Contenu issu du « Dossier maître des contenus et exigences fonctionnelles du
// site web SENAREC » (v1.0, consolidation du 1er octobre 2026).
// Règle : aucune information n'est inventée ici. Les champs `caveat` reproduisent
// les points « À CONFIRMER » signalés dans le cahier — ils doivent rester visibles
// sur le site tant qu'un arbitrage institutionnel n'a pas été rendu.

export const HERO = {
  surtitre: 'Secrétariat National pour le Renforcement des Capacités',
  titre: 'Former pour transformer',
  chapo:
    "Le SENAREC accompagne l'État, les provinces et les acteurs du développement dans la planification, la coordination, la mise en œuvre et l'évaluation des actions de renforcement des capacités en République Démocratique du Congo.",
};

export const BRIEF = "Le Secrétariat National pour le Renforcement des Capacités est l'organe technique du Gouvernement en matière de renforcement des capacités. Rattaché au Ministère du Plan et de la Coordination de l'Aide au Développement, il contribue à structurer les besoins, harmoniser les interventions, promouvoir la qualité des formations et suivre les résultats au bénéfice des institutions publiques, du secteur privé et de la société civile.";

export const ENGAGEMENTS = [
  { title: 'Planifier', text: 'Identifier les besoins et les traduire en programmes cohérents avec les priorités nationales.' },
  { title: 'Coordonner', text: 'Mettre en cohérence les interventions des institutions, provinces, prestataires et partenaires.' },
  { title: 'Garantir la qualité', text: "Promouvoir des standards, l'accréditation, le suivi et l'évaluation des actions de renforcement des capacités." },
  { title: 'Transformer', text: "Soutenir la modernisation de l'administration, la gestion axée sur les résultats et l'innovation publique." },
];

export const CADRE = {
  vision: 'Une administration publique moderne, compétente et au service du citoyen, capable de porter le développement durable et la transformation de la République Démocratique du Congo.',
  valeurs: ['Professionnalisme', 'Intégrité', 'Redevabilité', 'Innovation', 'Esprit de service public'],
  publics: [
    'Institutions publiques',
    'Ministères et services centraux',
    'Gouvernements provinciaux et entités territoriales décentralisées',
    'Établissements et entreprises publics',
    "Cadres et talents de l'administration",
    'Secteur privé',
    'Organisations de la société civile',
  ],
};

export const MISSION_GENERALE = "Concevoir, impulser, coordonner, harmoniser, suivre et contrôler la qualité des activités de renforcement des capacités, notamment celles destinées aux services publics aux niveaux central, provincial et local, tout en assurant la coordination de la mise en œuvre du Programme National de Renforcement des Capacités.";

export const DOMAINES = [
  { axe: 'Gouvernance et leadership', items: 'Leadership ; redevabilité ; participation citoyenne ; accompagnement des organisations de la société civile.' },
  { axe: 'Renforcement institutionnel', items: 'Gestion axée sur les résultats ; Initiatives à Résultats Rapides ; planification ; réformes et modernisation administrative.' },
  { axe: 'Compétences et employabilité', items: 'Formation de formateurs ; certifications ; inclusion des femmes et des jeunes ; professionnalisation.' },
  { axe: 'Transformation numérique', items: 'Compétences numériques ; cybersécurité ; gouvernance électronique ; intelligence artificielle ; DTC ; inclusion numérique.' },
];

// Synthèse des treize missions recensées dans la présentation institutionnelle de 2019.
export const MISSIONS_ATTRIBUTIONS = [
  'Contribuer à la formulation de la vision, de la stratégie globale et des programmes de renforcement des capacités pour le secteur public, le secteur privé et la société civile.',
  "Susciter des réflexions de haut niveau sur la modernisation de l'administration publique et le développement des capacités des acteurs étatiques et non étatiques.",
  "Assurer l'articulation entre la stratégie nationale de renforcement des capacités et les interventions sectorielles.",
  'Coordonner et harmoniser les actions, en veillant à leur cohérence entre les niveaux central, provincial et local.',
  "Préparer les plans de travail annuels et programmer les activités conformément aux orientations du Gouvernement.",
  "Mettre en place durablement un système de contrôle qualité et, le cas échéant, d'accréditation.",
  "Veiller à ce que les programmes des centres d'excellence et des prestataires répondent aux standards applicables.",
  'Encadrer la mise en œuvre des activités en s’appuyant sur des structures spécialisées et qualifiées.',
  'Élaborer les outils de planification, de suivi et d’évaluation.',
  "Suivre l'exécution des activités et leur conformité aux orientations gouvernementales.",
  'Analyser les effets des interventions sur les bénéficiaires et les institutions.',
  'Établir et actualiser la cartographie des besoins, acteurs et activités de renforcement des capacités.',
  'Constituer et administrer des banques de données sur les compétences, les besoins et les actions de renforcement des capacités.',
];

export const MANDAT_FONCTIONS = [
  { fonction: 'Stratégique', contenu: 'Vision, programmation, mobilisation et alignement', preuve: 'PRONAREC, plans, priorités, cadres de résultats' },
  { fonction: 'Opérationnelle', contenu: 'Appui, formation, accompagnement, coordination', preuve: 'Fiches projets, formations, activités, réseau' },
  { fonction: 'Assurance qualité', contenu: 'Standards, accréditation, suivi-évaluation, capitalisation', preuve: 'Référentiels, rapports, indicateurs et enseignements' },
];

export const ORGANISATION_STRUCTURE = [
  { niveau: 'Pilotage', entite: 'Coordination nationale', resp: 'Orientation, représentation, arbitrage, supervision et reddition des comptes.' },
  { niveau: 'Support', entite: 'Direction administrative et financière', resp: 'Administration, budget, finances, logistique, patrimoine et appui opérationnel.' },
  { niveau: 'Support', entite: 'Direction des ressources humaines', resp: 'Gestion du personnel, compétences internes, carrière, formation et climat organisationnel.' },
  { niveau: 'Métier', entite: 'Direction technique', resp: 'Planification, programmes, ingénierie de formation, suivi-évaluation, qualité et capitalisation.' },
];
export const ORGANISATION_CAVEAT = "Les noms des titulaires doivent être synchronisés avec une fiche RH de référence ; les sources en ligne présentent une divergence concernant le Coordonnateur national adjoint. Publier uniquement un organigramme approuvé.";

export const GOUVERNANCE_CAVEAT = "Les présentations institutionnelles de 2019 et 2024 ne donnent pas la même composition du Conseil National de Renforcement des Capacités (CNRC). La page doit reproduire le texte juridique consolidé, non une liste issue d'une présentation.";

export const CENTRES_CAVEAT = "Les sources internes divergent sur le nombre de centres : une présentation 2024 évoque dix centres tout en énumérant un réseau différent, alors que l'UIT mentionne huit centres opérationnels. Le nombre total de centres n'est donc pas publié tant qu'un répertoire daté n'est pas validé.";

export const HISTOIRE = [
  { periode: '1987', titre: "Initiative à l'origine du SENAREC", text: "Initiative attribuée au professeur Wenceslas Rudy Chizungu dans les présentations institutionnelles." },
  { periode: 'Décembre 1997', titre: 'Réunion des Amis du Congo', text: "Réunion à Bruxelles, citée comme étape préparatoire à la mise en place d'un guichet unique." },
  { periode: '21 février 1998', titre: 'Création du SENAREC', text: 'Création par arrêté ministériel sous la coordination du Ministère du Plan.' },
  { periode: 'Juin 2009', titre: "Forum de haut niveau sur l'efficacité de l'aide", text: 'Forum à Kinshasa ; recommandation de renforcer la coordination des capacités.' },
  { periode: 'Octobre 2009', titre: 'Revue organisationnelle et institutionnelle', text: 'Revue recommandant un fondement juridique renforcé.' },
  { periode: 'Août 2011', titre: 'Décrets CEARC et SENAREC', text: 'Adoption des décrets relatifs au CEARC et au SENAREC ; affirmation du rôle de guichet unique.' },
  { periode: '2011–2015', titre: 'Première génération du PRONAREC', text: 'Mentionnée parmi les réalisations institutionnelles.' },
  { periode: '2022', titre: 'Adhésion au réseau DTC', text: "Adhésion du SENAREC à l'initiative Digital Transformation Centres de l'Union internationale des télécommunications." },
  { periode: '2023', titre: 'PRONAREC II présenté aux partenaires', text: "Présentation de la deuxième génération du PRONAREC et table ronde avec les partenaires ; période annoncée 2023–2027." },
  { periode: 'Décembre 2023', titre: 'Lancement de CONADIG', text: 'Lancement du programme Congolais Ambassadeurs du Digital dans le cadre DTC.' },
  { periode: '2025', titre: 'Cybersécurité, Kindu, K-MAJUSCULE', text: 'Déploiement d’initiatives de cybersécurité, séminaire provincial à Kindu et partenariat SENAREC–K-MAJUSCULE lié au dispositif ATP.' },
  { periode: '2026', titre: 'PAGDC-PTA et BNCE', text: 'Déploiement du partenariat de renforcement des capacités associé au PAGDC-PTA et développement de la BNCE.' },
];

export const MESSAGE_COORDONNATEUR = {
  texte: [
    "Le renforcement des capacités est une condition essentielle de la transformation de l'État. Une réforme ne produit des résultats durables que lorsque les institutions disposent de méthodes adaptées, de compétences solides, d'outils fiables et d'une culture de performance au service du citoyen.",
    "Le SENAREC assume, à cet égard, une responsabilité stratégique : aider le Gouvernement à identifier les besoins, coordonner les interventions, garantir leur qualité et mesurer les changements qu'elles produisent. Notre ambition est de faire du renforcement des capacités un investissement structuré, aligné sur les priorités nationales et accessible aux administrations centrales, aux provinces, aux entités territoriales décentralisées ainsi qu'aux autres acteurs du développement.",
    "À travers le PRONAREC, nos programmes de formation, l'accompagnement des réformes, les initiatives à résultats rapides, la transformation numérique et la Banque Nationale des Compétences et de l'Expertise, nous œuvrons à mieux valoriser le capital humain congolais et à renforcer la souveraineté de notre pays en matière d'expertise.",
    "Ce portail institutionnel traduit notre volonté de transparence, de proximité et de partage des connaissances. Il met à la disposition du public nos orientations, nos programmes, nos résultats, nos ressources et nos opportunités. Nous invitons les institutions, les partenaires, les professionnels et les citoyens à le consulter, à contribuer à son amélioration et à bâtir avec nous une administration plus performante.",
    "Former pour transformer : telle est notre conviction, et tel est l'engagement qui guide l'action du SENAREC.",
  ],
  signataire: 'Marcel KANDA MUKANYA',
  fonction: 'Coordonnateur national',
  caveat: 'Projet de texte proposé par le dossier éditorial, à signer et dater par le Coordonnateur national avant publication définitive.',
};

export const PROCESSUS = [
  { n: 1, etape: 'Diagnostic', contenu: "Analyse de l'organisation, des compétences et des écarts de performance", livrable: 'Rapport ou note de diagnostic' },
  { n: 2, etape: 'Conception', contenu: 'Objectifs, bénéficiaires, méthode, budget, calendrier et indicateurs', livrable: 'Plan de renforcement des capacités' },
  { n: 3, etape: 'Mobilisation', contenu: 'Sélection des experts, formateurs, centres et partenaires', livrable: 'Équipe et plan de travail' },
  { n: 4, etape: 'Mise en œuvre', contenu: 'Formation, coaching, atelier ou accompagnement institutionnel', livrable: 'Supports, listes, attestations, livrables' },
  { n: 5, etape: 'Qualité', contenu: 'Contrôle des standards et satisfaction', livrable: 'Fiches de contrôle et évaluation' },
  { n: 6, etape: 'Résultats', contenu: "Suivi de l'application, effets et enseignements", livrable: 'Rapport de résultats et capitalisation' },
];

export const DOMAINES_FORMATION = [
  { domaine: 'Gestion axée sur les résultats', objectif: 'Planifier, piloter et rendre compte sur la base d’objectifs et d’indicateurs', public: 'Cadres publics, équipes projets, provinces', modalite: 'Présentiel/hybride' },
  { domaine: 'Initiatives à Résultats Rapides', objectif: 'Traiter un défi de performance par un cycle court, mesurable et responsabilisant', public: 'Équipes de changement, managers', modalite: 'Atelier + coaching' },
  { domaine: 'Gestion de projet / standards PMI', objectif: 'Renforcer la maîtrise des méthodes, outils et certifications de management de projet', public: 'Chefs de projet, PMO, cadres', modalite: 'Parcours certifiant à confirmer' },
  { domaine: 'Leadership et gouvernance', objectif: 'Développer la conduite du changement, l’éthique, la redevabilité et la participation', public: 'Dirigeants, élus, cadres, OSC', modalite: 'Séminaire/atelier' },
  { domaine: 'Planification stratégique', objectif: 'Formuler priorités, plans d’action, indicateurs et mécanismes de suivi', public: 'Ministères, services, provinces', modalite: 'Atelier appliqué' },
  { domaine: 'Transformation numérique', objectif: 'Développer les compétences numériques et l’usage responsable des technologies', public: 'Agents publics, jeunes, femmes', modalite: 'DTC, présentiel/en ligne' },
  { domaine: 'Cybersécurité', objectif: 'Renforcer les pratiques de protection des données, systèmes et usages', public: 'Agents, femmes, relais numériques', modalite: 'Campagne + formation' },
  { domaine: 'Formation de formateurs', objectif: 'Développer la capacité pédagogique et la réplication des acquis', public: 'Formateurs et centres partenaires', modalite: 'Parcours pratique' },
];

// Huit fiches programmatiques — portefeuille éditorial initial, pas des documents de projet définitifs.
export const PROGRAMMES = [
  {
    slug: 'pronarec-ii',
    nom: 'PRONAREC II',
    titre: 'Programme National de Renforcement des Capacités 2023–2027',
    statut: 'En cours',
    finalite: "Programme-cadre de deuxième génération destiné à structurer les priorités nationales de renforcement des capacités, coordonner les parties prenantes et consolider les acquis du PRONAREC I.",
    beneficiaires: 'Institutions publiques, secteur privé, société civile, partenaires techniques et financiers.',
    elements: "Présentation aux bailleurs en octobre 2023 avec l'appui du PNUD ; recommandations portant sur l'appropriation, le financement, la coordination et la communication.",
    caveat: "Cadre de résultats, budget, état d'exécution 2023–2027, réalisations par axe et financements confirmés à publier après validation.",
  },
  {
    slug: 'pagdc-pta',
    nom: 'PAGDC-PTA',
    titre: 'Renforcement des capacités agricoles',
    statut: 'À confirmer',
    finalite: 'Contribution du SENAREC au renforcement des institutions et acteurs associés à la gouvernance et à la transformation agricole dans le cadre du PTA-RDC.',
    beneficiaires: 'Structures publiques partenaires, services techniques, parties prenantes et bénéficiaires du programme.',
    elements: 'Une convention entre le FSRDC et le SENAREC est documentée en 2026 ; le PAGDC-PTA vise notamment la gouvernance agricole.',
    caveat: 'Convention publiable, zones, bénéficiaires, modules, calendrier, cibles et résultats consolidés à confirmer.',
  },
  {
    slug: 'bnce',
    nom: 'BNCE',
    titre: 'Banque Nationale des Compétences et de l’Expertise',
    statut: 'Opérationnel',
    finalite: 'Plateforme opérationnelle destinée à recenser, organiser, valoriser et mobiliser les compétences nationales et de la diaspora.',
    beneficiaires: 'Experts, institutions, employeurs publics/privés et décideurs.',
    elements: 'Registre, validation des profils, espaces dédiés, marketplace et observatoire annoncés par la plateforme.',
    caveat: "Gouvernance approuvée, règles de validation, politique de données, indicateurs réels et conditions d'utilisation à confirmer. Lien officiel vers la plateforme à confirmer par le SENAREC.",
  },
  {
    slug: 'dtc-conadig',
    nom: 'DTC / CONADIG',
    titre: 'Transformation numérique et inclusion digitale',
    statut: 'En cours',
    finalite: "Développer les compétences numériques et constituer un réseau de relais capables d'accompagner l'inclusion et la transformation digitale.",
    beneficiaires: 'Agents publics, communautés, jeunes et publics prioritaires.',
    elements: "Le SENAREC est partenaire DTC de l'UIT depuis janvier 2022 ; CONADIG a été lancé en décembre 2023.",
    caveat: 'Bilan par cohorte, carte des centres, curricula, critères de participation et calendrier à confirmer.',
  },
  {
    slug: 'cybercitoyens-rdc',
    nom: 'CyberCitoyens RDC',
    titre: 'Sensibilisation et formation à la cybersécurité',
    statut: 'En cours',
    finalite: 'Renforcer la résilience numérique par la sensibilisation et la formation à la cybersécurité, avec une attention à l’inclusion des femmes.',
    beneficiaires: 'Agents publics, femmes, relais numériques et citoyens.',
    elements: 'Une première action publique a concerné 31 femmes au CENACOF en mai 2025.',
    caveat: 'Programme détaillé, partenaires, évaluations, prochaines cohortes et résultats post-formation à confirmer.',
  },
  {
    slug: 'senarec-atp',
    nom: 'SENAREC–ATP',
    titre: 'Management de projet selon les standards PMI',
    statut: 'En cours',
    finalite: 'Déployer des formations alignées sur les standards du Project Management Institute et professionnaliser la gestion de projet en RDC.',
    beneficiaires: 'Chefs de projet, cadres publics, PMO et professionnels.',
    elements: 'Partenariat SENAREC–K-MAJUSCULE signé le 10 juillet 2025 ; la collaboration est également relayée par le Chapitre PMI RDC.',
    caveat: 'Statut exact ATP, catalogue, tarifs, formateurs, calendrier, règles de certification et logos autorisés à confirmer.',
  },
  {
    slug: 'seminaires-gouvernementaux',
    nom: 'Séminaires gouvernementaux et provinciaux',
    titre: 'Gouvernance, gestion axée sur les résultats et pilotage',
    statut: 'En cours',
    finalite: "Renforcer la gouvernance, l'appropriation des priorités, la gestion axée sur les résultats et le pilotage des feuilles de route.",
    beneficiaires: 'Membres du Gouvernement, gouvernements provinciaux, députés et hauts cadres.',
    elements: "Les réalisations historiques couvrent des séminaires centraux et provinciaux ; une session s'est tenue à Kindu du 7 au 9 juillet 2025.",
    caveat: 'Liste consolidée, objectifs, participants, livrables, engagements et suivi des recommandations à confirmer.',
  },
  {
    slug: 'etats-generaux-pie',
    nom: 'États généraux du PIE',
    titre: 'Dialogue partenarial et priorités de renforcement des capacités',
    statut: 'À confirmer',
    finalite: "Créer un cadre de diagnostic, de concertation et de recommandations autour des enjeux institutionnels et des priorités de renforcement des capacités.",
    beneficiaires: 'Institutions, experts, provinces, société civile et partenaires.',
    elements: 'Des agendas et comptes rendus préparatoires sont présents dans le fonds documentaire interne.',
    caveat: "Intitulé officiel du PIE, actes, date/statut, comité d'organisation, conclusions et plan de suivi à confirmer.",
  },
];

export const ACTIVITES_TYPES = [
  { type: 'Formation', contenu: 'Thème, dates, lieu, participants, formateurs, évaluation', indicateur: 'Inscrits, achevé, satisfaction, acquis' },
  { type: 'Atelier', contenu: 'Objet, parties prenantes, méthode, livrables', indicateur: 'Participants, livrables validés' },
  { type: 'Séminaire', contenu: 'Cible, sessions, engagements, recommandations', indicateur: 'Décisions, feuilles de route' },
  { type: 'Conférence / table ronde', contenu: 'Thème, intervenants, conclusions, suites', indicateur: 'Engagements et partenariats' },
  { type: 'Mission provinciale', contenu: 'Province, objectif, institutions rencontrées, constats', indicateur: 'Actions engagées et échéances' },
  { type: 'Coaching / IRR', contenu: 'Défi, objectif à 100 jours, équipe et cycles', indicateur: 'Résultat visé/réalisé' },
];

export const STRUCTURES = [
  { nom: 'ENA, CENACOF, ENF', localisation: 'Kinshasa', statut: 'À confirmer individuellement' },
  { nom: 'SALAMA, CERECAF ou UNILU', localisation: 'Lubumbashi', statut: 'Divergence de sources à arbitrer' },
  { nom: 'MONACO', localisation: 'Kisangani / Tshopo', statut: 'À confirmer' },
  { nom: 'UCB', localisation: 'Bukavu / Sud-Kivu', statut: 'À confirmer' },
  { nom: 'UNIBAND', localisation: 'Bandundu / Kwilu', statut: 'À confirmer' },
  { nom: 'CEFODE, UOM', localisation: 'Mbuji-Mayi', statut: 'À confirmer' },
  { nom: 'ISP/Mbandaka', localisation: 'Mbandaka', statut: 'À confirmer' },
];

export const RESSOURCES_COLLECTIONS = [
  { nom: 'Publications', desc: 'Notes publiques, brochures, articles institutionnels.' },
  { nom: 'Rapports et études', desc: 'Rapports d’activités, évaluations, études finalisées.' },
  { nom: 'Textes juridiques', desc: 'Décrets, arrêtés et décisions publiables.' },
  { nom: 'Guides et outils', desc: 'Guides, manuels, référentiels, canevas publics.' },
  { nom: 'Documents de projets', desc: 'Cadres, fiches, résultats, actes publics.' },
  { nom: 'Communiqués', desc: 'Versions signées ou officiellement approuvées.' },
];

// « Actualités prêtes à éditer » (cahier, p. 21) — contenu sourcé, présenté avec
// la mention explicite des compléments que la version finale devra ajouter.
export const ACTUALITES_PRETES = [
  {
    slug: 'partenariat-k-majuscule',
    categorie: 'Partenariat',
    date: '10 juillet 2025',
    lieu: 'Kinshasa',
    titre: 'Partenariat SENAREC–K-MAJUSCULE',
    chapo: 'Le SENAREC et K-MAJUSCULE signent une convention pour déployer le Programme SENAREC–ATP®.',
    corps: "Le SENAREC et K-MAJUSCULE ont signé, le 10 juillet 2025 à Kinshasa, une convention de collaboration visant le déploiement du Programme SENAREC–ATP®. Cette initiative entend renforcer la professionnalisation de la gestion de projet et faciliter l'accès à des parcours alignés sur les standards du Project Management Institute.",
    complement: 'Les prochaines publications devront préciser le catalogue, les conditions de participation et le calendrier des sessions.',
  },
  {
    slug: 'seminaire-kindu',
    categorie: 'Séminaire',
    date: '7–9 juillet 2025',
    lieu: 'Kindu, Maniema',
    titre: 'Séminaire de renforcement des capacités à Kindu',
    chapo: 'Une délégation du SENAREC accompagne députés et membres du Gouvernement provincial du Maniema.',
    corps: "Du 7 au 9 juillet 2025, une délégation d'experts du SENAREC a accompagné des députés provinciaux et des membres du Gouvernement provincial du Maniema dans le cadre d'un séminaire de renforcement des capacités.",
    complement: 'La version finale de l’article devra ajouter les objectifs pédagogiques, le nombre de participants, les modules, les recommandations et le mécanisme de suivi.',
  },
  {
    slug: 'cybercitoyens-cenacof',
    categorie: 'Formation',
    date: '9 mai 2025',
    lieu: 'CENACOF, Kinshasa',
    titre: 'CyberCitoyens RDC forme 31 femmes à la cybersécurité',
    chapo: "Le programme CyberCitoyens RDC met l'accent sur l'inclusion et la résilience numérique de l'administration.",
    corps: "Le 9 mai 2025, le programme CyberCitoyens RDC a organisé au CENACOF une activité de formation destinée à 31 femmes, avec un accent sur la cybersécurité, l'inclusion et la résilience numérique.",
    complement: 'La publication complète devra intégrer le partenaire technique, la durée, les compétences évaluées et les suites prévues.',
  },
  {
    slug: 'pronarec-ii-partenaires',
    categorie: 'Communiqué officiel',
    date: 'Octobre 2023',
    lieu: 'Kinshasa',
    titre: 'PRONAREC II présenté aux partenaires',
    chapo: "Table ronde autour de la deuxième génération du Programme National de Renforcement des Capacités.",
    corps: "En octobre 2023, le SENAREC a présenté aux partenaires la deuxième génération du Programme National de Renforcement des Capacités, annoncée pour 2023–2027. Les échanges ont souligné la nécessité d'une appropriation partagée, d'une mobilisation coordonnée des ressources, d'une communication renforcée et d'un suivi concerté.",
    complement: null,
  },
  {
    slug: 'partenariat-pagdc-pta',
    categorie: 'Partenariat',
    date: '2026',
    lieu: null,
    titre: 'Partenariat PAGDC-PTA',
    chapo: 'Le FSRDC et le SENAREC formalisent une collaboration de renforcement des capacités.',
    corps: 'En 2026, le FSRDC et le SENAREC ont formalisé une collaboration de renforcement des capacités dans le cadre du PAGDC-PTA.',
    complement: "La fiche publique devra présenter les institutions bénéficiaires, les zones d'intervention, les modules, les cibles et le calendrier approuvé, sans reproduire les clauses contractuelles confidentielles.",
  },
];

// Seul événement daté et conclu dont le cahier fournit une source : archivé, jamais annoncé comme à venir.
export const EVENEMENTS_ARCHIVES = [
  {
    titre: 'Séminaire de renforcement des capacités à Kindu',
    dates: '7–9 juillet 2025',
    lieu: 'Kindu, Maniema',
    statut: 'Terminé',
    desc: "Accompagnement des députés provinciaux et du Gouvernement provincial du Maniema par une délégation d'experts du SENAREC.",
  },
];

// Catégories 1 à 5 du tableau « Partenaires » du cahier. La catégorie 6 (« Autres
// bailleurs affichés par la BNCE ») est volontairement exclue : le cahier interdit
// de la reprendre automatiquement sans preuve et autorisation.
export const PARTENAIRES = [
  {
    categorie: 'Tutelle',
    entites: "Ministère du Plan et de la Coordination de l'Aide au Développement",
    traitement: 'Lien institutionnel de tutelle.',
  },
  {
    categorie: 'Multilatéraux',
    entites: 'PNUD ; Union internationale des télécommunications ; Banque mondiale/IDA selon projets',
    traitement: "Une fiche par programme ; actualité de la collaboration à confirmer.",
  },
  {
    categorie: 'Programmes publics',
    entites: 'FSRDC / PAGDC-PTA',
    traitement: 'Convention et résultats autorisés à décrire.',
  },
  {
    categorie: 'Professionnalisation',
    entites: 'K-MAJUSCULE ; Chapitre PMI RDC',
    traitement: 'Rôles, périmètre et statut ATP à préciser.',
  },
  {
    categorie: 'Centres / Académiques',
    entites: 'ENA, CENACOF, ENF, UCB, UOM et autres',
    traitement: 'Répertoire et nature du lien à valider — voir Structures et centres.',
  },
];

export const BNCE_INFO = {
  resume: 'Plateforme opérationnelle destinée à recenser, organiser, valoriser et mobiliser les compétences nationales et de la diaspora.',
  fonctions: ['Registre des compétences', 'Validation des profils', 'Espaces candidat / institution / SENAREC', 'Marketplace et observatoire'],
  caveat: "Le SENAREC et la BNCE restent deux services distincts. Le lien officiel vers la plateforme BNCE sera publié dès sa confirmation par le SENAREC ; aucune adresse n'est affichée tant qu'elle n'est pas validée.",
};
