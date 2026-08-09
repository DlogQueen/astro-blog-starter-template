import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const updates = defineCollection({
	// Load Markdown and MDX files in the `src/content/updates/` directory.
	// This powers the "Updates & Events" section — market dates, giveaways,
	// restocks, and other news Keisha wants to share.
	loader: glob({ base: "./src/content/updates", pattern: "**/*.{md,mdx}" }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		category: z.enum(["event", "restock", "news"]).default("news"),
		eventDate: z.string().optional(),
		eventLocation: z.string().optional(),
	}),
});

export const collections = { updates };
