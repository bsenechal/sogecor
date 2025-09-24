import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Buildings, CheckCircle, Medal, Target, Users } from "@phosphor-icons/react";

const services = [
  {
    title: "Conseil Stratégique",
    description:
      "Expertise et accompagnement pour optimiser votre stratégie d'entreprise et accélérer votre croissance.",
    icon: <Target className="w-8 h-8" />,
  },
  {
    title: "Gestion de Projet",
    description:
      "Pilotage complet de vos projets avec des méthodologies éprouvées et un suivi rigoureux.",
    icon: <CheckCircle className="w-8 h-8" />,
  },
  {
    title: "Développement Commercial",
    description:
      "Analyse de marché et stratégies de développement pour saisir de nouvelles opportunités.",
    icon: <Buildings className="w-8 h-8" />,
  },
  {
    title: "Accompagnement RH",
    description:
      "Développement des compétences et optimisation de la performance de vos équipes.",
    icon: <Users className="w-8 h-8" />,
  },
  {
    title: "Excellence Opérationnelle",
    description:
      "Optimisation des processus et amélioration continue pour une efficacité maximale.",
    icon: <Medal className="w-8 h-8" />,
  },
  {
    title: "Transformation Digitale",
    description:
      "Accompagnement dans votre évolution numérique et intégration des nouvelles technologies.",
    icon: <Buildings className="w-8 h-8" />,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-background" role="main">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Notre Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions adaptées à vos enjeux, portées par notre savoir-faire
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-l-4 border-l-primary/20" role="listitem">
              <CardHeader>
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary" aria-hidden="true">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
