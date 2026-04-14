import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Freedom-Loader-Site/',
  plugins: [react()],
})