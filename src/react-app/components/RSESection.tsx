import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Leaf,
  Recycle,
  Users,
  Heart,
  TreeEvergreen,
  CarSimple,
} from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/ScrollReveal";

export function RSESection() {
  const rseCommitments = [
    {
      icon: Leaf,
      title: "Respect de l'Environnement",
      description:
        "Nos méthodes de détection non invasives préservent l'environnement et limitent les excavations inutiles.",
      features: [
        "Techniques non destructives",
        "Réduction des déchets",
        "Préservation des sols",
      ],
    },
    {
      icon: Recycle,
      title: "Économie Circulaire",
      description:
        "Nous privilégions la réutilisation et le recyclage de nos équipements pour minimiser notre impact.",
      features: [
        "Matériel reconditionné",
        "Recyclage des composants",
        "Durabilité des équipements",
      ],
    },
    {
      icon: Users,
      title: "Responsabilité Sociale",
      description:
        "Formation continue de nos équipes et partenariats avec les acteurs locaux du territoire.",
      features: [
        "Formation certifiée",
        "Emploi local",
        "Partenariats durables",
      ],
    },
    {
      icon: Heart,
      title: "Engagement Communautaire",
      description:
        "Soutien aux initiatives locales et participation à l'amélioration de notre territoire.",
      features: [
        "Actions citoyennes",
        "Soutien associatif",
        "Développement local",
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

  return (
    <section id="rse" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Notre Engagement <span className="text-primary">Responsable</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              SOGECOR s'engage dans une démarche de responsabilité sociétale et
              environnementale, au service d'un développement durable et
              respectueux de notre territoire.
            </p>
          </ScrollReveal>

          {/* RSE Commitments */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {rseCommitments.map((commitment, index) => {
              const Icon = commitment.icon;
              return (
                <ScrollReveal
                  key={index}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={0.2 * index}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary h-full">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon size={24} className="text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">
                            {commitment.title}
                          </CardTitle>
                          <p className="text-muted-foreground leading-relaxed">
                            {commitment.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {commitment.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Environmental Impact */}
          <ScrollReveal direction="up" delay={0.2} className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground text-center mb-12">
              Notre Impact Environnemental
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {environmentalImpacts.map((impact, index) => {
                const Icon = impact.icon;
                return (
                  <ScrollReveal key={index} direction="up" delay={0.1 * index}>
                    <Card className="text-center hover:shadow-md transition-shadow bg-card/50">
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

          {/* Additional Commitment */}
          <ScrollReveal direction="up" delay={0.4}>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Notre Engagement Continu
                </h3>
                <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                  Nous nous engageons à améliorer continuellement nos pratiques,
                  à réduire notre empreinte environnementale et à contribuer
                  positivement au développement durable de notre région.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge variant="secondary" className="text-sm">
                    ISO 14001
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    Certification Qualité
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    Formation Continue
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    Innovation Durable
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
