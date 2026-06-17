import { Envelope, PaperPlaneTilt, Phone } from "@phosphor-icons/react";
import { useState } from "react";
import { toast } from "sonner";
import { ScrollReveal } from "@/components/ScrollReveal";
import { NetworkAnimation } from "@/components/NetworkAnimation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/SectionHeading";
import { CONTACT } from "@/config/site";

export function ContactSection() {
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
      value: CONTACT.phoneDisplay,
      link: CONTACT.phoneHref,
    },
    {
      icon: Envelope,
      title: "Email",
      value: CONTACT.email,
      link: CONTACT.emailHref,
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-32 bg-secondary/40 overflow-hidden"
    >
      <NetworkAnimation />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            eyebrow="Contact"
            title={
              <>
                Parlons de votre <span className="text-primary">projet</span>
              </>
            }
            subtitle="Un besoin, une question, une demande de devis ? Notre équipe vous répond sous 24h."
          />

          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            {/* Left: Formulaire */}
            <div className="flex-1 flex flex-col">
              <ScrollReveal direction="left" delay={0.2}>
                <h3 className="text-2xl font-semibold text-foreground mb-6 text-left">
                  Contact par formulaire
                </h3>
                <Card className="flex-1 flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PaperPlaneTilt size={24} className="text-primary" />
                      Demande d'Informations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-6 flex-1 flex flex-col justify-between"
                    >
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
                        * Champs obligatoires. Nous nous engageons à répondre
                        sous 24h.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            {/* Divider */}
            <div className="hidden lg:flex items-stretch" aria-hidden="true">
              <div
                className="w-px bg-border mx-8"
                style={{ minHeight: "100%" }}
              />
            </div>

            {/* Right: Coordonnées directes */}
            <div className="flex-1 flex flex-col">
              <ScrollReveal
                direction="right"
                delay={0.4}
                className="h-full flex flex-col"
              >
                <h3 className="text-2xl font-semibold text-foreground mb-6 text-left">
                  Coordonnées directes
                </h3>
                <div className="grid grid-cols-1 gap-4 mb-8">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.link}
                        className="block"
                        target="_self"
                        rel={undefined}
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
                      </a>
                    );
                  })}
                </div>

                <Card className="bg-primary/5 border-primary/20 mt-auto">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-foreground mb-3">
                      Information et Conseil
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Notre équipe se tient à votre disposition, du lundi au
                      vendredi, de 8h00 à 18h00.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Conseil Gratuit</Badge>
                      <Badge variant="secondary">Réponse Rapide</Badge>
                      <Badge variant="secondary">France Entière</Badge>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
