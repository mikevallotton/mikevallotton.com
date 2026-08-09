import { siteConfig } from "../../content/siteConfig";
import TopicPage from "../../components/topic/TopicPage";
import { evidenceNotes, mergeSources, sourcesFor } from "../../content/evidence";
import { withPageSocial } from "../../content/metadata";
import { contentDates } from "../../content/dates";

export const metadata = withPageSocial({
  title: "How AI Is Changing Work",
  description:
    "A practical guide to how AI is changing careers, organizations, leadership, and the skills that create value.",
  alternates: {
    canonical: "/ai-and-work",
  },
  openGraph: {
    title: "How AI Is Changing Work",
    description:
      "A practical guide to how AI is changing careers, organizations, leadership, and the skills that create value.",
    url: "/ai-and-work",
    type: "article",
  },
});

const sections = [
  {
    id: "already-changing",
    title: "AI Is Already Changing Work",
    answer:
      "AI is changing work long before it replaces entire jobs. It removes friction from research, drafting, documentation, planning, communication, and coordination.",
    body:
      "That changes the pace of work, what organizations expect from individuals, and how much a small team can accomplish. The transition is already underway, but it will unfold unevenly over years.",
    evidence: [evidenceNotes.workTasks, evidenceNotes.workProductivity],
    related: [
      { href: "/ai-fundamentals", label: "How language models work" },
      { href: "/software-development-and-ai", label: "AI in software development" },
    ],
    closing:
      "AI changes how work gets done before it changes the organizational chart.",
    videoIds: [
      "ai-is-changing-work-faster-than-most-people-can-process",
      "ai-isn-t-wiping-out-white-collar-work-it-s-compressing-it",
      "the-real-impact-of-ai-on-work-hours",
      "ai-is-a-long-transition-not-a-sudden-revolution",
    ],
  },
  {
    id: "organizations",
    title: "How Organizations Are Responding",
    answer:
      "Organizations adopt AI more slowly than individuals because meaningful adoption requires governance, security, process redesign, training, and coordinated change.",
    body:
      "The technology can improve every week while the surrounding company still moves on annual budgets, legacy systems, established incentives, and existing operating models.",
    image: {
      src: "/images/topics/organizational-layers.webp",
      alt: "Central model inside layers of people, process, governance, and systems.",
      caption:
        "Model capability is only the center. Adoption depends on aligning the organizational layers that surround it.",
    },
    evidence: [evidenceNotes.workAdoption, evidenceNotes.workGovernance],
    related: [
      { href: "/ai-agents", label: "Reliable AI agents" },
      { href: "/ai-and-thinking", label: "AI and human judgment" },
      {
        href: "/bottlenecks-over-use-cases",
        label: "Bottlenecks over use cases",
      },
      {
        href: "/articles/agentic-soc-enterprise-ai",
        label: "What an Agentic SOC teaches enterprise AI",
      },
    ],
    closing: "Technology evolves every week. Organizations evolve over years.",
    videoIds: [
      "why-your-company-isn-t-ready-but-you-can-be",
      "organizational-readiness-for-ai-adoption",
      "how-ai-adoption-moves-predictably-through-organizations",
      "why-enterprise-ai-is-a-multi-year-organizational-rebuild",
      "ai-governance-as-the-key-to-scalable-deployment",
    ],
  },
  {
    id: "more-valuable",
    title: "What Becomes More Valuable",
    answer:
      "As AI makes execution cheaper, value shifts toward choosing the right problems, coordinating people and systems, designing better processes, and applying judgment.",
    body:
      "The scarce resource is no longer always the ability to produce a first draft. It is increasingly the ability to decide what should happen, create the conditions for it, and learn from the result.",
    related: [
      {
        href: "/articles/ai-job-search",
        label: "How I would use AI to look for work",
      },
      {
        href: "/judgment-over-generation",
        label: "Judgment over generation",
      },
    ],
    closing: "AI lowers the cost of execution. Humans decide what should happen next.",
    videoIds: [
      "stop-looking-for-use-cases-start-looking-for-bottlenecks",
      "ai-productivity-gains-depend-on-coordination-systems",
      "ai-shifts-advantage-from-output-to-coordination",
      "process-design-as-the-real-competitive-advantage",
      "learning-speed-as-the-ultimate-competitive-advantage",
      "mapping-workflows-before-applying-ai",
      "ai-expands-the-scope-of-modern-marketing-work",
      "ai-redesigns-marketing-work-through-task-automation",
    ],
  },
  {
    id: "hidden-effects",
    title: "The Hidden Effects of AI",
    answer:
      "AI’s second-order effects may matter more than its obvious productivity gains. When content and execution become abundant, attention, trust, credibility, and institutional capacity become scarce.",
    body:
      "Faster production can create more noise, more coordination work, and more pressure on systems that were designed for a slower environment.",
    closing: "The technology changes quickly. The surrounding systems take much longer.",
    videoIds: [
      "what-breaks-when-execution-becomes-cheap-attention",
      "what-breaks-when-execution-becomes-cheap-trust",
      "what-breaks-when-execution-becomes-cheap-idea-diversity",
      "what-breaks-when-execution-becomes-cheap-credibility",
      "institutional-lag",
      "systems",
    ],
  },
  {
    id: "where-heading",
    title: "Where This Is Heading",
    answer:
      "The larger shift will come from connecting AI to organizational knowledge, business processes, authority, and human judgment—not from using isolated chat tools.",
    body:
      "The organizations that benefit most will build the context and coordination that allow people and AI systems to work together reliably.",
    closing:
      "The future belongs to organizations that combine AI with human judgment rather than treating them as competitors.",
    videoIds: [
      "ai-adoption-is-the-real-then-what-moment",
      "organizational-knowledge-may-matter-more-than-smarter-ai",
      "ai-amplifies-human-capability-rather-than-replacing-it",
      "human-judgment-remains-the-hardest-skill-to-automate",
    ],
  },
];

