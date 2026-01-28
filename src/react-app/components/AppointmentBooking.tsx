import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  EnvelopeSimple,
  CheckCircle,
  X,
  PaperPlaneTilt,
} from "@phosphor-icons/react";
import { format, isAfter, isBefore, isSameDay, addDays } from "date-fns";
import { fr } from "date-fns/locale";
import { useState } from "react";
import { toast } from "sonner";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

interface Appointment {
  id: string;
  date: Date;
  time: string;
  duration: number;
  service: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  notes: string;
  status: "confirmed" | "pending" | "cancelled";
  createdAt: Date;
  emailSent: boolean;
  confirmationEmailId?: string;
}

interface TimeSlot {
  time: string;
  available: boolean;
}

const services = [
  { id: "conseil", name: "Conseil Stratégique", duration: 60 },
  { id: "audit", name: "Audit & Diagnostic", duration: 90 },
  { id: "formation", name: "Formation & Accompagnement", duration: 120 },
  { id: "gestion-projet", name: "Gestion de Projet", duration: 60 },
  { id: "rh", name: "Conseil RH", duration: 60 },
  { id: "autre", name: "Autre (à préciser)", duration: 60 },
];

// Horaires de bureau : 9h-12h et 14h-18h
const timeSlots: TimeSlot[] = [
  { time: "09:00", available: true },
  { time: "09:30", available: true },
  { time: "10:00", available: true },
  { time: "10:30", available: true },
  { time: "11:00", available: true },
  { time: "11:30", available: true },
  { time: "14:00", available: true },
  { time: "14:30", available: true },
  { time: "15:00", available: true },
  { time: "15:30", available: true },
  { time: "16:00", available: true },
  { time: "16:30", available: true },
  { time: "17:00", available: true },
  { time: "17:30", available: true },
];

