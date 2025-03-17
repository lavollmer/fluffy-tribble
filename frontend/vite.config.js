import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // If using React

export default defineConfig({
  root: '.', // Set the root directory to 'public'
  publicDir: 'public', // Set the public directory to 'public'
  plugins: [react()], // If using React
  server: {
    port: 3003, // Frontend development server port
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
  esbuild: {
    loader: {
      '.js': 'jsx', // Enable JSX syntax for .js files
      '.jsx': 'jsx', // Enable JSX syntax for .jsx files
    },
    include: /src\/.*\.(js|jsx)$/, // Apply this loader to .js and .jsx files in the src directory
    exclude: [],
  },
});