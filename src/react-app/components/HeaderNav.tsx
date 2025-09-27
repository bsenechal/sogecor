import { useState } from "react";
import { Button } from "@/components/ui/button";
import { List, X } from "@phosphor-icons/react";
import sogeCorLogo from "@/assets/images/sogecor-logo.svg";

function scrollToId(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function HeaderNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const onNavigate = (id: string) => {
    scrollToId(id);
    setMobileMenuOpen(false);
  };

  const desktopLinkClasses =
    "inline-flex items-center gap-1 rounded-md px-3 py-2 text-base font-medium text-foreground/90 transition-all duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35";
  const mobileLinkClasses =
    "block w-full rounded-md px-4 py-3 text-lg font-medium text-foreground/90 transition-colors hover:bg-primary/10 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35";

  return (
    <nav className="sticky top-0 z-50 border-b border-border/60 bg-white/90 shadow-sm shadow-primary/10 backdrop-blur supports-[backdrop-filter]:backdrop-blur-xl">
      <div className="container-max">
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <img
              src={sogeCorLogo}
              alt="SOGECOR - Accueil"
              className="h-9 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav aria-label="Navigation principale">
              <div className="ml-10 flex items-center gap-4">
                <button
                  onClick={() => onNavigate("home")}
                  className={desktopLinkClasses}
                  aria-label="Aller à la section accueil"
                >
                  Accueil
                </button>
                <button
                  onClick={() => onNavigate("about")}
                  className={desktopLinkClasses}
                  aria-label="Aller à la section à propos"
                >
                  À Propos
                </button>
                <button
                  onClick={() => onNavigate("services")}
                  className={desktopLinkClasses}
                  aria-label="Aller à la section nos services"
                >
                  Nos Services
                </button>
                <button
                  onClick={() => onNavigate("rse")}
                  className={desktopLinkClasses}
                  aria-label="Aller à la section RSE"
                >
                  RSE
                </button>
                <button
                  onClick={() => onNavigate("rendez-vous")}
                  className={desktopLinkClasses}
                  aria-label="Aller à la section prise de rendez-vous"
                >
                  Rendez-vous
                </button>
                <button
                  onClick={() => onNavigate("contact")}
                  className={desktopLinkClasses}
                  aria-label="Aller à la section contact"
                >
                  Contact
                </button>
              </div>
            </nav>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <List className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            className="md:hidden border-t border-border/60 bg-white/95 backdrop-blur"
            role="navigation"
            aria-label="Navigation mobile"
          >
            <div className="px-3 py-4 space-y-2">
              <button
                onClick={() => onNavigate("home")}
                className={mobileLinkClasses}
                aria-label="Aller à la section accueil"
              >
                Accueil
              </button>
              <button
                onClick={() => onNavigate("about")}
                className={mobileLinkClasses}
                aria-label="Aller à la section à propos"
              >
                À Propos
              </button>
              <button
                onClick={() => onNavigate("services")}
                className={mobileLinkClasses}
                aria-label="Aller à la section nos services"
              >
                Nos Services
              </button>
              <button
                onClick={() => onNavigate("rse")}
                className={mobileLinkClasses}
                aria-label="Aller à la section RSE"
              >
                RSE
              </button>
              <button
                onClick={() => onNavigate("rendez-vous")}
                className={mobileLinkClasses}
                aria-label="Aller à la section prise de rendez-vous"
              >
                Rendez-vous
              </button>
              <button
                onClick={() => onNavigate("contact")}
                className={mobileLinkClasses}
                aria-label="Aller à la section contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default HeaderNav;
