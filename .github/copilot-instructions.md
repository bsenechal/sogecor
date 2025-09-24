# Copilot Instructions for this Repo

Purpose: Give AI coding agents the minimum context to be productive in this project. Keep answers concrete, file-oriented, and aligned with the existing patterns.

## Architecture at a glance
- Frontend: React 19 + Vite 6 in `src/react-app/` (entry: `main.tsx`, app root: `App.tsx`).
- Styling: Tailwind CSS v4 “CSS-first” via `@import "tailwindcss"` in `src/react-app/main.css` and theme tokens in `src/react-app/styles/theme.css`.
- UI primitives: Radix UI + shadcn-like components in `src/react-app/components/ui/*` with `class-variance-authority` and the `cn()` helper from `src/react-app/lib/utils.ts`.
- Icons and utilities: `@phosphor-icons/react`, `lucide-react`, `date-fns` with `fr` locale.
- Backend/edge: Cloudflare Workers + Hono in `src/worker/index.ts`. Wrangler configured in `wrangler.json` with SPA asset serving from `dist/client` and an example API route at `/api/`.
- Worker types live in `worker-configuration.d.ts` and are refreshed by `wrangler types`.

Data flow
- Vite builds the client to `dist/client`. Wrangler serves those assets at the edge and mounts Hono routes (e.g., `GET /api/`).
- The “Appointment booking” and “Contact” sections use a KV-like hook `useKV` from `@github/spark/hooks` to persist data client-side; emails are generated via `window.spark.llm(...)` (see `AppointmentBooking.tsx`). If Spark isn’t available in local dev, add a lightweight shim (see Local dev shims below).

## Developer workflows
- Dev server (frontend only): `yarn dev` (Vite at http://localhost:5173). The Cloudflare plugin is gated to build-only in `vite.config.ts` to avoid wrangler ESM/CJS issues.
- Typecheck + build: `yarn build` (runs `tsc -b && vite build`). Preview: `yarn preview`.
- Lint: `yarn lint`.
- Deploy (Workers): `yarn deploy` after a build. Tail logs: `npx wrangler tail`.
- Update Worker types: `yarn cf-typegen` (writes `worker-configuration.d.ts`).

Notes on dependencies
- This project relies on: Radix UI packages (`@radix-ui/react-*`), `class-variance-authority`, `clsx`, `tailwind-merge`, `react-error-boundary`, `sonner`, `react-day-picker`, `date-fns`, `@phosphor-icons/react`, `lucide-react`.
- Spark integration: `@github/spark/spark` (for `window.spark`) and `@github/spark/hooks` (for `useKV`). If these aren’t installed in your environment, provide a dev-only shim instead of removing calls.

Local dev shims (only if Spark packages are unavailable)
- Create `src/react-app/shims/spark.ts`:
  - `export function useKV<T>(key: string, initial: T): [T, (updater: (t: T) => T) => void]` backed by `localStorage`.
  - `declare global { interface Window { spark: { llm: (prompt: string) => Promise<string> } } }` and implement `window.spark.llm` to return a JSON string with `{ subject, content }` for previews.
- In `vite.config.ts` add a dev-only alias: `{ '@github/spark/hooks': path.resolve('src/react-app/shims/spark.ts'), '@github/spark/spark': path.resolve('src/react-app/shims/spark.ts') }`.

## Conventions and patterns
- Path alias: Use `@/*` to import from `src/react-app/*`. Configured in both `vite.config.ts` and `tsconfig.app.json`.
- UI components:
  - Import from `@/components/ui/...`. Example: `import { Button } from '@/components/ui/button'`.
  - Variants via `cva` and `VariantProps`. Compose classes with `cn()`.
- Accessibility:
  - Components and sections include ARIA roles/labels (see `HeaderNav.tsx`, `HeroSection.tsx`, `ContactSection.tsx`). Preserve and extend these attributes in new components.
- Styling tokens:
  - Colors and radii come from CSS variables in `main.css` and `styles/theme.css` (OKLCH values). Stick to semantic tokens (e.g., `bg-background`, `text-foreground`, `bg-primary`).
- Sections and navigation:
  - Sections use `id` anchors and smooth scrolling. When adding sections, wire IDs and update `HeaderNav` button handlers.

## Worker specifics
- Hono app is defined in `src/worker/index.ts` with typed `Env` from `worker-configuration.d.ts`.
- Wrangler config (`wrangler.json`):
  - `main` points to the worker entry, `assets.directory` is `./dist/client`, and SPA fallback is enabled.
  - `compatibility_flags: ["nodejs_compat"]` is set; prefer web APIs when possible.

## Examples
- Button usage with variant and icon:
  `import { Button } from '@/components/ui/button';`
  `<Button variant="secondary" size="lg"><Icon /> Action</Button>`
- Date formatting:
  `import { format } from 'date-fns'; import { fr } from 'date-fns/locale';`
  `format(date, 'EEEE dd MMMM yyyy', { locale: fr })`
- Hono route:
  In `src/worker/index.ts`: `app.get('/api/', (c) => c.json({ name: 'Cloudflare' }))`.

## When something breaks in dev
- If Vite fails with wrangler import errors, ensure Cloudflare plugin remains build-only (see `vite.config.ts`).
- If modules are missing, install the dependencies listed above or enable the Spark shims for local development.

Keep instructions concise and file-specific in replies. Prefer concrete pointers like “edit `src/react-app/components/...` and reuse `cn()` and `buttonVariants`”.
