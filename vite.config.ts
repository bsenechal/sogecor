import { resolve } from "path";
import sparkPlugin from "@github/spark/spark-vite-plugin";
import createIconImportProxy from "@github/spark/vitePhosphorIconProxyPlugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, type PluginOption } from "vite";
import viteCompression from "vite-plugin-compression";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const projectRoot = process.env.PROJECT_ROOT || import.meta.dirname;

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Compression Gzip
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
    }),
    // Compression Brotli
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
    }),
    // Image Optimization & AVIF
    ViteImageOptimizer({
      test: /\.(jpe?g|png|git|tiff|webp|svg|avif)$/i,
      includePublic: true,
      logStats: true,
      ansColor: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                cleanupNumericValues: false,
                removeViewBox: false,
              },
            },
          },
        ],
      },
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 80,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
      },
      jpg: {
         // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
      },
      webp: {
        // https://sharp.pixelplumbing.com/api-output#webp
        lossless: true,
      },
      avif: {
        // https://sharp.pixelplumbing.com/api-output#avif
        lossless: true,
      },
    }),
    // DO NOT REMOVE
    createIconImportProxy() as PluginOption,
    sparkPlugin() as PluginOption,
  ],
  assetsInclude: ["**/*.webp", "**/*.avif"],
  resolve: {
    alias: {
      "@": resolve(projectRoot, "src/react-app"),
    },
  },
});
