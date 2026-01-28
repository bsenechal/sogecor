# PRD: SOGECOR Corporate Website

## Core Purpose & Success

- **Mission Statement**: Créer un site vitrine professionnel pour SOGECOR qui présente l'expertise de l'entreprise et facilite la prise de contact avec les prospects.
- **Success Indicators**: Augmentation des demandes de contact qualifiées, amélioration de la visibilité en ligne, renforcement de l'image de marque professionnelle.
- **Experience Qualities**: Professionnel, Transparent, Accessible

## Project Classification & Approach

- **Complexity Level**: Content Showcase avec fonctionnalités de contact
- **Primary User Activity**: Consuming (information sur l'entreprise et services)

## Essential Features

### Navigation & Structure

- Menu de navigation sticky avec sections : Accueil, À Propos, Services, RSE, Rendez-vous, Contact
- Navigation fluide avec scroll automatique vers les sections
- Version mobile responsive avec menu hamburger

### Page d'Accueil (Hero Section)

- Présentation claire de la valeur ajoutée de SOGECOR
- Call-to-action vers les services, la prise de rendez-vous et le contact
- Design moderne avec gradient professionnel

### Section À Propos

- Histoire et évolution de l'entreprise
- Mission et valeurs dans des cartes distinctes
- Mise en avant de l'expertise et de l'approche méthodologique

### Section Services

- 6 services principaux présentés en cartes
- Icônes professionnelles pour chaque service
- Descriptions claires et orientées bénéfices client

### Section RSE

- Engagement responsabilité sociétale
- 3 piliers : Environnement, Social, Gouvernance
- Actions concrètes et certifications

### Section Prise de Rendez-vous (Nouveau)

- Calendrier interactif pour sélection de date
- Créneaux horaires disponibles en temps réel
- Formulaire de réservation avec informations client
- Gestion des types de services et durées
- Système de confirmation et suivi des rendez-vous
- **Système de notification email automatique**
  - Génération automatique d'emails de confirmation professionnels
  - Envoi immédiat après création du rendez-vous
  - Contenu personnalisé avec détails du rendez-vous et coordonnées SOGECOR
  - Stockage de l'historique des emails envoyés
  - Interface de gestion des confirmations par email
- Stockage persistant des réservations et emails
- Interface responsive et intuitive

### Section Contact

- Formulaire de contact sécurisé avec validation
- Informations de contact (téléphone, email, adresse)
- Carte Google Maps intégrée pour localisation
- Adresse : 182 rue du Général Leclerc, 60250 Mouy

## Design Direction

### Visual Tone & Identity

- **Emotional Response**: Confiance, professionnalisme, sérieux avec une approche humaine
- **Design Personality**: Élégant, moderne, sobre, inspiré par la clarté de SGDS International
- **Visual Metaphors**: Croissance, excellence, partenariat
- **Simplicity Spectrum**: Interface épurée avec focus sur le contenu essentiel

### Color Strategy

- **Color Scheme Type**: Palette professionnelle avec tons sobres
- **Primary Color**: Bleu marine professionnel (oklch(0.25 0.08 250)) - confiance et stabilité
- **Secondary Colors**: Bleu clair (oklch(0.85 0.04 240)) - modernité
- **Accent Color**: Orange chaleureux (oklch(0.70 0.15 50)) - dynamisme
- **Color Psychology**: Bleus pour la confiance, touches d'orange pour l'innovation
- **Color Accessibility**: Contrastes WCAG AA respectés sur tous les éléments

### Typography System

- **Font Pairing Strategy**: Inter pour sa lisibilité et son caractère moderne
- **Typographic Hierarchy**: H1 imposant, H2/H3 structurants, corps de texte aéré
- **Font Personality**: Moderne, lisible, professionnel
- **Which fonts**: Inter (Google Fonts) - famille complète 400-700
- **Legibility Check**: Excellent sur tous supports

### Visual Hierarchy & Layout

- **Attention Direction**: Focus sur les titres, puis call-to-action, puis contenu
- **White Space Philosophy**: Espacement généreux pour une lecture confortable
- **Grid System**: Layout responsive avec grille flexible
- **Responsive Approach**: Mobile-first, adaptation progressive
- **Content Density**: Équilibre entre information et respiration visuelle

### Animations

- **Purposeful Meaning**: Transitions fluides pour guider l'utilisateur
- **Hierarchy of Movement**: Hover effects subtils sur les cartes et boutons
- **Contextual Appropriateness**: Animations discrètes et professionnelles

### UI Elements & Component Selection

- **Component Usage**:
  - Calendar et Dialog pour la prise de rendez-vous
  - Cards pour services, valeurs et créneaux horaires
  - Buttons pour call-to-action et sélection de créneaux
  - Form avec validation pour contact et réservation
  - Select pour choix de services
  - Navigation sticky professionnelle
- **Component Customization**: Bordures colorées sur cartes services, hover effects
- **Spacing System**: Système cohérent basé sur les classes Tailwind
- **Mobile Adaptation**: Navigation hamburger, cartes empilées, formulaire optimisé

## Implementation Considerations

### SEO Optimization

- Meta tags complets en français
- Structure HTML sémantique (H1, H2, H3)
- ALT texts sur toutes les images
- Contenu riche en mots-clés pertinents
- Performance optimisée

### Fonctionnalités Techniques

- Formulaire de contact avec validation côté client
- Système de prise de rendez-vous avec calendrier interactif
- **Système de notification email automatique**
  - Génération d'emails via API LLM pour contenu personnalisé
  - Confirmation automatique des rendez-vous par email
  - Interface de suivi des emails envoyés
  - Gestion des statuts de confirmation
- Persistance des soumissions, rendez-vous et emails avec useKV
- Gestion des créneaux horaires et disponibilités
- Carte Google Maps intégrée
- Navigation smooth scroll
- Responsive design complet
- Validation email et données de contact

### Accessibilité

- Contraste WCAG AA minimum
- Navigation au clavier
- Labels appropriés sur formulaires
- Structure sémantique claire

## Réflexion

Cette approche s'inspire de la clarté et du professionnalisme observés sur le site SGDS International, tout en conservant l'identité propre de SOGECOR. L'ajout de la section RSE répond aux attentes actuelles des entreprises en matière de responsabilité sociétale, tandis que l'intégration de la carte Google Maps facilite la localisation pour les clients potentiels.

Le nouveau système de prise de rendez-vous en ligne modernise l'approche commerciale de SOGECOR en offrant une expérience utilisateur fluide et professionnelle. Cette fonctionnalité permet aux prospects de planifier facilement des entretiens, réduisant les frictions dans le processus de conversion et démontrant l'expertise technologique de l'entreprise.

L'intégration du système de notification email automatique renforce la professionnalisation du processus de prise de rendez-vous. Les clients reçoivent immédiatement une confirmation détaillée de leur rendez-vous, incluant toutes les informations pratiques et les coordonnées de l'entreprise. Cette automatisation améliore l'expérience client tout en réduisant la charge administrative pour l'équipe SOGECOR.
