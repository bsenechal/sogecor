import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, ArrowRight } from "@phosphor-icons/react";

function scrollToId(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="hero-gradient text-white relative overflow-hidden" role="banner">
      <div
        className="absolute inset-0 opacity-20 parallax-container"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white leading-tight tracking-tight">
            Solutions Professionnelles
            <br />
            <span className="text-white/90 font-bold">sur Mesure</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto">
            SOGECOR accompagne votre entreprise avec expertise et innovation. Ensemble, transformons vos défis en opportunités de croissance durable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => scrollToId("services")} className="bg-white text-primary hover:bg-white/90" aria-label="Découvrir nos services professionnels">
              Découvrir Nos Services
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToId("rendez-vous")} className="border-white text-white hover:bg-white hover:text-primary" aria-label="Prendre rendez-vous avec nos experts">
              <CalendarIcon className="mr-2 h-5 w-5" aria-hidden="true" />
              Prendre Rendez-vous
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToId("contact")} className="border-white text-white hover:bg-white hover:text-primary" aria-label="Nous contacter pour plus d'informations">
              Nous Contacter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
