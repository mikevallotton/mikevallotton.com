import { siteConfig } from "../content/siteConfig.js";

const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const INDEXNOW_KEY = "2dc41532e2834fd3a4a01128a834d55d";
const INDEXNOW_KEY_LOCATION = `${siteConfig.siteUrl}/${INDEXNOW_KEY}.txt`;
const acceptedStatuses = new Set([200, 202]);

function usage() {
  console.error(
    "Usage: npm run indexnow -- <path-or-canonical-url> [path-or-canonical-url ...]",
  );
  console.error("Example: npm run indexnow -- /ai-and-work /articles/news-investigator");
}

function canonicalUrl(value) {
  const url = new URL(value, `${siteConfig.siteUrl}/`);
  const canonicalHost = new URL(siteConfig.siteUrl).host;

  if (url.protocol !== "https:" || url.host !== canonicalHost) {
    throw new Error(`IndexNow URL must belong to ${siteConfig.siteUrl}: ${value}`);
  }

  if (url.username || url.password || url.hash) {
    throw new Error(`IndexNow URL cannot contain credentials or a fragment: ${value}`);
  }

  return url.href;
}

async function verifyKeyFile() {
  const response = await fetch(INDEXNOW_KEY_LOCATION, {
    headers: { "user-agent": "mikevallotton.com IndexNow release script" },
  });

  if (!response.ok) {
    throw new Error(
      `IndexNow key file returned HTTP ${response.status}: ${INDEXNOW_KEY_LOCATION}`,
    );
  }

  if ((await response.text()).trim() !== INDEXNOW_KEY) {
    throw new Error(`IndexNow key file contents did not match: ${INDEXNOW_KEY_LOCATION}`);
  }
}

const values = process.argv.slice(2);

if (values.length === 0) {
  usage();
  process.exit(1);
}

try {
  const urlList = [...new Set(values.map(canonicalUrl))];

  await verifyKeyFile();

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(siteConfig.siteUrl).host,
      key: INDEXNOW_KEY,
      keyLocation: INDEXNOW_KEY_LOCATION,
      urlList,
    }),
  });

  if (!acceptedStatuses.has(response.status)) {
    const details = (await response.text()).trim();
    throw new Error(
      `IndexNow returned HTTP ${response.status}${details ? `: ${details}` : ""}`,
    );
  }

  console.log(
    `IndexNow accepted ${urlList.length} URL${urlList.length === 1 ? "" : "s"} (HTTP ${response.status}).`,
  );
  for (const url of urlList) {
    console.log(`- ${url}`);
  }
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
