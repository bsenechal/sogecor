import { Phone, Envelope, MapPin } from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CONTACT, COMPANY, NAV_ITEMS } from "@/config/site";
import { useScrollToSection } from "@/hooks";

const FOOTER_LINKS = NAV_ITEMS.filter((item) => item.id !== "rse");

export function Footer() {
  const scrollToSection = useScrollToSection();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <ScrollReveal direction="up" delay={0.1}>
              <div className="text-2xl font-bold text-background mb-4">
                SOGECOR
              </div>
              <p className="text-background/80 mb-4 leading-relaxed">
                Expert en détection de canalisations par géoradar. Solutions
                professionnelles pour tous vos projets de localisation de
                réseaux souterrains.
              </p>
              <div className="flex items-center gap-2 text-background/80">
                <MapPin size={16} />
                <span className="text-sm">{CONTACT.area}</span>
              </div>
            </ScrollReveal>

            {/* Quick Links */}
            <ScrollReveal direction="up" delay={0.2}>
              <h4 className="font-semibold text-background mb-4">Navigation</h4>
              <ul className="space-y-2">
                {FOOTER_LINKS.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-background/80 hover:text-background transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal direction="up" delay={0.3}>
              <h4 className="font-semibold text-background mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-background/60" />
                  <a
                    href={CONTACT.phoneHref}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {CONTACT.phoneDisplay}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Envelope size={16} className="text-background/60" />
                  <a
                    href={CONTACT.emailHref}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>
              <div className="mt-6">
                <h5 className="font-medium text-background mb-2">Horaires</h5>
                <p className="text-sm text-background/80">
                  {CONTACT.hours}
                  <br />
                  {CONTACT.hoursWeekend}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom Bar */}
          <ScrollReveal direction="fade" delay={0.4}>
            <div className="border-t border-background/20 mt-8 pt-8 text-center">
              <p className="text-background/60 text-sm">
                © {new Date().getFullYear()} {COMPANY.name}. Tous droits
                réservés. | {COMPANY.tagline} | SIRET : {COMPANY.siret}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
}
