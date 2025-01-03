import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  build: {
    outDir: 'dist', // Ensure the output directory matches Netlify's publish directory.
    rollupOptions: {
      output: {
        manualChunks: undefined, // Optimize chunking to avoid deployment issues.
      },
    },
  },
})