const sourceFaqGroups = [
  {
    title: "AI Is Already Changing Work",
    items: [
      {
        question: "Will AI eliminate white-collar jobs?",
        answer:
          "Not in the way most people imagine. The first thing AI changes isn’t employment—it changes how work gets done. Writing, research, planning, documentation, coding, and communication all become dramatically faster. When those activities require fewer hours, organizations naturally begin reorganizing around that new level of productivity. That doesn’t mean every profession disappears. It means fewer people may be able to accomplish the same amount of work, expectations increase, and roles evolve. Some organizations will reduce hiring. Others will grow because they can deliver more with the same team. The transition is gradual, but it’s already underway.",
      },
      {
        question: "How is AI changing work today?",
        answer:
          "The biggest changes are happening in language-heavy work. AI accelerates drafting, summarization, planning, analysis, coding, documentation, and coordination. Those improvements reduce friction across entire workflows rather than improving a single task. When enough friction disappears, organizations change how they staff projects, how quickly they deliver work, and what they expect from each employee.",
      },
      {
        question: "Will AI reduce working hours?",
        answer:
          "It can, but history suggests productivity gains are often reinvested into producing more output rather than reducing hours. The important change isn’t the clock—it’s the amount of value a person can create during that time. Organizations decide whether those gains become growth, lower costs, or more personal flexibility.",
      },
    ],
  },
  {
    title: "How Organizations Are Responding",
    items: [
      {
        question: "Why aren’t companies adopting AI faster?",
        answer:
          "Individuals can begin using AI today. Organizations cannot. Large companies must coordinate governance, security, compliance, budgets, procurement, training, legacy systems, and organizational change. AI adoption therefore follows a maturity curve rather than a single rollout. Most organizations today are somewhere between experimentation and standardization, building the foundations required before AI can scale across the business.",
      },
      {
        question: "What is AI maturity?",
        answer:
          "AI maturity is less about how many AI tools a company has and more about how consistently AI is integrated into everyday work. Early organizations experiment with isolated use cases. Mature organizations standardize processes, connect AI to business systems, establish governance, and build repeatable ways of working that continue improving over time.",
      },
      {
        question: "Why is governance so important?",
        answer:
          "Governance is what allows AI to scale responsibly. Without clear ownership, security, auditability, and policies, AI creates risk faster than it creates value. Good governance doesn’t slow innovation—it creates the confidence needed for organizations to deploy AI broadly.",
      },
    ],
  },
  {
    title: "What Becomes More Valuable",
    items: [
      {
        question: "What skills become more valuable as AI improves?",
        answer:
          "As execution becomes easier, value shifts toward defining problems, coordinating people, prioritizing work, making tradeoffs, and exercising judgment. AI can generate drafts, code, and analysis, but deciding what matters and why remains the responsibility of people. The professionals who learn fastest and orchestrate AI effectively will consistently outperform those who simply use the newest tools.",
      },
      {
        question: "How should I prepare for AI?",
        answer:
          "Use AI every day. Don’t wait for your employer to create a formal program. Build habits around planning, learning, experimentation, and iteration. Learn how to provide context, evaluate results, and improve workflows. The goal isn’t becoming a prompt engineer—it’s becoming someone who consistently combines human judgment with machine speed.",
      },
    ],
  },
  {
    title: "The Hidden Effects of AI",
    items: [
      {
        question: "Why is trust becoming more important?",
        answer:
          "When convincing reports, images, videos, and analysis become inexpensive to produce, people stop judging information by how polished it looks. They begin asking who produced it, whether the source has been reliable before, and whether the claims can be verified. In an AI-rich world, credibility becomes a competitive advantage.",
      },
      {
        question: "Why doesn’t AI automatically increase productivity?",
        answer:
          "AI often removes one bottleneck only to expose another. Teams can generate more ideas, more code, and more content than ever before, but someone still has to review it, prioritize it, integrate it, and decide what actually deserves attention. Productivity increases when organizations improve those surrounding systems, not simply because generation became faster.",
      },
    ],
  },
  {
    title: "Where This Is Heading",
    items: [
      {
        question: "Where is AI heading over the next decade?",
        answer:
          "The biggest changes won’t come from slightly smarter models. They’ll come from connecting AI to organizational knowledge, business processes, and real-world systems. AI will increasingly coordinate work across tools, people, and information rather than acting as a standalone chatbot.",
      },
      {
        question: "Will AI replace experts?",
        answer:
          "Expertise increasingly shifts away from memorizing information and toward applying judgment. Experienced professionals recognize incomplete requirements, ask better questions, resolve conflicting priorities, and understand organizational context. AI amplifies those capabilities, but it doesn’t replace the experience required to apply them well.",
      },
    ],
  },
];

