import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Set base to './' so that assets resolve smoothly on GitHub Pages and static preview hosts
export default defineConfig({
  plugins: [react()],
  base: './',
})
