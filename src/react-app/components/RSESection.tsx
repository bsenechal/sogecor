import { useState } from "react";
import {
  Leaf,
  Recycle,
  Users,
  Heart,
  TreeEvergreen,
  CarSimple,
} from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/SectionHeading";
import aiprLogo from "@/assets/images/aipr.webp";
import tstLogo from "@/assets/images/certif-ctst.webp";
import bureauVeritasLogo from "@/assets/images/bureau-veritas.webp";
import adntLogo from "@/assets/images/certif-adnt.webp";

const rseCommitments = [
  {
    icon: Leaf,
    title: "Préservation de l'environnement",
    description:
      "Nous privilégions des méthodes d'intervention respectueuses de l'environnement, limitant l'impact sur les sols, les infrastructures existantes et les milieux urbains.",
    features: [
      "Techniques de détection non intrusives",
      "Utilisation de peintures exemptes de métaux lourds et substances dangereuses",
      "Réduction des nuisances et des contraintes liées à la coactivité et à l'environnement urbain",
    ],
  },
  {
    icon: Recycle,
    title: "Gestion responsable des ressources",
    description:
      "Nous adoptons une approche responsable dans la gestion de nos activités, visant à optimiser l'utilisation des ressources et à réduire l'empreinte environnementale de nos interventions.",
    features: [
      "Optimisation des tournées et des interventions",
      "Réduction, gestion et tri des déchets issus des interventions",
      "Production de données directement exploitables, dans des formats adaptés à vos outils",
    ],
  },
  {
    icon: Users,
    title: "Engagement humain et sécurité",
    description:
      "Nous accordons une importance centrale à la sécurité et à la montée en compétences de nos équipes, en assurant des interventions maîtrisées et conformes aux exigences réglementaires.",
    features: [
      "Formation continue de nos équipes",
      "Respect des exigences du décret DT-DICT et des contraintes liées aux réseaux",
      "Organisation des interventions garantissant la sécurité et la fluidité du chantier",
    ],
  },
  {
    icon: Heart,
    title: "Proximité et engagement",
    description:
      "Nous garantissons disponibilité, réactivité et un accompagnement sur mesure à chaque étape de vos projets.",
    features: [
      "Disponibilité et réactivité des interlocuteurs",
      "Adaptation aux contraintes de coactivité",
      "Conseil et adaptation aux évolutions des projets",
    ],
  },
];

const environmentalImpacts = [
  {
    icon: TreeEvergreen,
    title: "Réduction des excavations",
    value: "75%",
    description:
      "de réduction des travaux de terrassement grâce à nos techniques précises",
  },
  {
    icon: CarSimple,
    title: "Déplacements optimisés",
    value: "40%",
    description:
      "de réduction des émissions CO2 par optimisation de nos tournées",
  },
];

function RSEFlipCard({
  icon: Icon,
  title,
  description,
  features,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      aria-pressed={flipped}
      aria-label={`${title} — ${flipped ? "masquer" : "afficher"} le détail`}
      style={{ perspective: "800px" }}
      className="h-72 w-full cursor-pointer text-left rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.55s ease",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Face avant — icône + titre */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-card border border-border/70 shadow-sm"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
            <Icon size={32} className="text-primary" />
          </div>
          <h4 className="text-xl font-semibold text-foreground leading-snug">
            {title}
          </h4>
        </div>

        {/* Face arrière — description + liste */}
        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute inset-0 flex flex-col justify-center p-7 rounded-2xl bg-foreground border border-primary/20"
        >
          <p className="text-sm text-background/70 leading-relaxed mb-4">
            {description}
          </p>
          <div className="space-y-3">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                <span className="text-sm text-background/80 leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
}

const certifications = [
  {
    logo: aiprLogo,
    name: "AIPR",
    description: "Autorisation d'intervention à proximité des réseaux.",
  },
  {
    logo: tstLogo,
    name: "TST",
    description:
      "Habilitation Travaux sous Tension, conforme aux exigences du Comité TST.",
  },
  {
    logo: bureauVeritasLogo,
    name: "Bureau Veritas",
    description:
      "Détection & géoréférencement certifiés, conformes aux normes en vigueur.",
  },
  {
    logo: adntLogo,
    name: "ADNT 3002",
    description:
      "Certification pour les interventions sur réseaux électriques.",
  },
];

export function RSESection() {
  return (
    <>
      <Section id="rse" className="bg-muted/40">
        <SectionHeading
          eyebrow="Engagement RSE"
          title={
            <>
              Notre engagement <span className="text-primary">responsable</span>
            </>
          }
          subtitle="Chez SOGECOR, nous menons nos interventions avec exigence et responsabilité, en intégrant les enjeux environnementaux, humains et opérationnels propres à chacun de vos projets."
        />

        {/* RSE Commitments — flip cards */}
        <div className="mb-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rseCommitments.map((commitment, index) => (
            <ScrollReveal key={index} direction="up" delay={0.08 * index}>
              <RSEFlipCard
                icon={commitment.icon}
                title={commitment.title}
                description={commitment.description}
                features={commitment.features}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Environmental Impact */}
        <ScrollReveal direction="up">
          <h3 className="mb-10 text-center text-2xl font-semibold text-foreground">
            Notre impact environnemental
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {environmentalImpacts.map((impact, index) => {
              const Icon = impact.icon;
              return (
                <ScrollReveal key={index} direction="up" delay={0.1 * index}>
                  <div className="flex h-full items-center gap-6 rounded-2xl border border-border bg-card p-8 shadow-soft">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon size={32} weight="duotone" />
                    </div>
                    <div>
                      <div className="text-4xl font-bold leading-none text-primary">
                        {impact.value}
                      </div>
                      <h4 className="mt-2 font-semibold text-foreground">
                        {impact.title}
                      </h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {impact.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </ScrollReveal>
      </Section>

      {/* Certifications */}
      <Section className="bg-background">
        <SectionHeading
          eyebrow="Certifications"
          title="Certifications & habilitations"
          subtitle="Nos accréditations métiers et garanties de conformité."
        />
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.name} direction="up" delay={0.08 * index}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 text-center shadow-soft transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-card">
                <div className="mb-5 flex h-28 items-center justify-center rounded-xl bg-muted/60">
                  <img
                    src={cert.logo}
                    alt={`Logo ${cert.name}`}
                    loading="lazy"
                    className="h-24 object-contain"
                  />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-foreground">
                  {cert.name}
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}
