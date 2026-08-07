import { siteConfig } from "../../content/siteConfig";
import TopicPage from "../../components/topic/TopicPage";
import { evidenceNotes, mergeSources, sourcesFor } from "../../content/evidence";

export const metadata = {
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
};

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
    videos: [
      {
        title: "AI is changing work faster than most people can process",
        published: "Dec 1, 2025",
        url: "https://www.youtube.com/watch?v=amz7jADqzG0",
        videoId: "amz7jADqzG0",
        description: "AI is already reshaping how work gets done across every industry, not just tech. This video introduces the series and explains why the shift is real, immediate, and already affecting every role, from developers to designers to executives.",
      },
      {
        title: "AI isn’t wiping out white-collar work—it’s compressing it",
        published: "Dec 5, 2025",
        url: "https://www.youtube.com/watch?v=oGVVetmu6Hs",
        videoId: "oGVVetmu6Hs",
        description: "AI isn’t eliminating professions, but it is removing slow, repetitive parts of knowledge work. The result is smaller teams, higher expectations, and more output per person.",
      },
      {
        title: "The Real Impact of AI on Work Hours",
        published: "Dec 8, 2025",
        url: "https://www.youtube.com/watch?v=ziT5BhZjdho",
        videoId: "ziT5BhZjdho",
        description: "The most immediate effect of AI is reducing wasted time, not replacing people. By removing friction like rework, coordination overhead, and unclear communication, AI quietly reshapes how long work takes.",
      },
      {
        title: "AI Is a Long Transition, Not a Sudden Revolution",
        published: "Jan 13, 2026",
        url: "https://www.youtube.com/watch?v=Psb530VL-8M",
        videoId: "Psb530VL-8M",
        description: "AI is not an overnight disruption, it is a decade long shift. Roles are widening, teams are compressing, and expectations are rising faster than organizations can adapt, creating both leverage and pressure for individuals.",
      },
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
    videos: [
      {
        title: "Why Your Company Isn’t Ready, But You Can Be",
        published: "Dec 11, 2025",
        url: "https://www.youtube.com/watch?v=aEEymdEyu54",
        videoId: "aEEymdEyu54",
        description: "Organizations adapt slowly by necessity, but individuals don’t have to wait. This video explains how personal AI habits can create an advantage long before formal company adoption.",
      },
      {
        title: "Organizational Readiness for AI Adoption",
        published: "2026-01-05T05:30:50-08:00",
        url: "https://www.youtube.com/watch?v=lv3IXxv0pW4",
        videoId: "lv3IXxv0pW4",
        description: "AI adoption follows a maturity curve from individual experimentation to enterprise integration. This video explains the stages and why most companies are still early.",
      },
      {
        title: "How AI Adoption Moves Predictably Through Organizations",
        published: "2026-01-15T05:30:43-08:00",
        url: "https://www.youtube.com/watch?v=gtDTQFUuD3Y",
        videoId: "gtDTQFUuD3Y",
        description: "AI adoption inside companies follows a predictable path, starting with measurable service and technical teams before moving into creative and operational functions. Progress depends on system readiness, data quality, regulation, and team trust in automation.",
      },
      {
        title: "Why Enterprise AI Is a Multi-Year Organizational Rebuild",
        published: "Jan 8, 2026",
        url: "https://www.youtube.com/watch?v=bdDLt4QIWpI",
        videoId: "bdDLt4QIWpI",
        description: "Integrating AI across a company is a long, complex rebuild of processes, data, governance, and habits. Treating AI as infrastructure rather than a plug in is essential to achieving durable, scalable capability.",
      },
      {
        title: "AI Governance as the Key to Scalable Deployment",
        published: "Mar 30, 2026",
        url: "https://www.youtube.com/watch?v=sawl12bAM2I",
        videoId: "sawl12bAM2I",
        description: "AI capability alone is not enough. Organizations that manage governance, risk, and compliance effectively can deploy faster and scale safely, because auditability and monitoring are what enable reliable and secure AI operations.",
      },
    ],
  },
  {
    id: "more-valuable",
    title: "What Becomes More Valuable",
    answer:
      "As AI makes execution cheaper, value shifts toward choosing the right problems, coordinating people and systems, designing better processes, and applying judgment.",
    body:
      "The scarce resource is no longer always the ability to produce a first draft. It is increasingly the ability to decide what should happen, create the conditions for it, and learn from the result.",
    closing: "AI lowers the cost of execution. Humans decide what should happen next.",
    videos: [
      {
        title: "Stop Looking for Use Cases. Start Looking for Bottlenecks",
        published: "Dec 19, 2025",
        url: "https://www.youtube.com/watch?v=NX6e532FUmI",
        videoId: "NX6e532FUmI",
        description: "AI delivers the most value when applied to friction points. This video reframes AI adoption around identifying bottlenecks instead of chasing abstract use cases.",
      },
      {
        title: "AI Productivity Gains Depend on Coordination Systems",
        published: "Mar 25, 2026",
        url: "https://www.youtube.com/watch?v=cBHNzZL1ENY",
        videoId: "cBHNzZL1ENY",
        description: "AI accelerates creation but shifts the bottleneck to coordination. Without systems to prioritize, integrate, and ship increased output, productivity stalls. The winners are teams that coordinate decisions and workflows more effectively.",
      },
      {
        title: "AI Shifts Advantage From Output to Coordination",
        published: "Mar 24, 2026",
        url: "https://www.youtube.com/watch?v=a5GqbtEWEQI",
        videoId: "a5GqbtEWEQI",
        description: "AI removes execution friction and shifts the constraint to coordination. Competitive advantage comes from deciding what to build, integrating output, and maintaining fast feedback loops, not simply producing more.",
      },
      {
        title: "Process Design as the Real Competitive Advantage",
        published: "Mar 31, 2026",
        url: "https://www.youtube.com/watch?v=qXf8O98NM7M",
        videoId: "qXf8O98NM7M",
        description: "As tools democratize execution, advantage shifts from individual capability to system design. The winners are those who build better workflows, feedback loops, and decision processes that are harder to replicate than raw output.",
      },
      {
        title: "Learning Speed as the Ultimate Competitive Advantage",
        published: "Apr 1, 2026",
        url: "https://www.youtube.com/watch?v=fJ3jGePPWKw",
        videoId: "fJ3jGePPWKw",
        description: "The fastest learners gain the edge in a changing tech landscape. AI accelerates experimentation, but real learning comes from doing. Consistent practice and iteration enable you to outpace change and build lasting advantage.",
      },
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
    videos: [
      {
        title: "What Breaks When Execution Becomes Cheap: Attention",
        published: "Mar 16, 2026",
        url: "https://www.youtube.com/watch?v=rElJluhXAdY",
        videoId: "rElJluhXAdY",
        description: "What Breaks When Execution Becomes Cheap: AI removes the barrier that once limited how many ideas teams produced. As output explodes, attention becomes scarce. Winning organizations will not generate the most content. They will excel at deciding what actually deserves focus.",
      },
      {
        title: "Trust",
        published: "Mar 17, 2026",
        url: "https://www.youtube.com/watch?v=XNTUUK7DAbk",
        videoId: "XNTUUK7DAbk",
        description: "What Breaks When Execution Becomes Cheap: AI makes it easy to produce convincing reports, images, voices, and video at scale. As believable content becomes cheap to create and test, people rely less on the content itself and more on the credibility and reliability of the source.",
      },
      {
        title: "Idea Diversity",
        published: "Mar 18, 2026",
        url: "https://www.youtube.com/watch?v=uYAMyUITGAM",
        videoId: "uYAMyUITGAM",
        description: "What Breaks When Execution Becomes Cheap: AI can improve individual output but also pull groups toward the same patterns. As many people rely on similar model-generated answers, average idea quality rises while diversity shrinks, making differentiation a competitive advantage.",
      },
      {
        title: "Credibility",
        published: "Mar 19, 2026",
        url: "https://www.youtube.com/watch?v=4__M9GY09oU",
        videoId: "4__M9GY09oU",
        description: "What Breaks When Execution Becomes Cheap: As convincing reports, images, and voices become easy to produce, people stop judging information by how real it looks. Instead they rely on reputation, verification, and source credibility to decide what to trust.",
      },
      {
        title: "Institutional Lag",
        published: "Mar 20, 2026",
        url: "https://www.youtube.com/watch?v=EhxxwCP8haI",
        videoId: "EhxxwCP8haI",
        description: "What Breaks When Execution Becomes Cheap: AI is advancing quickly, but the institutions that govern technology move far more slowly. Like other general purpose technologies, the biggest shifts come as companies, laws, and norms reorganize around new capabilities.",
      },
      {
        title: "Systems",
        published: "Mar 23, 2026",
        url: "https://www.youtube.com/watch?v=Rsfjz83U7Kg",
        videoId: "Rsfjz83U7Kg",
        description: "What Breaks When Execution Becomes Cheap: As production costs collapse, organizations face noise, misinformation, idea convergence, trust challenges, and institutional lag. Advantage shifts from producing to filtering, deciding, coordinating, and building trust.",
      },
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
    videos: [
      {
        title: "AI Adoption Is the Real ‘Then What’ Moment",
        published: "Jun 1, 2026",
        url: "https://www.youtube.com/watch?v=sSxyXLOphAk",
        videoId: "sSxyXLOphAk",
        description: "The debate over AGI may be missing the bigger story. Organizations are already redesigning business processes around AI, and the scale of operational change underway suggests the transformative impact is happening now, not after a future milestone.",
      },
      {
        title: "Organizational Knowledge May Matter More Than Smarter AI",
        published: "Jul 20, 2026",
        url: "https://www.youtube.com/watch?v=WVDkrG-JMxs",
        videoId: "WVDkrG-JMxs",
        description: "AI models have advanced rapidly, but the greater opportunity may come from connecting them to decades of organizational knowledge. Making documented decisions, lessons, and processes searchable could have a bigger impact than further increases in model intelligence.",
      },
      {
        title: "AI Amplifies Human Capability Rather Than Replacing It",
        published: "Jul 23, 2026",
        url: "https://www.youtube.com/watch?v=HFTIIRRrJDk",
        videoId: "HFTIIRRrJDk",
        description: "Daily experience with AI suggests its greatest impact is amplifying human capability, enabling people to become more productive, expand their skills, and solve larger problems rather than replacing their roles.",
      },
      {
        title: "Human Judgment Remains the Hardest Skill to Automate",
        published: "Jul 24, 2026",
        url: "https://www.youtube.com/watch?v=blGD1EwDluU",
        videoId: "blGD1EwDluU",
        description: "AI excels at generating and synthesizing information, but experience highlights that professional expertise is rooted in judgment, nuance, and recognizing subtle issues before they become problems, making those capabilities far harder to automate.",
      },
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
  datePublished: "2026-07-24",
  dateModified: "2026-07-25",
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
      hero={{ eyebrow: "AI and Work", title: "How AI Is Changing Work", lead: "AI is changing work primarily by reducing the time required for research, drafting, documentation, planning, and coordination.", description: "The near-term effect is less about entire professions disappearing and more about changing workflows, expectations, team structures, and the skills that create value. This guide separates what is already happening from the changes that will take years to unfold.", updated: "2026-07-25", updatedLabel: "July 25, 2026", startHref: "#already-changing", startLabel: "Start with what is changing", image: { src: "/images/topics/ai-work-hero.webp", alt: "Across documents, tools, reviews, and decisions, work flows with less friction." } }}
      audience={["Professionals thinking about how AI will change their careers.", "Leaders responsible for adopting AI inside an organization.", "People separating durable changes from short-term hype.", "Anyone deciding which skills will become more valuable."]}
      sectionTitles={{ audience: "Who this future-of-work guide is for", evidence: "Evidence about AI and work" }}
      
      sections={sections.map((section) => ({ ...section, navTitle: section.title.replace("AI Is ", "").replace("How ", "") }))}
      getFaqItems={(section) => faqGroups.find((group) => group.title === section.title)?.items}
      sources={sources}
      
      next={{ title: "See where workflows become agents", description: "Explore how AI moves from assisting with individual tasks to pursuing goals across tools, information, and multi-step workflows.", href: "/ai-agents", linkLabel: "Explore AI Agents", topicKey: "agents" }}
    />
  );
}
