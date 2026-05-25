import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ShieldCheck, ChartBar, MagnifyingGlass, CurrencyEur, Scales, Handshake, ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/ScrollReveal";

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
      "Appuyez-vous sur des données précises et des plans exploitables pour sécuriser vos plans et vos choix techniques.",
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
    <section className="py-20 lg:py-32 bg-foreground/75">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Pourquoi faire appel à nous ?
          </h2>
          <p className="text-white/60 text-lg">
            + d'informations fiables · − de risques · + de sérénité sur vos chantiers
          </p>
        </ScrollReveal>

        {/* Carousel + flèches */}
        <div className="relative">
          {/* Flèche gauche */}
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label="Précédent"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white transition hover:bg-white/25 disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ArrowLeft size={18} weight="bold" />
          </button>

          {/* Viewport embla */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 sm:gap-6">
              {reasons.map(({ Icon, title, description }, i) => (
                <div
                  key={i}
                  className="flex-none w-[85%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/10 border border-white/15 h-full hover:bg-white/15 transition-colors">
                    <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mb-6 shrink-0">
                      <Icon size={36} className="text-primary" weight="thin" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                      {title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flèche droite */}
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            aria-label="Suivant"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white transition hover:bg-white/25 disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ArrowRight size={18} weight="bold" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Aller à la carte ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === selectedIndex ? "bg-primary w-6" : "bg-white/30 w-2.5"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
