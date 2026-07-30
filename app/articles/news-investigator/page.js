import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "../../../components/Breadcrumbs";
import EvidenceNote from "../../../components/EvidenceNote";
import FaqList from "../../../components/FaqList";
import FurtherReading from "../../../components/FurtherReading";
import JsonLd from "../../../components/JsonLd";
import ContentContinuation from "../../../components/ContentContinuation";
import ContentMeta from "../../../components/ContentMeta";
import {
  evidenceNotes,
  sourcesFor,
} from "../../../content/evidence";
import {
  newsInvestigatorPromptSections,
} from "../../../content/newsInvestigatorPrompt";
import { siteConfig } from "../../../content/siteConfig";

const path = "/articles/news-investigator";
const newsInvestigatorAgentUrl =
  "https://chatgpt.com/g/g-6a6587b9aad88191a8a77b26f41b1c77-news-investigator";
const promptDownloadUrl = "/downloads/news-investigator-prompt.txt";
const published = "2026-07-26";
const description =
  "Use the News Investigator Agent to compare reporting, evaluate evidence, identify uncertainty, and strengthen your judgment without outsourcing it.";

export const metadata = {
  title: "News Investigator Agent: Use AI to Strengthen Your Judgment",
  description,
  alternates: { canonical: path },
  openGraph: {
    title: "News Investigator Agent: Use AI to Strengthen Your Judgment",
    description,
    url: path,
    type: "article",
    publishedTime: published,
    authors: [`${siteConfig.siteUrl}/about`],
  },
};

const sectionById = Object.fromEntries(
  newsInvestigatorPromptSections.map((section) => [section.id, section]),
);

const reportSections = [
  {
    id: "timeline",
    number: "01",
    title: "Start with what can be established",
    description:
      "The report begins with a timeline and the strongest available support for each major fact. Confidence labels make uncertainty visible, while source tracing helps distinguish independent confirmation from several articles repeating the same account.",
  },
  {
    id: "claims",
    number: "02",
    title: "Examine claims instead of choosing sides",
    description:
      "For each important claim, the agent identifies who is making it, what supports it, what limits it, and what kind of disagreement is taking place. The aim is to show the reader how strong the case is and what could change that assessment.",
  },
  {
    id: "evidence-assessment",
    number: "03",
    title: "Compare the quality of the evidence",
    description:
      "A claim repeated across many headlines may still trace back to one statement. This section calls attention to the strongest and weakest evidence, shared sourcing, and conclusions that rely mainly on inference.",
  },
  {
    id: "open-questions",
    number: "04",
    title: "Treat uncertainty as useful information",
    description:
      "Not every open question is open for the same reason. The agent distinguishes evidence that has not been collected from evidence that may exist privately—and from questions the available record may never resolve.",
  },
  {
    id: "narrative-framing",
    number: "05",
    title: "Separate framing from facts",
    description:
      "Different outlets can describe the same evidence while emphasizing different details. Comparing language, omissions, headlines, and source selection helps reveal whether a disagreement concerns the facts or the interpretation placed around them.",
  },
  {
    id: "evidence-establishes",
    number: "06",
    title: "Draw a boundary around the conclusion",
    description:
      "The report states what appears well established and what remains genuinely uncertain. It also separates factual disputes from interpretive or philosophical disagreements where people may reasonably weigh the same evidence differently.",
  },
  {
    id: "neutral-summary",
    number: "07",
    title: "End with the most reliable account",
    description:
      "The final summary compresses the investigation into the most dependable information available. It avoids resolving questions the evidence cannot answer and leaves the judgment with the reader.",
  },
];

