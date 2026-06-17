import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import logo from "@/assets/images/logo.webp";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS, SECTION_IDS } from "@/config/site";
import { useActiveSection, useScrollToSection, useScrolled } from "@/hooks";
import { cn } from "@/lib/utils";

const SECTION_ORDER = NAV_ITEMS.map((item) => item.id);

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection(() => setIsMenuOpen(false));
  const scrolled = useScrolled(24);
  const activeId = useActiveSection(SECTION_ORDER);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md shadow-soft"
          : "border-b border-transparent bg-background/0",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-[72px]">
          <a
            href={`#${SECTION_IDS.accueil}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(SECTION_IDS.accueil);
            }}
            className="flex-shrink-0"
            aria-label="SOGECOR — retour à l'accueil"
          >
            <img src={logo} alt="SOGECOR" className="h-8 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Navigation principale"
          >
            {NAV_ITEMS.map((item) => {
              const active = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-current={active ? "true" : undefined}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/70 hover:bg-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection(SECTION_IDS.contact)}
              className="rounded-full shadow-soft"
            >
              Nous Contacter
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={22} /> : <List size={22} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            className="border-t border-border pb-3 md:hidden"
            aria-label="Navigation mobile"
          >
            <div className="space-y-1 px-1 pt-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-current={activeId === item.id ? "true" : undefined}
                  className={cn(
                    "block w-full rounded-lg px-3 py-2.5 text-left font-medium transition-colors",
                    activeId === item.id
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:bg-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-1 pt-2">
                <Button
                  onClick={() => scrollToSection(SECTION_IDS.contact)}
                  className="w-full rounded-full"
                >
                  Nous Contacter
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
