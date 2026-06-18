import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

const projectRoot = process.env.PROJECT_ROOT || import.meta.dirname;

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  assetsInclude: ["**/*.webp"],
  resolve: {
    alias: {
      "@": resolve(projectRoot, "src/react-app"),
    },
  },
  build: {
    // Cibles modernes : sortie plus compacte, pas de polyfills inutiles.
    target: "es2020",
    cssMinify: true,
    // On évite le calcul de taille gzip à chaque build (gain de temps).
    reportCompressedSize: false,
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      // Le découpage vendor ne concerne que le bundle client ; le build SSR
      // (prérendu) reste un fichier unique.
      output: isSsrBuild
        ? {}
        : {
            // Les libs stables restent en cache navigateur quand seul le
            // code applicatif change.
            manualChunks(id) {
              if (!id.includes("node_modules")) return;
              if (
                id.includes("react-dom") ||
                /[\\/]react[\\/]/.test(id) ||
                id.includes("/scheduler/")
              ) {
                return "react";
              }
              if (id.includes("@phosphor-icons")) return "icons";
            },
          },
    },
  },
  server: {
    // En dev, les appels /api sont transmis au worker (wrangler dev sur 8787).
    proxy: {
      "/api": "http://localhost:8787",
    },
  },
}));
