import { siteConfig } from "../../content/siteConfig";
import TopicPage from "../../components/topic/TopicPage";
import { evidenceNotes, mergeSources, sourcesFor } from "../../content/evidence";
import { withPageSocial } from "../../content/metadata";
import { contentDates } from "../../content/dates";

export const metadata = withPageSocial({
  title: "AI, Thinking, and Human Judgment",
  description:
    "Explore how AI changes human thinking, judgment, learning, trust, and the skills that remain distinctly valuable.",
  alternates: { canonical: "/ai-and-thinking" },
  openGraph: {
    title: "AI, Thinking, and Human Judgment",
    description:
      "Explore how AI changes human thinking, judgment, learning, trust, and the skills that remain distinctly valuable.",
    url: "/ai-and-thinking",
    type: "article",
  },
});

const sections = [
  {
    id: "ai-doesnt-think",
    title: "AI Doesn’t Think",
    answer:
      "Modern AI can produce remarkably intelligent-sounding responses, but generating coherent language is not the same as understanding, reasoning, or experiencing the world.",
    body:
      "AI predicts language from patterns learned across enormous amounts of text. It does not form intentions, build beliefs, or understand consequences as people do. That distinction explains both its surprising capabilities and its obvious mistakes.",
    evidence: [evidenceNotes.thinkingConfidence],
    related: [
      { href: "/ai-fundamentals", label: "Prediction and hallucinations" },
      { href: "/ai-search-and-geo", label: "Trust in AI-mediated information" },
    ],
    closing:
      "Language generation and human cognition can look similar while remaining fundamentally different processes.",
    videoIds: [
      "representation-how-humans-build-models-of-reality",
      "coherence-vs-cognition",
      "thinking-begins-where-consequences-exist",
    ],
    faqs: [
      {
        question: "Does AI actually think?",
        answer:
          "Not in the human sense. People develop mental models through experience, understand cause and effect, anticipate consequences, and form intentions. AI doesn’t possess those capabilities. It generates responses by identifying statistical patterns in language rather than reasoning from lived experience or conscious understanding.\n\nThat distinction doesn’t make AI unintelligent—it makes it a different kind of intelligence. It excels at recognizing patterns, organizing information, and producing coherent language, but those strengths shouldn’t be confused with awareness or understanding. Knowing the difference helps you use AI more effectively and avoid expecting capabilities it doesn’t have.",
      },
      {
        question: "Why does AI sound so intelligent?",
        answer:
          "Humans naturally associate articulate language with intelligence. When AI explains difficult concepts clearly or produces thoughtful-sounding responses, it’s easy to assume it understands those ideas in the same way a person would.\n\nIn reality, AI is exceptionally good at producing coherent language because that’s precisely what it was trained to do. It has learned relationships between words, ideas, and concepts from enormous amounts of text. That allows it to communicate remarkably well, but communication alone doesn’t prove genuine reasoning or understanding.",
      },
      {
        question: "What’s the difference between prediction and reasoning?",
        answer:
          "Prediction answers the question, “What is most likely to come next?” Reasoning answers the question, “Given these facts and consequences, what conclusion follows?”\n\nLanguage models primarily operate through prediction. They often produce responses that resemble reasoning because the patterns they learned frequently reflect human reasoning. But the underlying process remains different. Humans build conclusions from models of reality; language models generate language from statistical relationships.",
      },
      {
        question: "Can AI understand meaning?",
        answer:
          "AI can often use language appropriately without possessing the kind of understanding people associate with meaning. It recognizes patterns connecting words, concepts, and contexts, allowing it to communicate effectively across an enormous range of topics.\n\nHowever, it doesn’t experience the world those words describe. It doesn’t know what it feels like to be cold, uncertain, excited, or disappointed. That difference explains why AI can discuss almost anything while still lacking genuine lived understanding.",
      },
      {
        question: "Why is AI sometimes confidently wrong?",
        answer:
          "Confidence in AI comes from fluent language, not from certainty. The model generates responses using the same process regardless of whether every detail is correct.\n\nMost of the time, that produces useful information because the underlying patterns are accurate. Occasionally those patterns produce incorrect or incomplete answers. Since the model doesn’t naturally communicate uncertainty the way humans often do, incorrect answers can sound surprisingly convincing. That’s why important decisions still require human review.",
      },
    ],
  },
  {
    id: "judgment",
    title: "Judgment",
    answer:
      "As AI makes execution easier, judgment becomes more valuable. People still have to decide what should be built, what matters most, and which tradeoffs are acceptable.",
    body:
      "Judgment develops through experience, feedback, context, and an understanding of consequences. AI can surface information and options, but people remain accountable for choosing a path.",
    related: [
      { href: "/ai-agents", label: "How AI agents pursue goals" },
      {
        href: "/judgment-over-generation",
        label: "Judgment over generation",
      },
    ],
    closing:
      "AI changes the economics of execution without changing the importance of human decision-making.",
    videoIds: [
      "the-one-skill-ai-cannot-replace-good-judgment",
      "ai-accelerates-execution-but-not-human-judgment",
      "why-judgment-must-be-trained",
      "why-ai-confidence-should-not-replace-human-judgment",
    ],
    articles: [
      {
        href: "/articles/news-investigator",
        category: "AI judgment",
        title: "News Investigator Agent",
        description:
          "Compare current reporting, evaluate evidence, identify uncertainty, and strengthen your judgment without outsourcing what to think.",
        published: "2026-07-26",
      },
    ],
    faqs: [
      {
        question: "What is judgment?",
        answer:
          "Judgment is the ability to make good decisions in situations where there isn’t a single correct answer. It involves weighing competing priorities, understanding consequences, recognizing uncertainty, and choosing an appropriate course of action.\n\nUnlike factual knowledge, judgment develops through experience. It comes from seeing how decisions play out over time, learning from mistakes, and refining the mental models used to evaluate new situations. AI can contribute information, but judgment determines how that information should be applied.",
      },
      {
        question: "Why can’t AI replace judgment?",
        answer:
          "AI can generate options, summarize evidence, and identify patterns, but it doesn’t bear responsibility for outcomes. Judgment requires understanding objectives, values, tradeoffs, and consequences that extend beyond the information immediately available.\n\nOrganizations don’t succeed simply because they have more ideas—they succeed because they consistently make better decisions. AI improves execution, but deciding what deserves execution remains a human responsibility.",
      },
      {
        question: "Can you train your judgment?",
        answer:
          "Yes. Judgment develops through repeated cycles of action, feedback, and reflection. You strengthen it by comparing competing explanations, testing assumptions, distinguishing strong evidence from weak evidence, and examining how decisions work out over time.\n\nAI can support that practice by surfacing alternatives and helping you interrogate the information behind a conclusion. It cannot replace the experience of making consequential choices, observing the results, and updating the mental models you use to decide.",
      },
      {
        question: "Why is experience still valuable?",
        answer:
          "Experience provides context that is difficult to capture in documentation alone. Experienced professionals recognize incomplete requirements, anticipate downstream consequences, identify subtle risks, and ask better questions because they’ve encountered similar situations before.\n\nAI amplifies that expertise by making experienced professionals more productive, but it doesn’t eliminate the value of the expertise itself. In many cases, AI increases the advantage held by people who already possess strong judgment.",
      },
      {
        question: "How should I use AI to make better decisions?",
        answer:
          "Start by clarifying the decision, objectives, constraints, and consequences. Ask AI to compare the options and supporting evidence, expose the assumptions behind each path, identify missing information, and explain what would materially change the analysis.\n\nUse that work to improve your understanding rather than outsource the choice. The final decision should still reflect human priorities, accountability, and judgment, especially when the consequences extend beyond the information included in the prompt.",
      },
    ],
  },
  {
    id: "human-cognition",
    title: "Human Cognition",
    answer:
      "AI can expand learning and exploration, but outsourcing too much thinking can weaken the mental models people need to evaluate information independently.",
    body:
      "Every major information technology changes how people think. AI is distinctive because it can help form ideas and organize reasoning before we have fully developed our own conclusions. The goal is to use it in ways that strengthen rather than replace cognition.",
    evidence: [
      evidenceNotes.thinkingOffloading,
      evidenceNotes.thinkingAutomation,
      evidenceNotes.thinkingCreativity,
    ],
    related: [
      { href: "/software-development-and-ai", label: "Judgment in software development" },
      { href: "/ai-and-work", label: "Skills that become more valuable" },
    ],
    closing:
      "Use AI to widen exploration while continuing to build the mental models that make independent thought possible.",
    videoIds: [
      "ai-expands-exploration-humans-decide-what-matters",
      "cognitive-offloading-and-the-risk-to-mental-models",
      "the-risk-of-ai-is-the-erosion-of-human-thinking-skills",
    ],
    faqs: [
      {
        question: "Does AI make people worse at thinking?",
        answer:
          "It can, but it doesn’t have to. Like every powerful tool, AI changes how people allocate mental effort. If someone relies on AI for every explanation, every plan, and every conclusion without engaging critically, their own reasoning skills may weaken over time.\n\nUsed thoughtfully, however, AI can strengthen thinking by exposing people to alternative perspectives, helping them explore ideas more broadly, and challenging assumptions. The outcome depends less on the technology than on how people choose to use it.",
      },
      {
        question: "What is cognitive offloading?",
        answer:
          "Cognitive offloading is the practice of relying on external tools to reduce mental effort. Writing things down, using calculators, and searching the internet are all examples.\n\nAI extends cognitive offloading beyond remembering facts. It can draft documents, organize reasoning, generate ideas, and solve problems. While this creates enormous productivity gains, it also raises important questions about maintaining the thinking skills that allow people to evaluate AI’s output independently.",
      },
      {
        question: "Can AI improve learning?",
        answer:
          "Yes—when it’s used as an educational partner rather than an answer machine. AI can explain concepts from multiple perspectives, generate examples, answer follow-up questions, and adapt explanations to different levels of expertise.\n\nThe greatest learning occurs when people actively engage with those explanations, ask questions, test their understanding, and continue thinking independently. AI supports learning best when it encourages deeper exploration instead of replacing it.",
      },
      {
        question: "How should I balance AI with independent thinking?",
        answer:
          "Use AI to expand possibilities, not eliminate thinking. Let it help brainstorm ideas, explain unfamiliar topics, compare alternatives, or identify weaknesses in your reasoning.\n\nAt the same time, continue developing your own mental models by making decisions, solving problems, and evaluating evidence independently. AI should increase your capacity to think—not reduce your need to think.",
      },
      {
        question: "What happens if we rely on AI too much?",
        answer:
          "Overreliance risks weakening the skills that allow people to recognize mistakes, evaluate evidence, and build independent understanding. If AI consistently performs all the difficult thinking, opportunities to develop judgment gradually disappear.\n\nThe goal isn’t avoiding AI. It’s ensuring that convenience doesn’t replace learning. Strong thinkers use AI to expand their abilities rather than outsource them entirely.",
      },
    ],
  },
  {
    id: "trust-credibility-truth",
    title: "Trust, Credibility & Truth",
    answer:
      "As polished information becomes inexpensive to produce, scarcity shifts from content to trust. Quality can no longer be judged by presentation alone.",
    body:
      "Credibility, reputation, transparency, and evidence become stronger signals in an environment filled with convincing reports, articles, images, and videos. Trustworthy institutions and people become easier to value, not less.",
    closing:
      "When convincing information is abundant, credibility becomes a competitive advantage.",
    videoIds: [
      "what-breaks-when-execution-becomes-cheap-trust",
      "what-breaks-when-execution-becomes-cheap-credibility",
      "what-breaks-when-execution-becomes-cheap-idea-diversity",
    ],
    faqs: [
      {
        question: "Why is trust becoming more important?",
        answer:
          "As AI makes it inexpensive to create convincing reports, presentations, articles, and videos, appearance becomes a less reliable indicator of quality. Professional-looking content no longer guarantees expertise or accuracy.\n\nPeople increasingly evaluate information by considering its source, reputation, supporting evidence, and history of reliability. In an AI-rich world, trust becomes one of the strongest competitive advantages an individual or organization can build.",
      },
      {
        question: "How does AI affect credibility?",
        answer:
          "AI lowers the cost of producing polished communication, making credibility more valuable rather than less. When almost anyone can generate professional-looking content, people look for signals that indicate whether the information itself deserves confidence.\n\nCredibility increasingly comes from consistency, transparency, demonstrated expertise, and a history of accuracy rather than simply producing well-written material.",
      },
      {
        question: "Will AI reduce originality?",
        answer:
          "AI tends to generate responses that resemble the patterns it has learned. That often raises average quality while also encouraging convergence toward familiar ideas.\n\nOriginal thinking increasingly comes from people who contribute unique experiences, perspectives, and judgment. AI can accelerate creative work, but originality still depends on individuals bringing something genuinely new into the conversation.",
      },
      {
        question: "How do people evaluate information in an AI-rich world?",
        answer:
          "People increasingly compare multiple sources, examine evidence, consider incentives, and evaluate whether claims can be independently verified. Rather than trusting information because it appears polished, they ask whether it deserves trust.\n\nAI makes producing information easier. It doesn’t eliminate the need for critical evaluation. If anything, it increases it.",
      },
      {
        question: "What makes information trustworthy?",
        answer:
          "Trustworthy information is transparent about evidence, acknowledges uncertainty where appropriate, remains internally consistent, and comes from sources with demonstrated credibility over time.\n\nAI can help organize and communicate trustworthy information, but it cannot create trust on its own. Trust is ultimately earned through accuracy, honesty, and consistent performance over time.",
      },
    ],
  },
];

