# SOGECOR Codebase - AI Agent Instructions

## Project Overview
SOGECOR is a corporate website for a ground-penetrating radar (GPR) detection company.
**Architecture**: Single-page application (SPA) built with React 19 + Vite 7, utilizing code splitting via `lazy`/`Suspense` for performance. The app is deployed on Cloudflare Workers with a Hono backend.

## Tech Stack & Key Dependencies
- **Frontend**: React 19, TypeScript, Vite 7.
- **Styling**: Tailwind CSS 4 + Radix Colors (via `theme.json`).
- **UI Components**: shadcn/ui (Radix UI primitives).
- **Icons**: `@phosphor-icons/react` (**Critical**: Proxied via Spark plugin).
- **Performance**: React `Suspense` & `lazy` for section loading.
- **Forms**: React Hook Form + Zod.
- **Backend/Deploy**: Hono on Cloudflare Workers (`src/worker/index.ts`).

## Critical Patterns & Conventions

### Icon Imports - MANDATORY
**ALWAYS** import icons from `@phosphor-icons/react`. Do NOT use `lucide-react`.
```tsx
import { MapPin, ArrowRight } from "@phosphor-icons/react";
```
⚠️ The Vite config uses `createIconImportProxy()` - **DO NOT REMOVE** this plugin.

### Component Architecture & Performance
- **Lazy Loading**: `App.tsx` uses `lazy()` imports for sections below the fold (`Services`, `RSE`, `Contact`, `Map`, `Footer`) to improve initial load time.
- **Structure**:
  - `src/react-app/components/`: Top-level section components.
  - `src/react-app/components/ui/`: Reusable primitives (shadcn).
- **Suspense**: Wrap lazy components in `<Suspense fallback={...}>`.

### Styling Approach
- **Tailwind v4**: Configured via CSS variables.
- **Theme**: `theme.json` (root) defines the color palette, applied via `src/react-app/styles/theme.css`.
- **Utils**: Use `cn()` from `@/lib/utils.ts` for class merging.
- **Animations**: Use native CSS transitions or Tailwind utilities (e.g., `hover:scale-105`). *Avoid adding heavy animation libraries like Framer Motion.*

### Navigation
- **Smooth Scroll**: Implemented manually via `scrollIntoView`.
  ```tsx
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };
  ```
- **IDs**: Ensure each section component has a unique `id` prop matching the navigation links.

## Development Workflows

### Core Commands
- **Start Dev**: `yarn dev` (Starts Vite server).
- **Validation**: `yarn check` (Runs TypeScript check, Build, and Wrangler dry-run). **Run before code changes are final.**
- **Build**: `yarn build` (Compiles React app to `dist/`).
- **Deploy**: `yarn deploy` (Deploys Worker + Static Assets to Cloudflare).

### Backend (Cloudflare Workers)
- **Entry Point**: `src/worker/index.ts` (Hono application).
- **Static files**: Cloudflare serves `dist/` (React build) automatically.
- **API Routes**: Define new endpoints in `src/worker/index.ts` using Hono syntax (`app.get('/api/...', ...)`).

## Project Details
- **Aliases**: `@/` resolves to `src/react-app/`.
- **Localization**: Site language is French (`lang="fr"`).
- **Assets**: Images in `src/react-app/assets/images/`.
- **Robots/Sitemap**: Located in `public/`.

