import { ScrollReveal } from "@/components/ScrollReveal";
import { useEffect, useRef, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface PageHeroProps {
  title: string;
  subtitle: string;
  className?: string;
  backgroundImage?: string;
}

const DEFAULT_IMAGES: Record<string, string> = {
  "geodetection": "https://images.unsplash.com/photo-1526593646509-03c680561a15?q=80&w=2070&auto=format&fit=crop", // Surveyor reading digital map/device (High Tech)
  "georeferencement": "https://images.unsplash.com/photo-1628158088791-89567a8e84ec?q=80&w=2070&auto=format&fit=crop", // Surveyor with red helmet and staff (Field work)
  "etudes": "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop", // Plans
  "marquage": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop", // Construction site
  "contact": "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop", // Contact
  "default": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop", // General construction
  "about": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop", // Team
};

function getHeroImage(title: string): string {
  const lowerTitle = title.toLowerCase();
  
  if (lowerTitle.includes("référencement") || lowerTitle.includes("referencement")) return DEFAULT_IMAGES.georeferencement;
  if (lowerTitle.includes("détection") || lowerTitle.includes("detection") || lowerTitle.includes("géo")) return DEFAULT_IMAGES.geodetection;
  if (lowerTitle.includes("étude") || lowerTitle.includes("etude")) return DEFAULT_IMAGES.etudes;
  if (lowerTitle.includes("marquage") || lowerTitle.includes("piquetage")) return DEFAULT_IMAGES.marquage;
  if (lowerTitle.includes("contact")) return DEFAULT_IMAGES.contact;
  if (lowerTitle.includes("sommes")) return DEFAULT_IMAGES.about;
  
  return DEFAULT_IMAGES.default;
}

export function PageHero({ title, subtitle, className = "", backgroundImage }: PageHeroProps) {
  const bgRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageToUse = backgroundImage || getHeroImage(title);

  useEffect(() => {
    // Preload image
    const img = new Image();
    img.src = imageToUse;
    img.onload = () => setImageLoaded(true);
  }, [imageToUse]);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrolled = window.scrollY;
        // Simple parallax: move background at 20% speed of scroll
        bgRef.current.style.transform = `translateY(${scrolled * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`relative min-h-[50vh] flex flex-col justify-center pt-32 pb-24 overflow-hidden ${className}`}>
        {/* Skeleton Loader */}
        {!imageLoaded && (
          <div className="absolute inset-0 z-0">
            <Skeleton className="w-full h-full bg-muted/20" />
          </div>
        )}

        {/* Parallax Background */}
        <div 
          className={`absolute inset-0 z-0 overflow-hidden transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
            <div 
                ref={bgRef}
                className="absolute inset-0 w-full h-[120%] -top-[10%]"
                style={{
                    backgroundImage: `url(${imageToUse})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    willChange: "transform"
                }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-background/85" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <ScrollReveal direction="up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
