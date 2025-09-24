import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Medal } from "@phosphor-icons/react";

export function AboutSection() {
  return (
    <section id="about" className="bg-muted" role="main">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">À Propos de SOGECOR</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Construire des partenariats durables grâce à un service et une expertise exceptionnels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-semibold mb-6">Notre Histoire</h3>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong>Fondée avec ambition</strong>, SOGECOR s'est développée pour devenir un partenaire de référence dans l'accompagnement des entreprises vers l'excellence opérationnelle.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Notre approche se distingue par une <strong>méthode éprouvée</strong> : écoute attentive, analyse précise et solutions sur mesure qui s'adaptent aux enjeux spécifiques de chaque client.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Aujourd'hui, nous continuons à innover pour offrir des services qui génèrent des <strong>résultats mesurables</strong> et une croissance pérenne.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-primary" />
                  Notre Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Accompagner chaque entreprise vers l'atteinte de son plein potentiel grâce à des solutions innovantes et un service d'excellence.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Medal className="h-6 w-6 text-primary" />
                  Nos Valeurs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Excellence, intégrité, innovation et collaboration : les piliers de notre engagement pour des partenariats durables et des résultats exceptionnels.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
