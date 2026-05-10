import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Crosshair, FileText, ShieldCheck, Factory, Buildings, House, Wrench, Plug, TrainSimple } from "@phosphor-icons/react";

export function ServicesSection() {
  const services = [
    {
      icon: Crosshair,
      title: "Cartographie de Réseaux",
      description:
        "Réalisation de plans précis et géoréférencés des réseaux existants pour sécuriser vos projets d’aménagement et de travaux.",
      features: [
        "Plans CAO/DAO exploitables",
        "Géoréférencement précis (classe A)",
        "Formats compatibles avec vos outils métiers",
      ],
      color: "accent",
    },
    {
      icon: FileText,
      title: "Études Géophysiques",
      description:
        "Analyse du sous-sol avant travaux pour anticiper les contraintes, identifier les anomalies et sécuriser vos opérations.",
      features: [
        "Analyse des structures et des sols",
        "Détection d’ouvrages et d’obstacles enterrés",
        "Aide à la décision et recommandations techniques",
      ],
      color: "secondary",
    },
    {
      icon: ShieldCheck,
      title: "Sécurisation de Chantiers",
      description:
        "Prévention des risques liés aux travaux à proximité des réseaux pour garantir la sécurité des intervenants et des infrastructures.",
      features: [
        "Marquage-piquetage au sol",
        "Intervention rapide sur site",
        "Accompagnement et suivi de chantier",
      ],
      color: "primary",
    },
  ];

  const sectors = [
    {
      icon: Factory,
      title: "Industrie",
      description: "Sites industriels, usines, entrepots, ...",
    },
    {
      icon: Buildings,
      title: "Collectivités",
      description: "Villes, départements, régions",
    },
    {
      icon: House,
      title: "Particuliers",
      description: "Copropriété, demandes individuels",
    },
    {
      icon: Wrench,
      title: "BTP",
      description: "TP : Entreprises de construction et de travaux publics",
    },
    {
      icon: Plug,
      title: "Gestionnaire de réseaux",
      description: "Electriques, Gaz, Telecoms, etc...",
    },
    {
      icon: TrainSimple,
      title: "Ferroviaire",
      description: "Gestionnaires de réseaux, entreprises ferroviaires",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
            <ScrollReveal direction="up" className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Notre expertise
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                SOGECOR vous accompagne à chaque étape de vos projets grâce à une gamme complète de prestations en détection, cartographie et étude des réseaux enterrés. Nous intervenons pour les collectivités, concessionnaires et acteurs des travaux publics, avec des solutions adaptées à chaque contexte.
              </p>
            </ScrollReveal>

            {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => {
              const Icon = service.icon;
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
                            {service.title}
                          </CardTitle>
                          <p className="text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
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

          {/* Sectors */}
          <ScrollReveal direction="up" delay={0.2} className="mb-16">
            <h3 className="text-2xl font-semibold text-foreground text-center mb-12">
              Secteurs d'Intervention
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sectors.map((sector, index) => {
                const Icon = sector.icon;
                return (
                  <ScrollReveal key={index} direction="up" delay={0.1 * index}>
                    <Card className="text-center hover:shadow-md transition-shadow h-full">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <Icon size={24} className="text-accent" />
                        </div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {sector.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {sector.description}
                        </p>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                );
              })}
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal direction="up" delay={0.4} className="text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Besoin d'Informations ?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez nos experts pour obtenir des informations sur nos
              services. Nous intervenons sur toute la France.
            </p>
            <Button size="lg" onClick={scrollToContact}>
              Nous Contacter
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
