export interface Diagnostic {
  slug: string;
  title: string;
  description: string;
  icon: string;
  secteur: string;
  immeubles: string;
  transactions: string[];
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
    pourquoi: `
Le Diagnostic de Performance Énergétique (DPE) est un document clé pour informer sur la consommation théorique d’énergie et les émissions de gaz à effet de serre d’un logement. Il devient un atout commercial majeur : un bien performant se vend ou se loue plus facilement et à un meilleur prix, tandis qu’un bien mal classé attire moins de candidats et peut perdre de la valeur. Le DPE participe à la lutte contre le réchauffement climatique en sensibilisant aux économies d’énergie et en incitant à la rénovation énergétique.`,
    quand: `
Le DPE est obligatoire dès la mise en annonce d’une vente ou d’une location, avant toute visite et à annexer à la promesse de vente ou au bail. Il est également requis lors de travaux impactant la performance énergétique pour refléter la réalité après rénovation.`,
    comment: `
Le diagnostiqueur relève les caractéristiques thermiques du bâti et des équipements, puis les saisit dans un logiciel réglementé pour calculer l’étiquette énergie et climat. Il remet un rapport précis avec des recommandations pour améliorer la performance.`  
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
    pourquoi: `
L’amiante est un matériau cancérigène interdit depuis 1997 mais encore présent dans de nombreux bâtiments anciens. Ce diagnostic permet d’évaluer les risques pour la santé des occupants et des travailleurs lors de travaux ou démolition. C’est un outil indispensable pour assurer la sécurité et la transparence lors d’une transaction.`,
    quand: `
Obligatoire avant la mise en vente d’un bien construit avant juillet 1997. Il est conseillé d’en disposer même en dehors d’une transaction si des travaux sont envisagés.`,
    comment: `
Le diagnostiqueur inspecte visuellement les matériaux et effectue des prélèvements analysés en laboratoire pour détecter la présence d’amiante. Un rapport précise les zones à risque et les éventuelles obligations de surveillance ou de retrait.`  
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
    pourquoi: `
Le diagnostic plomb est essentiel pour prévenir le saturnisme chez les enfants et les femmes enceintes. Très présent dans les peintures anciennes, le plomb peut être ingéré ou inhalé sous forme de poussières et provoquer de graves troubles de santé.`,
    quand: `
Obligatoire avant la vente ou la location de tout bien construit avant 1949.`,
    comment: `
Le diagnostiqueur utilise un appareil à fluorescence X pour mesurer la teneur en plomb des revêtements et identifie les zones dangereuses nécessitant une rénovation.`  
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
    pourquoi: `
Ce diagnostic protège contre les risques d’explosion, d’incendie et d’intoxication au monoxyde de carbone dus à des installations vétustes ou défectueuses. Il assure la sécurité des occupants.`,
    quand: `
Obligatoire pour toute transaction (vente ou location) si l’installation a plus de 15 ans.`,
    comment: `
Le diagnostiqueur contrôle visuellement et teste les appareils, la tuyauterie, la ventilation et les détecteurs pour vérifier la conformité aux normes de sécurité.`  
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
    pourquoi: `
Le diagnostic électricité prévient les accidents domestiques comme les électrocutions, incendies ou courts‑circuits causés par des installations anciennes ou non conformes.`,
    quand: `
Obligatoire pour toute transaction si l’installation a plus de 15 ans.`,
    comment: `
Le diagnostiqueur vérifie la mise à la terre, le disjoncteur, les fusibles, la présence de différentiels et l’état général du tableau et des prises.`  
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
    pourquoi: `
Les termites fragilisent la structure en bois des bâtiments. Ce diagnostic protège l’acheteur d’un vice caché et permet d’agir rapidement pour éradiquer l’infestation.`,
    quand: `
Obligatoire pour toute vente dans une zone à risque définie par arrêté préfectoral.`,
    comment: `
Le diagnostiqueur inspecte visuellement et sonde les bois pour détecter les galeries et traces d’infestation.`  
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
    pourquoi: `
L’ERP informe sur les risques naturels (inondations, séismes), technologiques (usines, barrages), miniers et pollutions des sols. Il protège le futur occupant en l’avertissant des contraintes environnementales locales.`,
    quand: `
Obligatoire dès la mise en vente ou en location dans les zones couvertes par un plan de prévention.`,
    comment: `
Le diagnostiqueur consulte les arrêtés préfectoraux et établit une cartographie des risques affectant le bien.`  
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
    pourquoi: `
Le mesurage Loi Carrez garantit la transparence sur la surface réelle du bien en copropriété. Un métrage erroné peut entraîner une réclamation de l’acquéreur et une baisse de prix.`,
    quand: `
Obligatoire avant toute mise en vente d’un bien en copropriété.`,
    comment: `
Le diagnostiqueur mesure la surface habitable en déduisant caves, balcons et espaces inférieurs à 1,80 mètre.`  
  },
];
