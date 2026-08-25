import {
  getAllTopicVideos,
  getVideoArchivePath,
  getVideosForTopic,
  pageCountForVideos,
  videoTopics,
} from "../content/videos/index.js";

function paginationPaths(basePath, pageCount) {
  return Array.from(
    { length: Math.max(0, pageCount - 1) },
    (_, index) => `${basePath}/page/${index + 2}`,
  );
}

const baseUrl = process.argv[2] || process.env.SMOKE_BASE_URL;

if (!baseUrl) {
  console.error("Usage: npm run smoke -- <base-url>");
  process.exit(1);
}

const routes = [
  "/",
  "/about",
  "/links",
  "/privacy",
  "/ai-fundamentals",
  "/ai-and-work",
  "/ai-agents",
  "/ai-search-and-geo",
  "/software-development-and-ai",
  "/ai-and-thinking",
  "/articles/ai-job-search",
  "/articles/ai-job-search/examples/experienced-professional",
  "/articles/ai-job-search/examples/early-career",
  "/articles/ai-job-search/examples/career-changer-weak-match",
  "/articles/ai-job-search/examples/broad-generalist",
  "/articles/ai-job-search/examples/local-small-employer",
  "/articles/news-investigator",
  "/articles/agentic-soc-enterprise-ai",
  "/videos",
  ...paginationPaths("/videos", pageCountForVideos(getAllTopicVideos())),
  ...videoTopics.flatMap((topic) => [
    getVideoArchivePath(topic),
    ...paginationPaths(
      getVideoArchivePath(topic),
      pageCountForVideos(getVideosForTopic(topic)),
    ),
    ...topic.sections.map((section) => getVideoArchivePath(topic, section)),
  ]),
  "/clarity-before-tools",
  "/judgment-over-generation",
  "/bottlenecks-over-use-cases",
  "/quality-over-speed",
  "/systems-that-hold-up",
];

async function assertStatus(path, expectedStatus) {
  const response = await fetch(new URL(path, baseUrl), { redirect: "manual" });
  if (response.status !== expectedStatus) {
    throw new Error(`${path} returned ${response.status}, expected ${expectedStatus}`);
  }
  return response;
}

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");
}

function metaContent(html, attribute, value) {
  const pattern = new RegExp(
    `<meta[^>]*${attribute}="${value}"[^>]*content="([^"]*)"[^>]*>`,
    "i",
  );
  return decodeHtml(html.match(pattern)?.[1] || "");
}

function assertPageMetadata(path, html) {
  const title = decodeHtml(html.match(/<title>([^<]+)<\/title>/i)?.[1] || "");
  const description = metaContent(html, "name", "description");
  const twitterTitle = metaContent(html, "name", "twitter:title");
  const twitterDescription = metaContent(html, "name", "twitter:description");
  const ogImage = metaContent(html, "property", "og:image");
  const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/i)?.[1];
  const h1Count = (html.match(/<h1\b/gi) || []).length;

  if (!title || !description || !twitterTitle || !twitterDescription || !ogImage || !canonical) {
    throw new Error(`${path} is missing required page or social metadata`);
  }
  if (/\b(?:ai|Ai)\b/.test(`${title} ${description} ${twitterTitle} ${twitterDescription}`)) {
    throw new Error(`${path} contains incorrectly capitalized AI in page metadata`);
  }
  if (path !== "/" && twitterTitle === "Mike Vallotton | Practical AI Guidance") {
    throw new Error(`${path} still inherits the global Twitter title`);
  }
  if (new URL(canonical, baseUrl).pathname !== path) {
    throw new Error(`${path} canonical points to ${canonical}`);
  }
  if (h1Count !== 1) {
    throw new Error(`${path} rendered ${h1Count} h1 elements, expected 1`);
  }

  for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      JSON.parse(match[1]);
    } catch {
      throw new Error(`${path} contains invalid JSON-LD`);
    }
  }
}

function assertLatestContent(path, html) {
  const requiredSnippets = [
    "Latest article",
    "Latest video",
    "latest-content-card--article",
    "latest-content-card--video",
  ];

  for (const snippet of requiredSnippets) {
    if (!html.includes(snippet)) {
      throw new Error(`${path} did not include latest content snippet: ${snippet}`);
    }
  }
}

