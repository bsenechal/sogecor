import { Target, TrendUp, Handshake } from "@phosphor-icons/react";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SECTION_IDS } from "@/config/site";

const cards = [
  {
    Icon: Target,
    title: "Notre mission",
    body: "Rendre visible l'invisible, avec des rendus de qualité pour sécuriser vos travaux et optimiser vos projets.",
  },
  {
    Icon: TrendUp,
    title: "Notre ambition",
    body: "Devenir un acteur majeur dans l'étude, la détection et le référencement des réseaux en France, en proposant des solutions innovantes et fiables.",
  },
  {
    Icon: Handshake,
    title: "Nos engagements",
    body: "Réactivité de nos réponses, devis en moins de 24h, transparence des résultats et accompagnement de nos clients.",
  },
];

export function AboutSection() {
  return (
    <Section
      id={SECTION_IDS.aPropos}
      aria-labelledby="about-title"
      className="bg-background"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Colonne gauche — texte */}
        <ScrollReveal direction="left">
          <span className="eyebrow mb-4">À propos de SOGECOR</span>
          <h2
            id="about-title"
            className="fluid-h2 font-bold text-foreground"
          >
            Un bureau d'études dédié aux{" "}
            <span className="text-primary">réseaux souterrains</span>
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              SOGECOR est un bureau d'études spécialisé dans l'étude de réseaux
              de distribution, de géolocalisation et géoréférencement des
              ouvrages construits ou détectés.
            </p>
            <p>
              Nous intervenons pour une clientèle diversifiée : collectivités
              territoriales, entreprises de TP, entreprises ferroviaires,
              bureaux d'études, syndics de copropriété, promoteurs immobiliers,
              gestionnaires de réseaux et particuliers. Chaque projet bénéficie
              d'une approche personnalisée.
            </p>
          </div>
        </ScrollReveal>

        {/* Colonne droite — cartes */}
        <div className="flex flex-col gap-4">
          {cards.map(({ Icon, title, body }, i) => (
            <ScrollReveal key={title} direction="right" delay={0.1 + i * 0.1}>
              <article className="group flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon size={24} weight="duotone" />
                </div>
                <div>
                  <h3 className="mb-1.5 text-lg font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
