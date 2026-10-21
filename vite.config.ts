import { defineConfig } from 'vite';
export default defineConfig({
  clearScreen: false,
  server: {
    port: 1420,
    strictPort: true,
    // Cargo and Tauri hold binaries and generated files open while `tauri dev`
    // runs. Watching one makes Node throw EBUSY and kills the dev server.
    watch: { ignored: ['**/src-tauri/target/**', '**/src-tauri/gen/**'] },
  },
  build: { target: 'es2022', assetsInlineLimit: 0 },
});
