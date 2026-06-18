import { ArrowRight, ShieldCheck, MapPin, Clock } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SECTION_IDS } from "@/config/site";
import { useScrollToSection } from "@/hooks";
import backgroundVideo from "@/assets/images/background-video.mp4";
import heroPoster from "@/assets/images/hero-poster.webp";

const trustItems = [
  { Icon: ShieldCheck, label: "Conforme DT-DICT" },
  { Icon: MapPin, label: "Intervention France entière" },
  { Icon: Clock, label: "Devis sous 24h" },
];

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section
      id={SECTION_IDS.accueil}
      aria-labelledby="hero-title"
      className="relative flex min-h-[88vh] items-start overflow-hidden pt-16 sm:min-h-[92vh] sm:items-center"
    >
      {/* Vidéo de fond */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroPoster}
          className="h-full w-full object-cover"
          style={{
            transform: reduceMotion
              ? undefined
              : `translateY(${scrollY * 0.15}px) scale(1.05)`,
          }}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        {/* Voiles : assurent la lisibilité du texte marine à gauche */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      {/* Trame radar discrète */}
      <div
        aria-hidden="true"
        className="radar-grid absolute inset-0 z-0 text-primary opacity-[0.15]"
      />

      <div className="relative z-10 container mx-auto px-4 pb-12 pt-6 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-3xl">
          <span className="eyebrow mb-5 sm:mb-6">
            Détection de réseaux souterrains par géoradar
          </span>

          <h1 id="hero-title" className="fluid-hero font-bold text-foreground">
            Notre expertise au service de{" "}
            <span className="text-primary">vos projets</span>
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/70 sm:mt-6 sm:text-xl">
            SOGECOR met son expertise dans l'ingénierie des réseaux au service
            des territoires et infrastructures. Nous accompagnons gestionnaires
            de réseaux, collectivités et entreprises à concevoir leur chantier
            de demain.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <Button
              size="lg"
              onClick={() => scrollToSection(SECTION_IDS.contact)}
              className="group rounded-full shadow-soft"
            >
              Demander un devis gratuit
              <ArrowRight
                size={18}
                className="ml-1 transition-transform group-hover:translate-x-1"
              />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection(SECTION_IDS.services)}
              className="rounded-full border-foreground/15 bg-background/60 backdrop-blur-sm"
            >
              Découvrir nos services
            </Button>
          </div>

          {/* Bande de confiance */}
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 sm:mt-12">
            {trustItems.map(({ Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm font-medium text-foreground/70"
              >
                <Icon size={20} weight="duotone" className="text-primary" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Indicateur de défilement */}
      <button
        type="button"
        onClick={() => scrollToSection(SECTION_IDS.aPropos)}
        aria-label="Faire défiler vers la suite"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center text-foreground/50 transition hover:text-primary sm:flex"
      >
        <span className="mb-2 text-xs uppercase tracking-widest">
          Découvrir
        </span>
        <span className="hero-scroll-dot flex h-10 w-6 items-start justify-center rounded-full border border-current pt-2">
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
        </span>
      </button>
    </section>
  );
}
