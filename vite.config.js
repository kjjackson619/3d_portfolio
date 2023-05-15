import { defineConfig } from 'vite'
import React from 'react';
import {resolve} from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [React()],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.jsx'),
    },
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
  base: './dist',
})
