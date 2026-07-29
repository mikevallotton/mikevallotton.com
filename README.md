# mikevallotton.com

The source for [mikevallotton.com](https://mikevallotton.com), a content-first
personal site about AI fluency, work, agents, search, software development, and
human thinking.

The repository is public so readers can inspect how the site is structured and
how its search, generative engine optimization (GEO), evidence, accessibility,
privacy, and release practices work.

## Architecture

The site uses Next.js 15 App Router, React 19, Tailwind CSS, GSAP, and Lenis.
Content is authored directly in route files and rendered primarily as static
pages. There is no CMS, database, authentication system, or required server API.

- `app/` contains routes, metadata, and structured data.
- `components/topic/` contains the reusable long-form topic-page system.
- `docs/information-architecture.md` defines the canonical content types,
  topic names, routes, colors, and naming conventions.
- `content/evidence.js` centralizes sources and carefully scoped evidence notes.
- `content/siteConfig.js` contains canonical identity, URLs, and social profiles.
- `public/llms.txt`, the sitemap, robots rules, canonical metadata, and JSON-LD
  provide machine-discovery surfaces.
- `docs/` explains the technical and editorial approach.

The main public content includes six topic pages, an article and downloadable
prompt, About, Links, and Privacy pages. See `app/sitemap.js` for the canonical
route inventory.

## Local development

Node.js 20 is required.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

Google Analytics is optional:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

When configured, analytics loads by default. Visitors can turn it off at any
time through the footer privacy choices. YouTube-hosted thumbnails are a
separate third-party request and are disclosed on the Privacy page.

The Google fonts used through `next/font` are downloaded during the build and
self-hosted at runtime, so a build requires network access but visitors do not
request fonts from Google.

## Verification

```bash
npm run lint
npm run build
```

For production route and header checks, start the built server in one terminal
and run the smoke suite in another:

```bash
npm run start
npm run smoke -- http://127.0.0.1:3000
```

CI performs a clean install, content validation, lint, dependency audit,
production build, and smoke test.

## Security and privacy

The application has a deliberately small runtime attack surface. Security
headers restrict resource origins, framing, browser capabilities, and content
types. The static-compatible Content Security Policy permits inline framework
scripts; this is a documented tradeoff that preserves static rendering rather
than introducing per-request nonces and dynamic rendering.

Do not commit `.env` files or Vercel project linkage. See [SECURITY.md](SECURITY.md)
for vulnerability reporting.

## License and content rights

The source code is available under the [MIT License](LICENSE), so it may be
copied, modified, distributed, and forked under those terms.

The license does not cover the site’s writing, articles, transcripts, prompts,
photography, illustrations, personal likeness, logos, or other editorial and
brand content. Those terms are described in
[CONTENT_LICENSE.md](CONTENT_LICENSE.md). Pull requests and unsolicited
contributions are not accepted.
