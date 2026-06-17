import { useEffect, useRef, useState } from "react";

/**
 * Affiche une valeur chiffrée avec un comptage animé lorsqu'elle entre dans le
 * viewport. SSR-safe : la valeur finale est rendue au prérendu (et sans JS) ;
 * un filet de sécurité garantit l'affichage final dans tous les cas.
 */
export function CountUp({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const match = value.match(/^(\d+(?:[.,]\d+)?)(.*)$/);
  const target = match ? parseFloat(match[1].replace(",", ".")) : 0;
  const suffix = match ? match[2] : value;

  const [display, setDisplay] = useState(
    typeof window === "undefined" ? target : 0,
  );
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) {
      setDisplay(target);
      return;
    }
    if (
      typeof matchMedia === "function" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplay(target);
      return;
    }

    const run = () => {
      if (started.current) return;
      started.current = true;
      const duration = 1200;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setDisplay(Math.round(target * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    const fallback = window.setTimeout(run, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [target, suffix, match]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
