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
        globPatterns: ['**/*.{js,css,html,png,jpg,svg,woff2,pdf}'],
        // Exclude large preview / marketing assets from precache – they
        // are loaded lazily on demand and would otherwise bloat the SW.
        globIgnores: ['**/images/preview/**'],
        // Network-first for navigation so users always get latest HTML
        navigateFallback: 'index.html',
        // Don't rewrite direct downloads (PDFs / Handreichungen) to the SPA shell
        navigateFallbackDenylist: [/\/downloads\//],
        // Clean old caches on update
        cleanupOutdatedCaches: true,
        // Allow larger assets (teacher handouts can be >2 MB)
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
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
