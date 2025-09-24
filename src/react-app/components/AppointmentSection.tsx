import { AppointmentBooking } from "@/components/AppointmentBooking";

export function AppointmentSection() {
  return (
    <section id="rendez-vous" className="bg-muted" role="main">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Prise de Rendez-vous</h2>
        </div>
        <AppointmentBooking />
      </div>
    </section>
  );
}

export default AppointmentSection;
