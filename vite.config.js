import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // index.html loyiha ildizida (root) turadi
  root: '.',
  // Build qilinganda chiqadigan papka
  build: {
    outDir: 'dist',
  },
  // Public papkasidagi statik fayllar (img/)
  publicDir: 'public',
})
