import { siteConfig } from "../content/siteConfig";

export default function sitemap() {
  return [
    { path: "", priority: 1, changeFrequency: "weekly" },
    {
      path: "/ai-and-work",
      priority: 0.9,
      changeFrequency: "monthly",
      lastModified: new Date("2026-07-25"),
    },
    {
      path: "/ai-agents",
      priority: 0.9,
      changeFrequency: "monthly",
      lastModified: new Date("2026-07-25"),
    },
    {
      path: "/ai-fundamentals",
      priority: 0.9,
      changeFrequency: "monthly",
      lastModified: new Date("2026-07-25"),
    },
    {
      path: "/ai-search-and-geo",
      priority: 0.9,
      changeFrequency: "monthly",
      lastModified: new Date("2026-07-25"),
    },
    {
      path: "/software-development-and-ai",
      priority: 0.9,
      changeFrequency: "monthly",
      lastModified: new Date("2026-07-25"),
    },
    {
      path: "/ai-and-thinking",
      priority: 0.9,
      changeFrequency: "monthly",
      lastModified: new Date("2026-07-25"),
    },
    {
      path: "/articles/news-investigator",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date("2026-07-26"),
    },
    {
      path: "/articles/agentic-soc-enterprise-ai",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date("2026-08-07"),
    },
    {
      path: "/articles/ai-job-search",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date("2026-08-08"),
    },
    {
      path: "/articles/ai-job-search/examples/experienced-professional",
      priority: 0.6,
      changeFrequency: "monthly",
      lastModified: new Date("2026-08-08"),
    },
    {
      path: "/articles/ai-job-search/examples/early-career",
      priority: 0.6,
      changeFrequency: "monthly",
      lastModified: new Date("2026-08-08"),
    },
    {
      path: "/articles/ai-job-search/examples/career-changer-weak-match",
      priority: 0.6,
      changeFrequency: "monthly",
      lastModified: new Date("2026-08-08"),
    },
    {
      path: "/articles/ai-job-search/examples/broad-generalist",
      priority: 0.6,
      changeFrequency: "monthly",
      lastModified: new Date("2026-08-08"),
    },
    {
      path: "/articles/ai-job-search/examples/local-small-employer",
      priority: 0.6,
      changeFrequency: "monthly",
      lastModified: new Date("2026-08-08"),
    },
    {
      path: "/clarity-before-tools",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date("2026-07-30"),
    },
    {
      path: "/judgment-over-generation",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date("2026-07-30"),
    },
    {
      path: "/bottlenecks-over-use-cases",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date("2026-07-30"),
    },
    {
      path: "/quality-over-speed",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date("2026-07-30"),
    },
    {
      path: "/systems-that-hold-up",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date("2026-07-30"),
    },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/links", priority: 0.8, changeFrequency: "monthly" },
    {
      path: "/privacy",
      priority: 0.3,
      changeFrequency: "yearly",
      lastModified: new Date("2026-07-26"),
    },
  ].map(({ path, priority, changeFrequency, lastModified }) => ({
    url: `${siteConfig.siteUrl}${path}`,
    priority,
    changeFrequency,
    ...(lastModified ? { lastModified } : {}),
  }));
}

