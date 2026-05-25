import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import bgImage from "@/assets/images/Fond.jpg";
import vlocImage from "@/assets/images/vloc.png";
import gpsImage from "@/assets/images/gps.png";
import mapsogecorImage from "@/assets/images/mapsogecor.png";
import marquageConeImage from "@/assets/images/marquage-cone.png";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const expertiseShadowShift = (scrollY % 160) / 160;
  const expertiseShadowY = 14 + expertiseShadowShift * 14;
  const expertiseShadowBlur = 28 + expertiseShadowShift * 14;
  const expertiseShadowOpacity = 0.08 + expertiseShadowShift * 0.05;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openServiceItem = (index: number) => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    window.dispatchEvent(new CustomEvent("openService", { detail: { index } }));
  };

  return (
    <>
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
                new URL(
                  "../assets/images/background-video.mp4",
                  import.meta.url,
                ).href
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
              SOGECOR met son expertise dans l'ingenierie des reseaux au
              service des territoires et infrastructures. Nous accompagnons les
              gestionnaires de reseaux, les collectivites locales, et les
              entreprises a concevoir leur chantier de demain.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button size="lg" onClick={scrollToContact} className="group">
                Demander un Devis Gratuit
                <ArrowRight
                  size={16}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToServices}>
                Decouvrir nos Services
              </Button>
            </motion.div>

            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("services");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
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

      <section id="expertise" className="bg-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="mb-8 text-2xl font-semibold text-foreground sm:text-3xl">
              Notre expertise
            </h2>

            <div className="grid grid-cols-1 gap-[29px] sm:grid-cols-2 lg:grid-cols-4">
              {[
                { img: vlocImage,         alt: "Géo-détection des réseaux",                 label: "La géo-détection des réseaux",                    shadowX: -6 - expertiseShadowShift * 6, index: 0 },
                { img: gpsImage,          alt: "Cartographie et implantation des réseaux",   label: "La cartographie et l'implantation des réseaux",   shadowX: -2 - expertiseShadowShift * 4, index: 1 },
                { img: mapsogecorImage,   alt: "Conception d'études",                        label: "La conception d'études",                          shadowX:  2 + expertiseShadowShift * 4, index: 2 },
                { img: marquageConeImage, alt: "Marquage-piquetage des réseaux",             label: "Le marquage-piquetage des réseaux",                shadowX:  6 + expertiseShadowShift * 6, index: 3 },
              ].map((card, i) => (
                <motion.button
                  key={i}
                  type="button"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 + i * 0.2 }}
                  onClick={() => openServiceItem(card.index)}
                  className="group flex cursor-pointer flex-col items-center rounded-2xl border border-border p-[26px] text-center transition hover:border-primary hover:shadow-lg w-full"
                  style={{
                    boxShadow: `${card.shadowX}px ${expertiseShadowY}px ${expertiseShadowBlur}px rgba(33, 72, 117, ${expertiseShadowOpacity})`,
                  }}
                >
                  <div className="mb-4 flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-white">
                    <img src={card.img} alt={card.alt} className="h-full w-full object-contain transition group-hover:scale-105" />
                  </div>
                  <h3 className="font-semibold text-primary">
                    {card.label}
                  </h3>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
