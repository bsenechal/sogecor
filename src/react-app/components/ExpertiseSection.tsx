import { ArrowUpRight } from "@phosphor-icons/react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import vlocImage from "@/assets/images/vloc.webp";
import gpsImage from "@/assets/images/gps.webp";
import mapsogecorImage from "@/assets/images/mapsogecor.webp";
import marquageConeImage from "@/assets/images/marquage-cone.webp";

const cards = [
  {
    img: vlocImage,
    alt: "Géo-détection des réseaux",
    label: "La géo-détection des réseaux",
    index: 0,
  },
  {
    img: gpsImage,
    alt: "Cartographie et implantation des réseaux",
    label: "La cartographie et l'implantation",
    index: 1,
  },
  {
    img: mapsogecorImage,
    alt: "Conception d'études",
    label: "La conception d'études",
    index: 2,
  },
  {
    img: marquageConeImage,
    alt: "Marquage-piquetage des réseaux",
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
    <Section id="expertise" className="bg-secondary/40">
      <SectionHeading
        eyebrow="Nos expertises"
        title="Notre savoir-faire de bout en bout"
        subtitle="De l'étude préalable à l'intervention terrain, quatre pôles de compétences au service de vos projets réseaux."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => (
          <ScrollReveal key={card.label} direction="up" delay={0.08 * i}>
            <button
              type="button"
              onClick={() => openServiceItem(card.index)}
              className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left shadow-soft transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={card.img}
                  alt={card.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 items-center justify-between gap-2 p-5">
                <h3 className="font-semibold leading-snug text-foreground">
                  {card.label}
                </h3>
                <ArrowUpRight
                  size={20}
                  weight="bold"
                  className="shrink-0 text-primary opacity-0 transition-all -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100"
                />
              </div>
            </button>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
