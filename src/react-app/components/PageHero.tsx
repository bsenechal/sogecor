import { ScrollReveal } from "@/components/ScrollReveal";

interface PageHeroProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function PageHero({ title, subtitle, className = "" }: PageHeroProps) {
  return (
    <section className={`pt-32 pb-16 bg-muted/30 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <ScrollReveal direction="up">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