function faqFromWork(question) {
  return sourceFaqGroups
    .flatMap((group) => group.items)
    .find((item) => item.question === question);
}

const faqGroups = [
  {
    title: "AI Is Already Changing Work",
    items: [
      faqFromWork("Will AI eliminate white-collar jobs?"),
      faqFromWork("Will AI reduce working hours?"),
    ],
  },
  {
    title: "How Organizations Are Responding",
    items: [
      faqFromWork("Why aren’t companies adopting AI faster?"),
      faqFromWork("What is AI maturity?"),
    ],
  },
  {
    title: "What Becomes More Valuable",
    items: [
      faqFromWork("What skills become more valuable as AI improves?"),
      {
        question: "How can I build useful AI experience at work?",
        answer:
          "Start with a real, bounded task where the consequences of mistakes are manageable. Use tools approved by your organization, protect sensitive information, and compare the AI-assisted result with the existing way of working. Practice providing context, evaluating output, and documenting what improved or became more difficult.\n\nThe goal is not to use AI for every task. It is to develop judgment about where it helps, where it introduces risk, and how the surrounding workflow must change for the result to be useful.",
      },
    ],
  },
  {
    title: "The Hidden Effects of AI",
    items: [
      faqFromWork("Why doesn’t AI automatically increase productivity?"),
    ],
  },
  {
    title: "Where This Is Heading",
    items: [faqFromWork("Will AI replace experts?")],
  },
];

