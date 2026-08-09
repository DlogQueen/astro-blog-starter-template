# The Glitzy Farmhouse

Website for **The Glitzy Farmhouse** — handmade designer wreaths and custom
seasonal home decor by Keisha Ratchford, based in Dothan, Alabama. Built with
[Astro](https://astro.build) and deployed on Cloudflare Workers.

## What's on the site

- **Home** (`src/pages/index.astro`) — hero, about teaser, product overview,
  community/charity section, Instagram call-to-action, latest updates, and a
  contact section.
- **About** (`src/pages/about.astro`) — the full story and how custom orders
  work.
- **Updates & Events** (`src/pages/updates/`) — a simple content collection
  (`src/content/updates/`) for market dates, giveaways, restocks, and news.
  Add a new `.md` file there to publish a new update; it'll automatically
  show up on `/updates` and on the homepage.

## Things to fill in before launch

A few placeholders in `src/consts.ts` are intentionally left blank because
they weren't provided:

- `CONTACT_EMAIL` / `CONTACT_PHONE` — add these if Keisha wants a direct
  contact method listed alongside Instagram.
- `FACEBOOK_URL` — add this if/when there's a dedicated Facebook page for the
  business (the site currently only links to the verified Instagram account,
  [@the_glitzy_farmhouse](https://www.instagram.com/the_glitzy_farmhouse/)).

Also update `site` in `astro.config.mjs` to the real production domain once
one is connected — it's used for canonical URLs, the sitemap, and the RSS
feed.

Event details in `src/content/updates/help-a-hero-giveaway-august-2026.md`
were sourced from public social posts — double-check date/time/location
before relying on them.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                           | Action                                           |
| :--------------------------------- | :----------------------------------------------- |
| `npm install`                     | Installs dependencies                            |
| `npm run dev`                     | Starts local dev server at `localhost:4321`      |
| `npm run build`                   | Build your production site to `./dist/`          |
| `npm run preview`                 | Preview your build locally, before deploying     |
| `npm run astro ...`               | Run CLI commands like `astro add`, `astro check` |
| `npm run build && npm run deploy` | Deploy your production site to Cloudflare        |

## 👀 Want to learn more?

Check out the [Astro documentation](https://docs.astro.build).
