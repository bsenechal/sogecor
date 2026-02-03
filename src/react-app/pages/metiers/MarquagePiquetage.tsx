import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, CheckCircle } from "@phosphor-icons/react";

export function MarquagePiquetage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHero
        title="Marquage / Piquetage"
        subtitle="Traçage au sol des réseaux détectés et implantation des ouvrages futurs pour sécuriser vos phases de travaux."
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mt-12">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
              <p>
                Le marquage-piquetage est l'étape finale de matérialisation au sol. Il rend visible l'invisible pour les équipes de travaux, réduisant considérablement les risques d'accident et d'endommagement des réseaux.
              </p>
              <p>
                Nous intervenons avant le démarrage du chantier pour identifier les zones de vigilance :
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <MapPin size={32} className="text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Marquage Normalisé</h3>
                    <p className="text-sm text-muted-foreground">
                      Utilisation du code couleur normalisé (Rouge: Élec, Jaune: Gaz, Bleu: Eau...).
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <MapPin size={32} className="text-secondary shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Implantation Projet</h3>
                    <p className="text-sm text-muted-foreground">
                      Matérialisation des futurs ouvrages (bordures, voirie, bâtiments) selon les plans projet.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">Sécurité Chantier</h3>
              <ul className="space-y-4">
                {[
                  "Rédaction du Compte-Rendu de Marquage-Piquetage",
                  "Maintien du marquage pendant la durée des travaux",
                  "Sensibilisation des équipes terrain",
                  "Levée de doute en cas d'incertitude"
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
