import { type ReactNode, forwardRef } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade";
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

/**
 * Composant simplifié (sans animation) pour remplacer l'ancien ScrollReveal
 */
export const ScrollReveal = forwardRef<HTMLDivElement, ScrollRevealProps>(
  (
    {
      children,
      className = "",
    },
    ref,
  ) => {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  },
);

ScrollReveal.displayName = "ScrollReveal";
