import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/HHS_gutachten/",
  plugins: [tailwindcss()],
  server: {
    port: 5173,
    open: true,
  },
});
