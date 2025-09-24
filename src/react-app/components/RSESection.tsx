import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TreeEvergreen, Leaf, Heart, HandHeart, Users, Recycle, Medal } from "@phosphor-icons/react";

export function RSESection() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="rse" className="bg-background relative overflow-hidden" role="main">
      <div
        className="absolute inset-0 opacity-10 parallax-container"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
      <div className="container-max section-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Responsabilité Sociétale d'Entreprise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Engagement envers un avenir durable et une société plus responsable
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-semibold mb-6">Notre Engagement RSE</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Chez SOGECOR, nous croyons fermement que la réussite économique doit s'accompagner d'un impact positif sur la société et l'environnement. Notre démarche RSE s'articule autour de trois piliers fondamentaux : la responsabilité environnementale, l'engagement social et la gouvernance éthique.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nous intégrons ces valeurs dans chacune de nos décisions opérationnelles et stratégiques, créant ainsi une valeur partagée pour nos clients, nos équipes et les communautés dans lesquelles nous opérons.
            </p>
          </div>
          <div className="bg-gradient-to-br from-emerald-100 to-sky-100 p-8 rounded-lg">
            <div className="text-center">
              <TreeEvergreen className="h-16 w-16 text-emerald-600 mx-auto mb-4" aria-hidden="true" />
              <h4 className="text-2xl font-semibold mb-4 text-emerald-700">Impact Positif</h4>
              <p className="text-emerald-600">Nous nous engageons à créer un impact positif durable à travers nos actions et nos partenariats responsables.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8" role="list">
          <Card className="border-emerald-200 hover:shadow-lg transition-shadow duration-300 bg-emerald-50/30" role="listitem">
            <CardHeader>
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600" aria-hidden="true">
                  <Leaf className="w-8 h-8" />
                </div>
              </div>
              <CardTitle className="text-xl text-emerald-700">Environnement</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed text-emerald-600">
                Réduction de notre empreinte carbone, promotion des énergies renouvelables et sensibilisation à l'éco-responsabilité dans toutes nos activités.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-sky-200 hover:shadow-lg transition-shadow duration-300 bg-sky-50/30" role="listitem">
            <CardHeader>
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-sky-100 rounded-lg text-sky-600" aria-hidden="true">
                  <Heart className="w-8 h-8" />
                </div>
              </div>
              <CardTitle className="text-xl text-sky-700">Social</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed text-sky-600">
                Soutien aux communautés locales, promotion de la diversité et de l'inclusion, et développement des compétences de nos collaborateurs.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-violet-200 hover:shadow-lg transition-shadow duration-300 bg-violet-50/30" role="listitem">
            <CardHeader>
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-violet-100 rounded-lg text-violet-600" aria-hidden="true">
                  <HandHeart className="w-8 h-8" />
                </div>
              </div>
              <CardTitle className="text-xl text-violet-700">Gouvernance</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed text-violet-600">
                Transparence, éthique des affaires, respect des droits humains et gouvernance responsable dans toutes nos opérations.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-gradient-to-br from-slate-100/60 to-stone-100/60 rounded-lg p-8 border border-slate-200/50">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4 text-slate-700">Nos Actions Concrètes</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8" role="list">
              <div className="text-center" role="listitem">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" aria-hidden="true">
                  <Recycle className="h-8 w-8 text-emerald-600" />
                </div>
                <h4 className="font-semibold mb-2 text-emerald-700">Économie Circulaire</h4>
                <p className="text-sm text-emerald-600">Réduction des déchets et recyclage</p>
              </div>
              <div className="text-center" role="listitem">
                <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" aria-hidden="true">
                  <Users className="h-8 w-8 text-sky-600" />
                </div>
                <h4 className="font-semibold mb-2 text-sky-700">Formation Continue</h4>
                <p className="text-sm text-sky-600">Développement des compétences</p>
              </div>
              <div className="text-center" role="listitem">
                <div className="bg-violet-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" aria-hidden="true">
                  <Heart className="h-8 w-8 text-violet-600" />
                </div>
                <h4 className="font-semibold mb-2 text-violet-700">Mécénat Social</h4>
                <p className="text-sm text-violet-600">Soutien aux associations locales</p>
              </div>
              <div className="text-center" role="listitem">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" aria-hidden="true">
                  <Medal className="h-8 w-8 text-amber-600" />
                </div>
                <h4 className="font-semibold mb-2 text-amber-700">Certifications</h4>
                <p className="text-sm text-amber-600">Labels qualité et environnement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RSESection;
