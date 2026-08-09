export const articles = [
  {
    title: "How I Would Use AI If I Was Looking for a Job",
    href: "/articles/ai-job-search",
    category: "Article / AI and work",
    published: "2026-08-08",
    description:
      "See the five prompts I would use to understand what you can offer, find sourced employers, research fit, and decide what to do next.",
  },
  {
    title: "What an Agentic SOC Teaches Us About Enterprise AI",
    href: "/articles/agentic-soc-enterprise-ai",
    category: "Article / Enterprise AI",
    published: "2026-08-07",
    description:
      "A field note from the Agentic SOC Forum on process design, orchestration, bounded autonomy, auditability, governance, and human accountability.",
  },
  {
    title: "News Investigator Agent: Use AI to Strengthen Your Judgment",
    href: "/articles/news-investigator",
    category: "Article / AI judgment",
    published: "2026-07-26",
    description:
      "Use the News Investigator Agent to compare reporting, evaluate evidence, identify uncertainty, and strengthen your judgment.",
  },
];

function publishedTime(item) {
  const time = new Date(item.published).getTime();
  return Number.isNaN(time) ? 0 : time;
}

export function getLatestArticle(items = articles) {
  return [...items].sort((a, b) => publishedTime(b) - publishedTime(a))[0] || null;
}
