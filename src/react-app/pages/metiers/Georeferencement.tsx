import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Compass, CheckCircle } from "@phosphor-icons/react";

export function Georeferencement() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHero
        title="Géoréférencement"
        subtitle="Levés topographiques de haute précision pour intégrer vos réseaux dans un système de coordonnées géographiques (RGF93-CC)."
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mt-12">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
              <p>
                Le géoréférencement permet de positionner spatialement vos réseaux dans un système de coordonnées national (RGF93 en France). Cette étape est indispensable pour la mise à jour des plans et la pérennité de l'information géographique.
              </p>
              <p>
                Nos géomètres-topographes utilisent des équipements de dernière génération pour garantir une précision centimétrique :
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <Compass size={32} className="text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">GPS / GNSS</h3>
                    <p className="text-sm text-muted-foreground">
                      Positionnement par satellite en temps réel (RTK) pour les zones dégagées.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <Compass size={32} className="text-secondary shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Station Totale</h3>
                    <p className="text-sm text-muted-foreground">
                      Mesures optiques de haute précision pour les environnements urbains denses ou couverts.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">Livrables</h3>
              <ul className="space-y-4">
                {[
                  "Plans topographiques géoréférencés (DWG, DXF, SHP)",
                  "Fichiers de points (CSV, TXT)",
                  "Modèles Numériques de Terrain (MNT)",
                  "Intégration directe dans votre SIG"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="text-primary" size={20} weight="fill" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
