# SOGECOR Codebase - AI Agent Instructions

## Project Overview
SOGECOR is a corporate website for a ground-penetrating radar (GPR) detection company. This is a **Vite + React SPA deployed on Cloudflare Workers** with a Hono backend.

**Architecture**: Single-page application with static frontend (React 19 + Vite 7) served through Cloudflare Workers + Hono for API routes.

## Tech Stack & Key Dependencies
- **Frontend**: React 19, TypeScript, Vite 7, React Router (via smooth scroll navigation)
- **Styling**: Tailwind CSS 4 + Radix Colors system via custom `theme.json`
- **UI Components**: shadcn/ui (Radix UI primitives) + GitHub Spark components
- **Icons**: Phosphor Icons (via `@phosphor-icons/react`) - **CRITICAL**: Proxied through Spark plugin
- **Animations**: Framer Motion for page sections, scroll reveals
- **Forms**: React Hook Form + Zod validation
- **Backend**: Hono.js (Cloudflare Workers runtime)
- **Deployment**: Cloudflare Workers with SPA asset handling

## Critical Patterns & Conventions

### Icon Imports - MANDATORY PATTERN
**Always** import icons from `@phosphor-icons/react`, not Lucide:
```tsx
import { MapPin, ArrowRight, Crosshair } from "@phosphor-icons/react";
```
⚠️ The Vite config uses `createIconImportProxy()` which proxies Phosphor icon imports - do not remove this plugin.

### Component Structure
- **Page sections** are top-level components in `src/react-app/components/` (e.g., `HeroSection.tsx`, `AboutSection.tsx`)
- **Reusable UI** lives in `src/react-app/components/ui/` (shadcn components)
- **App.tsx** composes all sections in order: Hero → About → Services → RSE → Contact → Map → Footer
- Each section has an `id` for smooth scroll navigation (e.g., `id="contact"`)

### Styling Approach
- Uses **Tailwind CSS 4** with custom theme loaded from `theme.json`
- Color system: Radix Colors via CSS variables (e.g., `var(--color-neutral-1)`)
- The `cn()` utility in `lib/utils.ts` merges Tailwind classes (clsx + tailwind-merge)
- Responsive breakpoints include custom `coarse`/`fine` (pointer) and `pwa` (display-mode)

### Navigation Pattern
Smooth scroll navigation implemented via:
```tsx
const scrollToSection = () => {
  const element = document.getElementById("section-id");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
```
Used in Header navigation and CTA buttons throughout.

### Framer Motion Animations
- Page sections use `<motion.div>` with viewport-triggered animations
- Common pattern: `initial={{ opacity: 0, y: 20 }}` → `whileInView={{ opacity: 1, y: 0 }}`
- Example from HeroSection: parallax background with `transform: translateY(${scrollY * 0.5}px)`

## Development Workflows

### Local Development
```bash
yarn dev              # Start Vite dev server (port 5173 by default)
yarn lint             # Run ESLint
yarn build            # TypeScript compilation + Vite build
yarn preview          # Preview production build locally
```

### Cloudflare Workers Development
```bash
yarn cf-typegen       # Generate Cloudflare Workers types from wrangler.json
yarn check            # Full validation: tsc + build + wrangler dry-run
yarn deploy           # Deploy to Cloudflare Workers
```

⚠️ **Important**: The worker entry is `src/worker/index.ts` (Hono app), not the React app. Cloudflare serves the built React app from `dist/` as static assets (configured in `wrangler.json`).

### Adding New API Routes
Edit `src/worker/index.ts`:
```typescript
app.get("/api/endpoint", (c) => c.json({ data: "value" }));
```

### Adding Components
1. UI primitives: Use shadcn CLI or copy from `components/ui/`
2. Page sections: Create in `components/`, import in `App.tsx`, add section `id`
3. Always use TypeScript with explicit types for props

## Project-Specific Details

### PRD Reference
See `PRD.md` for design system details:
- Color palette: Blue SOGECOR (oklch-based) with contrast ratios documented
- Typography: Inter font family with specific weights/sizes per heading level
- Design principles: Professional, accessible, modern

### File Aliases
- `@/` resolves to `src/react-app/` (configured in `vite.config.ts`)
- Example: `import { Button } from "@/components/ui/button"`

### Assets
- Images in `src/react-app/assets/images/`
- Favicons in `src/react-app/assets/favicon/` and `public/favicon/`
- SVG backgrounds imported directly (e.g., `surveyorBg` in HeroSection)

### Error Handling
- React Error Boundary configured (`ErrorFallback.tsx`)
- Toast notifications via Sonner (`<Toaster />` in App.tsx)

## External Integrations
- **Cloudflare Workers**: Deployment target with nodejs_compat flag enabled
- **GitHub Spark**: Development template system (plugin in Vite config - DO NOT REMOVE)

## When Making Changes

1. **Adding sections**: Follow existing pattern (export function, motion.div wrapper, section id)
2. **Styling**: Check `theme.json` for color variables before adding custom colors
3. **Icons**: Always Phosphor, never Lucide (despite it being installed)
4. **Forms**: Use React Hook Form + Zod (see ContactSection.tsx for pattern)
5. **Deployment**: Run `yarn check` before deploying to catch issues early
