import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Make sure Vite is using the correct port
    open: true, // Automatically opens the browser on start
    proxy: {
      '/api': 'http://localhost:5000', // Flask backend proxy (if applicable)
    },
  },
})
