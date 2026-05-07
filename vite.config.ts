import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/HHS_gutachten/",
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        impressum: "impressum.html",
        datenschutz: "datenschutz.html",
        agb: "agb.html",
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
