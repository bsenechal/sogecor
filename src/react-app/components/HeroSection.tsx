import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { SECTION_IDS } from "@/config/site";
import { useScrollToSection } from "@/hooks";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="accueil"
      className="relative min-h-[60vh] overflow-hidden pt-16"
    >
      <div className="hero absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source
            src={
              new URL("../assets/images/background-video.mp4", import.meta.url)
                .href
            }
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-secondary/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Notre expertise au service de{" "}
            <span className="text-primary">vos projets</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-muted-foreground"
          >
            SOGECOR met son expertise dans l'ingénierie des réseaux au service
            des territoires et infrastructures. Nous accompagnons les
            gestionnaires de réseaux, les collectivités locales et les
            entreprises à concevoir leur chantier de demain.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection(SECTION_IDS.contact)}
              className="group"
            >
              Demander un Devis Gratuit
              <ArrowRight
                size={16}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection(SECTION_IDS.services)}
            >
              Découvrir nos Services
            </Button>
          </motion.div>

          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => scrollToSection(SECTION_IDS.services)}
              aria-label="Voir nos expertises"
              className="flex flex-col items-center text-muted-foreground transition hover:text-foreground"
            >
              <span className="mb-2 text-sm">Voir nos expertises</span>
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-muted-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 5v14" />
                  <path d="M19 12l-7 7-7-7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
