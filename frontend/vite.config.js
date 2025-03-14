// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // Point to the public directory if it's custom
  build: {
    // Vite will automatically look for index.html in the public directory if specified
  },
  server: {
    port: 5173,
    open: true,
  },
  proxy: {
    '/api': 'http://localhost:5000', 
  },
});