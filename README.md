# SOGECOR — Site vitrine

Site vitrine de **SOGECOR**, entreprise spécialisée dans la **détection et la
géolocalisation de réseaux souterrains par géoradar** (géo-détection,
cartographie, conception d'études, marquage-piquetage).

## Stack

- **Vite 7** + **React 19** + **TypeScript**
- **Tailwind CSS v4** + composants **shadcn/ui** (Radix)
- **Framer Motion** pour les animations
- Déploiement **Cloudflare Workers** (Hono) via **Wrangler**
- Gestionnaire de paquets **Yarn 4** (linker `node-modules`)

## Démarrage

```bash
yarn install
yarn dev          # serveur de développement (http://localhost:5173)
```

## Scripts

| Commande       | Description                                   |
| -------------- | --------------------------------------------- |
| `yarn dev`     | Serveur de développement Vite                 |
| `yarn build`   | Vérification TypeScript + build de production |
| `yarn preview` | Build puis prévisualisation locale            |
| `yarn lint`    | ESLint                                        |
| `yarn format`  | Formatage Prettier                            |
| `yarn deploy`  | Déploiement sur Cloudflare Workers            |

## Structure

```
src/
  react-app/
    components/        # Sections de la page + composants ui/ (shadcn)
    config/site.ts     # Navigation, coordonnées, infos entreprise (source unique)
    hooks/             # Hooks réutilisables (scroll, animations)
    assets/images/     # Images et médias
    main.css           # Design system (tokens) — source unique du thème
  worker/index.ts      # Worker Cloudflare (Hono)
public/                # robots.txt, sitemap.xml, ai.txt, favicons
```

## Contenu

Les informations partagées (liens de navigation, téléphone, email, SIRET) sont
centralisées dans [`src/react-app/config/site.ts`](src/react-app/config/site.ts).
Le thème (couleurs, rayons) est défini dans
[`src/react-app/main.css`](src/react-app/main.css).
