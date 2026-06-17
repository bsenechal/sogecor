import { useCallback } from "react";

/**
 * Renvoie une fonction de défilement doux vers une section par son id.
 * Optionnellement, exécute un callback (ex : fermer le menu mobile) après le scroll.
 */
export function useScrollToSection(onNavigate?: () => void) {
  return useCallback(
    (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        onNavigate?.();
      }
    },
    [onNavigate],
  );
}