try {
  for (const path of routes) {
    const response = await assertStatus(path, 200);
    assertPageMetadata(path, await response.text());
  }

  await assertStatus("/videos/not-a-topic", 404);
  await assertStatus("/videos/ai-and-thinking/not-a-section", 404);
  await assertStatus("/videos/ai-and-thinking/agents-at-work", 404);
  await assertStatus("/videos/page/1", 404);
  await assertStatus("/videos/page/999", 404);
  await assertStatus("/videos/ai-and-work/page/1", 404);
  await assertStatus("/videos/ai-and-work/page/999", 404);

  const card = await assertStatus("/card", 302);
  const cardLocation = card.headers.get("location") || "";
  if (new URL(cardLocation, baseUrl).pathname !== "/") {
    throw new Error("/card did not redirect to the homepage");
  }

  const robots = await assertStatus("/robots.txt", 200);
  if (!/Sitemap:/i.test(await robots.text())) {
    throw new Error("/robots.txt did not include a sitemap reference");
  }

  const sitemap = await assertStatus("/sitemap.xml", 200);
  if (!/<(urlset|sitemapindex)/i.test(await sitemap.text())) {
    throw new Error("/sitemap.xml did not contain a sitemap payload");
  }

  const indexNowKey = "2dc41532e2834fd3a4a01128a834d55d";
  const indexNowKeyFile = await assertStatus(`/${indexNowKey}.txt`, 200);
  if ((await indexNowKeyFile.text()).trim() !== indexNowKey) {
    throw new Error("The IndexNow key file did not contain the expected key");
  }

  const home = await assertStatus("/", 200);
  const requiredHeaders = [
    "content-security-policy",
    "permissions-policy",
    "cross-origin-opener-policy",
    "strict-transport-security",
    "x-content-type-options",
  ];
  for (const header of requiredHeaders) {
    if (!home.headers.get(header)) {
      throw new Error(`/ did not include the ${header} header`);
    }
  }
  if (!/includeSubDomains/i.test(home.headers.get("strict-transport-security") || "")) {
    throw new Error("/ did not include includeSubDomains in HSTS");
  }
  assertLatestContent("/", await home.text());

  const links = await assertStatus("/links", 200);
  assertLatestContent("/links", await links.text());

  const videoArchive = await assertStatus("/videos", 200);
  const videoArchiveHtml = await videoArchive.text();
  if (/background-image:[^;]*i\.ytimg\.com/i.test(videoArchiveHtml)) {
    throw new Error("/videos still renders YouTube thumbnails as CSS background images");
  }
  if (!/aria-label="Watch [^<]* on YouTube"/i.test(videoArchiveHtml)) {
    throw new Error("/videos did not include descriptive video-link names");
  }
  if (!videoArchiveHtml.includes('<span class="sr-only"> for')) {
    throw new Error("/videos did not include descriptive transcript-control names");
  }

  const videoArchivePageTwo = await assertStatus("/videos/page/2", 200);
  const videoArchivePageTwoHtml = await videoArchivePageTwo.text();
  if (!videoArchivePageTwoHtml.includes("Showing 19–36 of 87 videos")) {
    throw new Error("/videos/page/2 did not describe its visible result range");
  }
  if (/href="\/videos"[^>]*aria-current="page"/i.test(videoArchivePageTwoHtml)) {
    throw new Error("/videos/page/2 incorrectly marks /videos as the current page");
  }

  const personalizationArchive = await assertStatus(
    "/videos/ai-and-work/organizations",
    200,
  );
  const personalizationArchiveHtml = await personalizationArchive.text();
  const personalizationSourceUrls = [
    "mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/the-value-of-getting-personalization-right-or-wrong-is-multiplying",
    "bcg.com/publications/2024/personalization-in-action",
    "pure.uvt.nl/ws/portalfiles/portal/82612319/1-s2.0-S0022435914000669-main.pdf",
  ];

  for (const sourceUrl of personalizationSourceUrls) {
    if (!personalizationArchiveHtml.includes(sourceUrl)) {
      throw new Error(
        `/videos/ai-and-work/organizations did not render source ${sourceUrl}`,
      );
    }
  }

  const jobSearchArticle = await assertStatus("/articles/ai-job-search", 200);
  const jobSearchArticleHtml = await jobSearchArticle.text();
  const getJobSearchSectionHtml = (sectionId) => {
    const idIndex = jobSearchArticleHtml.indexOf(`id="${sectionId}"`);
    const sectionStart = jobSearchArticleHtml.lastIndexOf("<section", idIndex);
    const sectionEnd = jobSearchArticleHtml.indexOf("</section>", idIndex);

    if (idIndex < 0 || sectionStart < 0 || sectionEnd < 0) {
      throw new Error(`/articles/ai-job-search did not render #${sectionId}`);
    }

    return jobSearchArticleHtml.slice(sectionStart, sectionEnd);
  };
  const jobSearchVideoPlacements = [
    ["capability-profile", "0HgRfLOw-vw"],
    ["find-companies", "yUCHp24--pY"],
    ["find-overlap", "3QaXNItdPPc"],
    ["approach-plan", "DLeyl0M-zMg"],
    ["how-to-use-it", "b3qdt-DAaak"],
  ];

  for (const [sectionId, videoId] of jobSearchVideoPlacements) {
    if (!getJobSearchSectionHtml(sectionId).includes(videoId)) {
      throw new Error(`/articles/ai-job-search did not place ${videoId} in #${sectionId}`);
    }
  }

  if (/youtube\.com\/shorts\//i.test(getJobSearchSectionHtml("research-company"))) {
    throw new Error("/articles/ai-job-search placed a video in #research-company");
  }

  const prompt = await assertStatus("/downloads/news-investigator-prompt.txt", 200);
  if (!/attachment;\s*filename="news-investigator-prompt\.txt"/i.test(
    prompt.headers.get("content-disposition") || "",
  )) {
    throw new Error("The News Investigator prompt did not return as a download");
  }

  const jobSearchPrompts = await assertStatus("/downloads/ai-job-search-prompts.txt", 200);
  if (!/attachment;\s*filename="ai-job-search-prompts\.txt"/i.test(
    jobSearchPrompts.headers.get("content-disposition") || "",
  )) {
    throw new Error("The AI job-search prompts did not return as a download");
  }

  console.log(`Smoke checks passed for ${baseUrl}`);
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
