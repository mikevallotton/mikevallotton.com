import { siteConfig } from "../../content/siteConfig";
import TopicPage from "../../components/topic/TopicPage";
import { evidenceNotes, mergeSources, sourcesFor } from "../../content/evidence";

export const metadata = {
  title: "Understanding How AI Actually Works",
  description:
    "A practical guide to large language models, context windows, prediction, iteration, and getting more reliable results from modern AI.",
  alternates: {
    canonical: "/ai-fundamentals",
  },
  openGraph: {
    title: "Understanding How AI Actually Works",
    description:
      "A practical guide to large language models, context windows, prediction, iteration, and getting more reliable results from modern AI.",
    url: "/ai-fundamentals",
    type: "article",
  },
};

const sections = [
  {
    id: "how-language-models-work",
    title: "How Large Language Models Work",
    answer:
      "Large language models generate responses one token at a time by predicting what is most likely to come next from the context they have been given.",
    body:
      "They do not retrieve a prewritten answer from a giant database, and they do not think the way people think. The apparent intelligence comes from patterns learned across enormous amounts of data and the model’s ability to produce coherent, context-sensitive language.",
    evidence: [evidenceNotes.fundamentalsPrediction, evidenceNotes.thinkingConfidence],
    related: [
      { href: "/ai-and-thinking", label: "AI, thinking, and judgment" },
      { href: "/ai-search-and-geo", label: "Retrieval and AI search" },
    ],
    closing:
      "Replacing the idea of AI as magic with a practical mental model makes its strengths and limitations much easier to understand.",
    videos: [
      {
        title: "LLM Basics",
        published: "Feb 4, 2026",
        url: "https://www.youtube.com/watch?v=VM1YOO4aQKY&t=1s",
        videoId: "VM1YOO4aQKY",
        description:
          "Introduces the core concepts behind large language models and establishes a practical foundation for understanding how they work.",
      },
      {
        title: "AI Makes You Smarter",
        published: "Dec 2, 2025",
        url: "https://www.youtube.com/watch?v=EiZSfNpnzp0",
        videoId: "EiZSfNpnzp0",
        description: "AI doesn’t replace thinking; it expands it. This video shows how AI improves decision quality, planning, and awareness by helping you consider options and pitfalls you might otherwise miss.",
      },
      {
        title: "How AI Actually Works",
        published: "Dec 15, 2025",
        url: "https://www.youtube.com/watch?v=dUQNOhzxoss",
        videoId: "dUQNOhzxoss",
        description: "AI doesn’t think; it predicts. This video breaks down how large language models generate responses and why understanding this helps explain both their power and their failures.",
      },
      {
        title: "Why AI Sounds Smart Without Actually Thinking",
        published: "Jan 27, 2026",
        url: "https://www.youtube.com/watch?v=aQKw3M_Doog",
        videoId: "aQKw3M_Doog",
        description: "AI does not think or understand. It predicts tokens based on patterns and context. Confusing fluency with understanding leads to misplaced trust. Effective use comes from supplying the right context, not expecting knowledge.",
      },
    ],
  },
  {
    id: "context-is-everything",
    title: "Context Is Everything",
    answer:
      "AI can only respond to the context available in the current interaction, so relevant, well-structured information usually matters more than finding a perfect prompt.",
    body:
      "Building context does not simply mean adding more text. It means supplying the right constraints, examples, goals, and background; continuing a useful conversation; and refining the result through deliberate iteration.",
    image: {
      src: "/images/topics/context-system.webp",
      alt: "Five distinct streams of context converge on a working surface and produce one coherent result.",
      caption:
        "Useful context combines a goal, relevant background, constraints, examples, and feedback into a clearer working frame.",
    },
    evidence: [evidenceNotes.fundamentalsContext],
    related: [
      { href: "/ai-agents", label: "Context in agent systems" },
      { href: "/ai-and-work", label: "Applying AI at work" },
      {
        href: "/clarity-before-tools",
        label: "Clarity before tools",
      },
    ],
    closing:
      "Successful AI users spend less time searching for the perfect prompt and more time building better context.",
    videos: [
      {
        title: "You Are Building a Context Window When You Talk to AI",
        published: "Jan 28, 2026",
        url: "https://www.youtube.com/watch?v=frElPE_r-kQ",
        videoId: "frElPE_r-kQ",
        description: "Talking to AI is about managing a context window, not conversing with a mind. What the model sees defines what it can produce. Deliberate iteration and supplying real information improve accuracy and reliability.",
      },
      {
        title: "Iteration Builds Reliable Results by Expanding Context",
        published: "Jan 29, 2026",
        url: "https://www.youtube.com/watch?v=CGHU_rv4hsk",
        videoId: "CGHU_rv4hsk",
        description: "Professionals iterate with AI to expand and sharpen the context window. Each round adds corrections, examples, and missing data, improving signal and accuracy. Structured iteration treats the context like an evolving brief for reliable outcomes.",
      },
      {
        title: "Why Bigger Context Windows Eventually Break Down",
        published: "Jan 30, 2026",
        url: "https://www.youtube.com/watch?v=efzhrgYyp1o",
        videoId: "efzhrgYyp1o",
        description: "Larger context windows help but introduce noise. As more text competes for attention, relevance blurs and outputs degrade. Effective use depends on selectivity, ranking, and compression, not dumping everything into the model.",
      },
    ],
  },
  {
    id: "learning-to-work-with-ai",
    title: "Learning to Work with AI",
    answer:
      "Getting better results from AI depends less on memorizing prompts and more on developing habits of experimentation, iteration, evaluation, and purposeful collaboration.",
    body:
      "AI is not a search engine that gives one final answer. It becomes more useful when you use conversation to explore ideas, challenge assumptions, add missing context, and gradually improve a solution. Curiosity and consistent practice matter more than technical credentials.",
    closing:
      "Becoming effective with AI is less about memorizing techniques and more about developing better working habits.",
    videos: [
      {
        title: "The Simplest AI Habit That Changes Everything",
        published: "Dec 12, 2025",
        url: "https://www.youtube.com/watch?v=0o28SCCbRx8",
        videoId: "0o28SCCbRx8",
        description: "Clarifying intent before prompting dramatically improves results. This video explains why naming your goal upfront makes every AI interaction more effective.",
      },
      {
        title: "The AI Mistake That Makes People Feel Dumb",
        published: "Dec 23, 2025",
        url: "https://www.youtube.com/watch?v=aFQ-C1u_vNU",
        videoId: "aFQ-C1u_vNU",
        description: "Treating AI like a search engine limits its usefulness. This video explains why iteration is the key to feeling capable instead of frustrated.",
      },
      {
        title: "Why Some People Learn AI Faster",
        published: "Dec 17, 2025",
        url: "https://www.youtube.com/watch?v=Z04Wdi4Ui6U",
        videoId: "Z04Wdi4Ui6U",
        description: "People who succeed with AI aren’t smarter; they’re more comfortable iterating. This video explains why experimentation beats perfection when working with AI.",
      },
      {
        title: "What Are Your Goals? Do You Have a Plan?",
        published: "Dec 4, 2025",
        url: "https://www.youtube.com/watch?v=1bJYnh7cKTw",
        videoId: "1bJYnh7cKTw",
        description: "AI can be used as a planning partner for nearly any goal, from career growth to financial independence. This video shows how providing the right context turns vague goals into concrete, step-by-step plans.",
      },
    ],
  },
  {
    id: "using-ai-responsibly",
    title: "Using AI Responsibly",
    answer:
      "Responsible AI use means matching the tool to the information and task, protecting sensitive data, verifying important outputs, and keeping people accountable for consequential decisions.",
    body:
      "Privacy policies, security controls, data retention, and intended use differ across products and organizational environments. Caution should be proportional to the sensitivity and consequences of the work—not a reason to avoid useful technology altogether.",
    evidence: [evidenceNotes.fundamentalsPrivacy],
    closing:
      "Responsible adoption means understanding where AI creates value, where caution is appropriate, and how to use it with confidence.",
    videos: [
      {
        title: "The Biggest Reason People Avoid AI Isn’t Complexity—It’s Privacy",
        published: "Dec 3, 2025",
        url: "https://www.youtube.com/watch?v=MJpfRuaTLBw",
        videoId: "MJpfRuaTLBw",
        description: "Most hesitation around AI comes from legitimate privacy concerns. This video explains how data is handled, what options exist to reduce risk, and how to adopt AI gradually and confidently.",
      },
      {
        title: "Why Most Professionals Feel Behind on AI",
        published: "Dec 9, 2025",
        url: "https://www.youtube.com/watch?v=8Ug-u1iZ8S8",
        videoId: "8Ug-u1iZ8S8",
        description: "Feeling behind on AI is normal. This video explains why habits lag technology and why AI’s rapid adoption curve makes adjustment feel harder than past shifts.",
      },
    ],
  },
];

