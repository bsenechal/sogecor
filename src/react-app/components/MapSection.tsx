import { ScrollReveal } from "@/components/ScrollReveal";

export function MapSection() {
  return (
    <section className="bg-muted">
      <ScrollReveal direction="up" delay={0.2}>
        <div className="w-full mx-auto">
          <div className="w-full h-96 lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.4267846474943!2d2.320094176293842!3d49.31627147933236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6456e8b7e4c3b%3A0x8b9a0c8e8b7e4c3b!2s182%20R.%20du%20G%C3%A9n%C3%A9ral%20Leclerc%2C%2060250%20Mouy!5e0!3m2!1sen!2sfr!4v1635789012345"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation SOGECOR - 182 rue du général Leclerc, 60250 Mouy"
              className="w-full h-full"
            />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
