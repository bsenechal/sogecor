import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

const projectRoot = process.env.PROJECT_ROOT || import.meta.dirname;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ["**/*.webp"],
  resolve: {
    alias: {
      "@": resolve(projectRoot, "src/react-app"),
    },
  },
  server: {
    // En dev, les appels /api sont transmis au worker (wrangler dev sur 8787).
    proxy: {
      "/api": "http://localhost:8787",
    },
  },
});
