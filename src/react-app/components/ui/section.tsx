import { type ComponentProps } from "react";
import { cn } from "@/lib/utils";

type SectionProps = ComponentProps<"section"> & {
  /** Largeur maximale du contenu interne. */
  inner?: string;
};

/**
 * Conteneur de section avec rythme vertical et marges horizontales cohérents.
 * Le fond et les variantes se gèrent via `className` (ex: bg-secondary/40).
 */
export function Section({
  className,
  children,
  inner = "max-w-6xl",
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-20 lg:py-28", className)} {...props}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("mx-auto", inner)}>{children}</div>
      </div>
    </section>
  );
}
