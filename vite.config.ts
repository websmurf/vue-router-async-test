import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    '/@': path.resolve(__dirname, './src')
  },
  optimizeDeps: {
    exclude: [],
    include: [],
  },
  plugins: [vue()]
})