const faqs = [
  {
    question: "How can AI help improve my judgment?",
    answer:
      "AI can help you work with more complete, better-organized information. For a developing story, it can compare reporting, trace repeated claims to their underlying sources, identify contradictions, and show where the evidence is strong or incomplete.\n\nThat can improve the information behind your judgment, but it does not make the judgment for you. You still decide which evidence matters, how much confidence it deserves, and what conclusion or action is appropriate.",
  },
  {
    question:
      "How should I use AI to investigate a complicated or developing story?",
    answer:
      "Start with a specific event, claim, or question. Ask AI to establish a timeline, identify the major claims, locate the strongest available sources, distinguish independent confirmation from repeated reporting, and explain what remains uncertain.\n\nTreat the first report as the beginning of the investigation. Follow important citations, question weakly supported claims, and ask what new evidence would materially change the current account.",
  },
  {
    question: "Should I trust AI to tell me what is true?",
    answer:
      "No AI response should be trusted automatically. A model can produce a clear, confident account that relies on outdated information, weak sources, or unsupported assumptions.\n\nUse AI to help find and compare evidence, then evaluate the underlying sources. Confidence should come from traceable support, independent confirmation, and an honest treatment of uncertainty—not from the fluency of the answer.",
  },
  {
    question: "Why separate facts, claims, inference, and speculation?",
    answer:
      "These categories deserve different levels of confidence. A documented event is different from a source's claim about why it happened. A conclusion drawn from several facts is different from speculation about a person's motives or what may happen next.\n\nSeparating the categories makes the strength of each statement visible. It also prevents a plausible explanation from quietly becoming an established fact as it is summarized or repeated.",
  },
  {
    question: "Why is uncertainty useful?",
    answer:
      "Uncertainty tells you where the available record stops. It can reveal that evidence has not yet been collected, may exist but is not public, depends on a disputed source, or may never support a definitive answer.\n\nA useful investigation names those limits instead of filling the gaps with a confident narrative. Knowing what remains unresolved helps you calibrate your confidence and decide what deserves further investigation.",
  },
  {
    question:
      "How can AI help me challenge confirmation bias without creating false balance?",
    answer:
      "Ask AI to test your assumptions, find credible evidence that challenges your current view, and present the strongest competing explanation. Then require every position to be assessed by the same standards of source quality, independence, and direct support.\n\nConsidering alternatives does not mean treating every claim as equally credible. The goal is to avoid overlooking relevant evidence while still allowing the better-supported conclusion to carry more weight.",
  },
  {
    question: "How do I know whether an AI investigation is well supported?",
    answer:
      "Look for traceable sources, direct links to primary evidence where available, and a clear account of whether multiple reports are genuinely independent. The investigation should distinguish established facts from claims and inference, disclose important uncertainty, and identify claims for which no direct source was found.\n\nIt should also explain what evidence would strengthen, weaken, or change its conclusions. A confident tone, a long source list, or widespread repetition does not by itself make an answer reliable.",
  },
  {
    question:
      "What is the difference between the News Investigator Agent and its prompt?",
    answer:
      "The prompt defines the investigative method: which sources to seek, how to classify evidence, what mistakes to avoid, and how to structure the report. The News Investigator Agent applies that method as a reusable tool and can continue the investigation through follow-up questions.\n\nThe prompt is available to make the process visible and adaptable. The agent provides a convenient way to use that process without rebuilding the instructions for every story.",
  },
];

