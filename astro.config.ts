// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  server: {
    host: "0.0.0.0",
  },
  site: "https://iperez.dev",
  output: "server",
  adapter: cloudflare()
});
