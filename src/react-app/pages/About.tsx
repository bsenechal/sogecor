import { Users, Target, Medal, TrendUp } from "@phosphor-icons/react";
import { PageHero } from "@/components/PageHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Précision",
      description:
        "Nous utilisons des technologies de pointe pour garantir une localisation précise au centimètre près.",
    },
    {
      icon: Users,
      title: "Expertise",
      description:
        "Notre équipe cumule plus de 15 ans d'expérience dans la détection de réseaux souterrains.",
    },
    {
      icon: Medal,
      title: "Qualité",
      description:
        "Nous nous engageons à fournir des services de la plus haute qualité, conformes aux normes en vigueur.",
    },
    {
      icon: TrendUp,
      title: "Innovation",
      description:
        "Nous investissons continuellement dans les dernières technologies pour améliorer nos services.",
    },
  ];

  return (
    <div className="bg-background min-h-screen pb-20">
      <PageHero
        title="Qui sommes-nous ?"
        subtitle="Votre Partenaire de Confiance en Géolocalisation. Depuis notre création, SOGECOR s'est imposée comme une référence dans le domaine de la détection de réseaux souterrains."
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Company Story */}
            <ScrollReveal direction="left" delay={0.2}>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Notre Histoire
              </h3>
              <div className="space-y-4 text-muted-foreground prose prose-lg dark:prose-invert">
                <p>
                  Fondée par des experts en géophysique, SOGECOR a développé une
                  expertise unique dans la détection non destructive de réseaux
                  souterrains. Notre approche combine différentes technologies
                  de pointe avec une connaissance approfondie des sols et des
                  infrastructures.
                </p>
                <p>
                  Nous intervenons pour une clientèle diversifiée :
                  collectivités territoriales, entreprises de BTP, bureaux
                  d'études, particuliers et syndics de copropriété. Chaque
                  projet bénéficie d'une approche personnalisée et d'un suivi
                  rigoureux.
                </p>
                <p>
                  Notre mission est de rendre visible l'invisible, en
                  cartographiant précisément les réseaux souterrains pour
                  sécuriser vos travaux et optimiser vos projets.
                </p>
              </div>
            </ScrollReveal>

            {/* Mission & Vision */}
            <ScrollReveal direction="right" delay={0.4} className="space-y-6">
              <Card className="border-primary/20 bg-card/50">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Notre Mission
                  </h4>
                  <p className="text-muted-foreground">
                    Fournir des services de détection géophysique de haute
                    précision pour sécuriser les travaux et prévenir les
                    dommages aux réseaux souterrains.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 bg-card/50">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Notre Vision
                  </h4>
                  <p className="text-muted-foreground">
                    Être le leader reconnu de la détection géoradar en France,
                    en proposant des solutions innovantes et fiables pour tous
                    types de projets.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 bg-card/50">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Nos Engagements
                  </h4>
                  <p className="text-muted-foreground">
                    Réactivité, précision, transparence et accompagnement
                    personnalisé pour garantir la réussite de vos projets.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Values Grid */}
          <ScrollReveal direction="up" delay={0.2}>
            <h3 className="text-2xl font-semibold text-foreground text-center mb-12">
              Nos Valeurs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <ScrollReveal key={index} direction="up" delay={0.1 * index}>
                    <Card className="text-center hover:shadow-lg transition-shadow h-full bg-card">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <Icon size={24} className="text-primary" />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground mb-3">
                          {value.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {value.description}
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
    </div>
  );
}
