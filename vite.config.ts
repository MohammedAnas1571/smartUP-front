import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    global: {}
  },
  server: {
    host: '0.0.0.0',
    proxy: {
      '/auth': {  
        target: 'https://aflozz.shop',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/auth/, ''),
      }
    }
  }
});
