import { List, X, CaretDown, CaretUp } from "@phosphor-icons/react";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "@/assets/images/logo.webp";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Qui sommes-nous ?", path: "/qui-sommes-nous" },
    { 
      name: "Nos Métiers",  
      path: "/metiers",
      children: [
        { name: "Géodétection", path: "/metiers/geodetection" },
        { name: "Géoréférencement", path: "/metiers/georeferencement" },
        { name: "Bureau d'études", path: "/metiers/bureau-etudes" },
        { name: "Marquage / Piquetage", path: "/metiers/marquage-piquetage" },
      ]
    },
  ];

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary rounded-lg block"
              aria-label="Retour à l'accueil"
            >
              <img src={logo} alt="SOGECOR - Détection de réseaux" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation & CTA */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex space-x-8 items-center">
              {navLinks.map((link) => (
                <div key={link.path} className="relative group">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => cn(
                      "flex items-center gap-1 text-foreground hover:text-primary transition-colors cursor-pointer text-sm font-medium py-2",
                      isActive && "text-primary font-semibold"
                    )}
                  >
                    {link.name}
                    {link.children && <CaretDown size={14} />}
                  </NavLink>

                  {link.children && (
                    <div className="absolute left-0 top-full pt-2 w-48 hidden group-hover:block">
                      <div className="bg-background border border-border rounded-md shadow-lg p-2 flex flex-col gap-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="text-sm text-foreground/80 hover:text-primary hover:bg-muted px-3 py-2 rounded-md transition-colors block"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <Button asChild>
              <Link to="/contact">Nous Contacter</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <List size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border max-h-[80vh] overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <div key={link.path}>
                  <div className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-muted transition-colors">
                    <NavLink
                      to={link.path}
                      onClick={() => !link.children && setIsMenuOpen(false)}
                      className={({ isActive }) => cn(
                        "block w-full text-foreground hover:text-primary cursor-pointer font-medium",
                        isActive && "text-primary font-semibold"
                      )}
                    >
                      {link.name}
                    </NavLink>
                    {link.children && (
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          toggleSubmenu(link.name);
                        }}
                        className="p-1 hover:bg-background rounded-full"
                      >
                        {openSubmenu === link.name ? (
                          <CaretUp size={16} />
                        ) : (
                          <CaretDown size={16} />
                        )}
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Submenu */}
                  {link.children && openSubmenu === link.name && (
                    <div className="pl-6 pr-3 py-1 space-y-1 bg-muted/30 rounded-md my-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-sm text-foreground/80 hover:text-primary px-3 py-2 rounded-md transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-3 py-2 mt-4">
                <Button className="w-full" asChild>
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Nous Contacter
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
