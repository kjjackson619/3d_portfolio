import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        "format": "esm",
        "type": "application/javascript",
      }
    }
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.json',
    ],
  },
  base: './',
})
