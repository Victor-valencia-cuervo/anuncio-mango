import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/anuncio-mango/',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
});
