# Content Guide

## Purpose

The site helps people become more capable with AI. It explains how modern AI works, how it changes professional work, how to design reliable workflows, and where human judgment remains essential.

The content is educational and point-of-view driven. It should be useful to executives, team leaders, practitioners, builders, and curious non-specialists without becoming generic or promotional.

## Editorial Position

The central perspective is:

- AI is a general-purpose capability, not merely a collection of tools.
- Clear intent, useful context, iteration, and evaluation matter more than "perfect prompts."
- AI can accelerate execution, but people remain responsible for constraints, tradeoffs, and consequences.
- Durable value comes from improving real workflows and bottlenecks.
- Reliable outcomes depend on the surrounding system: information, permissions, ownership, testing, feedback, and governance.
- Human capability and judgment should grow alongside automation.

New content should reinforce or productively extend this perspective.

## Audience

Write for readers who are intelligent but may not share the author's technical background:

- executives and business leaders modernizing organizations;
- department leaders adopting AI with their teams;
- professionals using AI in knowledge work;
- software and technology practitioners;
- people building personal AI workflows; and
- readers exploring AI's effect on thinking and learning.

Explain technical mechanisms plainly. Do not reduce the subject to slogans, but do not require specialist vocabulary when ordinary language is sufficient.

## Voice and Tone

The voice is clear, grounded, practical, calm, and candid.

Prefer:

- concrete explanations over abstract excitement;
- measured confidence over certainty;
- durable principles over product-of-the-week commentary;
- specific tradeoffs over blanket rules;
- short examples that clarify a mechanism;
- direct sentences and descriptive headings; and
- "can," "may," and "depends" when outcomes are conditional.

Avoid:

- hype, fear, inevitability, or exaggerated transformation language;
- claims that AI replaces judgment or eliminates accountability;
- invented personal anecdotes or organizational results;
- generic motivational filler;
- unexplained jargon;
- claims that collapse one study into a universal rule; and
- keyword repetition written primarily for search engines.

## Content Model

The site distinguishes durable Topics from narrower Articles and from utility
pages and Downloads. Follow `docs/information-architecture.md` for canonical
names, routes, relationships, and visual identifiers.

Each core topic page generally contains:

1. A concise hero that states what the reader will understand.
2. A description of the intended audience.
3. A navigable sequence of sections.
4. Explanatory prose organized around practical questions.
5. Videos where they materially add instruction.
6. Evidence notes adjacent to consequential claims.
7. FAQs that answer real reader questions without repeating the main copy verbatim.
8. Further reading with clear source descriptions.
9. A next-step link to a related guide.

Section IDs should be stable, readable, and aligned with the visible heading because they are used in navigation and deep links.

## Writing a Section

A strong section usually moves through this sequence:

1. Name the idea in plain language.
2. Explain the mechanism or reason it matters.
3. Show the practical consequence.
4. Identify an important boundary, risk, or exception.
5. Give the reader a useful action or question to apply.

Not every section needs all five parts, but readers should leave with both understanding and a way to use it.

## Claims and Evidence

Use evidence to strengthen factual claims, not to decorate opinion.

### Add a citation when content includes:

- a number, percentage, cost, or timeframe;
- a claim about productivity or employment effects;
- a claim about cognition, behavior, security, or reliability;
- a description of a provider's current product behavior or policy;
- a causal statement; or
- a conclusion likely to affect a consequential decision.

### Evidence workflow

1. Prefer primary research, peer-reviewed work, standards bodies, and official product documentation.
2. Verify the source directly.
3. Record it in `content/evidence.js`.
4. Write an evidence note that states what the evidence supports.
5. State meaningful limitations or what the evidence does not establish.
6. Use `sourcesFor()` or `mergeSources()` to include it in further reading.
7. Recheck time-sensitive sources and label dates accurately.

Keep interpretation separate from evidence. A study of one task, population, tool, or time period does not establish a universal effect. Preserve qualifiers that affect the conclusion.

The existing `docs/Evidence and Source Audit.md` is a research artifact and useful background, but publication code in `content/evidence.js` is the operational source registry.

## Metadata and Discoverability

Each public page should have:

- a distinct title;
- a concise description that matches visible content;
- a canonical path;
- appropriate structured data;
- one clear H1;
- descriptive headings and link text; and
- internal links to closely related material.

Write first for people. Clear structure, accurate authorship, source transparency, and semantic markup also make the content easier for search engines and AI retrieval systems to understand.

Do not promise ranking or citation outcomes. `public/llms.txt` is a discovery aid, not an access-control or ranking mechanism.

## Video and FAQ Content

Video titles and descriptions should tell readers what they will learn rather than merely restating a topic label. Video metadata must match the embedded or linked video.

FAQs should:

- answer a specific reader question immediately;
- remain understandable when read independently;
- avoid introducing unsupported claims; and
- add clarification, nuance, or application beyond the surrounding section.

## Inclusive and Accessible Language

- Use people-first, role-neutral language where practical.
- Define acronyms and specialized terms on first use.
- Avoid assuming that readers have a particular tool, employer, or technical setup.
- Make link labels meaningful out of context.
- Do not encode meaning only through position, color, animation, or visual metaphor.

## Editorial Review Checklist

Before publishing:

- Does the page help a defined reader understand or do something useful?
- Is the central point clear in the title, opening, and section sequence?
- Does the writing sound grounded and specific rather than promotional?
- Are Mike's perspective, examples, and externally supported claims distinguishable?
- Are consequential claims supported and accurately scoped?
- Are dates, product names, source links, and policy descriptions current?
- Do FAQs add value?
- Do metadata and structured data match the visible page?
- Are navigation, cross-links, sitemap, `llms.txt`, and route checks current?
- Has the page been reviewed on mobile and desktop?
- Do headings, keyboard behavior, focus states, and reduced motion remain accessible?
