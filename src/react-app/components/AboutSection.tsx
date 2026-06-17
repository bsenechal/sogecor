import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ScrollReveal";

const cards = [
  {
    title: "Notre Mission",
    body: "Rendre visible l'invisible, avec des rendus de qualité pour sécuriser vos travaux et optimiser vos projets.",
  },
  {
    title: "Notre Ambition",
    body: "Devenir un acteur majeur dans l'étude, la détection, et le référencement des réseaux en France. En proposant des solutions innovantes et fiables, nous mettons notre savoir-faire au service de vos réalisations.",
  },
  {
    title: "Nos Engagements",
    body: null,
  },
];

export function AboutSection() {
  return (
    <section id="a-propos" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl grid items-start gap-12 lg:grid-cols-2">
          {/* Colonne gauche — texte libre */}
          <ScrollReveal direction="left" delay={0.1}>
            <h2 className="mb-6 text-3xl sm:text-4xl font-bold text-foreground">
              À propos de <span className="text-primary">SOGECOR</span>
            </h2>
            <div className="space-y-4 text-foreground/75 leading-relaxed">
              <p>
                SOGECOR est un bureau d'études spécialisé dans l'étude de
                réseaux de distribution, de géolocalisation, et géoréférencement
                des ouvrages construits ou détectés.
              </p>
              <p>
                Nous intervenons pour une clientèle diversifiée : collectivités
                territoriales, entreprises de TP, entreprises ferroviaires,
                bureaux d'études, syndics de copropriété, promoteurs
                immobiliers, gestionnaires de réseaux et même des particuliers.
                Chaque projet bénéficie d'une approche personnalisée pour
                répondre au mieux à vos attentes.
              </p>
            </div>
          </ScrollReveal>

          {/* Colonne droite — cartes */}
          <div className="flex flex-col gap-4">
            {cards.map((card, i) => (
              <ScrollReveal key={i} direction="right" delay={0.15 + i * 0.1}>
                <Card className="border-l-4 border-l-primary bg-primary/5 shadow-sm">
                  <CardContent className="p-5">
                    <h4 className="mb-2 text-base font-semibold text-foreground">
                      {card.title}
                    </h4>
                    {card.body ? (
                      <p className="text-sm text-foreground/70">{card.body}</p>
                    ) : (
                      <p className="text-sm text-foreground/70">
                        <strong>Réactivité</strong> dans nos réponses ·{" "}
                        <strong>Devis en moins de 24h</strong> ·{" "}
                        <strong>Transparence</strong> des résultats ·{" "}
                        <strong>Accompagnement</strong> de nos clients
                      </p>
                    )}
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
