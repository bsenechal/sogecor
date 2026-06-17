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
import { Card, CardContent } from "@/components/ui/card";
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

export function RSESection() {
  return (
    <>
      <section id="rse" className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <ScrollReveal direction="up" className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Notre Engagement{" "}
                <span className="text-primary">Responsable</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Chez SOGECOR, nous menons nos interventions avec exigence et
                responsabilité, en intégrant les enjeux environnementaux,
                humains et opérationnels propres à chacun de vos projets.
              </p>
            </ScrollReveal>

            {/* RSE Commitments — flip cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {rseCommitments.map((commitment, index) => (
                <ScrollReveal key={index} direction="up" delay={0.1 * index}>
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
            <ScrollReveal direction="up" delay={0.2} className="mb-16">
              <h3 className="text-2xl font-semibold text-foreground text-center mb-12">
                Notre Impact Environnemental
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {environmentalImpacts.map((impact, index) => {
                  const Icon = impact.icon;
                  return (
                    <ScrollReveal
                      key={index}
                      direction="up"
                      delay={0.1 * index}
                      className="h-full"
                    >
                      <Card className="text-center hover:shadow-md transition-shadow bg-white border-border/70 h-full">
                        <CardContent className="p-8">
                          <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <Icon size={32} className="text-primary" />
                          </div>
                          <div className="text-4xl font-bold text-primary mb-2">
                            {impact.value}
                          </div>
                          <h4 className="font-semibold text-foreground mb-3">
                            {impact.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {impact.description}
                          </p>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Certifications — fond blanc */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="text-center mb-10">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Certifications & habilitations
                </h3>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Nos accréditations métiers et garanties de conformité.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-xl transition-all duration-300 h-full border border-border/70">
                  <CardContent className="p-6">
                    <div className="mb-6 flex items-center justify-center">
                      <img
                        src={aiprLogo}
                        alt="Logo AIPR"
                        loading="lazy"
                        className="h-32 object-contain"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      AIPR
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Autorisation d'intervention à proximité des réseaux.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 h-full border border-border/70">
                  <CardContent className="p-6">
                    <div className="mb-6 flex items-center justify-center">
                      <img
                        src={tstLogo}
                        alt="Logo TST"
                        loading="lazy"
                        className="h-32 object-contain"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      TST
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Habilitation Travaux sous Tension (TST) pour des
                      interventions conformes aux exigences du Comité TST.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 h-full border border-border/70">
                  <CardContent className="p-6">
                    <div className="mb-6 flex items-center justify-center">
                      <img
                        src={bureauVeritasLogo}
                        alt="Logo Bureau Veritas"
                        loading="lazy"
                        className="h-32 object-contain"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Bureau Veritas
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Détection & géoréférencement certifiés, conformes aux
                      normes en vigueur.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl transition-all duration-300 h-full border border-border/70">
                  <CardContent className="p-6">
                    <div className="mb-6 flex items-center justify-center">
                      <img
                        src={adntLogo}
                        alt="Certification ADNT 3002"
                        loading="lazy"
                        className="h-32 object-contain"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      ADNT 3002
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Certification ADNT 3002 pour les interventions sur réseaux
                      électriques.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
