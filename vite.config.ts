import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://akikoyura.github.io/heart-speak/', // comment this line if you are not deploying to GitHub Pages
  plugins: [react()],
})
