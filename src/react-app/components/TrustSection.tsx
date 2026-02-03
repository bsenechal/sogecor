import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ScrollReveal } from "@/components/ScrollReveal";
import AutoScroll from "embla-carousel-auto-scroll";
import { Card, CardContent } from "@/components/ui/card";

export function TrustSection() {
  const clients = [
    { name: "SUEZ", id: 1 },
    { name: "VINCI", id: 2 },
    { name: "EIFFAGE", id: 3 },
    { name: "BOUYGUES", id: 4 },
    { name: "ENEDIS", id: 5 },
    { name: "GRDF", id: 6 },
    { name: "SNCF", id: 7 },
    { name: "COLAS", id: 8 },
    { name: "EUROVIA", id: 9 },
  ];

  return (
    <section className="w-full py-16 bg-white border-t border-gray-100/50 overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto mb-10 text-center">
            <ScrollReveal>
                <h2 className="text-2xl font-semibold tracking-tight text-sogecor-darkblue md:text-3xl">
                    Ils nous font confiance
                </h2>
            </ScrollReveal>
        </div>
      
      <div className="w-full">
        <ScrollReveal delay={0.2}>
          <Carousel
            opts={{
              loop: true,
              dragFree: true,
            }}
            plugins={[
              AutoScroll({
                speed: 1, // Smooth constant speed
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-0">
              {clients.map((client) => (
                <CarouselItem key={client.id} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 pl-4 md:pl-8">
                  <div className="p-1 h-full">
                    <Card className="border-0 shadow-none bg-transparent h-full flex items-center justify-center">
                      <CardContent className="flex items-center justify-center p-4">
                        <span className="text-xl md:text-2xl font-bold text-gray-400 hover:text-sogecor-primary transition-colors cursor-default select-none whitespace-nowrap">
                            {client.name}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </ScrollReveal>
      </div>
    </section>
  );
}
