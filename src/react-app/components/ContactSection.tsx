import {
  Clock,
  Envelope,
  MapPin as LocationIcon,
  PaperPlaneTilt,
  Phone,
} from "@phosphor-icons/react";
import { useState } from "react";
import { toast } from "sonner";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection({ hideHeader = false }: { hideHeader?: boolean }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Veuillez saisir une adresse email valide");
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success(
        "Votre message a été envoyé avec succès ! Nous vous recontacterons rapidement.",
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (_error) {
      toast.error("Erreur lors de l'envoi du message. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      value: "03 44 09 12 34",
      link: "tel:0344091234",
    },
    {
      icon: Envelope,
      title: "Email",
      value: "matthieu.senechal@sogecor.fr",
      link: "mailto:matthieu.senechal@sogecor.fr",
    },
    {
      icon: LocationIcon,
      title: "Adresse",
      value: "Mouy (Oise)",
      link: "https://maps.google.com/maps?q=Mouy+(Oise)",
    },
    {
      icon: Clock,
      title: "Horaires",
      value: "Lun - Ven : 8h00 - 18h00\nSamedi : 9h00 - 12h00",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          {!hideHeader && (
            <ScrollReveal direction="up" className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Parlons de Votre <span className="text-primary">Projet</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Notre équipe d'experts est à votre disposition pour étudier vos
                besoins et vous proposer la solution la plus adaptée.
              </p>
            </ScrollReveal>
          )}

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal direction="left" delay={0.2}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PaperPlaneTilt size={24} className="text-primary" />
                    Demande d'Informations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nom complet *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Votre nom et prénom"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="06 12 34 56 78"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="votre.email@exemple.fr"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">
                        Description de votre besoin *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Décrivez votre besoin, le type d'information souhaité, la localisation, etc."
                        rows={6}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting
                        ? "Envoi en cours..."
                        : "Envoyer ma Demande"}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      * Champs obligatoires. Nous nous engageons à répondre sous
                      24h.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal direction="right" delay={0.4} className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Informations de Contact
                </h3>
                <p className="text-muted-foreground mb-8">
                  Contactez-nous directement ou utilisez le formulaire
                  ci-contre. Nous intervenons sur toute la France
                  métropolitaine.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <ScrollReveal
                      key={index}
                      direction="up"
                      delay={0.1 * index}
                    >
                      <Card className="hover:shadow-md transition-shadow h-full">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon size={18} className="text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium text-foreground mb-1">
                                {info.title}
                              </h4>
                              <p className="text-sm text-muted-foreground whitespace-pre-line">
                                {info.value}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  );

                  return info.link ? (
                    <a
                      key={index}
                      href={info.link}
                      className="block"
                      target={
                        info.link.startsWith("https://maps")
                          ? "_blank"
                          : "_self"
                      }
                      rel={
                        info.link.startsWith("https://maps")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  );
                })}
              </div>

              <ScrollReveal direction="up" delay={0.8}>
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-3">
                      Information et Conseil
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Notre équipe vous renseigne sur nos services et vous
                      conseille sur les meilleures solutions pour vos besoins.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Conseil Gratuit</Badge>
                      <Badge variant="secondary">Réponse Rapide</Badge>
                      <Badge variant="secondary">France Entière</Badge>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
