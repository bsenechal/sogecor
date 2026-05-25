import { useState, useEffect } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import expertisePhotoImage from "@/assets/images/img-2292.jpg";
import { Plus, X } from "@phosphor-icons/react";

const services = [
  {
    title: "La géo-détection des réseaux",
    intro:
      "Pour sécuriser vos chantiers et respecter la réglementation anti-endommagement DT-DICT, nous intervenons avec réactivité et précision sur l'ensemble de vos projets.",
    detail:
      "De la phase d'étude à la préparation des travaux, nous vous accompagnons dans l'identification, la localisation et la fiabilisation des réseaux existants afin de limiter les risques, anticiper les contraintes terrain et produire des données fiables pour vos DCE, vos plans d'exécution ou vos interventions chantier.",
    listLabel: "Exemples d'interventions :",
    items: [
      "Investigations Complémentaires, ou IC, sur réseaux sensibles ;",
      "Opérations de Localisation, ou OL, sur réseaux non sensibles ;",
      "Localisation et géoréférencement de patrimoine réseaux ;",
      "Confection de plans de synthèse des réseaux.",
    ],
    closing:
      "Nous vous remettons des livrables clairs, exploitables et compatibles avec vos logiciels et formats métiers.",
  },
  {
    title: "La cartographie et l'implantation des réseaux",
    intro:
      "Pour garantir une vision claire et fiable de vos réseaux, nous vous accompagnons dans la cartographie, le géoréférencement et l'implantation de vos ouvrages sur le terrain.",
    detail:
      "À partir des données détectées, des plans existants, des éléments de projet ou des informations collectées directement sur le terrain, nous produisons des plans précis et exploitables afin de faciliter la coordination des intervenants, sécuriser les travaux et assurer la bonne compréhension des ouvrages existants ou projetés.",
    listLabel: "Ainsi, nous réalisons :",
    items: [
      "La cartographie et le géoréférencement de réseaux existants ;",
      "Les plans de récolement après travaux ;",
      "La mise à jour de plans réseaux ;",
      "L'implantation terrain de réseaux, ouvrages ou points de projet ;",
      "Le report précis d'éléments issus de plans d'exécution.",
    ],
    closing:
      "Nous vous remettons des plans fiables, lisibles et adaptés à vos besoins d'exploitation, de conception ou de suivi de chantier.",
  },
  {
    title: "La conception d'études",
    intro:
      "Pour fiabiliser vos projets dès la conception, nous vous accompagnons dans l'analyse, la conception et la préparation de vos études réseaux.",
    detail:
      "À partir des contraintes terrain, des données existantes et de vos objectifs techniques, nous concevons des solutions adaptées à votre projet, à vos exigences réglementaires et aux conditions réelles d'intervention.",
    listLabel: "Ainsi, nous concevons :",
    items: [
      "Des études réseaux adaptées à vos projets VRD ;",
      "Des plans techniques pour vos phases d'étude, de consultation ou d'exécution ;",
      "Des plans de synthèse des réseaux existants et projetés ;",
      "Des pièces techniques pour vos DCE ;",
      "Des solutions d'implantation, de balisage ou de phasage selon les contraintes du chantier.",
    ],
    closing:
      "Nous vous remettons des documents clairs, cohérents et directement exploitables par l'ensemble des intervenants du projet.",
  },
  {
    title: "Le marquage-piquetage des réseaux",
    intro:
      "Pour préparer vos interventions en toute sécurité, nous matérialisons directement sur le terrain la position des réseaux existants avant le démarrage des travaux.",
    detail:
      "À partir des plans disponibles, des résultats de détection ou des données collectées sur site, nous réalisons un marquage clair et lisible afin d'aider vos équipes à identifier les zones sensibles, limiter les risques d'endommagement et intervenir dans de meilleures conditions.",
    listLabel: "Ainsi, nous réalisons :",
    items: [
      "Le marquage au sol des réseaux détectés ou connus ;",
      "Le piquetage des ouvrages avant travaux ;",
      "La matérialisation des zones d'intervention et des points particuliers ;",
      "Le report terrain des informations issues des plans ou investigations.",
    ],
    closing:
      "Conformément à notre engagement environnemental, nous utilisons uniquement des bombes aérosols à base d'eau ou des craies naturelles. Nous vous apportons une lecture terrain claire et immédiate pour sécuriser vos chantiers et faciliter le travail des équipes sur site.",
  },
];

export function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const index = (e as CustomEvent<{ index: number }>).detail.index;
      setOpenIndex(index);
    };
    window.addEventListener("openService", handler);
    return () => window.removeEventListener("openService", handler);
  }, []);

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Notre expertise au service de vos projets réseaux
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              SOGECOR vous accompagne à chaque étape de vos projets, de l'étude
              préalable à l'intervention terrain. Grâce à une approche complète
              en géo-détection, conception, cartographie, implantation et
              marquage-piquetage des réseaux, nous vous aidons à sécuriser vos
              chantiers, fiabiliser vos données et répondre aux exigences
              réglementaires.
            </p>
          </ScrollReveal>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Accordion */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="divide-y divide-border">
                {services.map((service, index) => (
                  <div key={index}>
                    <button
                      type="button"
                      className="w-full flex items-center justify-between py-6 text-left group"
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                    >
                      <span className="text-sm font-semibold uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </span>
                      <span
                        className={`w-8 h-8 flex items-center justify-center rounded flex-shrink-0 ml-4 transition-colors ${
                          openIndex === index
                            ? "bg-foreground text-background"
                            : "bg-primary text-white"
                        }`}
                      >
                        {openIndex === index ? (
                          <X size={16} weight="bold" />
                        ) : (
                          <Plus size={16} weight="bold" />
                        )}
                      </span>
                    </button>

                    {openIndex === index && (
                      <div className="pb-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
                        <p>{service.intro}</p>
                        <p>{service.detail}</p>
                        <div>
                          <p className="font-medium text-foreground mb-2">
                            {service.listLabel}
                          </p>
                          <ul className="space-y-1.5">
                            {service.items.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <p className="italic">{service.closing}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Right: Image */}
            <ScrollReveal direction="right" delay={0.3} className="lg:sticky lg:top-24">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
                <img
                  src={expertisePhotoImage}
                  alt="Expertise SOGECOR"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
