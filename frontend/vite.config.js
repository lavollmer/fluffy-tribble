import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // If using React

export default defineConfig({
  plugins: [react()], // If using React
  server: {
    port: 3000, // Frontend development server port
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Python backend server address
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist', // Output directory for production build
    assetsDir: 'assets',
    manifest: true, // Generate manifest file for backend integration
  },
});