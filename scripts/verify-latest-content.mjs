import { readFile } from "node:fs/promises";
import { articles, getLatestArticle } from "../content/articles.js";
import { parseLatestYouTubeVideo, parseYouTubeFeed } from "../lib/youtubeFeedParser.js";

const fixture = await readFile("scripts/fixtures/youtube-feed.xml", "utf8");
const parsedVideos = parseYouTubeFeed(fixture);
const latestVideo = parseLatestYouTubeVideo(fixture);

const errors = [];

if (parsedVideos.length !== 2) {
  errors.push(`Expected 2 fixture videos, found ${parsedVideos.length}`);
}

if (latestVideo?.videoId !== "hysaUcYuXx4") {
  errors.push(`Expected latest fixture video hysaUcYuXx4, found ${latestVideo?.videoId || "none"}`);
}

if (latestVideo?.thumbnailUrl !== "https://i.ytimg.com/vi/hysaUcYuXx4/hqdefault.jpg") {
  errors.push(`Expected a CSP-approved thumbnail URL, found ${latestVideo?.thumbnailUrl || "none"}`);
}

if (!latestVideo?.description.includes("experimentation & customer understanding")) {
  errors.push("Expected XML entities in the video description to be decoded");
}

const latestFixtureArticle = getLatestArticle([
  { href: "/older", published: "2026-08-01" },
  { href: "/newer", published: "2026-08-03" },
  { href: "/middle", published: "2026-08-02" },
]);

if (latestFixtureArticle?.href !== "/newer") {
  errors.push("Article sorting did not select the newest fixture article");
}

if (getLatestArticle()?.href !== "/articles/ai-job-search") {
  errors.push("The current latest article should be /articles/ai-job-search");
}

if (articles.some((article) => article.href.includes("/examples/"))) {
  errors.push("Article registry should exclude example pages");
}

if (errors.length) {
  console.error(`Latest content validation failed:\n${errors.map((error) => `- ${error}`).join("\n")}`);
  process.exit(1);
}

console.log("Latest content validation passed");
