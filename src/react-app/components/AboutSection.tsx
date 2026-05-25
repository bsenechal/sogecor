import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import terrainImage from "@/assets/images/Travail de terrain avec équipements de mesure.png";

const cards = [
  {
    title: "Notre Mission",
    body: "Rendre visible l'invisible, avec des rendus de qualité pour sécuriser vos travaux et optimiser vos projets.",
    border: "border-primary/20",
  },
  {
    title: "Notre Ambition",
    body: "Devenir un acteur majeur dans l'étude, la détection, et le référencement des réseaux en France. En proposant des solutions innovantes et fiables, nous mettons notre savoir-faire au service de vos réalisations.",
    border: "border-accent/20",
  },
  {
    title: "Nos Engagements",
    body: null,
    border: "border-secondary/20",
  },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      // scrollable distance = section height − 1 viewport
      const scrollable = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      setProgress(Math.max(0, Math.min(1, scrolled / scrollable)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Thresholds: card 0 at 10%, card 1 at 40%, card 2 at 70%
  const thresholds = [0.1, 0.4, 0.7];
  const visible = (i: number) => progress >= thresholds[i];

  return (
    <section
      ref={sectionRef}
      id="a-propos"
      // 4 × 100vh gives enough scroll room for 3 card reveals
      style={{ height: "400vh" }}
      className="relative"
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Image de fond — se révèle au scroll */}
        <img
          src={terrainImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ opacity: progress * 0.45 }}
        />

        {/* Dégradé bleu qui s'efface progressivement */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 1 - progress * 0.6,
            background:
              "linear-gradient(180deg,#e9f3ff 0%,#e7f1ff 24%,#edf6ff 50%,#f6faff 74%,#ffffff 100%)",
          }}
        />

        {/* Voile blanc résiduel pour lisibilité du texte */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none bg-white/30"
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl grid items-center gap-12 lg:grid-cols-2">

            {/* Colonne gauche — toujours visible */}
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-foreground">
                A propos de SOGECOR
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  SOGECOR est un bureau d'études spécialisé dans l'étude de
                  réseaux de distribution, de géolocalisation, et
                  géoréférencement des ouvrages construits ou détectés.
                </p>
                <p>
                  Nous intervenons pour une clientèle diversifiée :
                  collectivités territoriales, entreprises de TP, entreprises
                  ferroviaires, bureaux d'études, syndics de copropriété,
                  promoteurs immobiliers, gestionnaires de réseaux et même des
                  particuliers. Chaque projet bénéficie d'une approche
                  personnalisée pour répondre au mieux à vos attentes.
                </p>
              </div>
            </div>

            {/* Colonne droite — cartes progressives */}
            <div className="space-y-6">
              {cards.map((card, i) => (
                <div
                  key={i}
                  style={{
                    transitionDelay: "100ms",
                  }}
                  className={`transition-all duration-700 ease-out ${
                    visible(i)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10 pointer-events-none"
                  }`}
                >
                  <Card className={`${card.border} bg-white/90 backdrop-blur-md shadow-sm`}>
                    <CardContent className="p-6">
                      <h4 className="mb-3 text-lg font-semibold text-foreground">
                        {card.title}
                      </h4>
                      {card.body ? (
                        <p className="text-muted-foreground">{card.body}</p>
                      ) : (
                        <p className="text-muted-foreground">
                          <strong>Réactivité</strong> dans nos réponses •{" "}
                          <strong>Un devis en moins de 24h</strong> •{" "}
                          <strong>Transparence</strong> des résultats obtenus •{" "}
                          <strong>Accompagnement</strong> de nos clients
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
