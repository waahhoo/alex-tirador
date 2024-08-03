import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/alex-tirador/",
  plugins: [svelte()],
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  },
})
