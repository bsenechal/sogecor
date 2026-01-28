import { Phone, Envelope, MapPin } from '@phosphor-icons/react'
import { ScrollReveal } from '@/components/ScrollReveal'

export function Footer() {
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
                Expert en détection de canalisations par géoradar. 
                Solutions professionnelles pour tous vos projets de localisation de réseaux souterrains.
              </p>
              <div className="flex items-center gap-2 text-background/80">
                <MapPin size={16} />
                <span className="text-sm">Interventions sur toute la France</span>
              </div>
            </ScrollReveal>

            {/* Quick Links */}
            <ScrollReveal direction="up" delay={0.2}>
              <h4 className="font-semibold text-background mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => document.getElementById('accueil')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Accueil
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('a-propos')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    À Propos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Nos Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal direction="up" delay={0.3}>
              <h4 className="font-semibold text-background mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-background/60" />
                  <a href="tel:0123456789" className="text-background/80 hover:text-background transition-colors">
                    01 23 45 67 89
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Envelope size={16} className="text-background/60" />
                  <a href="mailto:contact@sogecor.fr" className="text-background/80 hover:text-background transition-colors">
                    contact@sogecor.fr
                  </a>
                </div>
              </div>
              <div className="mt-6">
                <h5 className="font-medium text-background mb-2">Horaires</h5>
                <p className="text-sm text-background/80">
                  Lun - Ven : 8h00 - 18h00<br />
                  Samedi : 9h00 - 12h00
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom Bar */}
          <ScrollReveal direction="fade" delay={0.4}>
            <div className="border-t border-background/20 mt-8 pt-8 text-center">
              <p className="text-background/60 text-sm">
                © {new Date().getFullYear()} SOGECOR. Tous droits réservés. | 
                Détection de canalisations par géoradar | 
                SIRET : 123 456 789 00012
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  )
}