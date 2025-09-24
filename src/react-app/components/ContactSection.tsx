import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { EnvelopeSimple, MapPin, Phone, PaperPlaneTilt } from "@phosphor-icons/react";
import { useKV } from "@github/spark/hooks";
import { toast } from "sonner";

interface ContactSubmission {
  name: string;
  email: string;
  phone: string;
  message: string;
  timestamp: string;
  id: number;
}

export function ContactSection() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [formSubmissions, setFormSubmissions] = useKV<ContactSubmission[]>("contact-submissions", []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactForm.email)) {
      toast.error("Veuillez entrer une adresse email valide");
      return;
    }
    const submission: ContactSubmission = { ...contactForm, timestamp: new Date().toISOString(), id: Date.now() };
    setFormSubmissions((current) => ([...(current || []), submission]));
    setContactForm({ name: "", email: "", phone: "", message: "" });
    toast.success("Merci pour votre message ! Nous vous répondrons bientôt.");
  };

  return (
    <section id="contact" className="bg-background" role="main">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contactez-Nous</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prêt à discuter de votre projet ? Nous sommes là pour vous aider à atteindre vos objectifs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Informations de Contact</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary" aria-hidden="true">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Téléphone</p>
                  <a href="tel:+330344411234" className="text-muted-foreground hover:text-primary transition-colors">
                    +33 (0)3 44 41 XX XX
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary" aria-hidden="true">
                  <EnvelopeSimple className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:contact@sogecor.com" className="text-muted-foreground hover:text-primary transition-colors">
                    contact@sogecor.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary" aria-hidden="true">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-medium">Adresse</p>
                  <address className="text-muted-foreground not-italic">
                    182 rue du Général Leclerc
                    <br />
                    60250 Mouy, France
                  </address>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Nous Localiser</h4>
              <div className="rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2597.8!2d2.3167!3d49.3167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e7b1c8b1234567%3A0x1234567890abcdef!2s182%20Rue%20du%20G%C3%A9n%C3%A9ral%20Leclerc%2C%2060250%20Mouy%2C%20France!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr&q=182+rue+du+Général+Leclerc,+60250+Mouy,+France"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SOGECOR - 182 rue du Général Leclerc, 60250 Mouy"
                ></iframe>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Envoyez-nous un Message</CardTitle>
              <CardDescription>Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24 heures.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nom *</Label>
                    <Input id="name" type="text" value={contactForm.name} onChange={(e) => setContactForm((p) => ({ ...p, name: e.target.value }))} placeholder="Votre nom complet" required aria-describedby="name-error" autoComplete="name" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" type="tel" value={contactForm.phone} onChange={(e) => setContactForm((p) => ({ ...p, phone: e.target.value }))} placeholder="Votre numéro de téléphone" autoComplete="tel" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" value={contactForm.email} onChange={(e) => setContactForm((p) => ({ ...p, email: e.target.value }))} placeholder="votre.email@exemple.com" required aria-describedby="email-error" autoComplete="email" />
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" value={contactForm.message} onChange={(e) => setContactForm((p) => ({ ...p, message: e.target.value }))} placeholder="Parlez-nous de votre projet ou de votre demande..." rows={5} required aria-describedby="message-error" />
                </div>
                <Button type="submit" className="w-full" size="lg" aria-label="Envoyer le message de contact">
                  <PaperPlaneTilt className="mr-2 h-5 w-5" aria-hidden="true" />
                  Envoyer le Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
