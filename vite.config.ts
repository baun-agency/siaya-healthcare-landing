import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // ← standard esbuild version (no SWC)
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),                                      // ← esbuild, no native binary problems
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // GitHub Pages base path
  base: "/siaya-healthcare-landing/",
}));