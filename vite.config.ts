import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        service: fileURLToPath(new URL('./service/index.html', import.meta.url)),
        fourFit: fileURLToPath(new URL('./four-fit/index.html', import.meta.url)),
        system: fileURLToPath(new URL('./system/index.html', import.meta.url)),
        useCases: fileURLToPath(new URL('./use-cases/index.html', import.meta.url)),
        team: fileURLToPath(new URL('./team/index.html', import.meta.url)),
        expo: fileURLToPath(new URL('./expo/index.html', import.meta.url)),
      },
    },
  },
  server: {
    port: 5174,
    strictPort: true,
  },
  preview: {
    port: 4175,
    strictPort: true,
  },
})
