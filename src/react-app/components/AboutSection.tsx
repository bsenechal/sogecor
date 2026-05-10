import { Users, Target, Medal, TrendUp } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const values = [
    {
      icon: Target,
      title: "Fiabilité et précision de nos données",
      description:
        "Nous produisons des données précises, fiables et exploitables, indispensables à la bonne réalisation des projets et à la prise de décision.",
    },
    {
      icon: Users,
      title: "Excellence opérationnelle",
      description:
        "Sur chacune de nos interventions, nos collaborateurs sont formés, habilités et préparés aux exigences du terrain.",
    },
    {
      icon: Medal,
      title: "Expertise technique",
      description:
        "Forts de notre expérience, nous apportons à nos clients des solutions adaptées et un accompagnement technique à forte valeur ajoutée.",
    },
    {
      icon: TrendUp,
      title: "Engagement client",
      description:
        "Nous accompagnons nos clients à chaque étape, avec réactivité, transparence, et sens du service.",
    },
    {
      icon: Target,
      title: "Sécurité des interventions",
      description:
        "La prévention des risques est au cœur de nos missions : nous sécurisons les chantiers en identifiant précisément les réseaux existants, les risques liés à la coactivité avec des tiers ou routiers.",
    },
    {
      icon: Users,
      title: "Responsabilité environnementale",
      description:
        "Nous intégrons les enjeux environnementaux dans nos études pour concevoir des projets durables et responsables.",
    },
  ];

  return (
    <section
      id="a-propos"
      className="py-20 lg:py-32 bg-blue-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Company Values */}
            <ScrollReveal direction="left" delay={0.2}>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Nos Valeurs
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  SOGECOR est un bureau d'études spécialisé dans l'étude de réseaux de distribution, de géolocalisation, et géoréférencement des ouvrages construits ou détectés.
                </p>
                <p>
                  Nous intervenons pour une clientèle diversifiée : collectivités territoriales, entreprises de TP, entreprises ferroviaires, bureaux d'études, syndics de copropriété, promoteurs immobiliers, gestionnaires de réseaux et même de particuliers. Chaque projet bénéficie d'une approche personnalisée pour répondre au mieux à vos attentes.
                </p>
              </div>
            </ScrollReveal>

            {/* Mission & Vision & Engagements */}
            <ScrollReveal direction="right" delay={0.4} className="space-y-6">
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Notre Mission
                  </h4>
                  <p className="text-muted-foreground">
                    Rendre visible l'invisible, avec des rendus de qualités pour sécuriser vos travaux et optimiser vos projets.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Notre Ambition
                  </h4>
                  <p className="text-muted-foreground">
                    Devenir un acteur majeur dans l'étude, la détection, et le référencement des réseaux en France. En proposant des solutions innovantes et fiables, nous mettons notre savoir-faire au service de vos réalisations.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    Nos Engagements
                  </h4>
                  <p className="text-muted-foreground">
                    <strong>Réactivité</strong> dans nos réponses • <strong>Un devis en moins de 24h</strong> • <strong>Transparence</strong> des résultats obtenus • <strong>Accompagnement</strong> de nos clients
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
                    <Card className="text-center hover:shadow-lg transition-shadow h-full">
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
    </section>
  );
}
