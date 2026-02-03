import { ArrowRight, Target, Compass, Blueprint, MapPin } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ServicesTeaser() {
  const services = [
    {
      icon: Target,
      title: "Géodétection",
      description: "Détection et localisation précise de tous types de réseaux enterrés sans fouilles destructives.",
      path: "/metiers/geodetection",
      color: "text-primary",
      badge: "Technique",
    },
    {
      icon: Compass,
      title: "Géoréférencement",
      description: "Levés topographiques de haute précision et intégration en coordonnées géographiques.",
      path: "/metiers/georeferencement",
      color: "text-primary",
      badge: "Topographie",
    },
    {
      icon: Blueprint,
      title: "Bureau d'études",
      description: "Plans de récolement, mise à jour de SIG et dossiers d'ouvrages exéputes (DOE).",
      path: "/metiers/bureau-etudes",
      color: "text-secondary-foreground",
      badge: "Ingénierie",
    },
    {
      icon: MapPin,
      title: "Marquage / Piquetage",
      description: "Traçage au sol pour sécuriser vos phases de travaux et implantations.",
      path: "/metiers/marquage-piquetage",
      color: "text-accent-foreground",
      badge: "Sécurité",
    },
  ];

  return (
    <section id="nos-services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nos Domaines d'<span className="text-primary">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Une offre complète pour sécuriser et optimiser vos projets d'aménagement et de travaux.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 hover:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <Link to={service.path} className="block h-full cursor-pointer group">
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-border group-hover:border-primary/50 bg-card">
                    <CardHeader>
                      <div className={`w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-4 ${service.color} group-hover:bg-primary/10 transition-colors`}>
                        <Icon size={24} weight="duotone" />
                      </div>
                      <Badge variant="outline" className="w-fit mb-3">{service.badge}</Badge>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {service.description}
                      </p>
                      <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
             <p className="text-muted-foreground mb-4">Besoin d'une solution spécifique ?</p>
             <Button variant="outline" asChild>
                <Link to="/contact">Contactez-nous</Link>
             </Button>
        </div>
      </div>
    </section>
  );
}
