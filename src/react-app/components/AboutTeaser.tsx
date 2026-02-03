import { ArrowRight, CheckCircle } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function AboutTeaser() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageUrl = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"; 

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <section className="py-20 lg:py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal direction="left">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              SOGECOR, votre partenaire de confiance
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Spécialistes de la détection de réseaux depuis plus de 15 ans, nous mettons notre expertise au service de la sécurité de vos chantiers. 
              </p>
              <p>
                Notre mission : Rendre visible l'invisible. Grâce à des technologies de pointe (Géoradar, Détection électromagnétique), nous cartographions le sous-sol avec une précision centimétrique pour éviter tout endommagement ou accident.
              </p>
            </div>
            
            <div className="mt-8 space-y-3">
                {[
                    "Intervention rapide sur toute la France",
                    "Certification en détection de réseaux",
                    "Matériel de dernière génération"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <CheckCircle size={20} className="text-primary" weight="fill" />
                        <span className="text-foreground font-medium">{item}</span>
                    </div>
                ))}
            </div>

            <div className="mt-10">
              <Button asChild size="lg">
                <Link to="/qui-sommes-nous">
                  Découvrir notre entreprise
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2} className="relative">
             <div className="aspect-square bg-muted rounded-3xl overflow-hidden relative shadow-2xl">
                {!imageLoaded && (
                    <Skeleton className="absolute inset-0 w-full h-full" />
                )}
                <img 
                    src={imageUrl}
                    alt="Équipe SOGECOR sur un chantier de détection"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
             <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-primary/20 rounded-full -z-10" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
