import { Phone, Envelope, MapPin, Clock } from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CONTACT, COMPANY, NAV_ITEMS } from "@/config/site";
import { useScrollToSection } from "@/hooks";

const FOOTER_LINKS = NAV_ITEMS.filter((item) => item.id !== "rse");

export function Footer() {
  const scrollToSection = useScrollToSection();

  return (
    <footer className="relative overflow-hidden bg-foreground text-background">
      <div
        aria-hidden="true"
        className="radar-grid absolute inset-0 text-white opacity-[0.05]"
      />
      <div className="relative container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            {/* Marque */}
            <ScrollReveal direction="up" delay={0.1} className="md:col-span-5">
              <div className="mb-5 text-2xl font-bold tracking-tight text-background">
                SOGE<span className="text-primary">COR</span>
              </div>
              <p className="mb-5 max-w-sm leading-relaxed text-background/70">
                Bureau d'études spécialisé dans la détection et la
                géolocalisation des réseaux souterrains. Des solutions fiables
                pour sécuriser vos chantiers.
              </p>
              <div className="flex items-center gap-2 text-sm text-background/70">
                <MapPin size={18} weight="duotone" className="text-primary" />
                <span>Mouy (Oise) · {CONTACT.area}</span>
              </div>
            </ScrollReveal>

            {/* Navigation */}
            <ScrollReveal direction="up" delay={0.2} className="md:col-span-3">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background/50">
                Navigation
              </h4>
              <ul className="space-y-2.5">
                {FOOTER_LINKS.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-background/75 transition-colors hover:text-primary"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Contact */}
            <ScrollReveal direction="up" delay={0.3} className="md:col-span-4">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background/50">
                Contact
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Phone size={18} weight="duotone" className="text-primary" />
                  <a
                    href={CONTACT.phoneHref}
                    className="text-background/75 transition-colors hover:text-background"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Envelope
                    size={18}
                    weight="duotone"
                    className="text-primary"
                  />
                  <a
                    href={CONTACT.emailHref}
                    className="text-background/75 transition-colors hover:text-background"
                  >
                    {CONTACT.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Clock
                    size={18}
                    weight="duotone"
                    className="mt-0.5 text-primary"
                  />
                  <span className="text-background/75">
                    {CONTACT.hours}
                    <br />
                    {CONTACT.hoursWeekend}
                  </span>
                </li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col items-center gap-2 border-t border-background/15 pt-8 text-center text-sm text-background/55 sm:flex-row sm:justify-between sm:text-left">
            <p>
              © {new Date().getFullYear()} {COMPANY.name} · Tous droits réservés
            </p>
            <p>SIRET : {COMPANY.siret}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
