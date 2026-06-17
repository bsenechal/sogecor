import maisonSogecor from "@/assets/images/MaisonSOGECOR3-transparent.webp";
import { ScrollReveal } from "@/components/ScrollReveal";
import "../styles/hero-valeurs.css";

export function ValeursSection() {
  return (
    <div className="hero-valeurs">
      <div className="hero-valeurs__sky" aria-hidden="true" />
      <div className="hero-valeurs__glow" aria-hidden="true" />

      <div className="text-center pt-16 pb-4 px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
          Nos valeurs qui font notre entreprise
        </h2>
      </div>

      <ScrollReveal
        direction="up"
        delay={0.1}
        duration={0.9}
        threshold={0.2}
        rootMargin="0px 0px -120px 0px"
        className="maison-reveal"
      >
        <div className="maison-wrap">
          <img
            src={maisonSogecor}
            alt="Maison des valeurs SOGECOR : expertise, fiabilité, sécurité et proximité, fondations de l'entreprise"
            loading="lazy"
            className="maison"
          />
        </div>
      </ScrollReveal>
    </div>
  );
}
