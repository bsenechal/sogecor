import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Target, CheckCircle } from "@phosphor-icons/react";

export function Geodetection() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHero
        title="Géodétection"
        subtitle="Détection et localisation précise de tous types de réseaux enterrés (électriques, gaz, eau, télécoms...) sans fouilles destructives."
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mt-12">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
              <p>
                La géodétection est une étape cruciale pour garantir la sécurité des chantiers et la pérennité des infrastructures. Chez SOGECOR, nous utilisons des technologies de pointe pour identifier et cartographier les réseaux souterrains sans aucune intervention destructive.
              </p>
              <p>
                Nos équipes interviennent sur tous types de terrains (urbains, ruraux, industriels) pour localiser précisément les réseaux :
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <Target size={32} className="text-primary shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Réseaux Sensibles</h3>
                    <p className="text-sm text-muted-foreground">
                      Gaz, électricité haute et basse tension, matières dangereuses.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <Target size={32} className="text-secondary shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Réseaux Humides</h3>
                    <p className="text-sm text-muted-foreground">
                      Eau potable, assainissement, eaux pluviales, chauffage urbain.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <Target size={32} className="text-accent shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Télécoms & Fibre</h3>
                    <p className="text-sm text-muted-foreground">
                       Fibre optique, câbles téléphoniques, signalisation tricolore.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-muted/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">Nos Engagements</h3>
              <ul className="space-y-4">
                {[
                  "Précision de classe A (écart < 40cm)",
                  "Rapport d'investigation détaillé",
                  "Conformité à la réglementation DT-DICT",
                  "Sécurisation immédiate des zones de travaux"
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
