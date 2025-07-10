export interface Diagnostic {
  slug: string;
  title: string;
  description: string;
  icon: string;
  secteur: string;
  immeubles: string;
  transactions: string[]; // <--- corrigé
  usages: string;
  parties: string;
  validite: string;
  sanctions: string;
  pourquoi: string;
  quand: string;
  comment: string;
}

export const diagnostics: Diagnostic[] = [
  {
    slug: "dpe",
    title: "Diagnostic de Performance Énergétique (DPE)",
    description: "Évalue la consommation d’énergie et les émissions de gaz à effet de serre d’un bien immobilier.",
    icon: "/icons/dpe.webp",
    secteur: "Obligatoire sur tout le territoire français, sans restriction régionale.",
    immeubles: "Tous types de bâtiments, maisons individuelles, appartements.",
    transactions: ["Vente", "Location"],
    usages: "Habitation principale, secondaire, bureaux, commerces.",
    parties: "Parties privatives.",
    validite: "10 ans (sauf si travaux importants).",
    sanctions: "Possibilité d’annulation du bail ou de la vente, amendes pour fausse déclaration.",
    pourquoi: `Le Diagnostic de Performance Énergétique (DPE) est essentiel pour informer les acquéreurs ou locataires sur la performance énergétique d’un bien immobilier et ses émissions de gaz à effet de serre. Il permet de valoriser un logement économe et de sensibiliser aux économies d’énergie. Ce diagnostic est également un outil clé pour la transition énergétique et la lutte contre le changement climatique.`,
    quand: `Le DPE est obligatoire en cas de vente ou de location d’un logement en France, dès la mise en annonce. Il doit être présenté lors des visites et annexé au compromis de vente ou au bail de location.`,
    comment: `Un diagnostiqueur certifié mesure les caractéristiques du bâti, de l’isolation, du chauffage et calcule une étiquette énergie (A à G). Il fournit également des recommandations pour améliorer la performance énergétique.`
  },
  {
    slug: "amiante",
    title: "Diagnostic Amiante",
    description: "Vérifie la présence d’amiante dans les matériaux et produits des bâtiments construits avant 1997.",
    icon: "/icons/amiante.webp",
    secteur: "Obligatoire sur tout le territoire pour les biens construits avant juillet 1997.",
    immeubles: "Maisons, appartements, immeubles collectifs, parties communes.",
    transactions: ["Vente"],
    usages: "Habitation, locaux professionnels, commerces.",
    parties: "Privatives et communes.",
    validite: "Illimitée en cas d’absence d’amiante, 3 ans si présence avec obligation de contrôle.",
    sanctions: "Annulation de la vente ou engagement de responsabilité du vendeur.",
    pourquoi: `Le Diagnostic Amiante est indispensable pour protéger la santé des occupants et des travailleurs. L’amiante, longtemps utilisé pour ses qualités isolantes, est hautement cancérigène. Ce diagnostic sécurise la transaction et prévient les risques liés à l’inhalation de fibres d’amiante.`,
    quand: `Ce diagnostic est obligatoire avant la mise en vente d’un bien dont le permis de construire a été délivré avant le 1er juillet 1997.`,
    comment: `Le diagnostiqueur inspecte visuellement les matériaux potentiellement amiantés et peut prélever des échantillons analysés en laboratoire.`
  },
  {
    slug: "plomb",
    title: "Diagnostic Plomb (CREP)",
    description: "Recherche la présence de plomb dans les peintures des biens construits avant 1949.",
    icon: "/icons/plomb.webp",
    secteur: "Obligatoire sur tout le territoire pour les biens construits avant 1949.",
    immeubles: "Maisons et appartements.",
    transactions: ["Vente", "Location"],
    usages: "Habitation.",
    parties: "Parties privatives et communes.",
    validite: "1 an pour la vente, 6 ans pour la location.",
    sanctions: "Responsabilité du bailleur ou vendeur engagée en cas d’intoxication au plomb (saturnisme).",
    pourquoi: `Le diagnostic plomb protège contre les risques d’intoxication au plomb, notamment chez les enfants. Présent dans les anciennes peintures, le plomb peut provoquer des troubles graves.`,
    quand: `Il est obligatoire avant toute vente ou location d’un bien construit avant 1949.`,
    comment: `Le diagnostiqueur utilise un appareil à fluorescence X pour mesurer la concentration en plomb dans les revêtements.`
  },
  {
    slug: "gaz",
    title: "Diagnostic Gaz",
    description: "Vérifie la sécurité des installations intérieures de gaz de plus de 15 ans.",
    icon: "/icons/gaz.webp",
    secteur: "Obligatoire sur tout le territoire pour les installations intérieures de plus de 15 ans.",
    immeubles: "Maisons et appartements.",
    transactions: ["Vente", "Location"],
    usages: "Habitation.",
    parties: "Parties privatives.",
    validite: "3 ans pour la vente, 6 ans pour la location.",
    sanctions: "Engagement de la responsabilité du vendeur ou bailleur en cas d’accident.",
    pourquoi: `Le diagnostic gaz vise à protéger les occupants contre les risques d’explosion, d’incendie ou d’intoxication au monoxyde de carbone.`,
    quand: `Il est obligatoire pour les biens équipés d’une installation de gaz de plus de 15 ans.`,
    comment: `Le diagnostiqueur contrôle la tuyauterie, la ventilation et les appareils alimentés en gaz.`
  },
  {
    slug: "electricite",
    title: "Diagnostic Électricité",
    description: "Contrôle la conformité et la sécurité de l’installation électrique intérieure de plus de 15 ans.",
    icon: "/icons/electricite.webp",
    secteur: "Obligatoire sur tout le territoire pour les installations électriques de plus de 15 ans.",
    immeubles: "Maisons et appartements.",
    transactions: ["Vente", "Location"],
    usages: "Habitation.",
    parties: "Parties privatives.",
    validite: "3 ans pour la vente, 6 ans pour la location.",
    sanctions: "Engagement de la responsabilité du vendeur ou bailleur en cas d’accident.",
    pourquoi: `Le diagnostic électricité permet de prévenir les risques d’électrocution, d’incendie et d’électrisation.`,
    quand: `Il est obligatoire pour tout bien dont l’installation électrique a plus de 15 ans.`,
    comment: `Le diagnostiqueur inspecte le tableau électrique, les prises et vérifie la mise à la terre.`
  },
  {
    slug: "termites",
    title: "Diagnostic Termites",
    description: "Détecte la présence de termites dans les zones déclarées infestées par arrêté préfectoral.",
    icon: "/icons/termites.webp",
    secteur: "Uniquement dans les zones délimitées par arrêté préfectoral.",
    immeubles: "Maisons, appartements, immeubles collectifs.",
    transactions: ["Vente"],
    usages: "Habitation, professionnel, commercial.",
    parties: "Parties privatives et communes.",
    validite: "6 mois.",
    sanctions: "Responsabilité du vendeur engagée pour vice caché.",
    pourquoi: `Le diagnostic termites prévient les dégradations structurelles causées par ces insectes xylophages.`,
    quand: `Obligatoire avant la vente dans les zones à risque définies par arrêté préfectoral.`,
    comment: `Le diagnostiqueur inspecte visuellement les zones boisées et prend des sondages.`
  },
  {
    slug: "erp",
    title: "État des Risques et Pollutions (ERP)",
    description: "Informe des risques naturels, miniers, technologiques et pollutions du sol.",
    icon: "/icons/erp.webp",
    secteur: "Obligatoire dans toutes les communes à risques (arrêtés préfectoraux).",
    immeubles: "Tous biens immobiliers.",
    transactions: ["Vente", "Location"],
    usages: "Habitation, professionnel, commercial.",
    parties: "Parties privatives.",
    validite: "6 mois.",
    sanctions: "Annulation possible de la transaction ou réduction du prix.",
    pourquoi: `L’ERP informe les acquéreurs et locataires des risques auxquels le bien est exposé (inondations, séismes, pollution industrielle, radon…).`,
    quand: `Il est obligatoire dès la mise en vente ou en location, dans les zones à risques définies.`,
    comment: `Le diagnostiqueur consulte les arrêtés préfectoraux et établit un état précis des risques applicables au bien.`
  },
  {
    slug: "carrez",
    title: "Mesurage Loi Carrez",
    description: "Mesure précise de la surface privative d’un lot en copropriété.",
    icon: "/icons/carrez.webp",
    secteur: "Obligatoire sur tout le territoire français dès lors que le bien est en copropriété.",
    immeubles: "Lots en copropriété (habitation, commerce, bureau).",
    transactions: ["Vente"],
    usages: "Habitation, professionnel et commercial.",
    parties: "Parties privatives uniquement.",
    validite: "Illimitée tant qu’aucune modification n’a été apportée au bien.",
    sanctions: "Réduction du prix de vente si la surface réelle est inférieure de plus de 5 % à celle annoncée.",
    pourquoi: `Le mesurage Loi Carrez sécurise la transaction en garantissant à l’acheteur la surface privative exacte du bien vendu en copropriété. Une erreur peut coûter cher au vendeur si elle dépasse les 5 %.`,
    quand: `Le mesurage Loi Carrez est obligatoire pour toute vente d’un lot en copropriété, quelle que soit la destination du bien.`,
    comment: `Le diagnostiqueur mesure avec précision la surface privative en excluant les surfaces non comptabilisables (caves, balcons, espaces inférieurs à 1,80 m…). Un certificat est remis et annexé à la promesse de vente.`
  }
];
