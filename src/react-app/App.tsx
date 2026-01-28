import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MapSection } from "@/components/MapSection";
import { RSESection } from "@/components/RSESection";
import { ServicesSection } from "@/components/ServicesSection";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <RSESection />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