function faqFromThinking(sectionId, question) {
  return sections
    .find((section) => section.id === sectionId)
    ?.faqs.find((item) => item.question === question);
}

const thinkingFaqs = {
  "ai-doesnt-think": [
    faqFromThinking(
      "ai-doesnt-think",
      "What’s the difference between prediction and reasoning?",
    ),
  ],
  judgment: [
    faqFromThinking("judgment", "Can you train your judgment?"),
    faqFromThinking("judgment", "Why is experience still valuable?"),
    faqFromThinking("judgment", "How should I use AI to make better decisions?"),
  ],
  "human-cognition": [
    {
      question: "When can AI weaken independent thinking?",
      answer:
        "AI can weaken independent thinking when it repeatedly replaces the effort required to form an initial view, solve a problem, evaluate evidence, or notice uncertainty. The risk depends on the task, the person’s existing knowledge, and whether they remain actively engaged with the work.\n\nA stronger pattern is to think first, use AI to expand or challenge that thinking, and then evaluate the result independently. The objective is not to avoid cognitive offloading, but to preserve the mental models needed to recognize mistakes and make decisions when the tool is unavailable or wrong.",
    },
    faqFromThinking("human-cognition", "What is cognitive offloading?"),
    faqFromThinking("human-cognition", "Can AI improve learning?"),
    faqFromThinking(
      "human-cognition",
      "How should I balance AI with independent thinking?",
    ),
  ],
  "trust-credibility-truth": [
    {
      question:
        "Why do trust and credibility become more valuable as generated content increases?",
      answer:
        "AI lowers the cost of producing polished reports, articles, images, and presentations. As appearance becomes easier to reproduce, it provides less evidence that the underlying work is accurate or informed.\n\nPeople therefore rely more heavily on source identity, demonstrated expertise, transparency, supporting evidence, and a history of reliable behavior. AI can improve communication, but credibility still has to be earned through consistent performance.",
    },
    faqFromThinking("trust-credibility-truth", "Will AI reduce originality?"),
    {
      question:
        "How should people evaluate information in an AI-rich environment?",
      answer:
        "Look beyond presentation and examine the source, evidence, incentives, and degree of independent confirmation. Trustworthy information makes its support traceable, distinguishes fact from inference, acknowledges important uncertainty, and remains consistent with the available record.\n\nNo single signal establishes truth. Credibility grows when a source demonstrates accuracy, transparency, and responsible correction over time.",
    },
  ],
};

