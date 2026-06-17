/**
 * Prérendu SEO/GEO : rend l'application en HTML statique et l'injecte dans
 * dist/index.html, pour que les robots et moteurs IA sans JavaScript voient
 * tout le contenu. Le rendu client (createRoot) remplace ce HTML au chargement.
 */
import { build } from "vite";
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const ssrDir = resolve(root, "dist-ssr");
const indexPath = resolve(root, "dist/index.html");

// 1. Build du bundle SSR à partir de l'entrée serveur.
await build({
  logLevel: "warn",
  build: {
    ssr: "src/react-app/entry-server.tsx",
    outDir: "dist-ssr",
    rollupOptions: { output: { entryFileNames: "entry-server.js" } },
  },
});

// 2. Rendu de l'application en chaîne HTML.
const { render } = await import(resolve(ssrDir, "entry-server.js"));
const appHtml = render();

// 3. Injection dans dist/index.html.
const html = readFileSync(indexPath, "utf8");
if (!html.includes("<!--ssr-outlet-->")) {
  throw new Error("Marqueur <!--ssr-outlet--> introuvable dans dist/index.html");
}
writeFileSync(indexPath, html.replace("<!--ssr-outlet-->", appHtml));

// 4. Nettoyage.
rmSync(ssrDir, { recursive: true, force: true });
console.log(`✓ Prérendu injecté (${appHtml.length} caractères)`);
