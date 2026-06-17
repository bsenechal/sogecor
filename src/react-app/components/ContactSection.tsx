import { Envelope, PaperPlaneTilt, Phone } from "@phosphor-icons/react";
import { useState } from "react";
import { toast } from "sonner";
import { ScrollReveal } from "@/components/ScrollReveal";
import { NetworkAnimation } from "@/components/NetworkAnimation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
    company: "", // honeypot anti-spam (doit rester vide)
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

  const resetForm = () =>
    setFormData({ name: "", email: "", phone: "", message: "", company: "" });

  /** Repli : ouvre le client mail pré-rempli si l'envoi automatique échoue. */
  const openMailFallback = () => {
    const subject = `Demande de contact — ${formData.name}`;
    const lines = [
      `Nom : ${formData.name}`,
      `Email : ${formData.email}`,
      `Téléphone : ${formData.phone || "—"}`,
      "",
      formData.message,
    ];
    window.location.href = `${CONTACT.emailHref}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success(
          "Votre message a bien été envoyé ! Nous vous recontacterons rapidement.",
        );
        resetForm();
        return;
      }

      // Envoi automatique indisponible (service non configuré, erreur réseau…)
      // → on bascule sur le client mail de l'utilisateur.
      toast.info("Ouverture de votre messagerie pour finaliser l'envoi…");
      openMailFallback();
    } catch {
      toast.info("Ouverture de votre messagerie pour finaliser l'envoi…");
      openMailFallback();
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
      aria-labelledby="contact-title"
      className="relative py-20 lg:py-32 bg-secondary/70 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
      >
        <NetworkAnimation />
      </div>
      {/* Voile pour garantir la lisibilité du contenu */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-secondary/60 via-background/40 to-secondary/60"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            id="contact-title"
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
                <div className="flex flex-1 flex-col rounded-2xl border border-border/60 bg-card p-7 shadow-card sm:p-9">
                  <div className="mb-8 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <PaperPlaneTilt size={22} weight="duotone" />
                    </span>
                    <h4
                      id="form-title"
                      className="text-lg font-semibold text-foreground"
                    >
                      Demande d'informations
                    </h4>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    aria-labelledby="form-title"
                    className="flex flex-1 flex-col gap-6"
                  >
                    {/* Honeypot anti-spam — masqué aux humains */}
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      className="absolute -left-[9999px] h-0 w-0 opacity-0"
                    />

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nom complet *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Votre nom et prénom"
                          required
                          className="h-11 rounded-xl"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="06 12 34 56 78"
                          className="h-11 rounded-xl"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="votre.email@exemple.fr"
                        required
                        className="h-11 rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Description de votre besoin *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Décrivez votre besoin, le type d'information souhaité, la localisation, etc."
                        rows={5}
                        required
                        className="rounded-xl"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="mt-2 w-full rounded-full shadow-soft"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Envoi en cours…" : "Envoyer ma demande"}
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      * Champs obligatoires · Réponse sous 24h
                    </p>
                  </form>
                </div>
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
                <div className="mb-5 grid grid-cols-1 gap-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.link}
                        className="group block rounded-2xl border border-border/60 bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card"
                      >
                        <div className="flex items-center gap-4">
                          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                            <Icon size={22} weight="duotone" />
                          </span>
                          <div>
                            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                              {info.title}
                            </p>
                            <p className="text-lg font-semibold text-foreground">
                              {info.value}
                            </p>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>

                <div className="mt-auto rounded-2xl border border-primary/20 bg-primary/5 p-6">
                  <h4 className="mb-2 font-semibold text-foreground">
                    Information et conseil
                  </h4>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    Notre équipe se tient à votre disposition, du lundi au
                    vendredi, de 8h00 à 18h00.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Conseil gratuit</Badge>
                    <Badge variant="secondary">Réponse rapide</Badge>
                    <Badge variant="secondary">France entière</Badge>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
