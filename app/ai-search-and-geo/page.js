import { siteConfig } from "../../content/siteConfig";
import TopicPage from "../../components/topic/TopicPage";
import { evidenceNotes, mergeSources, sourcesFor } from "../../content/evidence";

export const metadata = {
  title: "AI Search and GEO: A Practical Guide",
  description:
    "How AI search changes discovery, turns websites into knowledge bases, expands SEO through GEO, and reshapes digital measurement.",
  alternates: { canonical: "/ai-search-and-geo" },
  openGraph: {
    title: "AI Search and GEO: A Practical Guide",
    description:
      "A practical guide to retrieval, Generative Engine Optimization, AI-ready websites, and measuring influence beyond clicks.",
    url: "/ai-search-and-geo",
    type: "article",
  },
};

const sections = [
  {
    id: "search-is-changing",
    title: "Search Is Changing",
    answer:
      "AI search does more than rank webpages. It retrieves information from many sources, synthesizes it, and often delivers an answer before a person visits a website.",
    body:
      "Discoverability now depends on whether an AI system can find, understand, and confidently use your content—not only where a page ranks. Organizations are increasingly competing to become reliable sources of knowledge.",
    image: {
      src: "/images/topics/search-journeys.webp",
      alt: "Ranked pages versus retrieved sources leading to a synthesized answer.",
      caption:
        "Traditional search routes people through ranked pages. AI search can retrieve across sources and synthesize an answer before a visit occurs.",
    },
    evidence: [evidenceNotes.searchRetrieval],
    related: [
      { href: "/ai-fundamentals", label: "How models use context" },
      { href: "/ai-agents", label: "From retrieval to agent action" },
    ],
    closing:
      "Visibility is shifting from winning a position on a results page to becoming part of the answer.",
    videos: [
      {
        title: "From Ranking to Retrieval in AI Search",
        published: "Mar 3, 2026",
        url: "https://www.youtube.com/watch?v=5VPYLST1OmA",
        videoId: "5VPYLST1OmA",
        description: "Search engines are shifting from ranking links to composing answers. Visibility now depends on being retrievable and citeable within AI generated responses, not just ranking first. This fundamentally changes how organizations must approach content strategy.",
      },
      {
        title: "Retrieval Determines Visibility in AI Search",
        published: "Mar 6, 2026",
        url: "https://www.youtube.com/watch?v=tlyw-AiIP7E",
        videoId: "tlyw-AiIP7E",
        description: "In AI search, visibility is determined before generation. Modern systems retrieve and ground answers in source content, making retrievability, structure, and semantic precision decisive. This shift requires a content architecture rethink, not just SEO tweaks.",
      },
      {
        title: "Specificity Now Determines Visibility in AI Search",
        published: "Mar 5, 2026",
        url: "https://www.youtube.com/watch?v=L-alt68d8pU",
        videoId: "L-alt68d8pU",
        description: "Broad positioning is breaking down as AI mediated discovery favors highly specific, constraint driven queries. Vague content is no longer retrieved. In this new model, specificity determines visibility, yet many companies still write as if it is twenty fifteen.",
      },
    ],
  },
  {
    id: "knowledge-bases",
    title: "Websites Become Knowledge Bases",
    answer:
      "AI systems interact with websites as repositories of facts, relationships, and reusable explanations—not simply as pages designed for human navigation.",
    body:
      "That makes clear organization, factual consistency, semantic structure, and information architecture more important. The best websites serve human readers while also making organizational knowledge easy for machines to retrieve and interpret.",
    evidence: [evidenceNotes.searchStructure],
    related: [
      { href: "/ai-agents", label: "The agentic web" },
      { href: "/software-development-and-ai", label: "Building reliable systems" },
    ],
    closing:
      "In an AI-first web, information architecture becomes as important as content creation.",
    videos: [
      {
        title: "Why Websites Become Reference Sources in an AI-First World",
        published: "Feb 11, 2026",
        url: "https://www.youtube.com/watch?v=YzjsQ-OtbfA",
        videoId: "YzjsQ-OtbfA",
        description: "As AI becomes the primary interface for questions and decisions, websites shift from destinations to reference sources. Clear, explicit, and consistent content now determines how brands are represented when machines do the explaining.",
      },
      {
        title: "AI Changes Content Accuracy Before Search Performance",
        published: "Jul 1, 2026",
        url: "https://www.youtube.com/watch?v=7vRHBLiOAaA",
        videoId: "7vRHBLiOAaA",
        description: "AI usually affects how a business is interpreted before it affects traffic or rankings. Incomplete or inconsistent content gets recombined into plausible but inaccurate explanations, reducing control over how the business is described by AI systems.",
      },
      {
        title: "Structuring Website Content for AI Consumption",
        published: "Jul 2, 2026",
        url: "https://www.youtube.com/watch?v=8NRtJtld7iE",
        videoId: "8NRtJtld7iE",
        description: "AI systems consume website content as fragments rather than complete pages. Teams need consistently defined, scoped, and described concepts across their sites so information can be accurately recombined without losing meaning.",
      },
      {
        title: "Organizing Website Content for AI and Human Readers",
        published: "Feb 12, 2026",
        url: "https://www.youtube.com/watch?v=tznEgpt9nzc",
        videoId: "tznEgpt9nzc",
        description: "As AI systems extract snippets rather than read pages, content organization becomes a visibility strategy. Clear structure, explicit answers, and machine readable formatting help AI interpret expertise while still serving human users.",
      },
    ],
  },
  {
    id: "seo-and-geo",
    title: "SEO + GEO",
    answer:
      "Generative Engine Optimization expands traditional SEO by helping AI systems retrieve, interpret, and confidently reference information when generating answers.",
    body:
      "SEO still helps search engines understand and rank webpages. GEO adds a second objective: making content precise, structured, credible, and useful inside generated responses. Organizations increasingly need to optimize for both.",
    closing:
      "GEO does not replace SEO. It extends optimization from rankings into generated answers.",
    videos: [
      {
        title: "How AI Uses Web Content and Why Analytics Feel Broken",
        published: "Feb 9, 2026",
        url: "https://www.youtube.com/watch?v=x4E0NTOZLek",
        videoId: "x4E0NTOZLek",
        description: "AI systems increasingly consume and summarize web content without direct visits, turning websites into sources of truth for other systems. This shift weakens traditional analytics and attribution while raising the bar for clarity, structure, and authority.",
      },
      {
        title: "SEO, GEO, and Why Declining Traffic Can Be Misleading",
        published: "Feb 10, 2026",
        url: "https://www.youtube.com/watch?v=u4DhOMAdook",
        videoId: "u4DhOMAdook",
        description: "Declining traffic does not mean declining influence. As AI systems retrieve and summarize content upstream, SEO determines discoverability and GEO shapes representation, making websites harder to measure but more critical as sources of truth.",
      },
    ],
  },
  {
    id: "analytics-and-influence",
    title: "Analytics & Influence",
    answer:
      "AI can shape research and decisions without sending a visitor to the source, making clicks and page views a less complete measure of digital performance.",
    body:
      "Organizations may influence a customer long before a trackable website session. Brand recognition, citations, assisted conversions, AI visibility, and business outcomes now belong alongside conventional traffic metrics.",
    evidence: [evidenceNotes.searchMeasurement],
    closing:
      "When AI mediates discovery, influence can rise even while direct traffic falls.",
    videos: [
      {
        title: "The Invisible Influence Layer of AI",
        published: "Mar 4, 2026",
        url: "https://www.youtube.com/watch?v=7c9anwH6ez4",
        videoId: "7c9anwH6ez4",
        description: "AI now mediates research and evaluation, shaping buying decisions without generating site visits. As content influences choices through summarized answers, traditional attribution models fail to capture this invisible layer of impact.",
      },
      {
        title: "Why Traditional Analytics Break Down in an AI-Mediated World",
        published: "Feb 13, 2026",
        url: "https://www.youtube.com/watch?v=Ig3TsxuUNQk",
        videoId: "Ig3TsxuUNQk",
        description: "As AI mediates research and decision making, traditional analytics capture less of the real influence of content. Measurement models built on visits and funnels miss upstream impact, requiring new ways to assess visibility, accuracy, and decision shaping.",
      },
    ],
  },
];

