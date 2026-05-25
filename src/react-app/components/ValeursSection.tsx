import React from "react";
import maisonSogecor from "@/assets/images/MaisonSOGECOR3-transparent.png";
import { ScrollReveal } from "@/components/ScrollReveal";
import "../styles/hero-valeurs.css";

export function ValeursSection() {
  return (
    <div className="hero-valeurs">
      <div className="hero-valeurs__sky" aria-hidden="true" />
      <div className="hero-valeurs__glow" aria-hidden="true" />

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
            alt="Valeurs SOGECOR"
            className="maison"
          />
        </div>
      </ScrollReveal>
    </div>
  );
}