const faqGroups = [
  {
    title: "How Large Language Models Work",
    items: [
      {
        question: "What is a large language model?",
        answer: [
          "A large language model (LLM) is an AI system trained to recognize patterns in enormous amounts of text. Rather than storing facts in the way a database does, it learns statistical relationships between words, phrases, concepts, and ideas. When you ask a question, it generates a response one token at a time by predicting what is most likely to come next based on the context you’ve provided.",
          "That prediction process sounds simple, but it produces surprisingly sophisticated behavior. The model can explain concepts, summarize information, write software, compare ideas, and adapt its tone because it has learned patterns from millions of examples. Understanding that AI generates responses instead of retrieving prewritten answers helps explain both its remarkable capabilities and its limitations.",
        ],
      },
      {
        question: "Is AI actually thinking?",
        answer: [
          "Not in the way people think. Humans build mental models through experience, understand cause and effect, develop intentions, and reason about consequences. Language models don’t possess those kinds of internal experiences. Instead, they generate language by recognizing statistical relationships within text.",
          "The distinction matters because language can appear intelligent even when genuine understanding isn’t present. AI often produces responses that resemble reasoning, but those responses emerge from pattern prediction rather than conscious thought. Treating AI as a powerful language system instead of a digital person leads to more realistic expectations and better results.",
        ],
      },
      {
        question: "Why does AI sound so intelligent?",
        answer: [
          "Language is one of the primary ways humans demonstrate intelligence. When an AI communicates clearly, explains complex topics, or answers difficult questions, it’s natural to assume it understands those ideas the way another person would.",
          "In reality, coherent language and genuine understanding aren’t the same thing. AI has become exceptionally good at producing fluent, well-structured responses because language prediction is exactly what it was trained to do. That makes it incredibly useful, but it also explains why it can occasionally produce convincing explanations that are incomplete or incorrect. Fluency should never be mistaken for certainty.",
        ],
      },
      {
        question: "Is AI just predicting the next word?",
        answer: [
          "At a technical level, yes—but that description dramatically understates what’s happening. Each prediction depends on everything that came before it, allowing the model to maintain context across an entire conversation. As thousands of predictions build on one another, they produce explanations, stories, software, analyses, and conversations that appear remarkably sophisticated.",
          "Understanding this process changes how you use AI. Instead of imagining that it searches for perfect answers somewhere inside itself, you begin thinking about how each response depends on the quality of the context available during generation.",
        ],
      },
      {
        question: "Why can AI be confidently wrong?",
        answer: [
          "Language models aren’t designed to determine whether information is true. They’re designed to generate responses that fit the patterns they’ve learned. Most of the time, those patterns produce accurate information. Occasionally they don’t.",
          "Because AI generates language fluently regardless of whether every detail is correct, incorrect answers can sound just as confident as accurate ones. That’s why verification remains important whenever accuracy has meaningful consequences. AI is an excellent collaborator, but it shouldn’t be treated as an unquestionable authority.",
        ],
      },
    ],
  },
  {
    title: "Context Is Everything",
    items: [
      {
        question: "What is a context window?",
        answer: [
          "A context window is the information available to an AI model while generating a response. It includes your current prompt, previous messages in the conversation, uploaded documents, and any other information the application provides to the model.",
          "You can think of it as the AI’s working memory. Everything inside that window influences the response. Everything outside it effectively doesn’t exist. Understanding this concept explains why conversations improve over time and why continuing an existing discussion often produces better results than starting over.",
        ],
      },
      {
        question: "Why do conversations improve over time?",
        answer: [
          "Every exchange adds more context. As the AI learns your goals, terminology, preferences, constraints, and previous decisions, it can generate responses that better match what you’re trying to accomplish.",
          "This is why experienced users tend to iterate instead of expecting perfection from the first prompt. Each round of refinement reduces ambiguity and gives the model more information to work with. AI performs best when conversations evolve rather than beginning from scratch every time.",
        ],
      },
      {
        question: "Should I start a new conversation or continue an existing one?",
        answer: [
          "It depends on whether the previous context is still helpful. If you’re continuing the same project, keeping the conversation together usually produces better results because the model already understands the background.",
          "If you’re switching to an unrelated topic, starting a new conversation often improves quality by removing irrelevant context. The goal isn’t simply to maximize context—it’s to maximize relevant context.",
        ],
      },
      {
        question: "Why doesn’t adding more information always improve results?",
        answer: [
          "More information isn’t always better information. Large context windows make it possible to provide far more background than ever before, but irrelevant, outdated, or conflicting information can make it harder for the model to identify what actually matters.",
          "Good context is organized, purposeful, and directly related to the task. The most effective AI users don’t simply provide more information—they provide the right information.",
        ],
      },
      {
        question: "What’s the best way to iterate with AI?",
        answer: [
          "Treat AI like a collaborative partner instead of a one-time question-answering system. Start with your best understanding of the problem, review the response critically, clarify what needs improvement, and continue refining the conversation.",
          "Iteration isn’t correcting failure—it’s how complex work naturally develops. Every revision gives both you and the AI a clearer understanding of the objective, producing results that are consistently stronger than trying to craft the perfect prompt on the first attempt.",
        ],
      },
    ],
  },
  {
    title: "Learning to Work with AI",
    items: [
      {
        question: "Why do some people learn AI much faster than others?",
        answer: [
          "The biggest difference isn’t technical ability—it’s experimentation. People who improve quickly tend to treat AI as something to explore rather than something to master immediately. They ask follow-up questions, compare approaches, refine prompts, and learn from both good and bad responses.",
          "Over time they develop an intuition for providing context, recognizing weaknesses, and guiding conversations toward better outcomes. Those habits matter far more than memorizing prompting techniques.",
        ],
      },
      {
        question: "Should I use AI like Google?",
        answer: [
          "AI and search engines solve different problems. Search helps you find existing information. AI helps you interpret, organize, compare, explain, brainstorm, and build upon information.",
          "Many people become frustrated because they ask AI a single question expecting a perfect answer. AI becomes dramatically more useful when you use it as part of an ongoing conversation that gradually improves the result.",
        ],
      },
      {
        question: "What is prompt engineering really about?",
        answer: [
          "Prompt engineering is less about finding a magical phrase than designing a clear process for the model to follow. Useful prompts provide relevant context, define the task and constraints, identify mistakes to avoid, and describe how the result should be evaluated.",
          "Iteration matters too. Review the response, correct missing or misleading context, clarify the objective, and ask the model to improve specific weaknesses. The durable skill is not memorizing prompt formulas; it is knowing what you are trying to accomplish and how to recognize a good result.",
        ],
      },
      {
        question: "How do I know whether AI gave me a good answer?",
        answer: [
          "Start by checking whether the answer addresses the task, makes its assumptions visible, and distinguishes established facts from claims or inference. When an answer depends on external information, look for traceable sources and determine whether multiple sources are genuinely independent or simply repeat the same underlying account.",
          "A strong answer should also identify important uncertainty and explain what evidence could change its conclusion. The amount of verification should match the consequences: a low-risk draft may need a quick review, while important decisions, technical work, financial guidance, or medical information require reliable sources and appropriate expert scrutiny.",
        ],
      },
      {
        question: "What’s the best way to start learning AI?",
        answer: [
          "Use it regularly. Choose real work rather than artificial exercises. Ask it to help plan projects, summarize information, explain unfamiliar concepts, review your writing, or brainstorm ideas.",
          "Experience teaches patterns that tutorials cannot. The people who become proficient with AI are usually the people who integrate it into everyday work and gradually refine how they collaborate with it.",
        ],
      },
    ],
  },
  {
    title: "Using AI Responsibly",
    items: [
      {
        question: "Is it safe to put company information into AI?",
        answer: [
          "That depends entirely on the tool you’re using and your organization’s policies. Different AI platforms have different privacy practices, data retention policies, and enterprise security features. Some are specifically designed for confidential business use. Others are intended primarily for public information.",
          "Before sharing sensitive data, understand how the service handles your information and follow your organization’s security guidelines.",
        ],
      },
      {
        question: "Why are organizations cautious about AI?",
        answer: [
          "Organizations have responsibilities that individuals don’t. They must consider security, privacy, compliance, intellectual property, governance, regulatory requirements, and operational risk across thousands of employees and business processes.",
          "That caution shouldn’t be mistaken for resistance. Most organizations recognize AI’s potential but want to adopt it in ways that are secure, repeatable, and aligned with business objectives.",
        ],
      },
      {
        question: "Am I already behind?",
        answer: [
          "Most people feel behind because AI evolves so quickly, but the reality is that we’re still early in organizational adoption. Many companies are experimenting, learning, and building governance rather than transforming every workflow overnight.",
          "The best time to begin is now. Small, consistent improvements in how you use AI compound over time and matter far more than trying to catch up all at once.",
        ],
      },
      {
        question: "How should I think about responsible AI use?",
        answer: [
          "Responsible AI means understanding both what the technology can do and where human oversight remains necessary. It involves protecting sensitive information, verifying important outputs, recognizing uncertainty, and using AI to augment human judgment rather than replace it.",
          "Used thoughtfully, AI becomes a powerful tool for improving productivity and decision-making. Used carelessly, it can create unnecessary risk. Responsibility isn’t about avoiding AI—it’s about using it with informed confidence.",
        ],
      },
    ],
  },
];

