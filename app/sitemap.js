import { siteConfig } from "../content/siteConfig";
import { contentDates } from "../content/dates";
import {
  getAllTopicVideos,
  getVideoArchivePath,
  getVideosForTopic,
  pageCountForVideos,
  videoTopics,
} from "../content/videos";

function paginationPaths(basePath, pageCount) {
  return Array.from(
    { length: Math.max(0, pageCount - 1) },
    (_, index) => `${basePath}/page/${index + 2}`,
  );
}

export default function sitemap() {
  return [
    { path: "", priority: 1, changeFrequency: "weekly" },
    {
      path: "/ai-and-work",
      priority: 0.9,
      changeFrequency: "monthly",
      lastModified: new Date(contentDates.topics.modified),
    },
    {
      path: "/ai-agents",
      priority: 0.9,
      changeFrequency: "monthly",
      lastModified: new Date(contentDates.topics.modified),
    },
    {
      path: "/ai-fundamentals",
      priority: 0.9,
      changeFrequency: "monthly",
      lastModified: new Date(contentDates.topics.modified),
    },
    {
      path: "/ai-search-and-geo",
      priority: 0.9,
      changeFrequency: "monthly",
      lastModified: new Date(contentDates.topics.modified),
    },
    {
      path: "/software-development-and-ai",
      priority: 0.9,
      changeFrequency: "monthly",
      lastModified: new Date(contentDates.topics.modified),
    },
    {
      path: "/ai-and-thinking",
      priority: 0.9,
      changeFrequency: "monthly",
      lastModified: new Date(contentDates.topics.modified),
    },
    {
      path: "/articles/news-investigator",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date(contentDates.newsInvestigator.modified),
    },
    {
      path: "/articles/agentic-soc-enterprise-ai",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date(contentDates.agenticSoc.modified),
    },
    {
      path: "/articles/ai-job-search",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date(contentDates.aiJobSearch.modified),
    },
    {
      path: "/articles/ai-job-search/examples/experienced-professional",
      priority: 0.6,
      changeFrequency: "monthly",
      lastModified: new Date(contentDates.aiJobSearch.modified),
    },
    {
      path: "/articles/ai-job-search/examples/early-career",
      priority: 0.6,
      changeFrequency: "monthly",
      lastModified: new Date(contentDates.aiJobSearch.modified),
    },
    {
      path: "/articles/ai-job-search/examples/career-changer-weak-match",
      priority: 0.6,
      changeFrequency: "monthly",
      lastModified: new Date(contentDates.aiJobSearch.modified),
    },
    {
      path: "/articles/ai-job-search/examples/broad-generalist",
      priority: 0.6,
      changeFrequency: "monthly",
      lastModified: new Date(contentDates.aiJobSearch.modified),
    },
    {
      path: "/articles/ai-job-search/examples/local-small-employer",
      priority: 0.6,
      changeFrequency: "monthly",
      lastModified: new Date(contentDates.aiJobSearch.modified),
    },
    {
      path: "/videos",
      priority: 0.7,
      changeFrequency: "weekly",
      lastModified: new Date(contentDates.videos.modified),
    },
    ...paginationPaths("/videos", pageCountForVideos(getAllTopicVideos())).map((path) => ({
      path,
      priority: 0.5,
      changeFrequency: "weekly",
      lastModified: new Date(contentDates.videos.modified),
    })),
    ...videoTopics.flatMap((topic) =>
      [
        getVideoArchivePath(topic),
        ...paginationPaths(
          getVideoArchivePath(topic),
          pageCountForVideos(getVideosForTopic(topic)),
        ),
        ...topic.sections.map((section) => getVideoArchivePath(topic, section)),
      ].map((path) => ({
        path,
        priority: 0.6,
        changeFrequency: "monthly",
        lastModified: new Date(contentDates.videos.modified),
      })),
    ),
    {
      path: "/clarity-before-tools",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date(contentDates.operatingPrinciples.modified),
    },
    {
      path: "/judgment-over-generation",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date(contentDates.operatingPrinciples.modified),
    },
    {
      path: "/bottlenecks-over-use-cases",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date(contentDates.operatingPrinciples.modified),
    },
    {
      path: "/quality-over-speed",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date(contentDates.operatingPrinciples.modified),
    },
    {
      path: "/systems-that-hold-up",
      priority: 0.8,
      changeFrequency: "monthly",
      lastModified: new Date(contentDates.operatingPrinciples.modified),
    },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/links", priority: 0.8, changeFrequency: "monthly" },
    {
      path: "/privacy",
      priority: 0.3,
      changeFrequency: "yearly",
      lastModified: new Date("2026-08-09"),
    },
  ].map(({ path, priority, changeFrequency, lastModified }) => ({
    url: `${siteConfig.siteUrl}${path}`,
    priority,
    changeFrequency,
    ...(lastModified ? { lastModified } : {}),
  }));
}

