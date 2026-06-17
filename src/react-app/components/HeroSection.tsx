import { ArrowRight, ShieldCheck, MapPin, Clock } from "@phosphor-icons/react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SECTION_IDS } from "@/config/site";
import { useScrollToSection } from "@/hooks";

const trustItems = [
  { Icon: ShieldCheck, label: "Conforme DT-DICT" },
  { Icon: MapPin, label: "Intervention France entière" },
  { Icon: Clock, label: "Devis sous 24h" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.12 + i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const scrollToSection = useScrollToSection();
  const reduceMotion = useReducedMotion();
  // Au prérendu (serveur), on rend l'état final pour un HTML pleinement visible.
  const initial = false;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id={SECTION_IDS.accueil}
      aria-labelledby="hero-title"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-16"
    >
      {/* Vidéo de fond */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          style={{
            transform: reduceMotion
              ? undefined
              : `translateY(${scrollY * 0.15}px) scale(1.05)`,
          }}
        >
          <source
            src={
              new URL("../assets/images/background-video.mp4", import.meta.url)
                .href
            }
            type="video/mp4"
          />
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

      <div className="relative z-10 container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial={initial}
            animate="show"
            className="eyebrow mb-6"
          >
            Détection de réseaux souterrains par géoradar
          </motion.span>

          <motion.h1
            id="hero-title"
            custom={1}
            variants={fadeUp}
            initial={initial}
            animate="show"
            className="text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Notre expertise au service de{" "}
            <span className="text-primary">vos projets</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial={initial}
            animate="show"
            className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70 sm:text-xl"
          >
            SOGECOR met son expertise dans l'ingénierie des réseaux au service
            des territoires et infrastructures. Nous accompagnons gestionnaires
            de réseaux, collectivités et entreprises à concevoir leur chantier
            de demain.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial={initial}
            animate="show"
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
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
          </motion.div>

          {/* Bande de confiance */}
          <motion.ul
            custom={4}
            variants={fadeUp}
            initial={initial}
            animate="show"
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3"
          >
            {trustItems.map(({ Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-sm font-medium text-foreground/70"
              >
                <Icon size={20} weight="duotone" className="text-primary" />
                {label}
              </li>
            ))}
          </motion.ul>
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
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-current pt-2"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
        </motion.span>
      </button>
    </section>
  );
}
