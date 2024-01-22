import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server : {
    proxy : { //http://175.116.50.125/
      '/api/v1/recap' : {
        target : 'http://127.0.0.1:8080', 
        changeOrigin : true
      },
      // '/api/v1/recap' : {
      //   target : 'http://175.116.50.125/', 
      //   changeOrigin : true
      // }
    }
  }
})
