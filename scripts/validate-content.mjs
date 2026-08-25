import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { evidenceSources } from "../content/evidence.js";
import { videoTopics } from "../content/videos/associations.js";

const appDirectory = path.resolve("app");
const videoItemsDirectory = path.resolve("content", "videos", "items");
const errors = [];
let videoCount = 0;

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const fullPath = path.join(directory, entry.name);
      return entry.isDirectory() ? filesUnder(fullPath) : [fullPath];
    }),
  );
  return nested.flat();
}

function lineNumber(source, index) {
  return source.slice(0, index).split("\n").length;
}

function extractYoutubeId(value) {
  if (!value) return "";

  try {
    const url = new URL(value);
    const shortsMatch = url.pathname.match(/\/shorts\/([A-Za-z0-9_-]{11})/);
    if (shortsMatch) return shortsMatch[1];
    const embedMatch = url.pathname.match(/\/embed\/([A-Za-z0-9_-]{11})/);
    if (embedMatch) return embedMatch[1];
    if (url.hostname === "youtu.be") {
      const shortMatch = url.pathname.match(/^\/([A-Za-z0-9_-]{11})/);
      if (shortMatch) return shortMatch[1];
    }
    return url.searchParams.get("v") || "";
  } catch {
    return "";
  }
}

function withoutUrls(value) {
  return String(value || "").replace(/https?:\/\/\S+|\b[a-z0-9.-]+\.[a-z]{2,}\/\S+/gi, "");
}

function hasBadAiCasingInProse(value) {
  return /\b(?:ai|Ai)\b/.test(withoutUrls(value));
}

for (const file of (await filesUnder(appDirectory)).filter((name) => name.endsWith(".js"))) {
  const source = await readFile(file, "utf8");
  const videoIds = new Map();
  const objectPattern = /\{[^{}]*?title:\s*"([^"]+)"[^{}]*?published:\s*"([^"]+)"[^{}]*?url:\s*"([^"]+)"[^{}]*?videoId:\s*"([^"]+)"[^{}]*?\}/gs;

  for (const match of source.matchAll(objectPattern)) {
    const [, title, published, url, videoId] = match;
    videoCount += 1;
    const location = `${path.relative(process.cwd(), file)}:${lineNumber(source, match.index)}`;
    if (Number.isNaN(new Date(published).getTime())) {
      errors.push(`${location}: "${title}" has invalid date "${published}"`);
    }

    let urlVideoId;
    try {
      urlVideoId = extractYoutubeId(url);
    } catch {
      errors.push(`${location}: "${title}" has invalid URL "${url}"`);
    }
    if (urlVideoId && urlVideoId !== videoId) {
      errors.push(`${location}: "${title}" URL ID ${urlVideoId} does not match ${videoId}`);
    }

    const previous = videoIds.get(videoId);
    if (previous && previous.title !== title) {
      errors.push(
        `${location}: video ID ${videoId} is also used by "${previous.title}" at ${previous.location}`,
      );
    } else {
      videoIds.set(videoId, { title, location });
    }
  }
}

