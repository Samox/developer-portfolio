import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/developer-portfolio/",
  plugins: [react()],
  resolve: {
    alias: {
      "@utils": path.resolve(__dirname, "utils"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
});