const sourceFaqGroups = [
  {
    title: "Search Is Changing",
    items: [
      {
        question: "How is AI changing search?",
        answer:
          "For decades, search engines primarily ranked webpages and presented links for people to evaluate. AI search changes that process by retrieving information from multiple sources, synthesizing it, and generating direct answers. That means websites increasingly compete not only for clicks but also to become trusted sources that AI systems reference. Visibility now depends on whether your information can be found, understood, and confidently incorporated into AI-generated responses. Search becomes less about ranking pages and more about contributing knowledge.",
      },
      {
        question: "What is retrieval?",
        answer:
          "Retrieval is the process of identifying relevant information before an AI generates its response. Rather than relying only on what was learned during training, many modern AI systems retrieve current or authoritative information from external sources and use it as additional context. The quality of retrieval directly influences the quality of the answer. If the AI retrieves accurate, well-structured, relevant information, it is much more likely to generate a reliable response.",
      },
      {
        question: "Do rankings still matter?",
        answer:
          "Yes, but rankings are no longer the entire story. Traditional search engines still send visitors to websites, making SEO an important part of digital strategy. However, AI increasingly answers questions without requiring users to visit individual pages. Organizations now need to think beyond ranking highly and focus on becoming authoritative sources that AI systems consistently choose to reference.",
      },
      {
        question: "Why is specificity becoming more important?",
        answer:
          "General information is increasingly abundant. Specific, detailed, well-organized information is much harder to replace. AI systems retrieve information that directly answers a user's question. Pages containing precise explanations, clearly defined concepts, structured data, and comprehensive coverage are often easier for AI to retrieve and incorporate than broad marketing content with little substantive information.",
      },
      {
        question: "How does AI decide which information to use?",
        answer:
          "Modern AI systems evaluate many factors, including relevance, authority, clarity, structure, consistency, freshness, and the quality of retrieved information. No single factor determines visibility. Organizations generally improve their chances by publishing accurate information, organizing it clearly, maintaining consistency across their content, and building long-term credibility rather than attempting to optimize for isolated ranking signals.",
      },
    ],
  },
  {
    title: "Websites Become Knowledge Bases",
    items: [
      {
        question: "Why are websites becoming knowledge bases?",
        answer:
          "Historically, websites were designed primarily to persuade human visitors. AI systems use them differently. They retrieve facts, identify relationships, compare information, and assemble answers from many different sources. As a result, websites increasingly function as structured repositories of organizational knowledge. Success depends not only on attractive design but also on how effectively information is organized, maintained, and presented for both humans and machines.",
      },
      {
        question: "How should content be organized for AI?",
        answer:
          "Information should be structured around clear concepts rather than isolated marketing pages. Logical headings, consistent terminology, descriptive page titles, semantic organization, and comprehensive coverage all help AI understand relationships between topics. The objective isn't writing for machines instead of people. It's organizing information so both audiences can understand it efficiently.",
      },
      {
        question: "Does website structure matter more now?",
        answer:
          "Yes. Good information architecture helps visitors navigate a website, but it also helps AI understand how concepts relate to one another. Clear navigation, meaningful page hierarchies, internal linking, consistent terminology, and reusable content make information easier to retrieve and interpret. Structure increasingly becomes part of content quality rather than simply a usability concern.",
      },
      {
        question: "Why is content accuracy becoming so important?",
        answer:
          "AI systems often combine information from multiple sources when generating answers. Inaccurate, outdated, or inconsistent information reduces confidence and makes it harder for AI to rely on a website as an authoritative reference. Organizations that consistently maintain accurate content become more trustworthy both to people and to AI systems retrieving information on their behalf.",
      },
      {
        question: "What makes a website AI-ready?",
        answer:
          "An AI-ready website provides accurate information, logical organization, descriptive headings, semantic structure, consistent terminology, strong internal linking, and content that thoroughly answers important questions. The goal isn't optimizing for a particular AI model. It's building a website that communicates knowledge clearly enough for any intelligent system—or person—to understand.\n\nAI-ready describes information that systems can retrieve and interpret. Agent-ready goes further by adding the interfaces, permissions, and feedback required for authorized software action.",
      },
    ],
  },
  {
    title: "SEO + GEO",
    items: [
      {
        question: "What is Generative Engine Optimization?",
        answer:
          "Generative Engine Optimization (GEO) focuses on increasing the likelihood that AI systems retrieve, understand, and reference an organization's information when generating answers. Unlike traditional SEO, which primarily optimizes visibility within ranked search results, GEO emphasizes becoming a trusted source of knowledge that AI systems confidently incorporate into their responses.",
      },
      {
        question: "Is SEO becoming obsolete?",
        answer:
          "No. Traditional search remains an important source of traffic, customers, and discovery. AI search builds on many of the same fundamentals that have always mattered: quality content, technical performance, authority, and clear organization. Rather than replacing SEO, GEO expands the scope of optimization to include AI-mediated discovery alongside traditional search.",
      },
      {
        question: "How do SEO and GEO work together?",
        answer:
          "SEO helps search engines understand and rank content. GEO helps AI systems retrieve and confidently reference that same content while generating answers. Organizations increasingly benefit from treating both as complementary strategies. High-quality information, strong technical foundations, and authoritative expertise support success across both traditional search and AI search.",
      },
      {
        question: "Why might traffic decline while influence increases?",
        answer:
          "AI increasingly answers questions before users click through to websites. Someone may make a purchasing decision, recommend a company, or learn about a product based entirely on an AI-generated response that references your information without generating a website visit. Traditional analytics capture visits. They don't always capture influence. As AI becomes a larger part of customer research, organizations need broader ways of evaluating digital performance.",
      },
      {
        question: "How should organizations prepare for AI search?",
        answer:
          "Start by creating genuinely useful content. Organize information logically, maintain accuracy, answer important customer questions comprehensively, strengthen technical SEO, and build long-term authority in your subject area. Organizations that consistently produce trustworthy information are well positioned regardless of how search interfaces continue evolving.",
      },
    ],
  },
  {
    title: "Analytics & Influence",
    items: [
      {
        question: "Why do analytics feel broken?",
        answer:
          "Traditional analytics assume people visit websites before making decisions. AI increasingly changes that sequence by providing synthesized answers directly within search experiences. As a result, organizations may influence customers without generating corresponding page views, sessions, or clicks. Existing analytics remain valuable, but they describe a smaller portion of the customer journey than they once did.",
      },
      {
        question: "How can influence increase while traffic declines?",
        answer:
          "Imagine an AI system consistently recommends your organization because your content is accurate, comprehensive, and trustworthy. Users may learn about your expertise, choose your product, or contact your company directly without visiting the pages that informed the recommendation. Your influence has increased even though traditional website traffic has not. AI introduces an additional layer between content creation and customer action that conventional analytics don't always measure.",
      },
      {
        question: "What metrics should organizations watch?",
        answer:
          "Traffic remains useful, but organizations should also consider branded search volume, direct traffic, lead quality, assisted conversions, customer acquisition, citation frequency where measurable, engagement quality, and overall business outcomes. The objective isn't maximizing page views. It's helping the right people make informed decisions, regardless of exactly how they discovered the information.",
      },
      {
        question: "How should success be measured in AI search?",
        answer:
          "Success increasingly depends on whether your organization is recognized as a trusted authority rather than simply whether every interaction results in a click. Over time, organizations will likely combine traditional SEO metrics with broader measures of brand visibility, AI citations, customer outcomes, and business impact to understand their digital performance more completely.",
      },
      {
        question: "What does AI-mediated discovery mean?",
        answer:
          "AI-mediated discovery occurs when AI becomes an intermediary between people and information. Instead of manually reviewing dozens of webpages, users increasingly receive synthesized recommendations generated from multiple sources. Organizations therefore optimize not only for human readers but also for AI systems responsible for retrieving, evaluating, and presenting information during that discovery process.",
      },
    ],
  },
];