const videoRecords = new Map();
const youtubeIds = new Map();
for (const file of (await readdir(videoItemsDirectory)).filter((name) => name.endsWith(".json"))) {
  const location = path.join("content", "videos", "items", file);
  let record;
  try {
    record = JSON.parse(await readFile(path.join(videoItemsDirectory, file), "utf8"));
  } catch (error) {
    errors.push(`${location}: invalid JSON (${error.message})`);
    continue;
  }

  videoCount += 1;

  if (!record.slug) errors.push(`${location}: missing slug`);
  if (!record.title) errors.push(`${location}: missing title`);
  if (!record.description) errors.push(`${location}: missing description`);
  if (hasBadAiCasingInProse(`${record.title || ""} ${record.description || ""}`)) {
    errors.push(`${location}: title or description must capitalize AI`);
  }
  if (/\bThis video explains\b/i.test(record.description || "")) {
    errors.push(`${location}: description uses the repetitive "This video explains" construction`);
  }
  if (!record.published || Number.isNaN(new Date(record.published).getTime())) {
    errors.push(`${location}: invalid published date "${record.published || ""}"`);
  }
  if (record.slug && file !== `${record.slug}.json`) {
    errors.push(`${location}: filename does not match slug "${record.slug}"`);
  }
  if (record.slug && videoRecords.has(record.slug)) {
    errors.push(`${location}: duplicate video slug "${record.slug}"`);
  }
  if (record.slug) videoRecords.set(record.slug, record);

  if (record.youtubeUrl) {
    const urlVideoId = extractYoutubeId(record.youtubeUrl);
    if (!urlVideoId) {
      errors.push(`${location}: could not extract YouTube ID from "${record.youtubeUrl}"`);
    }
    if (record.youtubeVideoId && urlVideoId && urlVideoId !== record.youtubeVideoId) {
      errors.push(
        `${location}: YouTube URL ID ${urlVideoId} does not match ${record.youtubeVideoId}`,
      );
    }
  }

  if (record.youtubeVideoId) {
    const previous = youtubeIds.get(record.youtubeVideoId);
    if (previous && previous !== record.slug) {
      errors.push(
        `${location}: YouTube ID ${record.youtubeVideoId} is also used by "${previous}"`,
      );
    }
    youtubeIds.set(record.youtubeVideoId, record.slug);
  }

  if (record.sourceIds && !Array.isArray(record.sourceIds)) {
    errors.push(`${location}: sourceIds must be an array`);
  }
  for (const sourceId of record.sourceIds || []) {
    if (!evidenceSources[sourceId]) {
      errors.push(`${location}: references missing evidence source "${sourceId}"`);
    }
  }

  if (record.transcriptPath) {
    try {
      const transcript = await readFile(path.resolve(record.transcriptPath), "utf8");
      if (/[a-z][.!?][A-Z]/.test(transcript)) {
        errors.push(`${location}: transcript contains joined sentences without spacing`);
      }
      if (hasBadAiCasingInProse(transcript)) {
        errors.push(`${location}: transcript must capitalize AI`);
      }
      if (/\b(?:15 to 20%|18 to 36 month|five plus years)\b/i.test(transcript) && !record.transcriptNote) {
        errors.push(`${location}: quantitative transcript claim needs an evidence or estimate note`);
      }
    } catch {
      errors.push(`${location}: missing transcript "${record.transcriptPath}"`);
    }
  }
}

for (const topic of videoTopics) {
  if (!topic.slug || !topic.sourcePath) {
    errors.push(`content/videos/associations.js: topic is missing slug or sourcePath`);
  }
  if (!topic.description) {
    errors.push(`content/videos/associations.js: ${topic.slug} is missing a description`);
  }

  for (const section of topic.sections || []) {
    if (!section.id || !section.title || !section.description) {
      errors.push(
        `content/videos/associations.js: ${topic.slug} has a section missing an id, title, or description`,
      );
    }
    if (hasBadAiCasingInProse(`${section.title || ""} ${section.description || ""}`)) {
      errors.push(`content/videos/associations.js: ${topic.slug}/${section.id} must capitalize AI`);
    }
    if (/preserving .*relationships|connected to the .* guide|^Videos about\b/i.test(section.description || "")) {
      errors.push(`content/videos/associations.js: ${topic.slug}/${section.id} uses a generic description`);
    }
    for (const videoId of section.videoIds || []) {
      if (!videoRecords.has(videoId)) {
        errors.push(
          `content/videos/associations.js: ${topic.slug}/${section.id} references missing video "${videoId}"`,
        );
      }
    }
  }
}

if (errors.length) {
  console.error(`Content validation failed:\n${errors.map((error) => `- ${error}`).join("\n")}`);
  process.exit(1);
}

console.log(`Content validation passed (${videoCount} video records checked)`);
