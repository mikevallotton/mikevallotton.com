import fs from "node:fs";
import path from "node:path";

const contentRoot = path.join(process.cwd(), "content", "ai-job-search");

export const aiJobSearchPath = "/articles/ai-job-search";
export const aiJobSearchPromptDownloadPath =
  "/downloads/ai-job-search-prompts.txt";

export const aiJobSearchDescription =
  "The five prompts I would use to understand what you can offer, find sourced employers, research fit, identify real overlap, and decide what to do next.";

const promptFiles = [
  {
    id: "capability-profile",
    number: "01",
    title: "Build a personal capability profile",
    navTitle: "Profile",
    filename: "01-build-personal-capability-profile.md",
    summary:
      "I would start by turning your resume, notes, constraints, projects, and background into a reusable document about what you can credibly offer.",
    outcome:
      "A grounded profile with evidence, realistic lanes, constraints, claims to avoid, and proof you may need to gather.",
    failure:
      "Generic praise, resume rewriting, unsupported claims, and inflated positioning.",
  },
  {
    id: "find-companies",
    number: "02",
    title: "Find companies where you could be useful",
    navTitle: "Companies",
    filename: "02-find-companies.md",
    summary:
      "Then I would use the profile to find sourced employers whose work, market, customers, problems, or local context may create a need for what you can do.",
    outcome:
      "A prioritized list of sourced employers, role keywords, red flags, hiring risk, and targets to research next.",
    failure:
      "Unsourced company lists, famous-company bias, generic industries, and title matching without evidence.",
  },
  {
    id: "research-company",
    number: "03",
    title: "Research one employer",
    navTitle: "Research",
    filename: "03-research-company.md",
    summary:
      "Next, I would pick one employer and build a current brief that separates facts, claims, observations, inference, unanswered questions, and role signals.",
    outcome:
      "A sourced company brief with hiring signals, employment path types, source gaps, and action readiness.",
    failure:
      "Superficial summaries, confident speculation, and ignoring whether a plausible employment path exists.",
  },
  {
    id: "find-overlap",
    number: "04",
    title: "Find the overlap",
    navTitle: "Overlap",
    filename: "04-find-overlap.md",
    summary:
      "After that, I would compare your capability profile with the employer brief and decide whether there is a real, evidence-based fit.",
    outcome:
      "Skeptical overlap hypotheses with fit type, proof needs, positioning safeguards, effort budget, and application triggers.",
    failure:
      "Forcing a flattering fit between every person and every employer.",
  },
  {
    id: "approach-plan",
    number: "05",
    title: "Build the approach plan",
    navTitle: "Approach",
    filename: "05-build-approach-plan.md",
    summary:
      "Finally, I would turn the profile, employer research, and overlap analysis into a proportional plan for applying, learning, observing, or moving on.",
    outcome:
      "A practical approach brief with action intensity, message targets, ecosystem paths, proof needs, boundaries, and stop conditions.",
    failure:
      "Invented relationships, generic outreach advice, pressure tactics, or bombarding people.",
  },
];

export const aiJobSearchExampleCases = [
  {
    slug: "experienced-professional",
    title: "Experienced Professional",
    label: "Experienced professional",
    description:
      "A senior B2B SaaS operations leader researching ServiceNow without overstating AI or product expertise.",
    testCaseFile: "01-experienced-professional.md",
    runDir: "01-experienced-professional",
    target: "ServiceNow",
    profileName: "Maya Chen",
  },
  {
    slug: "early-career",
    title: "Early-Career Candidate",
    label: "Early-career candidate",
    description:
      "An IT support specialist exploring security compliance, customer trust, and junior GRC-adjacent paths.",
    testCaseFile: "02-early-career.md",
    runDir: "02-early-career",
    target: "Vanta",
    profileName: "Jordan Brooks",
  },
  {
    slug: "career-changer-weak-match",
    title: "Career Changer With a Weak Immediate Match",
    label: "Career changer",
    description:
      "A Spanish teacher drawn to Duolingo while the approach keeps the fit narrow, cautious, and evidence-based.",
    testCaseFile: "03-career-changer-weak-match.md",
    runDir: "03-career-changer-weak-match",
    target: "Duolingo",
    profileName: "Sofia Ramirez",
  },
  {
    slug: "broad-generalist",
    title: "Broad Generalist",
    label: "Broad generalist",
    description:
      "A startup generalist narrowing broad operations, content, community, and automation experience into specific lanes.",
    testCaseFile: "04-broad-generalist.md",
    runDir: "04-broad-generalist",
    target: "Zapier",
    profileName: "Priya Nair",
  },
  {
    slug: "local-small-employer",
    title: "Local Small-Employer Seeker",
    label: "Local small employer",
    description:
      "A local candidate exploring a bookstore and community business without inventing hiring capacity.",
    testCaseFile: "05-local-small-employer.md",
    runDir: "05-local-small-employer",
    target: "Books in the City / We Are LIT",
    profileName: "Marcus Thompson",
  },
];

