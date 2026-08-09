// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	// TODO: swap this for the real production domain once one is connected —
	// for now it points at the live Cloudflare Workers preview so canonical
	// URLs, Open Graph tags, the sitemap, and the RSS feed all resolve
	// correctly instead of leaking a placeholder domain.
	site: "https://claude-glitzy-farmhouse-websit-b781-astro-blog-starter-template.ryleighxmaloy.workers.dev",
	integrations: [mdx(), sitemap()],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
