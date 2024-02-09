import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: { // On redirige toutes les requêtes au backend vers le serveur de développement java
      '/api': { // L'API REST autogénérée, correspond à la config du backend spring.data.rest.base-path dans application.properties
        // Pour un backend en local
        //target: 'http://localhost:8989', // correspond à la config du backend server.port dans application.properties
        // Pour le backend déployé sur Heroku
        target: 'https://SpringAjax.herokuapp.com',
        changeOrigin: true,
      },
      '/services': { // correspond à la config du backend server.port dans application.properties
        //target: 'http://localhost:8989',
        // Pour le backend déployé sur Heroku
        target: 'https://SpringAjax.herokuapp.com',
        changeOrigin: true,
      }
    },
  },
})
