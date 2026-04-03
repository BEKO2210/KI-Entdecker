import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa"

// https://vite.dev/config/
export default defineConfig({
  // Base URL - leer für root-deployment
  // Für GitHub Pages: base: '/KI-Entdecker',
  base: '/KI-Entdecker',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,jpg,svg,woff2}'],
        // Network-first for navigation so users always get latest HTML
        navigateFallback: 'index.html',
        // Clean old caches on update
        cleanupOutdatedCaches: true,
      },
      manifest: {
        name: 'KI-Entdecker',
        short_name: 'KI-Entdecker',
        description: 'Ein interaktiver KI-Kurs für junge Entdecker',
        theme_color: '#7F56D9',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/KI-Entdecker/',
        start_url: '/KI-Entdecker/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
