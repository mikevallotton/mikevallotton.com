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
  "/articles/news-investigator",
  "/clarity-before-tools",
  "/judgment-over-generation",
  "/bottlenecks-over-use-cases",
  "/quality-over-speed",
  "/systems-that-hold-up",
];

async function assertStatus(path, expectedStatus) {
  const response = await fetch(new URL(path, baseUrl));
  if (response.status !== expectedStatus) {
    throw new Error(`${path} returned ${response.status}, expected ${expectedStatus}`);
  }
  return response;
}

try {
  for (const path of routes) {
    await assertStatus(path, 200);
  }

  const robots = await assertStatus("/robots.txt", 200);
  if (!/Sitemap:/i.test(await robots.text())) {
    throw new Error("/robots.txt did not include a sitemap reference");
  }

  const sitemap = await assertStatus("/sitemap.xml", 200);
  if (!/<(urlset|sitemapindex)/i.test(await sitemap.text())) {
    throw new Error("/sitemap.xml did not contain a sitemap payload");
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

  const prompt = await assertStatus("/downloads/news-investigator-prompt.txt", 200);
  if (!/attachment;\s*filename="news-investigator-prompt\.txt"/i.test(
    prompt.headers.get("content-disposition") || "",
  )) {
    throw new Error("The News Investigator prompt did not return as a download");
  }

  console.log(`Smoke checks passed for ${baseUrl}`);
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