export function AppointmentBooking() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [selectedService, setSelectedService] = useState<string>();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  const [bookingForm, setBookingForm] = useState({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    notes: "",
  });

  // Fonction pour confirmer un rendez-vous
  const confirmAppointment = async (appointmentId: string) => {
    const appointment = appointments?.find((apt) => apt.id === appointmentId);
    if (!appointment) return;

    setIsSendingEmail(true);

    try {
      // Mettre à jour le statut du rendez-vous
      setAppointments((currentAppointments) =>
        (currentAppointments || []).map((apt) =>
          apt.id === appointmentId
            ? {
                ...apt,
                status: "confirmed" as const,
                emailSent: false,
              }
            : apt,
        ),
      );

      toast.success("Rendez-vous confirmé avec succès!");
    } catch {
      toast.error("Erreur lors de la confirmation du rendez-vous");
    } finally {
      setIsSendingEmail(false);
    }
  };
  const getAvailableSlots = (date: Date): TimeSlot[] => {
    if (!date) return [];

    const dayAppointments =
      appointments?.filter(
        (apt) =>
          isSameDay(new Date(apt.date), date) && apt.status !== "cancelled",
      ) || [];

    return timeSlots.map((slot) => ({
      ...slot,
      available: !dayAppointments.some((apt) => apt.time === slot.time),
    }));
  };

  // Vérifier si une date est réservable (jours ouvrés uniquement, pas de week-end)
  const isDateBookable = (date: Date): boolean => {
    const today = new Date();
    const dayOfWeek = date.getDay();

    // Pas de week-end (0 = dimanche, 6 = samedi)
    if (dayOfWeek === 0 || dayOfWeek === 6) return false;

    // Pas de dates passées
    if (isBefore(date, today)) return false;

    // Pas plus de 60 jours à l'avance
    const maxDate = addDays(today, 60);
    if (isAfter(date, maxDate)) return false;

    return true;
  };

  const handleBookAppointment = async () => {
    if (
      !selectedDate ||
      !selectedTime ||
      !selectedService ||
      !bookingForm.clientName ||
      !bookingForm.clientEmail
    ) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(bookingForm.clientEmail)) {
      toast.error("Veuillez entrer une adresse email valide");
      return;
    }

    const selectedServiceData = services.find((s) => s.id === selectedService);
    if (!selectedServiceData) {
      toast.error("Service sélectionné invalide");
      return;
    }

    const newAppointment: Appointment = {
      id: `apt_${Date.now()}`,
      date: selectedDate,
      time: selectedTime,
      duration: selectedServiceData.duration,
      service: selectedServiceData.name,
      clientName: bookingForm.clientName,
      clientEmail: bookingForm.clientEmail,
      clientPhone: bookingForm.clientPhone,
      notes: bookingForm.notes,
      status: "pending",
      createdAt: new Date(),
      emailSent: false,
    };

    setAppointments((currentAppointments) => [
      ...(currentAppointments || []),
      newAppointment,
    ]);

    toast.success("Rendez-vous créé avec succès!");

    // Reset form
    setSelectedDate(undefined);
    setSelectedTime(undefined);
    setSelectedService(undefined);
    setBookingForm({
      clientName: "",
      clientEmail: "",
      clientPhone: "",
      notes: "",
    });
    setIsBookingOpen(false);
  };

  const availableSlots = selectedDate ? getAvailableSlots(selectedDate) : [];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-4">Prendre Rendez-vous</h3>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Planifiez facilement un entretien avec nos experts. Choisissez votre
          créneau préféré.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Calendrier */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5" aria-hidden="true" />
              Sélectionnez une Date
            </CardTitle>
            <CardDescription>
              Choisissez un jour ouvré pour votre rendez-vous
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) => !isDateBookable(date)}
              className="w-full"
              locale={fr}
              weekStartsOn={1}
              aria-label="Calendrier de sélection de date pour le rendez-vous"
            />

            {selectedDate && (
              <div
                className="mt-4 p-4 bg-muted rounded-lg"
                role="status"
                aria-live="polite"
              >
                <p className="text-sm font-medium mb-2">
                  Date sélectionnée :{" "}
                  {format(selectedDate, "EEEE dd MMMM yyyy", { locale: fr })}
                </p>
                <Badge variant="outline" className="text-xs">
                  {availableSlots.filter((slot) => slot.available).length}{" "}
                  créneaux disponibles
                </Badge>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Créneaux horaires */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" aria-hidden="true" />
              Créneaux Disponibles
            </CardTitle>
            <CardDescription>
              Sélectionnez l'heure qui vous convient le mieux
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!selectedDate ? (
              <Alert role="alert">
                <CalendarIcon className="h-4 w-4" aria-hidden="true" />
                <AlertDescription>
                  Veuillez d'abord sélectionner une date dans le calendrier.
                </AlertDescription>
              </Alert>
            ) : (
              <div className="space-y-4">
                <div
                  className="grid grid-cols-2 gap-2"
                  role="group"
                  aria-label="Créneaux horaires disponibles"
                >
                  {availableSlots.map((slot) => (
                    <Button
                      key={slot.time}
                      variant={
                        selectedTime === slot.time ? "default" : "outline"
                      }
                      disabled={!slot.available}
                      onClick={() => setSelectedTime(slot.time)}
                      className="h-12"
                      aria-label={`Créneau de ${slot.time}, ${
                        slot.available ? "disponible" : "indisponible"
                      }`}
                      aria-pressed={selectedTime === slot.time}
                    >
                      {slot.time}
                    </Button>
                  ))}
                </div>

                {selectedTime && (
                  <div
                    className="mt-4 p-4 bg-primary/5 border border-primary/20 rounded-lg"
                    role="status"
                    aria-live="polite"
                  >
                    <p className="text-sm font-medium text-primary">
                      Créneau sélectionné : {selectedTime}
                    </p>
                  </div>
                )}

                {availableSlots.every((slot) => !slot.available) && (
                  <Alert role="alert">
                    <X className="h-4 w-4" aria-hidden="true" />
                    <AlertDescription>
                      Aucun créneau disponible pour cette date. Veuillez choisir
                      une autre date.
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Service et formulaire */}
      {selectedDate && selectedTime && (
        <Card>
          <CardHeader>
            <CardTitle>Finaliser votre Rendez-vous</CardTitle>
            <CardDescription>
              Renseignez vos informations et le type de service souhaité
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="service">Type de Service *</Label>
              <Select
                value={selectedService}
                onValueChange={setSelectedService}
                required
              >
                <SelectTrigger
                  id="service"
                  aria-label="Sélectionner un type de service"
                >
                  <SelectValue placeholder="Sélectionnez un service" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((service) => (
                    <SelectItem key={service.id} value={service.id}>
                      <div className="flex justify-between items-center w-full">
                        <span>{service.name}</span>
                        <span
                          className="text-xs text-muted-foreground ml-2"
                          aria-label={`Durée: ${service.duration} minutes`}
                        >
                          {service.duration} min
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="client-name">Nom Complet *</Label>
                <Input
                  id="client-name"
                  value={bookingForm.clientName}
                  onChange={(e) =>
                    setBookingForm((prev) => ({
                      ...prev,
                      clientName: e.target.value,
                    }))
                  }
                  placeholder="Votre nom complet"
                  required
                  autoComplete="name"
                />
              </div>
              <div>
                <Label htmlFor="client-phone">Téléphone</Label>
                <Input
                  id="client-phone"
                  type="tel"
                  value={bookingForm.clientPhone}
                  onChange={(e) =>
                    setBookingForm((prev) => ({
                      ...prev,
                      clientPhone: e.target.value,
                    }))
                  }
                  placeholder="Votre numéro de téléphone"
                  autoComplete="tel"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="client-email">Email *</Label>
              <Input
                id="client-email"
                type="email"
                value={bookingForm.clientEmail}
                onChange={(e) =>
                  setBookingForm((prev) => ({
                    ...prev,
                    clientEmail: e.target.value,
                  }))
                }
                placeholder="votre.email@exemple.com"
                required
                autoComplete="email"
              />
            </div>

            <div>
              <Label htmlFor="notes">Notes / Objectifs (optionnel)</Label>
              <Textarea
                id="notes"
                value={bookingForm.notes}
                onChange={(e) =>
                  setBookingForm((prev) => ({ ...prev, notes: e.target.value }))
                }
                placeholder="Décrivez brièvement vos objectifs ou questions..."
                rows={3}
              />
            </div>

            <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="w-full"
                  disabled={
                    !selectedService ||
                    !bookingForm.clientName ||
                    !bookingForm.clientEmail ||
                    isSendingEmail
                  }
                  aria-label="Ouvrir la confirmation du rendez-vous"
                >
                  {isSendingEmail ? (
                    <>
                      <PaperPlaneTilt
                        className="mr-2 h-5 w-5 animate-spin"
                        aria-hidden="true"
                      />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <CheckCircle
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      Confirmer le Rendez-vous
                    </>
                  )}
                </Button>
              </DialogTrigger>
              <DialogContent aria-describedby="booking-confirmation-description">
                <DialogHeader>
                  <DialogTitle>Confirmer votre Rendez-vous</DialogTitle>
                  <DialogDescription id="booking-confirmation-description">
                    Veuillez vérifier les informations de votre rendez-vous
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                  <div
                    className="bg-muted p-4 rounded-lg space-y-2"
                    role="group"
                    aria-label="Détails du rendez-vous"
                  >
                    <div className="flex items-center gap-2">
                      <CalendarIcon
                        className="h-4 w-4 text-primary"
                        aria-hidden="true"
                      />
                      <span className="font-medium">
                        {selectedDate &&
                          format(selectedDate, "EEEE dd MMMM yyyy", {
                            locale: fr,
                          })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock
                        className="h-4 w-4 text-primary"
                        aria-hidden="true"
                      />
                      <span className="font-medium">{selectedTime}</span>
                      <span className="text-sm text-muted-foreground">
                        (
                        {
                          services.find((s) => s.id === selectedService)
                            ?.duration
                        }{" "}
                        minutes)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User
                        className="h-4 w-4 text-primary"
                        aria-hidden="true"
                      />
                      <span>
                        {services.find((s) => s.id === selectedService)?.name}
                      </span>
                    </div>
                  </div>

                  <div
                    className="space-y-2"
                    role="group"
                    aria-label="Informations client"
                  >
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" aria-hidden="true" />
                      <span>{bookingForm.clientName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <EnvelopeSimple className="h-4 w-4" aria-hidden="true" />
                      <span>{bookingForm.clientEmail}</span>
                    </div>
                    {bookingForm.clientPhone && (
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" aria-hidden="true" />
                        <span>{bookingForm.clientPhone}</span>
                      </div>
                    )}
                  </div>

                  {bookingForm.notes && (
                    <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-200">
                      <p className="text-sm text-blue-700">
                        <strong>Notes :</strong> {bookingForm.notes}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex gap-2 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setIsBookingOpen(false)}
                    className="flex-1"
                    aria-label="Retourner modifier les informations"
                  >
                    Modifier
                  </Button>
                  <Button
                    onClick={handleBookAppointment}
                    className="flex-1"
                    aria-label="Confirmer définitivement le rendez-vous"
                  >
                    Confirmer
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      )}

      {/* Mes rendez-vous */}
      {appointments && appointments.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Mes Rendez-vous</CardTitle>
            <CardDescription>
              Vos rendez-vous programmés et leur statut
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className="space-y-4"
              role="list"
              aria-label="Liste de vos rendez-vous"
            >
              {appointments
                .sort(
                  (a, b) =>
                    new Date(a.date).getTime() - new Date(b.date).getTime(),
                )
                .map((appointment) => (
                  <div
                    key={appointment.id}
                    className="border border-border rounded-lg p-4"
                    role="listitem"
                  >
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <CalendarIcon
                            className="h-4 w-4 text-primary"
                            aria-hidden="true"
                          />
                          <span className="font-medium">
                            {format(
                              new Date(appointment.date),
                              "EEEE dd MMMM yyyy",
                              { locale: fr },
                            )}
                          </span>
                          <Clock
                            className="h-4 w-4 text-primary ml-2"
                            aria-hidden="true"
                          />
                          <span className="font-medium">
                            {appointment.time}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {appointment.service}
                        </p>
                        {appointment.notes && (
                          <p className="text-xs text-muted-foreground italic">
                            {appointment.notes}
                          </p>
                        )}
                        <div className="flex items-center gap-2 mt-2">
                          <EnvelopeSimple
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                          <span className="text-xs text-muted-foreground">
                            {appointment.emailSent
                              ? "Email envoyé"
                              : "Email non envoyé"}
                          </span>
                          {appointment.emailSent && (
                            <Badge variant="outline" className="text-xs">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Confirmé
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Badge
                          variant={
                            appointment.status === "confirmed"
                              ? "default"
                              : appointment.status === "pending"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {appointment.status === "confirmed"
                            ? "Confirmé"
                            : appointment.status === "pending"
                              ? "En attente"
                              : "Annulé"}
                        </Badge>
                        {appointment.status === "pending" &&
                          !appointment.emailSent && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => confirmAppointment(appointment.id)}
                              disabled={isSendingEmail}
                              className="text-xs"
                            >
                              {isSendingEmail ? (
                                <PaperPlaneTilt className="h-3 w-3 animate-spin" />
                              ) : (
                                <>
                                  <PaperPlaneTilt className="h-3 w-3 mr-1" />
                                  Envoyer Email
                                </>
                              )}
                            </Button>
                          )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
