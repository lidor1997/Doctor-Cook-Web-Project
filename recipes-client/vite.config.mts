/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), tsconfigPaths()],
  build: {
    target: 'esnext',
    sourcemap: true,
  },
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: 5173, // Default port (optional)
  },
  preview: {
    host: '0.0.0.0', // Ensure preview binds to all interfaces
    port: 3000, // Default port (Railway will override with $PORT)
  },
});
