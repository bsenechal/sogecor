import { AboutTeaser } from "@/components/AboutTeaser";
import { HeroSection } from "@/components/HeroSection";
import { RSESection } from "@/components/RSESection";
import { ServicesTeaser } from "@/components/ServicesTeaser";
import { TrustSection } from "@/components/TrustSection";

export function Home() {
  return (
    <>
      <HeroSection />
      <ServicesTeaser />
      <TrustSection />
      <AboutTeaser />
      <RSESection />
    </>
  );
}
