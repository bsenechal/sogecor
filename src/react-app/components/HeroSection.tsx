import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import bgImage from "@/assets/images/Fond.jpg";
import vlocImage from "@/assets/images/vloc.png";
import gpsImage from "@/assets/images/gps.png";

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
    <>
      <section id="accueil" className="relative pt-16 overflow-hidden min-h-[60vh]">
        <div className="absolute inset-0 z-0 hero">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src={new URL("../assets/images/background-video.mp4", import.meta.url).href}
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-background/40" />
        </div>
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-background/95 to-secondary/40"
        />
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
            Notre expertise au service de{" "}
            <span className="text-primary">vos projets</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            SOGECOR met son expertise dans l'ingénierie des réseaux au service des territoires et infrastructures. Nous accompagnons les gestionnaires de réseaux, les collectivités locales, et les entreprises à concevoir leur chantier de demain.
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

          {/* Scroll down indicator */}
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById("expertise");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              aria-label="Voir nos expertises"
              className="flex flex-col items-center text-muted-foreground hover:text-foreground transition"
            >
              <span className="text-sm mb-2">Voir nos expertises</span>
              <span className="w-12 h-12 rounded-full border border-muted-foreground flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-8">
            Notre expertise
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="group border border-border rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div className="w-full h-36 bg-white rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img src={vlocImage} alt="Détection des réseaux enterrés" className="w-full h-full object-contain" />
              </div>
              <h3 className="font-semibold text-foreground">
                Détection des réseaux enterrés
              </h3>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="group border border-border rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div className="w-full h-36 bg-white rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img src={gpsImage} alt="Cartographie des réseaux" className="w-full h-full object-contain" />
              </div>
              <h3 className="font-semibold text-foreground">
                Cartographie des réseaux
              </h3>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="group border border-border rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div className="w-full h-36 bg-muted-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-sm text-muted-foreground">Image</span>
              </div>
              <h3 className="font-semibold text-foreground">
                Conception d'études
              </h3>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="group border border-border rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <div className="w-full h-36 bg-muted-foreground/10 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-sm text-muted-foreground">Image</span>
              </div>
              <h3 className="font-semibold text-foreground">
                Marquage des réseaux
              </h3>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}