const sources = mergeSources([
  {
    title: "2026 AI Index Report: Economy",
    publisher: "Stanford Institute for Human-Centered AI",
    year: "2026",
    href: "https://hai.stanford.edu/ai-index/2026-ai-index-report/economy",
    description:
      "Data on organizational adoption, productivity, investment, and labor-market effects.",
  },
  {
    title: "Generative AI and Jobs: A Refined Global Index",
    publisher: "International Labour Organization",
    year: "2025",
    href: "https://www.ilo.org/publications/generative-ai-and-jobs-refined-global-index-occupational-exposure",
    description:
      "Task-level research on occupational exposure and why transformation is more likely than wholesale replacement.",
  },
  {
    title: "Anthropic Economic Index: Economic Primitives",
    publisher: "Anthropic",
    year: "2026",
    href: "https://www.anthropic.com/research/anthropic-economic-index-january-2026-report",
    description:
      "Observed AI usage, task success, time savings, skill effects, and productivity constraints.",
  },
  {
    title: "2026 AI Index Report: Responsible AI",
    publisher: "Stanford Institute for Human-Centered AI",
    year: "2026",
    href: "https://hai.stanford.edu/ai-index/2026-ai-index-report/responsible-ai",
    description:
      "Evidence on governance adoption and the organizational barriers that remain.",
  },
], sourcesFor(["workTasks", "workProductivity", "workAdoption", "workGovernance"]));

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How AI Is Changing Work",
  description:
    "A practical guide to how AI is changing careers, organizations, leadership, and the skills that create value.",
  url: `${siteConfig.siteUrl}/ai-and-work`,
  author: {
    "@type": "Person",
    "@id": `${siteConfig.siteUrl}/#person`,
    name: siteConfig.name,
    url: `${siteConfig.siteUrl}/about`,
    jobTitle: "Chief Technology Officer",
    sameAs: siteConfig.urls.linkedin,
  },
  publisher: {
    "@type": "Person",
    "@id": `${siteConfig.siteUrl}/#person`,
    name: siteConfig.name,
    url: `${siteConfig.siteUrl}/about`,
  },
  about: [
    "Artificial intelligence",
    "Future of work",
    "Organizational change",
    "Leadership",
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteConfig.siteUrl}/ai-and-work`,
  },
  datePublished: contentDates.topics.published,
  dateModified: contentDates.topics.modified,
  image: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
  citation: sources.map((source) => source.href),
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqGroups.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  ),
};

export default function AiAndWorkPage() {
  return (
    <TopicPage
      topicKey="work"
      articleSchema={structuredData}
      faqSchema={faqStructuredData}
      path="/ai-and-work"
      breadcrumb="AI and Work"
      hero={{ eyebrow: "AI and Work", title: "How AI Is Changing Work", lead: "AI is changing work primarily by reducing the time required for research, drafting, documentation, planning, and coordination.", description: "The near-term effect is less about entire professions disappearing and more about changing workflows, expectations, team structures, and the skills that create value. This guide separates what is already happening from the changes that will take years to unfold.", updated: "2026-08-08", updatedLabel: "August 8, 2026", startHref: "#already-changing", startLabel: "Start with what is changing", image: { src: "/images/topics/ai-work-hero.webp", alt: "Across documents, tools, reviews, and decisions, work flows with less friction." } }}
      audience={["Professionals thinking about how AI will change their careers.", "Leaders responsible for adopting AI inside an organization.", "People separating durable changes from short-term hype.", "Anyone deciding which skills will become more valuable."]}
      sectionTitles={{ audience: "Who this future-of-work guide is for", evidence: "Evidence about AI and work" }}
      
      sections={sections.map((section) => ({ ...section, navTitle: section.title.replace("AI Is ", "").replace("How ", "") }))}
      getFaqItems={(section) => faqGroups.find((group) => group.title === section.title)?.items}
      sources={sources}
      
      next={{ title: "See where workflows become agents", description: "Explore how AI moves from assisting with individual tasks to pursuing goals across tools, information, and multi-step workflows.", href: "/ai-agents", linkLabel: "Explore AI Agents", topicKey: "agents" }}
    />
  );
}
