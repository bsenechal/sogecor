import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { RSESection } from "@/components/RSESection";
import { ServicesSection } from "@/components/ServicesSection";
import { ValeursSection } from "@/components/ValeursSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { Toaster } from "@/components/ui/sonner";
import exempleBE from "@/assets/images/ExempleBE.png";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <HeroSection />
        <AboutSection />

        {/* Image de fond partagée entre Expertise et WhyUs */}
        <div className="relative overflow-hidden">
          <img
            src={exempleBE}
            aria-hidden="true"
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="absolute inset-0 bg-primary/20" />
          <div className="relative z-10">
            <ExpertiseSection />
            <WhyUsSection />
          </div>
        </div>

        <ServicesSection />
        <ValeursSection />
        <RSESection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
