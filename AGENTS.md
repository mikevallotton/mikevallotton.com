# Repository Chat Initialization

Use this file as the starting context for any coding or content-editing chat in this repository.

## Project

This repository contains `mikevallotton.com`, a content-first personal website for Mike Vallotton. Its purpose is to provide clear, practical guidance about AI fluency, work, agents, search, software development, and human thinking.

The site is built with Next.js 15 App Router, React 19, Tailwind CSS, GSAP, and Lenis. It has no CMS, database, authentication, or required server-side API. Most content is authored directly in route files.

## Start Here

Before changing the site:

1. Read `README.md`.
2. Read the relevant guide route in `app/<route>/page.js`.
3. For shared guide behavior, read `components/guide/GuidePage.js` and its child components.
4. For claims and citations, read `content/evidence.js`.
5. For brand and metadata values, read `content/siteConfig.js`.
6. Use `docs/technical-solution.md` for architecture and operations.
7. Use `docs/content-guide.md` for voice, structure, and editorial rules.

## Repository Map

- `app/`: routes, route metadata, structured data, and page content
- `components/`: shared layout and presentation components
- `components/guide/`: the reusable long-form guide system
- `content/siteConfig.js`: canonical identity, URLs, metadata, and social links
- `content/evidence.js`: source records, evidence notes, and source helpers
- `public/`: static assets, icons, manifest, and `llms.txt`
- `scripts/smoke-release.mjs`: production route and discovery checks
- `docs/`: technical, content, and research documentation

## Working Rules

- Preserve the content-first, server-rendered architecture. Add client components only when browser state or effects require them.
- Reuse the guide components and existing design tokens before introducing new patterns.
- Keep global identity and URLs in `content/siteConfig.js`; do not duplicate them unnecessarily.
- Treat substantive factual claims as editorially accountable. Add or update a source in `content/evidence.js`, distinguish evidence from interpretation, and avoid overstating what a source proves.
- Keep route metadata, canonical URLs, structured data, sitemap entries, navigation, `public/llms.txt`, and smoke-test routes aligned when adding or renaming public pages.
- Maintain semantic headings, keyboard access, visible focus behavior, appropriate ARIA, and reduced-motion compatibility.
- Preserve the existing security headers. Review the Content Security Policy before adding any external script, frame, image, font, or network origin.
- Do not commit secrets. Google Analytics is optional through `NEXT_PUBLIC_GA_ID`.
- Avoid editing generated directories such as `.next/` and dependencies in `node_modules/`.
- Preserve unrelated user changes in a dirty worktree.
- Verify the intended approach with me before making changes, rather than deciding requirements or implementation details on your own, especially when I’ve explicitly said not to do that.

## Content Standards

- Write in Mike's voice: clear, grounded, practical, calm, and specific.
- Lead with human capability and judgment, not tool novelty or hype.
- Explain specialized terms on first use and prefer durable principles over transient product commentary.
- Do not invent experience, results, affiliations, quotations, or certainty.
- Use measured language for evidence: describe the population, task, conditions, and limitations when they matter.
- Keep a clear distinction between Mike's perspective, observed examples, and claims supported by external research.

## Definition of Done

For code or public-content changes:

1. Run `npm run lint`.
2. Run `npm run build`.
3. Check keyboard navigation and reduced motion for interaction changes.
4. Confirm that claims, citations, dates, metadata, sitemap entries, and cross-links remain consistent.

