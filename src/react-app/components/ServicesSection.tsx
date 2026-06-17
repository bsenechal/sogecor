import { useState, useEffect } from "react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import expertisePhotoImage from "@/assets/images/img-2292.webp";
import { Plus, X, CheckCircle } from "@phosphor-icons/react";

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
    <Section id="services" className="bg-background">
      <SectionHeading
        eyebrow="Nos services"
        title="Une approche complète, de l'étude au terrain"
        subtitle="Géo-détection, conception, cartographie, implantation et marquage-piquetage : nous vous aidons à sécuriser vos chantiers, fiabiliser vos données et répondre aux exigences réglementaires."
      />

      {/* Two-column layout */}
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: Accordion */}
        <ScrollReveal direction="left" delay={0.1}>
          <div className="flex flex-col gap-3">
            {services.map((service, index) => {
              const open = openIndex === index;
              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    open
                      ? "border-primary/30 bg-card shadow-soft"
                      : "border-border bg-card/50 hover:border-primary/20"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`service-panel-${index}`}
                    className="group flex w-full items-center justify-between gap-4 p-5 text-left"
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    <span className="flex items-center gap-4">
                      <span
                        aria-hidden="true"
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold transition-colors ${
                          open
                            ? "bg-primary text-primary-foreground"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span className="font-semibold text-foreground transition-colors group-hover:text-primary">
                        {service.title}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-primary"
                    >
                      {open ? (
                        <X size={18} weight="bold" />
                      ) : (
                        <Plus size={18} weight="bold" />
                      )}
                    </span>
                  </button>

                  {open && (
                    <div
                      id={`service-panel-${index}`}
                      className="space-y-4 px-5 pb-6 text-sm leading-relaxed text-muted-foreground"
                    >
                      <p>{service.intro}</p>
                      <p>{service.detail}</p>
                      <div>
                        <p className="mb-2 font-medium text-foreground">
                          {service.listLabel}
                        </p>
                        <ul className="space-y-2">
                          {service.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <CheckCircle
                                size={18}
                                weight="fill"
                                className="mt-0.5 shrink-0 text-primary"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="border-l-2 border-primary/30 pl-4 italic">
                        {service.closing}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Right: Image */}
        <ScrollReveal
          direction="right"
          delay={0.2}
          className="lg:sticky lg:top-28"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-card">
            <div className="aspect-[3/4]">
              <img
                src={expertisePhotoImage}
                alt="Technicien SOGECOR en intervention de détection de réseaux sur le terrain"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
              <p className="text-sm font-medium text-white/90">
                Des interventions terrain précises, du relevé au livrable.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
