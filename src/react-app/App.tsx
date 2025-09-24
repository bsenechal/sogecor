import HeaderNav from "./components/HeaderNav";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import RSESection from "./components/RSESection";
import AppointmentSection from "./components/AppointmentSection";
import ContactSection from "./components/ContactSection";
import SiteFooter from "./components/SiteFooter";

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg"
      >
        Aller au contenu principal
      </a>
      <HeaderNav />

      {/* Hero Section */}
      <main id="main-content">
        <HeroSection />

        {/* About Us Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection />

        {/* RSE Section */}
        <RSESection />

        {/* Appointment Booking Section */}
        <AppointmentSection />

        {/* Contact Section */}
        <ContactSection />

        <SiteFooter />
      </main>
    </div>
  );
}

export default App;
