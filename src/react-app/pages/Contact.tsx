import { ContactSection } from "@/components/ContactSection";
import { MapSection } from "@/components/MapSection";
import { PageHero } from "@/components/PageHero";

export function Contact() {
  return (
    <div className="bg-background min-h-screen pb-20">
      <PageHero 
        title="Contactez-nous" 
        subtitle="Notre équipe d'experts est à votre disposition pour étudier vos besoins et vous proposer la solution la plus adaptée."
      />
      <div className="mt-12">
        <ContactSection hideHeader={true} />
      </div>
      <MapSection />
    </div>
  );
}
