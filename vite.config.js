import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(() => {
  const config = {
    plugins: [react()],
    base: "/VanLife",
  };

  // if (command !== "serve") {
  //   config.base = "/VanLife/";
  // }

  return config;
});
