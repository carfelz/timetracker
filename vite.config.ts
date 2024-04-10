import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "./runtimeConfig",
        replacement: "./runtimeConfig.browser", // ensures browser compatible version of AWS JS SDK is used
      },
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "components",
        replacement: fileURLToPath(
          new URL("./src/components", import.meta.url)
        ),
      },
    ],
  },
});
