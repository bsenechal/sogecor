import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import vlocImage from "@/assets/images/vloc.webp";
import gpsImage from "@/assets/images/gps.webp";
import mapsogecorImage from "@/assets/images/mapsogecor.webp";
import marquageConeImage from "@/assets/images/marquage-cone.webp";

export function ExpertiseSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shift = (scrollY % 160) / 160;
  const shadowY = 14 + shift * 14;
  const shadowBlur = 28 + shift * 14;
  const shadowOpacity = 0.08 + shift * 0.05;

  const openServiceItem = (index: number) => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    window.dispatchEvent(new CustomEvent("openService", { detail: { index } }));
  };

  const cards = [
    {
      img: vlocImage,
      alt: "Géo-détection des réseaux",
      label: "La géo-détection des réseaux",
      shadowX: -6 - shift * 6,
      index: 0,
    },
    {
      img: gpsImage,
      alt: "Cartographie et implantation des réseaux",
      label: "La cartographie et l'implantation des réseaux",
      shadowX: -2 - shift * 4,
      index: 1,
    },
    {
      img: mapsogecorImage,
      alt: "Conception d'études",
      label: "La conception d'études",
      shadowX: 2 + shift * 4,
      index: 2,
    },
    {
      img: marquageConeImage,
      alt: "Marquage-piquetage des réseaux",
      label: "Le marquage-piquetage des réseaux",
      shadowX: 6 + shift * 6,
      index: 3,
    },
  ];

  return (
    <section id="expertise" className="bg-transparent py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-8 text-2xl font-semibold text-white sm:text-3xl">
            Notre expertise
          </h2>
          <div className="grid grid-cols-1 gap-[29px] sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, i) => (
              <motion.button
                key={i}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
                onClick={() => openServiceItem(card.index)}
                className="group flex cursor-pointer flex-col items-center rounded-2xl border border-border p-[26px] text-center transition hover:border-primary hover:shadow-lg w-full"
                style={{
                  boxShadow: `${card.shadowX}px ${shadowY}px ${shadowBlur}px rgba(33, 72, 117, ${shadowOpacity})`,
                }}
              >
                <div className="mb-4 flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-card">
                  <img
                    src={card.img}
                    alt={card.alt}
                    loading="lazy"
                    className="h-full w-full object-contain transition group-hover:scale-105"
                  />
                </div>
                <h3 className="font-semibold text-primary">{card.label}</h3>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
