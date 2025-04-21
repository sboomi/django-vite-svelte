import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    cors: {
      // the origin you will be accessing via browser
      origin: [
        'http://localhost:8000',
        'http://127.0.0.1:8000',
        // For docker
        'http://django:8000',
      ]
    },
  },
  base: "/static/",
  
  resolve: {
    extensions: ['.js', '.json', '.ts'],
  },
  build: {
    manifest: "manifest.json",
    outDir: resolve("../static/assets"),
    assetsDir: "dist",
    rollupOptions: {
      input: {
        main: resolve('./src/main.ts'),
      }
    }
  }
})
