import { useState } from "react";
import { Plus, Minus } from "@phosphor-icons/react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";

/**
 * Questions fréquentes. Le même contenu est repris en données structurées
 * (FAQPage) dans index.html pour les résultats enrichis et les moteurs IA.
 */
export const faqs = [
  {
    question: "Qu'est-ce que la géo-détection de réseaux souterrains ?",
    answer:
      "La géo-détection consiste à localiser précisément les réseaux enterrés (eau, gaz, électricité, télécom, assainissement…) sans excavation, à l'aide de technologies comme le géoradar et la détection électromagnétique. Elle permet de sécuriser les chantiers, de fiabiliser les études et de limiter les risques d'endommagement.",
  },
  {
    question: "Qu'est-ce que la réglementation DT-DICT ?",
    answer:
      "La DT (Déclaration de projet de Travaux) et la DICT (Déclaration d'Intention de Commencement de Travaux) encadrent les travaux réalisés à proximité des réseaux afin de prévenir leur endommagement. SOGECOR réalise des investigations complémentaires (IC) et des opérations de localisation (OL) conformes à cette réglementation anti-endommagement.",
  },
  {
    question: "Dans quelles régions SOGECOR intervient-il ?",
    answer:
      "SOGECOR intervient dans toute la France. L'entreprise est basée à Mouy, dans l'Oise (60).",
  },
  {
    question: "Quels types de réseaux pouvez-vous détecter ?",
    answer:
      "Nous détectons les réseaux sensibles et non sensibles : eau potable, assainissement, gaz, électricité, télécommunications, éclairage public, etc. Nos interventions couvrent les investigations complémentaires (IC) sur réseaux sensibles et les opérations de localisation (OL) sur réseaux non sensibles.",
  },
  {
    question: "Quelles certifications et habilitations possède SOGECOR ?",
    answer:
      "SOGECOR dispose de l'AIPR (Autorisation d'Intervention à Proximité des Réseaux), de l'habilitation TST (Travaux Sous Tension), ainsi que des certifications Bureau Veritas et ADNT 3002.",
  },
  {
    question: "Sous quel délai puis-je obtenir un devis ?",
    answer:
      "Nous nous engageons à répondre sous 24h. Vous pouvez demander un devis gratuit via notre formulaire de contact ou par téléphone au +33 6 27 76 20 22.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-background"
      inner="max-w-3xl"
    >
      <SectionHeading
        id="faq-title"
        eyebrow="Questions fréquentes"
        title="Tout savoir sur la détection de réseaux"
        subtitle="Les réponses aux questions les plus courantes sur nos prestations et la réglementation."
      />

      <ScrollReveal direction="up">
        <ul className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <li
                key={index}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  open
                    ? "border-primary/30 bg-card shadow-soft"
                    : "border-border bg-card/50 hover:border-primary/20"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-trigger-${index}`}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <span className="font-semibold text-foreground">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
                    >
                      {open ? (
                        <Minus size={16} weight="bold" />
                      ) : (
                        <Plus size={16} weight="bold" />
                      )}
                    </span>
                  </button>
                </h3>
                {open && (
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                    className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground"
                  >
                    {faq.answer}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </ScrollReveal>
    </Section>
  );
}
