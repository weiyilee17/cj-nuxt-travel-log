import tailwindcss from "@tailwindcss/vite";

import "./lib/env";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  colorMode: {
    dataValue: "theme",
  },
  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxtjs/color-mode", "@pinia/nuxt"],
  // Confiurations to avoid the terminal printing:  WARN  [Icon] failed to load icon tabler:sun
  // then reloading the page, causing element shift just for the icon. This lets it use icons
  // from local downloads
  icon: {
    provider: "iconify",
    mode: "css",
    cssLayer: "base",
    clientBundle: {
      scan: true,
      sizeLimitKb: 256,
    },
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
});
