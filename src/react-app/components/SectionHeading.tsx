import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ScrollReveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  /** Couleur du texte sur fond sombre. */
  tone?: "dark" | "light";
  className?: string;
  /** id du titre — sert d'ancrage `aria-labelledby` pour nommer la section. */
  id?: string;
};

/**
 * En-tête de section unifié : surtitre (eyebrow) + titre + sous-titre.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "dark",
  className,
  id,
}: SectionHeadingProps) {
  const isLight = tone === "light";
  return (
    <ScrollReveal
      direction="up"
      className={cn(
        "mb-12 lg:mb-16 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "eyebrow mb-4",
            align === "center" && "justify-center",
            isLight && "text-white/80 [&::before]:bg-white/40",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        id={id}
        className={cn(
          "text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl",
          isLight ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            isLight ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
