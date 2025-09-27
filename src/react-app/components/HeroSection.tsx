import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Crosshair } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import surveyorBg from "@/assets/images/surveyor-background.svg";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

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

  return (
    <section id="accueil" className="relative pt-16 overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(${surveyorBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-secondary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
          >
            Détection précise de{" "}
            <span className="text-primary">réseaux souterrains</span> par
            Géoradar
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            SOGECOR vous accompagne dans la localisation et la cartographie de
            vos réseaux souterrains avec une technologie de pointe et une
            expertise reconnue.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button size="lg" onClick={scrollToContact} className="group">
              Demander un Devis Gratuit
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToServices}>
              Découvrir nos Services
            </Button>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <Crosshair size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Technologie Avancée
              </h3>
              <p className="text-sm text-muted-foreground">
                Équipements géoradar de dernière génération pour une précision
                maximale
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <MapPin size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Localisation Précise
              </h3>
              <p className="text-sm text-muted-foreground">
                Cartographie détaillée de tous types de réseaux souterrains
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <div className="w-6 h-6 bg-primary rounded text-white flex items-center justify-center text-xs font-bold">
                  ✓
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Expertise Reconnue
              </h3>
              <p className="text-sm text-muted-foreground">
                Des professionnels expérimentés au service de vos projets
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
