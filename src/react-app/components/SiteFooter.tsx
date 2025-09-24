import sogeCorLogo from "@/assets/images/sogecor-logo.svg";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground" role="contentinfo">
      <div className="container-max px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <img src={sogeCorLogo} alt="SOGECOR - Retour à l'accueil" className="h-12 w-auto mx-auto mb-4" />
          <p className="text-primary-foreground/80 mb-4">Excellence en Services Professionnels</p>
          <p className="text-sm text-primary-foreground/60">© 2024 SOGECOR. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
