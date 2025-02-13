import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'tienda-comida-redux-auth', 
  build: {
    outDir: 'docs', // Para Github Pages
  }
})
