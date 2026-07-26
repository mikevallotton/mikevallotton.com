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

