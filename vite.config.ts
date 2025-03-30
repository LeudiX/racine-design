import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import sitemap  from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(),
  sitemap({
    hostname: 'https://leudix.github.io/',
    dynamicRoutes: ['/racine-design'], // Add all your routes
  }),],
  base: "/racine-design",
})
