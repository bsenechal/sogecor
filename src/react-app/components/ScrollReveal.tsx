import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode, forwardRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
 * Composant pour révéler progressivement les éléments au scroll
 * Supporte différentes directions d'animation et paramètres personnalisables
 */
export const ScrollReveal = forwardRef<HTMLDivElement, ScrollRevealProps>(
  (
    {
      children,
      direction = "up",
      delay = 0,
      duration = 0.5,
      className = "",
      threshold = 0.1,
      rootMargin = "0px 0px -50px 0px",
    },
    ref,
  ) => {
    const { elementRef, isVisible } = useScrollAnimation({
      threshold,
      rootMargin,
      triggerOnce: true,
    });
    const reduceMotion = useReducedMotion();

    // Déplacements volontairement discrets pour un rendu sobre.
    // Mouvement neutralisé si l'utilisateur préfère réduire les animations.
    const OFFSET = reduceMotion ? 0 : 18;
    const variants = {
      hidden: {
        opacity: 0,
        y: direction === "up" ? OFFSET : direction === "down" ? -OFFSET : 0,
        x: direction === "left" ? OFFSET : direction === "right" ? -OFFSET : 0,
        scale: direction === "fade" && !reduceMotion ? 0.98 : 1,
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        transition: {
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
      },
    };

    return (
      <motion.div
        ref={(node) => {
          elementRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={variants}
        className={className}
      >
        {children}
      </motion.div>
    );
  },
);

ScrollReveal.displayName = "ScrollReveal";
