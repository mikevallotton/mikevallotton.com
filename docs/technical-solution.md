# Technical Solution

## Overview

`mikevallotton.com` is a statically oriented, content-first website built with the Next.js App Router. The application favors route-local content and reusable presentation components over a CMS or data service. This keeps the runtime small, makes the published source auditable, and allows metadata and structured data to be generated alongside each page.

There is currently no chat feature in the product. The root `AGENTS.md` is the initialization file for coding chats: it gives future assistants repository context, constraints, and a definition of done.

## Technology

| Area | Implementation |
| --- | --- |
| Framework | Next.js 15 App Router |
| UI | React 19 |
| Styling | Tailwind CSS plus global component styles |
| Typography | `next/font` with IBM Plex Sans, Serif, and Mono |
| Motion | GSAP and Lenis, initialized in `components/MotionSystem.js` |
| Content | JavaScript objects and JSX in route files |
| Evidence | Central registry and note mappings in `content/evidence.js` |
| Analytics | Optional Google Analytics with a persistent visitor opt-out through `NEXT_PUBLIC_GA_ID` |
| Verification | ESLint, production build, and a route smoke-test script |

Node.js 20 is required.

## Architecture

### Application shell

`app/layout.js` defines global metadata, fonts, the site header and footer, and the motion layer. Global identity, URLs, images, keywords, and social profiles come from `content/siteConfig.js`.

The root layout is a server component. Interactive pieces such as the navigation overlay and motion system are isolated as client components.

### Routes

The primary routes are:

- `/`
- `/about`
- `/links`
- `/ai-fundamentals`
- `/ai-and-work`
- `/ai-agents`
- `/ai-search-and-geo`
- `/software-development-and-ai`
- `/ai-and-thinking`

Each route owns its page metadata and content. The long-form topic routes use a shared page composition rather than a separate content API. See `docs/information-architecture.md` for the canonical content types, topic names, routes, and visual identifiers.

### Topic rendering

`components/topic/TopicPage.js` is the main composition layer for topic pages. A route passes it:

- article and FAQ structured data;
- path and breadcrumb values;
- hero content;
- audience descriptions;
- a section collection;
- FAQ lookup behavior;
- supporting sources;
- optional post-section content; and
- the next recommended guide.

`TopicPage` renders shared breadcrumbs, hero, audience block, section navigation, topic sections, evidence links, video structured data, and continuation navigation. This contract is the preferred extension point for new topic content.

### Content and evidence

Most editorial content lives in the corresponding `app/<route>/page.js` file. This includes section IDs, headings, explanatory copy, videos, FAQs, related concepts, metadata, and schemas.

`content/evidence.js` has two layers:

1. `evidenceSources` stores normalized source metadata such as title, publisher, year, URL, and description.
2. `evidenceNotes` stores carefully scoped summaries and maps them to source IDs.

`sourcesFor()` resolves note names to a deduplicated source list. `mergeSources()` combines source collections by URL. These helpers keep evidence language and further-reading records consistent across pages.

### Styling and motion

Tailwind provides utility classes and design tokens configured in `tailwind.config.mjs`. `app/globals.css` contains the global visual system and component-level styles.

Typography uses one coordinated family with explicit semantic roles:

- IBM Plex Sans is the default for body copy, headings, navigation, and controls.
- IBM Plex Serif is reserved for pull quotes and limited editorial emphasis.
- IBM Plex Mono is used for eyebrows, metadata, captions, numbering, and code-like labels.

Reusable `type-*` component classes define the display, title, section, lead,
body, label, metadata, caption, and quote roles. New pages should use those
roles before introducing route-specific font sizes, weights, or tracking.

`components/MotionSystem.js` progressively enhances the pages with GSAP and Lenis. Content and navigation must remain usable without animation. Any new motion should respect reduced-motion preferences and must not become a prerequisite for reading or interaction.

### Search and machine discovery

The solution exposes several discovery surfaces:

- route-level metadata and canonical URLs;
- Open Graph and Twitter images;
- JSON-LD for site, person, articles, FAQs, breadcrumbs, and videos;
- `app/robots.js`;
- `app/sitemap.js`;
- `public/llms.txt`; and
- a web manifest and icons.

Public-route changes should be reflected across navigation, sitemap, `llms.txt`, and smoke-test coverage where applicable.

### Security

`next.config.mjs` applies:

- a Content Security Policy;
- `strict-origin-when-cross-origin`;
- MIME sniffing protection; and
- frame denial.

The CSP currently allows the site's own assets, YouTube thumbnails, Google Analytics, inline styles required by the application, and inline scripts used by Next.js. The production policy does not allow `unsafe-eval`; development adds it for React debugging. The static-compatible `unsafe-inline` allowance is a deliberate limitation: replacing it with per-request nonces would require dynamic rendering and give up the site's static optimization. Adding a third-party dependency may require a narrowly scoped CSP update.

Google Analytics loads by default when it is configured. A visitor can turn it
off through the footer; the choice is stored locally, collection is disabled,
and the site's Google Analytics cookies are removed. A visitor can change the
choice later through the same control. YouTube thumbnails remain third-party
image requests and are disclosed on the privacy page.

The site has no database, login, or required API credentials. `.env.local` must remain private. `.env.example` documents supported configuration.

## Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Run the standard verification:

```bash
npm run lint
npm run build
```

Or run both with:

```bash
npm run check
```

For a production smoke test:

```bash
npm run start
npm run smoke -- http://127.0.0.1:3000
```

The smoke test verifies all main routes plus `robots.txt` and `sitemap.xml`.

## Common Change Patterns

### Add a topic

1. Confirm the canonical name, key, route, and color in `docs/information-architecture.md`.
2. Create `app/<slug>/page.js` using the existing topic routes as a model.
3. Compose it with `TopicPage`.
4. Add metadata, canonical URL, article schema, FAQ schema, and any video data.
5. Add navigation and topic-discovery links.
6. Add the route to `app/sitemap.js`, `public/llms.txt`, and `scripts/smoke-release.mjs`.
7. Add or reuse evidence records in `content/evidence.js`.
8. Verify responsive rendering, keyboard navigation, build output, and smoke checks.

### Add an external service

1. Confirm that the service is needed at runtime.
2. Keep credentials server-side unless they are intentionally public.
3. Update `.env.example`.
4. Add the narrowest necessary CSP origins.
5. Document data collection, consent, and failure behavior.
6. Test the site with the service unavailable and, where applicable, before consent.

## Operational Risks

- Route content is code, so malformed objects or JSX fail the build.
- Evidence can become stale even when the code remains valid; dates and source scope need editorial review.
- Navigation, sitemap, `llms.txt`, and smoke routes are maintained separately and can drift.
- Motion and large media can affect performance and accessibility if added without restraint.
- External product claims and policies change quickly and should be reverified before publication.
