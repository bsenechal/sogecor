import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Blueprint, CheckCircle } from "@phosphor-icons/react";

export function BureauEtudes() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHero
        title="Bureau d'Études"
        subtitle="Réalisation de plans de récolement, mise à jour de SIG et dossiers d'ouvrages exécutés (DOE) conformes à la réglementation."
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mt-12">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
              <p>
                Notre bureau d'études transforme les données terrain en documents exploitables et normés. Nous assurons la conformité réglementaire de vos projets et facilitons la gestion de votre patrimoine.
              </p>
              <p>
                De la phase projet à la réception des travaux, nous vous accompagnons dans la production documentaire :
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <Blueprint size={32} className="text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Plans de Récolement</h3>
                    <p className="text-sm text-muted-foreground">
                      Cartographie précise des ouvrages après travaux (classe A).
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <Blueprint size={32} className="text-secondary shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Mise à jour SIG</h3>
                    <p className="text-sm text-muted-foreground">
                      Intégration des nouvelles données dans votre Système d'Information Géographique.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">Expertise Réglementaire</h3>
              <ul className="space-y-4">
                {[
                  "Conformité à la réforme anti-endommagement",
                  "Classement de précision des ouvrages (A, B, C)",
                  "Dossiers d'Ouvrages Exécutés (DOE)",
                  "Assistance à maîtrise d'ouvrage (AMO)"
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