const sources = mergeSources([
  {
    title: "Attention Is All You Need",
    publisher: "Vaswani et al.",
    year: "2017",
    href: "https://doi.org/10.48550/arXiv.1706.03762",
    description:
      "The foundational paper that introduced the Transformer architecture behind modern language models.",
  },
  {
    title: "Language Models are Few-Shot Learners",
    publisher: "Brown et al.",
    year: "2020",
    href: "https://doi.org/10.48550/arXiv.2005.14165",
    description:
      "Research showing how model scale and in-context examples produce broad language capabilities.",
  },
  {
    title: "Lost in the Middle: How Language Models Use Long Contexts",
    publisher: "Liu et al.",
    year: "2024",
    href: "https://aclanthology.org/2024.tacl-1.9/",
    description:
      "Evidence that access to a large context window does not guarantee reliable use of every piece of information within it.",
  },
  {
    title: "AI Risk Management Framework: Generative AI Profile",
    publisher: "National Institute of Standards and Technology",
    year: "2024",
    href: "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf",
    description:
      "A cross-sector framework for identifying and managing risks specific to generative AI.",
  },
], sourcesFor([
  "fundamentalsPrediction",
  "thinkingConfidence",
  "fundamentalsContext",
  "fundamentalsPrivacy",
]));

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Understanding How AI Actually Works",
  description:
    "A practical guide to large language models, context windows, prediction, iteration, and getting more reliable results from modern AI.",
  url: `${siteConfig.siteUrl}/ai-fundamentals`,
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
    "Large language models",
    "Context windows",
    "Transformer models",
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteConfig.siteUrl}/ai-fundamentals`,
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
        text: item.answer.join("\n\n"),
      },
    })),
  ),
};

export default function AiFundamentalsPage() {
  return (
    <TopicPage
      topicKey="fundamentals"
      articleSchema={structuredData}
      faqSchema={faqStructuredData}
      path="/ai-fundamentals"
      breadcrumb="AI Fundamentals"
      hero={{ eyebrow: "AI Fundamentals", title: "Understanding How AI Actually Works", lead: "Modern AI becomes more predictable when you understand how language models generate responses, why context matters, and why iteration improves results.", description: "You do not need the mathematics of neural networks to become effective with AI. You need an accurate mental model of the underlying system—one that works across ChatGPT, Claude, Gemini, Copilot, and whatever comes next.", updated: "2026-07-25", updatedLabel: "July 25, 2026", startHref: "#how-language-models-work", startLabel: "Start with how language models work", image: { src: "/images/topics/ai-fundamentals-hero.webp", alt: "Fragments converge into a single path, illustrating token-by-token generation." } }}
      audience={["Professionals who want a durable mental model of modern AI.", "Leaders evaluating AI capabilities and limitations.", "People who want more reliable results from language models.", "Anyone trying to separate how AI works from how it is marketed."]}
      sectionTitles={{ audience: "Who this AI fundamentals guide is for", evidence: "Evidence behind the fundamentals" }}
      
      sections={sections}
      getFaqItems={(section) => faqGroups.find((group) => group.title === section.title)?.items}
      sources={sources}
      afterSections={<section className="border-t border-library-parchment py-14 md:py-20"><div className="max-w-3xl"><h2 className="text-3xl font-semibold leading-tight md:text-4xl">The Fundamentals Endure</h2><p className="mt-5 text-lg font-medium leading-relaxed text-library-ink md:text-xl">Modern AI is easier to understand than it first appears. The underlying technology is sophisticated, but the principles that make someone effective with it are surprisingly straightforward.</p><p className="mt-4 max-w-2xl leading-relaxed text-library-muted">Understand how language models generate responses. Provide better context. Iterate instead of expecting perfection on the first attempt. Develop habits that improve results over time, and use AI with an awareness of both its capabilities and limitations.</p><blockquote className="mt-8 topic-accent-border border-l-2 pl-5 font-serif text-xl font-medium leading-relaxed text-library-ink md:text-2xl">The tools will continue to evolve, but an accurate mental model will remain useful across every generation of AI.</blockquote></div></section>}
      next={{ title: "AI changes more than tools", description: "Once you understand the underlying system, explore how the same capabilities are changing careers, organizations, leadership, and the skills that create value.", href: "/ai-and-work", linkLabel: "Explore AI and Work", topicKey: "work" }}
    />
  );
}
