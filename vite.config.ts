import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Note: We only load the Cloudflare plugin during build to avoid
// wrangler ESM/CJS interop issues in dev.
export default defineConfig(async ({ command }) => {
  const plugins = [react()];

  // Always add Tailwind CSS plugin
  const tailwindcss = await import("@tailwindcss/vite");
  plugins.push(tailwindcss.default());

  if (command === "build") {
    const { cloudflare } = await import("@cloudflare/vite-plugin");
    plugins.push(cloudflare());
  }

  return {
    plugins,
    resolve: {
      alias: {
        "@": resolve(__dirname, "src/react-app"),
      },
    },
  };
});
