import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   build: {
//     outDir: "dist",
//   },
//   server: {
//     proxy: {
//       "/api": {
//         target: process.env.VITE_API_URL,
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ""),
//       },
//     },
//   },
// });


// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       external: ["axios"],
//     },
//   },
// });


// export default defineConfig({
//   build: {
//     outDir: "dist",
//   },
//   server: {
//     proxy: {
//       "/api": {
//         target: process.env.VITE_API_URL,
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, ""),
//       },
//     },
//   },
// });

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  server: {
    proxy: {
      "/api": {
        target: process.env.VITE_API_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
