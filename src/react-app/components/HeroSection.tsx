import { ArrowRight, MapPin, Crosshair } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageUrl = "https://images.unsplash.com/photo-1526593646509-03c680561a15?q=80&w=2070&auto=format&fit=crop";

  useEffect(() => {
    // Preload image
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setImageLoaded(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrolled = window.scrollY;
        bgRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById("nos-services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accueil" className="relative pt-16 lg:pt-24 pb-20 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center bg-background">
      {/* Background w/ Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {!imageLoaded && (
             <Skeleton className="absolute inset-0 w-full h-full bg-muted" />
        )}
        <div 
            ref={bgRef}
            className={`absolute inset-0 w-full h-[120%] -top-[10%] transition-opacity duration-1000 ${imageLoaded ? 'opacity-30' : 'opacity-0'}`}
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                willChange: "transform",
                filter: "grayscale(100%)"
            }}
        />
        {/* White Gradient Overlay for Seamless Integration */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
            
          {/* Main Heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-8 leading-tight tracking-tight"
          >
            Détection précise de{" "}
            <span className="text-primary relative inline-block">
                réseaux souterrains
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
            </span>
            <br />
            par Géoradar
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            SOGECOR vous accompagne dans la localisation et la cartographie de
            vos réseaux souterrains avec une technologie de pointe et une
            expertise reconnue.
          </p>


          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button size="lg" asChild className="group text-lg px-8 py-6 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
              <Link to="/contact">
                Demander un Devis Gratuit
                <ArrowRight
                  size={18}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToServices} className="text-lg px-8 py-6 bg-background/50 backdrop-blur-sm border-border hover:bg-muted/50 transition-all">
              Découvrir nos Services
            </Button>
          </div>


          {/* Features Grid - Light Glassmorphism */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            <div
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 hover:bg-white/80 transition-all shadow-sm hover:shadow-md"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                <Crosshair size={28} />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">
                Technologie Avancée
              </h3>
              <p className="text-sm text-muted-foreground">
                Équipements géoradar de dernière génération pour une précision
                maximale
              </p>
            </div>

            <div
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 hover:bg-white/80 transition-all shadow-sm hover:shadow-md"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                <MapPin size={28} />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">
                Localisation Précise
              </h3>
              <p className="text-sm text-muted-foreground">
                Cartographie détaillée de tous types de réseaux souterrains
              </p>
            </div>

            <div
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 hover:bg-white/80 transition-all shadow-sm hover:shadow-md"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                <div className="w-8 h-8 bg-primary rounded-lg text-white flex items-center justify-center text-sm font-bold shadow-md shadow-primary/20">
                  ✓
                </div>
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">
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
