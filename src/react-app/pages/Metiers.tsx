import {
  MapPin,
  Compass,
  Blueprint,
  Target,
} from "@phosphor-icons/react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Metiers() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <div className="pt-32 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Nos <span className="text-primary">Métiers</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            SOGECOR déploie son expertise à travers quatre pôles d'excellence pour accompagner vos projets avec précision et sécurité.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Géodétection */}
          <div id="geodetection" className="scroll-mt-32">
            <ScrollReveal direction="left" delay={0.1}>
              <Card className="h-full border-primary/20 bg-card hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                    <Target size={32} weight="duotone" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Géodétection</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Détection et localisation précise de tous types de réseaux enterrés (électriques, gaz, eau, télécoms...) sans fouilles destructives.
                  </p>
                  <Badge variant="secondary">Classe A</Badge>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Géoréférencement */}
          <div id="georeferencement" className="scroll-mt-32">
            <ScrollReveal direction="right" delay={0.2}>
              <Card className="h-full border-primary/20 bg-card hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                     <Compass size={32} weight="duotone" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Géoréférencement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Levés topographiques de haute précision pour intégrer vos réseaux dans un système de coordonnées géographiques (RGF93-CC).
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Bureau d'Études */}
          <div id="bureau-etudes" className="scroll-mt-32">
            <ScrollReveal direction="left" delay={0.3}>
              <Card className="h-full border-secondary/20 bg-card hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-secondary-foreground">
                    <Blueprint size={32} weight="duotone" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Bureau d'Études</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Réalisation de plans de récolement, mise à jour de SIG et dossiers d'ouvrages exécutés (DOE) conformes à la réglementation.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Marquage / Piquetage */}
          <div id="marquage-piquetage" className="scroll-mt-32">
            <ScrollReveal direction="right" delay={0.4}>
              <Card className="h-full border-accent/20 bg-card hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent-foreground">
                    <MapPin size={32} weight="duotone" />
                  </div>
                  <CardTitle className="text-2xl font-bold">Marquage / Piquetage</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Traçage au sol des réseaux détectés et implantation des ouvrages futurs pour sécuriser vos phases de travaux.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
