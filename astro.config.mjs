// astro.config.mjs
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  redirects: {
    "/bdsm": "https://flure.onelink.me/4Xrl/42s2xz4v",
    "/now": "https://flure.onelink.me/4Xrl/75k5hvhb",
    "/pillow": "https://flure.onelink.me/4Xrl/11ss5pme",
    "/dating": "https://flure.onelink.me/4Xrl/yzirm81g",
    "/fps": "https://flure.onelink.me/4Xrl/8gh9781j",
    "/nc": "https://flure.onelink.me/4Xrl/2i01o529",
  },
  build: {
    format: "file",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "src/styles/settings.scss";',
        },
      },
    },
    build: {
      assetsInlineLimit: 10024,
    },
  },
  integrations: [react()],
});
