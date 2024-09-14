import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes("commonjsHelpers")) return "commonjsHelpers";
          if (id.includes("apexcharts")) return "charts";
          if (id.includes("node_modules")) return "vendor";
        },
      },
    },
  },
});
