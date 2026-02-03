import {
  Leaf,
  Recycle,
  Users,
  Heart,
  TreeEvergreen,
  CarSimple,
} from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function RSESection() {
    const [imageLoaded, setImageLoaded] = useState(false);
    const imageUrl = "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2070&auto=format&fit=crop";
  
    useEffect(() => {
      const img = new Image();
      img.src = imageUrl;
      img.onload = () => setImageLoaded(true);
    }, []);

  const rseCommitments = [
    {
      icon: Leaf,
      title: "Respect de l'Environnement",
      description:
        "Nos méthodes de détection non invasives préservent l'environnement et limitent les excavations inutiles.",
      features: [
        "Techniques non destructives",
        "Réduction des déchets",
        "Préservation des sols",
      ],
    },
    {
      icon: Recycle,
      title: "Économie Circulaire",
      description:
        "Nous privilégions la réutilisation et le recyclage de nos équipements pour minimiser notre impact.",
      features: [
        "Matériel reconditionné",
        "Recyclage des composants",
        "Durabilité des équipements",
      ],
    },
    {
      icon: Users,
      title: "Responsabilité Sociale",
      description:
        "Formation continue de nos équipes et partenariats avec les acteurs locaux du territoire.",
      features: [
        "Formation certifiée",
        "Emploi local",
        "Partenariats durables",
      ],
    },
    {
      icon: Heart,
      title: "Engagement Communautaire",
      description:
        "Soutien aux initiatives locales et participation à l'amélioration de notre territoire.",
      features: [
        "Actions citoyennes",
        "Soutien associatif",
        "Développement local",
      ],
    },
  ];

  const environmentalImpacts = [
    {
      icon: TreeEvergreen,
      title: "Réduction des excavations",
      value: "75%",
      description:
        "de réduction des travaux de terrassement grâce à nos techniques précises",
    },
    {
      icon: CarSimple,
      title: "Déplacements optimisés",
      value: "40%",
      description:
        "de réduction des émissions CO2 par optimisation de nos tournées",
    },
  ];

  return (
    <section id="rse" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Notre Engagement <span className="text-primary">Responsable</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              SOGECOR s'engage dans une démarche de responsabilité sociétale et
              environnementale, au service d'un développement durable et
              respectueux de notre territoire.
            </p>
          </ScrollReveal>

          {/* RSE Commitments */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            {rseCommitments.map((commitment, index) => {
              const Icon = commitment.icon;
              return (
                <ScrollReveal
                  key={index}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={0.1 * index}
                >
                  <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary h-full">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon size={24} className="text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-2">
                            {commitment.title}
                          </CardTitle>
                          <p className="text-muted-foreground leading-relaxed">
                            {commitment.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {commitment.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Environmental Impact - Side by Side with Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
             {/* Left: Content */}
             <div className="order-2 lg:order-1 space-y-8">
                <ScrollReveal direction="up" className="space-y-4">
                    <h3 className="text-3xl font-bold text-foreground">
                    Notre Impact Environnemental
                    </h3>
                    <p className="text-muted-foreground text-lg">
                        Concrètement, l'utilisation de nos technologies permet de limiter drastiquement l'empreinte carbone des chantiers en évitant les destructions inutiles.
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 gap-6">
                {environmentalImpacts.map((impact, index) => {
                    const Icon = impact.icon;
                    return (
                    <ScrollReveal key={index} direction="up" delay={0.2 * index}>
                        <Card className="hover:shadow-md transition-shadow bg-card/50 border-primary/20">
                        <CardContent className="p-6 flex items-center gap-6">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                <Icon size={32} className="text-primary" />
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary mb-1">
                                    {impact.value}
                                </div>
                                <h4 className="font-semibold text-foreground">
                                    {impact.title}
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                    {impact.description}
                                </p>
                            </div>
                        </CardContent>
                        </Card>
                    </ScrollReveal>
                    );
                })}
                </div>
             </div>

             {/* Right: Image */}
             <ScrollReveal direction="left" className="order-1 lg:order-2 h-full min-h-[300px] lg:min-h-[500px] relative">
                 <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                    {!imageLoaded && (
                        <Skeleton className="absolute inset-0 w-full h-full" />
                    )}
                    <img 
                        src={imageUrl}
                        alt="Environnement et Nature"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                        <div className="flex items-center gap-2 mb-2">
                            <Leaf weight="fill" className="text-green-400" size={24}/>
                            <span className="font-semibold text-lg">Préserver demain</span>
                        </div>
                        <p className="text-white/90 text-sm">
                            La technologie au service de la nature.
                        </p>
                    </div>
                 </div>
                 {/* Decorative */}
                 <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-500/20 rounded-full blur-xl -z-10" />
                 <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl -z-10" />
             </ScrollReveal>
          </div>

          {/* Additional Commitment */}
          <ScrollReveal direction="up" delay={0.4}>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Notre Engagement Continu
                </h3>
                <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                  Nous nous engageons à améliorer continuellement nos pratiques,
                  à réduire notre empreinte environnementale et à contribuer
                  positivement au développement durable de notre région.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Badge variant="secondary" className="text-sm">
                    ISO 14001
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    Certification Qualité
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    Formation Continue
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    Innovation Durable
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
