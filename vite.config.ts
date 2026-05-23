import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  // GitHub Pages sirve el contenido bajo /curriculum/, no en la raíz
  base: mode === "production" ? "/curriculum/" : "/",
}));
