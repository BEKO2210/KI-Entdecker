import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  // Base URL - leer für root-deployment
  // Für GitHub Pages: base: '/KI-Entdecker/',
  base: '/KI-Entdecker/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
