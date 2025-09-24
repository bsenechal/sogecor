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

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <img src={sogeCorLogo} alt="SOGECOR - Accueil" className="h-8 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav aria-label="Navigation principale">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => onNavigate("home")} className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors" aria-label="Aller à la section accueil">Accueil</button>
                <button onClick={() => onNavigate("about")} className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors" aria-label="Aller à la section à propos">À Propos</button>
                <button onClick={() => onNavigate("services")} className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors" aria-label="Aller à la section nos services">Nos Services</button>
                <button onClick={() => onNavigate("rse")} className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors" aria-label="Aller à la section RSE">RSE</button>
                <button onClick={() => onNavigate("rendez-vous")} className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors" aria-label="Aller à la section prise de rendez-vous">Rendez-vous</button>
                <button onClick={() => onNavigate("contact")} className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors" aria-label="Aller à la section contact">Contact</button>
              </div>
            </nav>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle mobile menu">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <List className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border" role="navigation" aria-label="Navigation mobile">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => onNavigate("home")} className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors" aria-label="Aller à la section accueil">Accueil</button>
              <button onClick={() => onNavigate("about")} className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors" aria-label="Aller à la section à propos">À Propos</button>
              <button onClick={() => onNavigate("services")} className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors" aria-label="Aller à la section nos services">Nos Services</button>
              <button onClick={() => onNavigate("rse")} className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors" aria-label="Aller à la section RSE">RSE</button>
              <button onClick={() => onNavigate("rendez-vous")} className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors" aria-label="Aller à la section prise de rendez-vous">Rendez-vous</button>
              <button onClick={() => onNavigate("contact")} className="text-foreground hover:text-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors" aria-label="Aller à la section contact">Contact</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default HeaderNav;