function faqFromSearch(question) {
  return sourceFaqGroups
    .flatMap((group) => group.items)
    .find((item) => item.question === question);
}

const faqGroups = [
  {
    title: "Search Is Changing",
    items: [
      faqFromSearch("What is retrieval?"),
      faqFromSearch("Do rankings still matter?"),
      {
        question:
          "What makes information easier for AI search systems to retrieve and use?",
        answer:
          "Useful information is directly relevant to the question, specific enough to resolve it, clearly organized, current, and consistent with the rest of the site. Descriptive headings, stable terminology, internal links, and explicit evidence can help systems interpret the information and its relationship to other material.\n\nNo single quality guarantees selection or citation. AI search products use different retrieval and ranking systems, and those systems change. The durable objective is to publish information that people and machines can understand, verify, and use confidently.",
      },
    ],
  },
  {
    title: "Websites Become Knowledge Bases",
    items: [
      faqFromSearch("Why is content accuracy becoming so important?"),
      {
        question: "What makes a website’s information AI-ready?",
        answer:
          "AI-ready information is accurate, current, specific, and organized around concepts people actually need to understand. Clear page titles, semantic headings, consistent terminology, meaningful internal links, and maintained source information make relationships easier to retrieve and interpret.\n\nThis is not a separate style of writing for machines. It is sound information architecture and useful content for both people and AI systems. Agent-ready services go further by adding the interfaces, identity, permissions, and feedback required for authorized action.",
      },
    ],
  },
  {
    title: "SEO + GEO",
    items: [
      {
        question: "How do SEO and GEO complement each other?",
        answer:
          "Search engine optimization (SEO) helps search engines crawl, understand, and rank content for traditional results. Generative engine optimization (GEO) considers whether AI systems can retrieve, interpret, and reference that information while producing answers.\n\nThey share durable foundations: useful content, technical quality, clear organization, authority, and accurate information. GEO expands the discovery problem; it does not make traditional search or SEO obsolete.",
      },
      faqFromSearch("How should organizations prepare for AI search?"),
    ],
  },
  {
    title: "Analytics & Influence",
    items: [
      {
        question:
          "Why can a website’s influence increase without a corresponding increase in traffic?",
        answer:
          "AI systems can synthesize information directly in search results or assistants. A person may learn about an organization, include it in a decision, or contact it later without visiting the page that helped inform the answer. In that case, the content may have contributed influence without producing a conventional session or click.\n\nThat influence is difficult to attribute precisely. Traffic analytics remain useful, but they capture only the interactions that reach the website and should be interpreted alongside broader discovery and business outcomes.",
      },
      {
        question:
          "How should organizations measure AI-search visibility and influence?",
        answer:
          "Combine traditional measures such as search visibility, qualified traffic, engagement, leads, and conversions with broader indicators such as branded search, direct visits, customer-reported discovery paths, and AI citations where they can be measured responsibly.\n\nSeparate observable indicators from inferred influence. Citation frequency or an AI referral can provide evidence of visibility, but neither proves a business outcome by itself. The most useful measurement connects discovery signals with customer quality and organizational results.",
      },
    ],
  },
];

