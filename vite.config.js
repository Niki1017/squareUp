import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/square-up/', // Важно: слеши в начале и в конце!
  plugins: [react()],
})