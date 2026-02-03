import { ArrowRight, MapPin, Crosshair } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import surveyorBg from "@/assets/images/surveyor-background.svg";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById("nos-services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accueil" className="relative pt-16 overflow-hidden">
<<<<<<< HEAD
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <></>
=======
      {/* Background */}
      <div className="absolute inset-0 z-0">
>>>>>>> fdb0b98 (implement v2)
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
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
          >
            Détection précise de{" "}
            <span className="text-primary">réseaux souterrains</span> par
            Géoradar
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            SOGECOR vous accompagne dans la localisation et la cartographie de
            vos réseaux souterrains avec une technologie de pointe et une
            expertise reconnue.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button size="lg" asChild className="group">
              <Link to="/contact">
                Demander un Devis Gratuit
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToServices}>
              Découvrir nos Services
            </Button>
          </div>


          {/* Features Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <div
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
            </div>

            <div
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
            </div>

            <div
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
