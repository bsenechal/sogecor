import { useEffect, useRef, type ReactNode, forwardRef } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade";
  delay?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

const OFFSETS: Record<
  NonNullable<ScrollRevealProps["direction"]>,
  [string, string]
> = {
  up: ["0px", "18px"],
  down: ["0px", "-18px"],
  left: ["18px", "0px"],
  right: ["-18px", "0px"],
  fade: ["0px", "0px"],
};

/**
 * Révèle progressivement un élément lorsqu'il entre dans le viewport.
 *
 * Robuste par conception : le contenu est visible par défaut (prérendu, sans
 * JS, robots). L'état masqué et la révélation sont pilotés par des styles
 * inline (insensibles aux conflits de cascade), avec un minuteur de secours
 * qui révèle dans tous les cas — le contenu ne peut jamais rester masqué.
 */
export const ScrollReveal = forwardRef<HTMLDivElement, ScrollRevealProps>(
  (
    {
      children,
      direction = "up",
      delay = 0,
      className = "",
      threshold = 0.1,
      rootMargin = "0px 0px -50px 0px",
    },
    ref,
  ) => {
    const innerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const el = innerRef.current;
      if (!el) return;

      const reveal = () => {
        el.style.opacity = "1";
        el.style.transform = "none";
      };

      // Respect de la préférence « réduire les animations » : pas d'effet.
      if (
        typeof matchMedia === "function" &&
        matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      const [x, y] = OFFSETS[direction];
      el.style.opacity = "0";
      el.style.transform = `translate(${x}, ${y})`;
      el.style.transition = `opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`;
      el.style.willChange = "opacity, transform";

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            reveal();
            observer.disconnect();
          }
        },
        { threshold, rootMargin },
      );
      observer.observe(el);

      // Filet de sécurité : révèle après 2,5 s même si l'observer ne réagit pas.
      const fallback = window.setTimeout(reveal, 2500);

      return () => {
        observer.disconnect();
        window.clearTimeout(fallback);
      };
    }, [direction, delay, threshold, rootMargin]);

    return (
      <div
        ref={(node) => {
          innerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }}
        className={className}
      >
        {children}
      </div>
    );
  },
);

ScrollReveal.displayName = "ScrollReveal";
