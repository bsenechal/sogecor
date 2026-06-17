import {
  Crosshair,
  Medal,
  Wrench,
  Handshake,
  ShieldCheck,
  Leaf,
} from "@phosphor-icons/react";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";

const valeurs = [
  {
    Icon: Crosshair,
    title: "Fiabilité et précision de nos données",
    body: "Nous produisons des données précises, fiables et exploitables, indispensables à la bonne réalisation des projets et à la prise de décision.",
  },
  {
    Icon: Medal,
    title: "Excellence opérationnelle",
    body: "Sur chacune de nos interventions, nos collaborateurs sont formés, habilités et préparés aux exigences du terrain.",
  },
  {
    Icon: Wrench,
    title: "Expertise technique",
    body: "Forts de notre expérience, nous apportons à nos clients des solutions adaptées et un accompagnement technique à forte valeur ajoutée.",
  },
  {
    Icon: Handshake,
    title: "Engagement client",
    body: "Nous accompagnons nos clients à chaque étape, avec réactivité, transparence et sens du service.",
  },
  {
    Icon: ShieldCheck,
    title: "Sécurité des interventions",
    body: "La prévention des risques est au cœur de nos missions : nous sécurisons les chantiers en identifiant précisément les réseaux existants et les risques liés à la coactivité.",
  },
  {
    Icon: Leaf,
    title: "Responsabilité environnementale",
    body: "Nous intégrons les enjeux environnementaux dans nos études pour concevoir des projets durables et responsables.",
  },
];

export function ValeursSection() {
  return (
    <Section aria-labelledby="valeurs-title" className="bg-secondary/70">
      <SectionHeading
        id="valeurs-title"
        eyebrow="Nos valeurs"
        title="Des valeurs qui bâtissent des projets durables"
        subtitle="Et des relations de confiance, à chaque étape de nos interventions."
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {valeurs.map(({ Icon, title, body }, i) => (
          <ScrollReveal key={title} direction="up" delay={0.06 * i}>
            <article className="group h-full rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon size={28} weight="duotone" />
              </div>
              <h3 className="mb-2 text-lg font-semibold leading-snug text-foreground">
                {title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
