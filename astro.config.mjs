import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  site: isGitHubPages
    ? "https://quodagis.github.io"
    : "https://gurdjiefflosangeles.org",
  base: isGitHubPages ? "/gf-codex" : "/",
  vite: {
    plugins: [tailwindcss()],
  },
});