const pageFaqs = [];

const sources = mergeSources([
  {
    title: "AI Features and Your Website",
    publisher: "Google Search Central",
    year: "2026",
    href: "https://developers.google.com/search/docs/appearance/ai-features",
    description:
      "Official guidance on eligibility, content, internal links, and structured data for Google AI search features.",
  },
  {
    title: "AI Performance in Bing Webmaster Tools",
    publisher: "Microsoft Bing",
    year: "2026",
    href: "https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview",
    description:
      "How Bing measures citations, grounding queries, and page-level visibility in AI-generated answers.",
  },
  {
    title: "Creating Helpful, Reliable, People-First Content",
    publisher: "Google Search Central",
    year: "2026",
    href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
    description:
      "A framework for useful, original, trustworthy content grounded in clear authorship and expertise.",
  },
], sourcesFor(["searchRetrieval", "searchStructure", "searchMeasurement"]));

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Search and GEO",
  description:
    "How AI search changes discovery, turns websites into knowledge bases, expands SEO through GEO, and reshapes digital measurement.",
  url: `${siteConfig.siteUrl}/ai-search-and-geo`,
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
    "AI search",
    "Generative Engine Optimization",
    "Search engine optimization",
    "Information architecture",
  ],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteConfig.siteUrl}/ai-search-and-geo`,
  },
  datePublished: "2026-07-24",
  dateModified: "2026-07-25",
  image: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
  citation: sources.map((source) => source.href),
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [...faqGroups.flatMap((group) => group.items), ...pageFaqs].map(
    (item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    }),
  ),
};

export default function AiSearchAndGeoPage() {
  return (
    <TopicPage
      topicKey="search"
      articleSchema={structuredData}
      faqSchema={faqStructuredData}
      path="/ai-search-and-geo"
      breadcrumb="AI Search and GEO"
      hero={{ eyebrow: "AI Search and GEO", title: "Search Is Becoming AI’s Knowledge Layer", lead: "Search is no longer just about finding links. AI systems increasingly retrieve information, synthesize it, and generate answers before people ever visit a website.", description: "Organizations now compete to become trusted sources that AI systems choose to reference. This guide explains retrieval, AI-ready websites, GEO, and why influence is becoming harder to measure.", updated: "2026-07-25", updatedLabel: "July 25, 2026", startHref: "#search-is-changing", startLabel: "Start with the shift in search", titleClassName: "max-w-4xl", image: { src: "/images/topics/ai-search-hero.webp", alt: "Source documents are retrieved and combined into one concise answer." } }}
      audience={["Marketing and communications leaders adapting to AI-mediated discovery.", "Website teams improving how information is structured and retrieved.", "Organizations measuring visibility beyond clicks and rankings.", "Anyone trying to understand generative engine optimization."]}
      sectionTitles={{ audience: "Who this search guide is for", evidence: "Search and GEO evidence" }}
      
      sections={sections}
      getFaqItems={(section) => faqGroups.find((group) => group.title === section.title)?.items}
      sources={sources}
      afterSections={<section className="border-t border-library-parchment py-14 md:py-20"><div className="max-w-3xl"><h2 className="text-3xl font-semibold leading-tight md:text-4xl">Become a Source AI Can Trust</h2><p className="mt-5 text-lg font-medium leading-relaxed text-library-ink md:text-xl">The future of search belongs to organizations that produce accurate information, structure it well, and make it easy to retrieve.</p><p className="mt-4 max-w-2xl leading-relaxed text-library-muted">Attracting visitors still matters, but it is no longer the only goal. Build a website that functions as a credible knowledge source, and evaluate success by influence and business outcomes as well as traffic.</p><blockquote className="type-quote mt-8 topic-accent-border border-l-2 pl-5 text-library-ink">In AI search, the most useful source often matters more than the loudest page.</blockquote></div></section>}
      next={{ title: "Protect judgment in an AI-mediated world", description: "Explore how AI affects reasoning, learning, trust, and the human responsibility to decide what deserves belief and action.", href: "/ai-and-thinking", linkLabel: "Explore AI and Thinking", topicKey: "thinking" }}
    />
  );
}
