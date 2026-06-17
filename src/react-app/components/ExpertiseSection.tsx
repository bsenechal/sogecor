import {
  ArrowUpRight,
  Waveform,
  MapTrifold,
  PencilRuler,
  TrafficCone,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";

const cards: {
  icon: Icon;
  label: string;
  index: number;
}[] = [
  {
    icon: Waveform,
    label: "La géo-détection des réseaux",
    index: 0,
  },
  {
    icon: MapTrifold,
    label: "La cartographie et l'implantation",
    index: 1,
  },
  {
    icon: PencilRuler,
    label: "La conception d'études",
    index: 2,
  },
  {
    icon: TrafficCone,
    label: "Le marquage-piquetage",
    index: 3,
  },
];

function openServiceItem(index: number) {
  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  window.dispatchEvent(new CustomEvent("openService", { detail: { index } }));
}

export function ExpertiseSection() {
  return (
    <Section
      id="expertise"
      aria-labelledby="expertise-title"
      className="bg-secondary/70"
    >
      <SectionHeading
        id="expertise-title"
        eyebrow="Nos expertises"
        title="Notre savoir-faire de bout en bout"
        subtitle="De l'étude préalable à l'intervention terrain, quatre pôles de compétences au service de vos projets réseaux."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => {
          const CardIcon = card.icon;
          return (
            <ScrollReveal key={card.label} direction="up" delay={0.08 * i}>
              <button
                type="button"
                onClick={() => openServiceItem(card.index)}
                className="group flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card"
              >
                <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-card to-secondary">
                  {/* Subtle decorative blob */}
                  <span
                    aria-hidden="true"
                    className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-125"
                  />
                  <span
                    aria-hidden="true"
                    className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm ring-1 ring-primary/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground group-hover:ring-primary/30"
                  >
                    <CardIcon size={40} weight="duotone" />
                  </span>
                </div>
                <div className="flex min-h-[5.5rem] items-center justify-between gap-3 border-t border-border/60 bg-secondary p-5 transition-colors duration-300 group-hover:bg-primary">
                  <h3 className="font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary-foreground">
                    {card.label}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    weight="bold"
                    className="shrink-0 text-primary transition-colors duration-300 group-hover:text-primary-foreground"
                  />
                </div>
              </button>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}