function PromptBlock({ section, label }) {
  return (
    <figure className="prompt-block">
      <figcaption>{label}</figcaption>
      <pre aria-label={`${label}, verbatim prompt excerpt`}>
        <code>{section.text}</code>
      </pre>
    </figure>
  );
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "News Investigator Agent: Use AI to Strengthen Your Judgment",
  description,
  datePublished: published,
  dateModified: published,
  mainEntityOfPage: `${siteConfig.siteUrl}${path}`,
  image: `${siteConfig.siteUrl}/images/news-investigator.png`,
  author: {
    "@type": "Person",
    name: siteConfig.name,
    url: `${siteConfig.siteUrl}/about`,
  },
  publisher: {
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function NewsInvestigatorPage() {
  return (
    <article className="article-page">
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs current="News Investigator Agent" path={path} />

      <header className="article-hero border-b border-library-parchment pb-14 pt-2 md:pb-20 md:pt-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,.65fr)] lg:items-center lg:gap-14">
          <div className="reading-surface">
          <p className="eyebrow text-library-walnut">Article / AI judgment</p>
          <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-[0.98] sm:text-5xl md:text-7xl">
            News Investigator Agent: Use AI to Strengthen Your Judgment
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-library-ink md:text-2xl">
            Better judgment starts with a more accurate understanding of what
            the available evidence actually supports.
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-library-muted">
            The News Investigator Agent compares current reporting, traces
            claims to their underlying sources, separates evidence from
            inference, and makes uncertainty explicit. It is designed to help
            you think with better information—not to tell you what to think.
          </p>
          <ContentMeta
            published={published}
            publishedLabel="July 26, 2026"
            className="mt-6"
          />
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={newsInvestigatorAgentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary no-underline"
            >
              Try the News Investigator Agent <span aria-hidden="true">↗</span>
            </a>
            <a
              href={promptDownloadUrl}
              download
              className="btn btn-secondary no-underline"
            >
              Download the full prompt
            </a>
          </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div
              aria-hidden="true"
              className="absolute -inset-3 border border-library-ink/15 bg-library-paper/45"
            />
            <div className="relative overflow-hidden border-2 border-library-ink bg-library-paper p-3 shadow-[10px_10px_0_rgba(63,124,255,0.18)]">
              <Image
                src="/images/news-investigator.png"
                alt="News Investigator Agent illustration showing multiple news sources evaluated as confirmed, uncertain, or supported by insufficient evidence."
                width={1536}
                height={1536}
                priority
                sizes="(min-width: 1024px) 32vw, (min-width: 640px) 24rem, 90vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </header>

      <section
        id="better-information"
        aria-labelledby="better-information-title"
        className="article-section border-b border-library-parchment py-14 md:py-20"
      >
        <div className="grid gap-8 md:grid-cols-[15rem_minmax(0,48rem)] md:gap-12">
          <div>
            <p className="eyebrow text-library-walnut">Why it exists</p>
            <h2 id="better-information-title" className="mt-3 text-3xl font-semibold">
              What is the News Investigator Agent?
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-library-muted">
            <p>
              The News Investigator Agent is an AI research agent that compares
              current reporting, evaluates the evidence behind major claims,
              identifies meaningful uncertainty, and helps you understand what
              the available information actually supports.
            </p>
            <p>
              It is designed to strengthen judgment, not replace it. Judgment is
              the ability to make good decisions from an accurate mental model
              of how the world works. That model is only as useful as the
              information used to build it. When the information is incomplete,
              misleading, or confidently repeated without support, the decisions
              built on top of it become less reliable.
            </p>
            <p>
              Current events make this problem visible. One report may focus on
              an event, another on its likely cause, and another on what it means.
              Those are not the same kind of claim, and they may not have the
              same quality of evidence behind them.
            </p>
            <p className="font-serif text-2xl font-medium leading-relaxed text-library-ink">
              The goal is not to outsource judgment to AI. It is to use AI to
              organize information that would be difficult to compare quickly on
              your own.
            </p>
          </div>
        </div>
      </section>

      <section
        id="investigative-posture"
        aria-labelledby="investigative-posture-title"
        className="article-section border-b border-library-parchment py-14 md:py-20"
      >
        <div className="reading-surface max-w-3xl">
          <p className="eyebrow text-library-walnut">The prompt, explained</p>
          <h2 id="investigative-posture-title" className="mt-3 text-3xl font-semibold md:text-4xl">
            Give the model a job and a posture
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-library-muted">
            The opening defines success before the model begins its work. It
            explicitly rejects a conventional article summary and keeps the
            investigation grounded in current reporting, even when follow-up
            questions become informal.
          </p>
        </div>
        <PromptBlock
          section={sectionById["investigative-posture"]}
          label="Prompt excerpt: investigative posture"
        />
      </section>

      <section
        id="evidence-rules"
        aria-labelledby="evidence-rules-title"
        className="article-section border-b border-library-parchment py-14 md:py-20"
      >
        <div className="reading-surface max-w-3xl">
          <h2 id="evidence-rules-title" className="text-3xl font-semibold md:text-4xl">
            Evaluate evidence, not repetition
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-library-muted">
            Ten articles do not provide ten independent confirmations when they
            all rely on the same statement or wire report. These instructions
            prioritize primary and independent evidence, require different kinds
            of information to be labeled, and prevent uncertainty from being
            converted into a confident explanation.
          </p>
        </div>
        <PromptBlock
          section={sectionById["investigation-principles"]}
          label="Prompt excerpt: investigation principles"
        />
      </section>

      <section
        id="source-strategy"
        aria-labelledby="source-strategy-title"
        className="article-section border-b border-library-parchment py-14 md:py-20"
      >
        <div className="reading-surface max-w-3xl">
          <h2 id="source-strategy-title" className="text-3xl font-semibold md:text-4xl">
            Build context from different kinds of sources
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-library-muted">
            The source list is intentionally varied. Local and original
            reporting may surface details that broader coverage misses. Primary
            documents can provide direct evidence. Political reporting and
            social discussion can reveal framing and emerging narratives without
            being treated as proof simply because they are popular.
          </p>
        </div>
        <PromptBlock
          section={sectionById.sources}
          label="Prompt excerpt: source strategy"
        />
      </section>

      <section
        id="report-structure"
        aria-labelledby="report-structure-title"
        className="article-section border-b border-library-parchment py-14 md:py-20"
      >
        <div className="reading-surface max-w-3xl">
          <p className="eyebrow text-library-walnut">The report</p>
          <h2 id="report-structure-title" className="mt-3 text-3xl font-semibold md:text-4xl">
            Organize the answer around evidence and competing claims
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-library-muted">
            Large language models generate responses from the context available
            to them. The seven-part output gives the model a deliberate sequence
            for organizing that context before presenting a concise account.
          </p>
          <EvidenceNote note={evidenceNotes.fundamentalsPrediction} />
        </div>
        <div className="mt-12 space-y-14 md:mt-16 md:space-y-20">
          {reportSections.map((item) => (
            <div key={item.id} className="report-step">
              <div className="reading-surface max-w-3xl">
                <p className="eyebrow text-library-walnut">
                  Report section {item.number}
                </p>
                <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-library-muted">
                  {item.description}
                </p>
              </div>
              <PromptBlock
                section={sectionById[item.id]}
                label={`Prompt excerpt: ${item.title}`}
              />
            </div>
          ))}
        </div>
      </section>

      <section
        id="boundaries"
        aria-labelledby="boundaries-title"
        className="article-section border-b border-library-parchment py-14 md:py-20"
      >
        <div className="reading-surface max-w-3xl">
          <p className="eyebrow text-library-walnut">Boundaries</p>
          <h2 id="boundaries-title" className="mt-3 text-3xl font-semibold md:text-4xl">
            Keep the reader responsible for the conclusion
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-library-muted">
            The final instructions favor accuracy over exhaustive output,
            require citations, and tell the agent to name important claims for
            which it cannot find a direct source. The follow-up question invites
            deeper investigation without pretending the first report resolved
            everything.
          </p>
        </div>
        <PromptBlock
          section={sectionById["general-principles"]}
          label="Prompt excerpt: general principles"
        />
        <PromptBlock
          section={sectionById["follow-up"]}
          label="Prompt excerpt: follow-up question"
        />
      </section>

      <section
        id="frequently-asked-questions"
        aria-labelledby="frequently-asked-questions-title"
        className="article-section border-b border-library-parchment py-14 md:py-20"
      >
        <div className="grid gap-8 md:grid-cols-[15rem_minmax(0,48rem)] md:gap-12">
          <div>
            <p className="eyebrow text-library-walnut">Practical guidance</p>
            <h2
              id="frequently-asked-questions-title"
              className="mt-3 text-3xl font-semibold"
            >
              Frequently asked questions
            </h2>
          </div>
          <FaqList items={faqs} />
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="panel -mx-5 grid gap-8 md:-mx-8 md:grid-cols-[1fr_auto] md:items-end lg:-mx-12">
          <div>
            <p className="eyebrow text-library-walnut">Try it yourself</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold md:text-4xl">
              Use the agent to investigate a story—or build from the full prompt
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-library-muted">
              Start with a current event you want to understand. The agent will
              search for current reporting and organize what the available
              evidence supports, what remains uncertain, and which questions
              deserve more investigation.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <a
              href={newsInvestigatorAgentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary no-underline"
            >
              Open the News Investigator Agent <span aria-hidden="true">↗</span>
            </a>
            <a
              href={promptDownloadUrl}
              download
              className="text-sm font-semibold"
            >
              Download the complete prompt
            </a>
          </div>
        </div>
      </section>

      <FurtherReading sources={sourcesFor(["fundamentalsPrediction"])} />
      <ContentContinuation
        title="Use AI without giving up independent thought"
        description="Explore how AI can support reasoning, learning, and judgment while keeping people responsible for what they believe and decide."
        href="/ai-and-thinking"
        linkLabel="Explore AI and Thinking"
        topicKey="thinking"
      />
    </article>
  );
}
