# Information Architecture

## Purpose

This document defines the canonical content types, topic names, routes, asset
organization, and visual identifiers for `mikevallotton.com`. It is the source
of truth for naming and classification across navigation, page content,
metadata, structured data, discovery files, components, and styles.

## Content Types

The site has four distinct public content types.

### Topics

Topics are the site's six durable subject areas. Each topic currently has one
long-form page at a top-level route.

| Key | Canonical name | Route | Accent |
| --- | --- | --- | --- |
| `fundamentals` | AI Fundamentals | `/ai-fundamentals` | Forest `#356859` |
| `work` | AI and Work | `/ai-and-work` | Violet `#6B4FC6` |
| `agents` | AI Agents | `/ai-agents` | Ochre `#7B6928` |
| `search` | AI Search and GEO | `/ai-search-and-geo` | Teal `#237A78` |
| `software` | Software Development and AI | `/software-development-and-ai` | Blue `#376F9C` |
| `thinking` | AI and Thinking | `/ai-and-thinking` | Indigo `#4B4598` |

Use **Topics** for the collection in navigation and reader-facing headings.
Use the canonical names above everywhere. Do not substitute an ampersand for
“and.” The established routes remain top-level public identifiers.

### Articles

Articles are individual publications about a narrower question, method, or
resource. They live beneath `/articles/<slug>`.

An article may relate to one or more topics, but it is not a topic and does not
inherit the topic-page structure merely because of that relationship.

### Utility pages

About, Links, and Privacy support identity, navigation, and site operation.
They are neither topics nor articles.

### Downloads

Downloads are supporting files beneath `/downloads/`. A download should have a
clear relationship to a topic, article, or utility page, but it is not itself
one of those content types.

## Naming Conventions

- Use sentence-style conjunctions in names: “AI and Work,” not “AI & Work.”
- Use “topic” for a durable subject area and the collection of those areas.
- “Guide” may describe writing in ordinary prose, but it is not a site
  taxonomy, component namespace, CSS namespace, or asset category.
- Use “article” only for content published beneath `/articles/`.
- Keep stable topic keys short and conceptual; do not derive public URLs from
  them automatically.

## Code and Asset Organization

- `components/topic/` contains components used by the six topic pages.
- `components/article/` is reserved for components specific to articles.
- Components shared across content types live directly in `components/` or in
  an appropriately named neutral subdirectory.
- Topic artwork lives in `public/images/topics/`.
- Article artwork lives in `public/images/` or an article-specific directory
  when the collection grows enough to warrant one.

Route files continue to own their editorial content, metadata, and schemas.
Topic identity is passed to `TopicPage` as a stable key and expressed as a CSS
modifier class such as `.topic--work`.

## Topic Color System

Topic colors reinforce identity; they do not communicate meaning on their own.
Every topic remains identifiable through its name, heading, route, and link
text.

Each `.topic--<key>` modifier defines:

- `--topic-color` for accessible accents on light surfaces;
- `--topic-color-dark` for stronger text and interaction states;
- `--topic-color-soft` for subtle backgrounds; and
- `--topic-color-on-dark` for navigation and other dark surfaces.

Apply topic color selectively to eyebrows, markers, rules, focus and hover
states, section navigation, and continuation treatments. Keep body text and
major reading surfaces neutral.

The CSS definitions in `app/globals.css` are the implementation source of
truth for exact color values. Update this table and the CSS together.

## Navigation and Relationships

- Primary navigation lists Topics first, then clearly labels other content
  types such as Articles.
- Topic indexes use the canonical topic order shown in this document.
- Topic pages may link to related topics and articles.
- Article pages may link to relevant topics, related articles, and downloads.
- Link labels name their destination clearly and use canonical topic names.
- Explicit topic-navigation links use the destination topic's color. Ordinary
  contextual links remain neutral unless they are intentionally identified
  with the `.topic-destination-link` class.
- Breadcrumbs reflect content type without inventing URL levels that do not
  exist.

## Change Checklist

When adding, renaming, or removing a public item:

1. Confirm its content type.
2. Update this document when the canonical IA changes.
3. Align visible labels, metadata, structured data, and breadcrumbs.
4. Align navigation, cross-links, sitemap, `public/llms.txt`, and smoke routes.
5. Place components and assets in the directory for their content type.
6. Confirm color is supplemental and accessible.
7. Verify desktop, mobile, keyboard, and reduced-motion behavior.
