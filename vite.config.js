import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/WEB_bioplastics_revolution_/'  // Your repo name with slashes
})