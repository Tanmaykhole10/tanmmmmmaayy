import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

// Plain Vite config (no third-party wrapper).
// - TanStack Start uses src/server.ts as the server entry.
// - Nitro only runs for production builds and targets Vercel.
//   To host somewhere else, change `preset` (e.g. "node-server", "netlify").
export default defineConfig(({ command }) => ({
  plugins: [
    tailwindcss(),
    tsconfigPaths(),
    tanstackStart({
      server: { entry: "server" },
    }),
    ...(command === "build" ? [nitro()] : []),
    viteReact(),
  ],
  nitro: {
    preset: "vercel",
    routeRules: {
      // Images keep the same file names, so cache them for 30 days and refresh quietly after that
      "/images/**": {
        headers: { "cache-control": "public, max-age=2592000, stale-while-revalidate=86400" },
      },
    },
  },
  resolve: {
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-start"],
  },
}));