function readContent(...segments) {
  return fs.readFileSync(path.join(contentRoot, ...segments), "utf8");
}

function normalizeMarkdown(text) {
  return text.replace(/\r\n/g, "\n").trim();
}

function extractSection(markdown, heading, nextHeadingLevel = "##") {
  const source = normalizeMarkdown(markdown);
  const start = source.indexOf(heading);
  if (start === -1) return "";
  const bodyStart = start + heading.length;
  const next = source.indexOf(`\n${nextHeadingLevel} `, bodyStart);
  return source.slice(bodyStart, next === -1 ? undefined : next).trim();
}

function extractCopyPrompt(markdown) {
  const match = markdown.match(/## Copy\/Paste Prompt\s*```text\s*([\s\S]*?)\s*```/);
  return match ? normalizeMarkdown(match[1]) : "";
}

function extractSyntheticInput(markdown) {
  const scenario = extractSection(markdown, "## Scenario");
  const target = extractSection(markdown, "## Target Company For Full Workflow");
  const profile = extractSection(markdown, "## Synthetic User Profile Input");

  return normalizeMarkdown(
    [
      "## Scenario",
      scenario,
      "",
      "## Target Employer For Full Workflow",
      target,
      "",
      "## Synthetic User Profile Input",
      profile,
    ].join("\n"),
  );
}

function extractPromptOutput(markdown) {
  const source = normalizeMarkdown(markdown);
  const outputStart = source.indexOf("## Prompt Output");
  const bodyStart = outputStart === -1 ? 0 : outputStart + "## Prompt Output".length;
  const stopMarkers = [
    "\n### V3 Delta Check",
    "\n## Challenger Review",
    "\n## Evaluation",
  ]
    .map((marker) => source.indexOf(marker, bodyStart))
    .filter((index) => index !== -1);
  const stop = stopMarkers.length ? Math.min(...stopMarkers) : undefined;

  return normalizeMarkdown(source.slice(bodyStart, stop));
}

export const aiJobSearchPrompts = promptFiles.map((prompt) => {
  const markdown = normalizeMarkdown(readContent("prompts", prompt.filename));

  return {
    ...prompt,
    markdown,
    purpose: extractSection(markdown, "## Purpose"),
    requiredInputs: extractSection(markdown, "## Required Inputs"),
    copyPrompt: extractCopyPrompt(markdown),
    requiredOutput: extractSection(markdown, "## Required Output"),
  };
});

export const aiJobSearchSections = [
  { id: "overview", title: "The approach", navTitle: "Start" },
  ...aiJobSearchPrompts.map(({ id, title, navTitle }) => ({
    id,
    title,
    navTitle,
  })),
  { id: "examples", title: "Examples", navTitle: "Examples" },
  { id: "how-to-use-it", title: "How to use it", navTitle: "Use it" },
];

export function getAiJobSearchPromptPack() {
  return `${aiJobSearchPrompts
    .map((prompt) => prompt.markdown)
    .join("\n\n---\n\n")
    .replace(/\n/g, "\r\n")}\r\n`;
}

export function getAiJobSearchExample(slug) {
  const example = aiJobSearchExampleCases.find((item) => item.slug === slug);
  if (!example) return null;

  const inputMarkdown = extractSyntheticInput(
    readContent("test-cases", example.testCaseFile),
  );
  const outputs = aiJobSearchPrompts.map((prompt) => {
    const candidates = fs
      .readdirSync(path.join(contentRoot, "runs", example.runDir))
      .filter((filename) => filename.startsWith(`${prompt.number}-`));
    const filename = candidates[0];
    const markdown = filename
      ? readContent("runs", example.runDir, filename)
      : "";

    return {
      id: prompt.id,
      number: prompt.number,
      title: prompt.title,
      navTitle: prompt.navTitle,
      output: extractPromptOutput(markdown),
    };
  });

  return {
    ...example,
    path: `${aiJobSearchPath}/examples/${example.slug}`,
    inputMarkdown,
    outputs,
  };
}
