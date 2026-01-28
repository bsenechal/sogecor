import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { RSESection } from "@/components/RSESection";
import { ContactSection } from "@/components/ContactSection";
import { MapSection } from "@/components/MapSection";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <></>
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
