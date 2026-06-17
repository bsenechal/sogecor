/**
 * Configuration centrale du site SOGECOR.
 * Source unique de vérité pour la navigation, les coordonnées et les
 * informations d'entreprise — à éditer ici plutôt que dans chaque composant.
 */

/** Identifiants des sections de la page (utilisés pour l'ancrage et le scroll). */
export const SECTION_IDS = {
  accueil: "accueil",
  aPropos: "a-propos",
  services: "services",
  rse: "rse",
  contact: "contact",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

/** Liens de navigation principaux (header + footer). */
export const NAV_ITEMS: { id: SectionId; label: string }[] = [
  { id: SECTION_IDS.accueil, label: "Accueil" },
  { id: SECTION_IDS.aPropos, label: "À Propos" },
  { id: SECTION_IDS.services, label: "Nos Services" },
  { id: SECTION_IDS.rse, label: "RSE" },
  { id: SECTION_IDS.contact, label: "Contact" },
];

/** Coordonnées de l'entreprise. NB : email à confirmer (voir refonte). */
export const CONTACT = {
  phoneDisplay: "+33 6 27 76 20 22",
  phoneHref: "tel:+33627762022",
  email: "contact@sogecor.fr",
  get emailHref() {
    return `mailto:${this.email}`;
  },
  hours: "Lun - Ven : 8h00 - 18h00",
  hoursWeekend: "Samedi : 9h00 - 12h00",
  area: "Interventions sur toute la France",
} as const;

export const COMPANY = {
  name: "SOGECOR",
  tagline: "Détection de canalisations par géoradar",
  siret: "123 456 789 00012",
  url: "https://www.sogecor.com",
} as const;
