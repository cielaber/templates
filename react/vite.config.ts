import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { BASE_API_URL } from './src/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  // 配置别名
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      [BASE_API_URL]: {
        target: 'http://192.168.2.117:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(new RegExp(`^${BASE_API_URL}`), ''),
      },
    },
  },
})
