import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { RSESection } from "@/components/RSESection";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ServicesSection } from "@/components/ServicesSection";
import { ValeursSection } from "@/components/ValeursSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:font-medium focus:text-primary-foreground focus:shadow-card"
      >
        Aller au contenu
      </a>
      <ScrollProgress />
      <Header />

      <main id="contenu">
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <WhyUsSection />
        <ServicesSection />
        <ValeursSection />
        <RSESection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
