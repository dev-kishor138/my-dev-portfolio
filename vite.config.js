import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
 
  plugins: [react()],
   assetsInclude: ['**/*.PNG'],
  server: {
    host: '0.0.0.0', 
    port: 5173, 
    hmr: {
      overlay: false
    }
  },
  resolve: {
    alias: {
      'swiper/modules': 'swiper'
    }
  }
})
