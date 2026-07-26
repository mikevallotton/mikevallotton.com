import { createHash } from "node:crypto";
import {
  newsInvestigatorPrompt,
  newsInvestigatorPromptSections,
} from "../content/newsInvestigatorPrompt.js";

const expectedSha256 =
  "1fe999edfe5d41b2e7a883a4cd5db39d5a0937bf04347a52bda5737f42b51805";
const actualSha256 = createHash("sha256")
  .update(newsInvestigatorPrompt)
  .digest("hex");

if (actualSha256 !== expectedSha256) {
  throw new Error(
    `News Investigator prompt checksum changed: ${actualSha256}`,
  );
}

if (
  newsInvestigatorPromptSections.map((section) => section.text).join("") !==
  newsInvestigatorPrompt
) {
  throw new Error(
    "Displayed News Investigator prompt excerpts do not reconstruct the canonical prompt",
  );
}

if (newsInvestigatorPromptSections.some((section) => !section.text.length)) {
  throw new Error("A News Investigator prompt excerpt is empty");
}

console.log("News Investigator prompt integrity check passed");