const curatedSections = sections.map((section) => ({
  ...section,
  faqs: thinkingFaqs[section.id] || [],
}));

const sources = mergeSources([
  {
    title: "AI Risk Management and Human-AI Interaction",
    publisher: "NIST",
    year: "2024",
    href: "https://airc.nist.gov/airmf-resources/airmf/appendices/app-c-ai-risk-management-and-human-ai-interaction/",
    description:
      "Guidance on human roles, oversight, accountability, bias, and decision-making in human-AI systems.",
  },
  {
    title: "Responsible AI",
    publisher: "Stanford HAI",
    year: "2026",
    href: "https://hai.stanford.edu/ai-index/2026-ai-index-report/responsible-ai",
    description:
      "Evidence on model reliability, responsible-AI measurement, incidents, and persistent evaluation gaps.",
  },
  {
    title: "Towards Reasoning in Large Language Models",
    publisher: "Huang and Chang",
    year: "2022",
    href: "https://arxiv.org/abs/2212.10403",
    description:
      "A research survey of what reasoning means for language models, how it is evaluated, and what remains uncertain.",
  },
], sourcesFor([
  "thinkingConfidence",
  "thinkingOffloading",
  "thinkingAutomation",
  "thinkingCreativity",
]));

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI, Thinking, and Human Judgment",
  description: metadata.description,
  url: `${siteConfig.siteUrl}/ai-and-thinking`,
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
  about: ["Artificial intelligence", "Human cognition", "Judgment", "Trust"],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteConfig.siteUrl}/ai-and-thinking`,
  },
  datePublished: contentDates.topics.published,
  dateModified: contentDates.topics.modified,
  image: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
  citation: sources.map((source) => source.href),
};

const allFaqs = curatedSections.flatMap((section) => section.faqs);

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function AiAndThinkingPage() {
  return (
    <TopicPage
      topicKey="thinking"
      articleSchema={structuredData}
      faqSchema={faqStructuredData}
      path="/ai-and-thinking"
      breadcrumb="AI and Thinking"
      hero={{ eyebrow: "AI and Thinking", title: "AI, Thinking, and Human Judgment", lead: "The more capable AI becomes, the more important it is to understand what it actually does—and what it doesn’t.", description: "AI can generate intelligent-sounding language, but language is not the same as reasoning, understanding, or making decisions with real-world consequences. That distinction changes where humans continue to create value.", updated: "2026-07-25", updatedLabel: "July 25, 2026", startHref: "#ai-doesnt-think", startLabel: "Start with the distinction", image: { src: "/images/topics/ai-thinking-hero.webp", alt: "Human judgment weighs context, uncertainty, and consequences while patterns emerge." } }}
      audience={["Professionals trying to understand where humans continue to create value alongside AI.", "Leaders making decisions about AI adoption and oversight.", "Anyone interested in how AI changes human thinking and decision-making.", "People exploring the difference between intelligence, reasoning, and language generation.", "Anyone thinking beyond prompts and productivity toward AI’s long-term implications."]}
      audienceEyebrow="A practical perspective"
      sectionTitles={{ audience: "Who this thinking guide is for", evidence: "Evidence about AI and cognition" }}
      sections={curatedSections}
      
      sources={sources}
      afterSections={<section className="border-t border-library-parchment py-14 md:py-20"><div className="max-w-3xl"><h2 className="text-3xl font-semibold leading-tight md:text-4xl">Good Thinking Becomes More Valuable</h2><p className="mt-5 text-lg font-medium leading-relaxed text-library-ink md:text-xl">As AI becomes more capable, the challenge shifts from asking what the technology can do to understanding where people continue to create value.</p><p className="mt-4 max-w-2xl leading-relaxed text-library-muted">AI excels at generating language, accelerating execution, and expanding exploration. Humans remain responsible for judgment, accountability, context, and deciding what matters.</p><blockquote className="mt-8 topic-accent-border border-l-2 pl-5 font-serif text-xl font-medium leading-relaxed text-library-ink md:text-2xl">AI is not a replacement for thinking. It is a tool that makes good thinking even more valuable.</blockquote></div></section>}
      next={{ title: "Return to the underlying system", description: "Build a practical mental model of language models, context, prediction, iteration, and the capabilities and limitations behind modern AI.", href: "/ai-fundamentals", linkLabel: "Explore AI Fundamentals", topicKey: "fundamentals" }}
    />
  );
}
