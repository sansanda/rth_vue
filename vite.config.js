import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content: ['./index.html','.src/**/*.{vue,js,ts,jsx,tsx}'],
  theme:{
    extend:{
      fontFamily:{
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  gridTemplateColumns: {
    '70/30': '70% 28%',
  },
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
  ],
  server:{
    port: 8000,
    proxy: {
      '/api':{
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/,''),
      },
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})