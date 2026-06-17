import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ShieldCheck,
  ChartBar,
  MagnifyingGlass,
  CurrencyEur,
  Scales,
  Handshake,
  ArrowLeft,
  ArrowRight,
} from "@phosphor-icons/react";
import { SectionHeading } from "@/components/SectionHeading";

const reasons = [
  {
    Icon: ShieldCheck,
    title: "Sécurisez vos chantiers",
    description:
      "Réduisez les risques d'endommagement des réseaux et préparez vos interventions dans de meilleures conditions de sécurité.",
  },
  {
    Icon: ChartBar,
    title: "Fiabilisez vos études",
    description:
      "Appuyez-vous sur des données précises et des plans exploitables pour sécuriser vos choix techniques.",
  },
  {
    Icon: MagnifyingGlass,
    title: "Anticipez les contraintes terrain",
    description:
      "Identifiez en amont les zones sensibles et les réseaux existants pour limiter les imprévus au démarrage des travaux.",
  },
  {
    Icon: CurrencyEur,
    title: "Maîtrisez vos coûts et vos délais",
    description:
      "Moins d'aléas, moins de reprises, plus de visibilité sur l'organisation et le planning de votre chantier.",
  },
  {
    Icon: Scales,
    title: "Respectez vos obligations réglementaires",
    description:
      "Bénéficiez d'un accompagnement conforme aux exigences du décret anti-endommagement et des procédures DT-DICT.",
  },
  {
    Icon: Handshake,
    title: "Profitez d'un accompagnement global",
    description:
      "Détection, cartographie, études, implantation, marquage : nous vous accompagnons à chaque phase de votre projet.",
  },
];

export function WhyUsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative overflow-hidden bg-foreground py-20 lg:py-28">
      {/* Trame radar */}
      <div
        aria-hidden="true"
        className="radar-grid absolute inset-0 text-white opacity-[0.06]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="light"
          eyebrow="Pourquoi nous choisir"
          title="Pourquoi faire appel à nous ?"
          subtitle="+ d'informations fiables · − de risques · + de sérénité sur vos chantiers"
        />

        <div className="relative">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label="Précédent"
            className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-x-3 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-20"
          >
            <ArrowLeft size={18} weight="bold" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 sm:gap-6">
              {reasons.map(({ Icon, title, description }, i) => (
                <div
                  key={i}
                  className="flex-none basis-[85%] sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]"
                >
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-8 transition-colors hover:bg-white/10">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/20 text-primary ring-1 ring-primary/30">
                      <Icon size={28} weight="duotone" />
                    </div>
                    <h3 className="mb-3 text-lg font-semibold leading-snug text-white">
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/65">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            aria-label="Suivant"
            className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 translate-x-3 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-20"
          >
            <ArrowRight size={18} weight="bold" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Aller à la carte ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === selectedIndex ? "w-6 bg-primary" : "w-2.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
