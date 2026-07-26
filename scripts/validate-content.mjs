import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const appDirectory = path.resolve("app");
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
      urlVideoId = new URL(url).searchParams.get("v");
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

if (errors.length) {
  console.error(`Content validation failed:\n${errors.map((error) => `- ${error}`).join("\n")}`);
  process.exit(1);
}

console.log(`Content validation passed (${videoCount} video records checked)`);
