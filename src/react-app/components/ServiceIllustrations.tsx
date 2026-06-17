/**
 * Illustrations « à plat » sur-mesure pour les cartes d'expertise.
 * Dessins descriptifs (pas de simples icônes) aux couleurs de la marque,
 * pour que l'utilisateur identifie concrètement chaque prestation.
 */

const svgProps = {
  viewBox: "0 0 200 150",
  fill: "none" as const,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  className: "h-36 w-auto",
};

/** Géo-détection : un locateur scanne un réseau enterré (signal → point détecté). */
export function GeoDetectionIllustration() {
  return (
    <svg {...svgProps}>
      {/* Sol */}
      <path
        d="M20 100 H180 V132 a8 8 0 0 1 -8 8 H28 a8 8 0 0 1 -8 -8 Z"
        className="fill-primary/5"
      />
      <line
        x1="20"
        y1="100"
        x2="180"
        y2="100"
        className="stroke-primary/30"
        strokeWidth="3"
        strokeDasharray="2 8"
      />
      {/* Câble secondaire enterré */}
      <line
        x1="40"
        y1="137"
        x2="160"
        y2="137"
        className="stroke-primary/25"
        strokeWidth="4"
        strokeDasharray="2 10"
      />
      {/* Réseau principal enterré */}
      <line
        x1="34"
        y1="123"
        x2="166"
        y2="123"
        className="stroke-primary/40"
        strokeWidth="10"
      />
      {/* Point détecté */}
      <circle cx="120" cy="123" r="9" className="fill-card stroke-primary" strokeWidth="3" />
      <circle cx="120" cy="123" r="3" className="fill-primary" />
      {/* Ondes de détection */}
      <path d="M106 105 Q120 117 134 105" className="stroke-primary" strokeWidth="3" />
      <path d="M112 101 Q120 108 128 101" className="stroke-primary/70" strokeWidth="3" />
      {/* Locateur / canne de détection */}
      <line x1="120" y1="42" x2="120" y2="95" className="stroke-primary" strokeWidth="5" />
      <circle cx="120" cy="95" r="4" className="fill-primary" />
      <rect x="104" y="28" width="32" height="18" rx="6" className="fill-primary" />
      <line x1="111" y1="37" x2="129" y2="37" className="stroke-card/80" strokeWidth="3" />
    </svg>
  );
}

/** Cartographie & implantation : carte dépliable avec tracé et repères au sol. */
export function CartographyIllustration() {
  return (
    <svg {...svgProps}>
      {/* Carte (dépliant) */}
      <path
        d="M34 42 L80 34 L120 42 L166 34 V110 L120 118 L80 110 L34 118 Z"
        className="fill-primary/5 stroke-primary"
        strokeWidth="3"
      />
      {/* Plis */}
      <line x1="80" y1="34" x2="80" y2="110" className="stroke-primary/30" strokeWidth="2.5" strokeDasharray="4 5" />
      <line x1="120" y1="42" x2="120" y2="118" className="stroke-primary/30" strokeWidth="2.5" strokeDasharray="4 5" />
      {/* Tracé / itinéraire */}
      <path
        d="M58 94 C72 78 96 90 104 72 S140 58 148 60"
        className="stroke-primary"
        strokeWidth="3"
        strokeDasharray="2 7"
      />
      {/* Repère de départ */}
      <path d="M58 96 C49 82 49 66 58 66 C67 66 67 82 58 96 Z" className="fill-primary" />
      <circle cx="58" cy="77" r="4" className="fill-card" />
      {/* Repère d'arrivée */}
      <path d="M148 60 C139 46 139 30 148 30 C157 30 157 46 148 60 Z" className="fill-primary" />
      <circle cx="148" cy="41" r="4" className="fill-card" />
    </svg>
  );
}

/** Conception d'études : un plan en cours de dessin (feuille + plan + crayon). */
export function StudyDesignIllustration() {
  return (
    <svg {...svgProps}>
      {/* Feuille */}
      <rect x="40" y="24" width="108" height="106" rx="8" className="fill-card stroke-primary" strokeWidth="3" />
      {/* Cartouche / titres */}
      <line x1="54" y1="40" x2="98" y2="40" className="stroke-primary/40" strokeWidth="3" />
      <line x1="54" y1="50" x2="80" y2="50" className="stroke-primary/30" strokeWidth="3" />
      {/* Plan dessiné (VRD) */}
      <path d="M54 70 H114 V114 H54 Z" className="stroke-primary/50" strokeWidth="2.5" />
      <path d="M82 70 V114 M54 94 H82" className="stroke-primary/50" strokeWidth="2.5" />
      <circle cx="98" cy="94" r="5" className="stroke-primary/50" strokeWidth="2.5" />
      {/* Crayon en train de tracer */}
      <g transform="rotate(-32 150 96)">
        <rect x="108" y="90" width="44" height="12" rx="2" className="fill-primary" />
        <rect x="100" y="90" width="8" height="12" className="fill-primary/50" />
        <rect x="92" y="90" width="8" height="12" rx="2" className="fill-primary/30" />
        <path d="M152 90 L168 96 L152 102 Z" className="fill-foreground" />
        <path d="M163.5 93.7 L168 96 L163.5 98.3 Z" className="fill-card" />
      </g>
    </svg>
  );
}

/** Marquage-piquetage : balisage chantier (cône + marquage au sol + jalon planté). */
export function MarkingIllustration() {
  return (
    <svg {...svgProps}>
      {/* Sol */}
      <path
        d="M16 106 H184 V134 a8 8 0 0 1 -8 8 H24 a8 8 0 0 1 -8 -8 Z"
        className="fill-primary/5"
      />
      <line x1="16" y1="106" x2="184" y2="106" className="stroke-primary/25" strokeWidth="3" />
      {/* Marquage peint au sol */}
      <path d="M44 124 H150" className="stroke-primary" strokeWidth="6" strokeDasharray="14 10" />
      {/* Croix de repère */}
      <path d="M104 118 l8 8 M112 118 l-8 8" className="stroke-primary/70" strokeWidth="3.5" />
      {/* Cône de chantier */}
      <rect x="50" y="100" width="40" height="8" rx="3" className="fill-primary" />
      <path d="M58 102 L82 102 L74 56 L66 56 Z" className="fill-primary" />
      <rect x="64" y="50" width="12" height="8" rx="3" className="fill-primary" />
      <line x1="62" y1="84" x2="78" y2="84" className="stroke-card" strokeWidth="6" />
      <line x1="60" y1="94" x2="80" y2="94" className="stroke-card" strokeWidth="6" />
      {/* Jalon planté sur le point marqué */}
      <line x1="150" y1="124" x2="150" y2="62" className="stroke-primary" strokeWidth="4" />
      <path d="M150 62 L174 69 L150 82 Z" className="fill-primary" />
    </svg>
  );
}
