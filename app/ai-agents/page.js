import { siteConfig } from "../../content/siteConfig";
import TopicPage from "../../components/topic/TopicPage";
import { evidenceNotes, mergeSources, sourcesFor } from "../../content/evidence";

export const metadata = {
  title: "AI Agents: A Practical Guide",
  description:
    "A practical guide to what AI agents are, where they create value, why they fail, and how to build reliable agent-based systems.",
  alternates: { canonical: "/ai-agents" },
  openGraph: {
    title: "AI Agents: A Practical Guide",
    description:
      "A practical guide to what AI agents are, where they create value, why they fail, and how to build reliable agent-based systems.",
    url: "/ai-agents",
    type: "article",
  },
};

const sections = [
  {
    id: "what-agents-are",
    title: "What AI Agents Are",
    answer:
      "AI agents build on language models by adding the ability to take action. They can break work into steps, retrieve information, interact with software, evaluate results, and continue working toward a goal.",
    body:
      "That shift turns AI from a conversational tool into an active participant in a business process. An agent does more than produce a response: it plans, uses tools, observes what happened, and adapts within defined boundaries.",
    related: [
      { href: "/ai-fundamentals", label: "Models, context, and memory" },
      { href: "/ai-and-work", label: "How AI changes workflows" },
    ],
    closing:
      "An agent does not just answer a question. It pursues a goal through action.",
    videos: [],
    faqs: [
      {
        question: "What is an AI agent?",
        answer:
          "An AI agent is a software system that uses AI to pursue a goal rather than simply answer a question. Instead of stopping after generating text, an agent can retrieve information, make decisions within defined boundaries, interact with software, execute workflows, and evaluate whether additional steps are needed before the task is complete.\n\nThat makes agents fundamentally different from traditional chat interfaces. A chatbot primarily generates language. An agent combines language generation with planning, memory, software integration, and action. The result is a system capable of completing work rather than simply discussing it.",
      },
      {
        question: "How is an agent different from ChatGPT?",
        answer:
          "Chat interfaces primarily help people interact with language models. An agent uses similar models but adds capabilities that allow it to interact with external systems, execute actions, and work toward longer-term objectives.\n\nThe language model provides interpretation, planning, and language generation, while the surrounding software provides memory, tools, APIs, permissions, and workflow control. Those additional capabilities transform AI from something that answers questions into something that helps accomplish tasks.",
      },
      {
        question: "Are AI agents just automation?",
        answer:
          "No. Traditional automation follows predefined rules and executes the same sequence of steps every time. AI agents can adapt their behavior based on changing information, interpret unstructured data, make limited decisions, and determine which actions are appropriate for the current situation.\n\nThat flexibility allows agents to handle work that would be difficult to automate using fixed rules alone. Rather than replacing automation, agents expand the range of processes that can be automated effectively.",
      },
      {
        question: "Do agents make decisions?",
        answer:
          "Agents can make bounded operational choices, but only within limits established by the people who design them. A well-designed agent does not receive unlimited authority. It operates according to defined objectives, permissions, business rules, and escalation procedures.\n\nPeople remain responsible for determining the goals, values, and consequences that require judgment. Organizations decide which choices can be automated, which require approval, and which should always remain under human control.",
      },
      {
        question: "Why are agents becoming so important?",
        answer:
          "Many business processes involve moving information between people and systems rather than performing highly specialized work. Scheduling meetings, updating records, routing requests, generating reports, monitoring events, and coordinating approvals all consume time without creating much strategic value.\n\nAI agents excel at reducing this coordination work. As organizations connect agents to more systems, they free people to focus on decisions, creativity, and relationships instead of repetitive administrative tasks.",
      },
    ],
  },
  {
    id: "agents-at-work",
    title: "Agents at Work",
    answer:
      "The greatest value of AI agents is not replacing individual tasks. It is reducing the coordination work between them: moving information, collecting data, requesting approvals, updating records, and keeping people informed.",
    body:
      "Agents can monitor systems, trigger workflows, gather information from several sources, and execute routine business processes. People then spend less time shepherding work between tools and more time on judgment, exceptions, and decisions.",
    closing:
      "The biggest opportunity is better coordination, not merely faster task completion.",
    videos: [
      {
        title: "How AI Agents Execute Work Across Systems",
        published: "Apr 13, 2026",
        url: "https://www.youtube.com/watch?v=Y9cphAsdlvg",
        videoId: "Y9cphAsdlvg",
        description:
          "AI agents move beyond generating responses to executing workflows across tools like Jira and GitHub. They autonomously gather data, analyze progress, and produce actionable reports, significantly extending team efficiency and operational capability.",
      },
      {
        title: "Where AI Agents Deliver Value in Everyday Work",
        published: "Apr 14, 2026",
        url: "https://www.youtube.com/watch?v=blyXw3bZYTA",
        videoId: "blyXw3bZYTA",
        description:
          "AI agents create the most value in repetitive coordination work across systems. By automating tasks like reporting, data aggregation, and workflow preparation, they reduce manual effort and allow professionals to focus on higher level decisions.",
      },
      {
        title: "How AI Agents Shift Responsibility in Workflows",
        published: "Apr 15, 2026",
        url: "https://www.youtube.com/watch?v=hUV9phI0cp0",
        videoId: "hUV9phI0cp0",
        description:
          "AI agents accelerate execution but shift human responsibility toward evaluation and judgment. Rather than replacing jobs, they reduce time spent on tasks while increasing the importance of verifying correctness and alignment with goals.",
      },
    ],
    faqs: [
      {
        question: "Where do AI agents create the most value?",
        answer:
          "Agents create the greatest value in workflows that involve repetitive coordination across multiple systems. Examples include customer support, employee onboarding, invoice processing, IT service management, sales operations, marketing automation, compliance monitoring, and internal knowledge management.\n\nThe common characteristic isn’t complexity—it’s coordination. Whenever work repeatedly moves between people, applications, and information sources, agents often provide meaningful efficiency gains.",
      },
      {
        question: "What kinds of work should agents automate?",
        answer:
          "Agents perform best when the process is well understood, information is available digitally, and success can be evaluated using clear criteria. They thrive in environments where the work is repetitive enough to justify automation but flexible enough that traditional rule-based software struggles.\n\nOrganizations typically see the best results by starting with well-defined operational processes before expanding into more sophisticated workflows.",
      },
      {
        question: "Will agents replace employees?",
        answer:
          "Most organizations are using agents to automate tasks rather than eliminate entire roles. As repetitive coordination becomes automated, people’s responsibilities shift toward exception handling, oversight, relationship management, strategy, and decision-making.\n\nSome jobs will undoubtedly change significantly, but history suggests that technology often changes the composition of work long before it completely replaces occupations.",
      },
      {
        question: "How do people work alongside AI agents?",
        answer:
          "The most effective partnerships divide responsibilities according to strengths. Agents monitor systems continuously, retrieve information instantly, execute repetitive workflows, and operate consistently at scale. People establish goals, interpret ambiguous situations, make complex decisions, and exercise judgment when circumstances fall outside normal patterns.\n\nRather than competing, humans and agents increasingly specialize in different parts of the same workflow.",
      },
      {
        question: "Which business processes are best suited for agents?",
        answer:
          "Processes with clearly defined objectives, structured information, reliable systems, and measurable outcomes generally produce the best results. Customer support routing, document processing, workflow orchestration, reporting, scheduling, and operational monitoring are common examples.\n\nOrganizations usually achieve greater success by improving existing processes with agents than by attempting to automate poorly designed processes.",
      },
    ],
  },
  {
    id: "reliable-agents",
    title: "Building Reliable Agents",
    answer:
      "Reliable agents require clear objectives, well-designed processes, trusted data, appropriate permissions, and safeguards that prevent unintended behavior.",
    body:
      "The model is only one part of the system. In practice, failures often come from incomplete information, unreliable integrations, vague accountability, or a process that was never clearly defined. Dependability comes from the design surrounding the model.",
    evidence: [
      evidenceNotes.agentsReliability,
      evidenceNotes.agentsAuthority,
      evidenceNotes.agentsSecurity,
    ],
    related: [
      { href: "/ai-and-thinking", label: "Human judgment and oversight" },
      { href: "/ai-search-and-geo", label: "AI-ready information" },
      {
        href: "/systems-that-hold-up",
        label: "Systems that hold up",
      },
    ],
    closing:
      "Successful agent systems are built around reliable processes, not just powerful models.",
    videos: [
      {
        title: "Why Clear Processes Matter for AI Agent Success",
        published: "Apr 16, 2026",
        url: "https://www.youtube.com/watch?v=IZ5diOYDNa4",
        videoId: "IZ5diOYDNa4",
        description:
          "AI agents amplify the quality of underlying processes, succeeding with clear inputs, outputs, and steps but failing in ambiguous tasks. Without defined boundaries and instructions, they can execute flawed workflows faster, creating unintended outcomes.",
      },
      {
        title: "Why AI Agent Failures Stem From System Design",
        published: "Apr 17, 2026",
        url: "https://www.youtube.com/watch?v=1mt3EM5MOhE",
        videoId: "1mt3EM5MOhE",
        description:
          "Most AI agent failures arise from poor system design, not model limitations. Inconsistent data, unclear mappings, and improper permissions can produce misleading outputs or risky actions, highlighting the need for well-structured systems and controlled access.",
      },
      {
        title: "Accountability and Bottlenecks in AI Agent Systems",
        published: "Apr 20, 2026",
        url: "https://www.youtube.com/watch?v=Brj3W_lJ2YE",
        videoId: "Brj3W_lJ2YE",
        description:
          "AI agents shift work rather than eliminate it, often creating review bottlenecks and new accountability challenges. Teams that succeed design systems with clear oversight, ensuring reliability while leveraging speed for competitive advantage.",
      },
    ],
    articles: [
      {
        href: "/articles/agentic-soc-enterprise-ai",
        category: "Enterprise AI",
        title: "What an Agentic SOC Teaches Us About Enterprise AI",
        description:
          "See how security operations make agent orchestration, bounded autonomy, auditability, governance, and human accountability visible.",
        published: "2026-08-07",
      },
      {
        href: "/articles/news-investigator",
        category: "AI judgment",
        title: "News Investigator Agent",
        description:
          "See how an investigative agent compares reporting, evaluates evidence, and makes uncertainty visible while leaving judgment with the reader.",
        published: "2026-07-26",
      },
    ],
    faqs: [
      {
        question: "Why do AI agents fail?",
        answer:
          "Most failures are caused by system design rather than model capability. Poor data quality, unclear objectives, unreliable software integrations, missing permissions, inconsistent business processes, and weak governance create far more problems than the language model itself.\n\nOrganizations sometimes assume that a more capable model will solve these issues, but improving the surrounding system usually has a much greater impact on reliability.",
      },
      {
        question: "How much autonomy should agents have?",
        answer:
          "The appropriate level depends on the consequences of failure. Low-risk administrative tasks can often be automated with minimal oversight. Decisions involving customers, finances, compliance, healthcare, or safety generally require significantly more human involvement.\n\nSuccessful organizations increase autonomy gradually as confidence, monitoring, and governance mature rather than granting unrestricted authority from the beginning.",
      },
      {
        question: "Why is process design so important?",
        answer:
          "Agents operate within processes. If the underlying workflow is inconsistent, poorly documented, or constantly changing, the agent simply reproduces those weaknesses more quickly.\n\nOrganizations frequently discover that preparing for AI requires improving documentation, clarifying responsibilities, standardizing procedures, and defining success more precisely. Those improvements often create value before the first agent is even deployed.",
      },
      {
        question: "Who is responsible when an agent makes a mistake?",
        answer:
          "Responsibility always remains with the organization. AI agents don’t assume legal or organizational accountability. They execute work on behalf of the people and businesses that design, deploy, and supervise them.\n\nFor that reason, governance, auditing, logging, approval workflows, and clear ownership remain essential components of any enterprise agent system.",
      },
      {
        question: "How should organizations build reliable agents?",
        answer:
          "Start with a well-defined business problem rather than an interesting technology. Identify repetitive workflows, establish clear success criteria, connect reliable data sources, implement appropriate safeguards, and monitor performance continuously.\n\nOrganizations that focus on process quality, governance, and gradual deployment generally achieve far more reliable results than those attempting to maximize autonomy immediately.",
      },
    ],
  },
  {
    id: "agentic-web",
    title: "The Agentic Web",
    answer:
      "As agents interact directly with websites, APIs, and digital services, the web becomes an environment for software acting on behalf of people—not only a collection of pages for people to read.",
    body:
      "This shift makes structured information, trusted identities, reliable APIs, and verifiable content more important. Organizations will increasingly design digital experiences for both human visitors and the agents working for them.",
    closing:
      "The agentic web needs information and actions that are structured, trustworthy, and verifiable.",
    videos: [],
    faqs: [
      {
        question: "What is the Agentic Web?",
        answer:
          "The Agentic Web describes an internet where AI agents increasingly interact directly with websites, APIs, digital services, and organizational systems on behalf of people.\n\nInstead of humans manually navigating every website themselves, agents increasingly retrieve information, complete transactions, compare options, and coordinate activities automatically. Websites evolve from destinations into services that both humans and software consume.",
      },
      {
        question: "Why will websites change because of AI agents?",
        answer:
          "Traditional websites were optimized primarily for human readers. Agents require structured data, reliable APIs, semantic organization, authentication, and machine-readable information.\n\nAs more activity shifts toward AI-mediated interactions, organizations will increasingly design digital experiences that support both human visitors and automated systems simultaneously.",
      },
      {
        question: "How do agents know which information to trust?",
        answer:
          "Agents rely on multiple signals, including structured data, authoritative sources, system permissions, provenance, authentication, consistency, and organizational trust.\n\nFuture systems will likely place even greater emphasis on verification because agents increasingly perform actions rather than simply presenting information. Trust becomes an operational requirement rather than merely a branding consideration.",
      },
      {
        question: "Why are APIs becoming more important?",
        answer:
          "APIs provide reliable, structured ways for software systems to exchange information. Unlike webpages designed for people, APIs are specifically intended for automated interactions.\n\nAs agents become more common, organizations with well-designed APIs will often be easier to integrate, automate, and incorporate into broader workflows than organizations relying exclusively on traditional websites.",
      },
      {
        question: "What makes a website agent-ready?",
        answer:
          "An agent-ready website goes beyond making information understandable. It combines accurate content and semantic structure with reliable interfaces, permissions, APIs, and feedback that allow software systems to take authorized action.\n\nAn AI-ready website helps systems retrieve and understand information. An agent-ready website also enables them to act safely. The objective is not replacing human visitors; it is supporting both people and authorized software.",
      },
    ],
  },
];

function faqFromAgents(sectionId, question) {
  return sections
    .find((section) => section.id === sectionId)
    ?.faqs.find((item) => item.question === question);
}

const agentFaqs = {
  "what-agents-are": [
    {
      question:
        "How is an AI agent different from a chatbot or traditional automation?",
      answer:
        "A chatbot primarily generates responses in a conversation. Traditional automation follows predefined rules and usually executes the same sequence when the same conditions occur. An AI agent combines a model with tools, memory, permissions, and workflow logic so it can pursue a goal and adapt some of its actions to the available information.\n\nAgents do not replace conventional automation. They extend automation into work that involves language, unstructured information, or bounded choices. The surrounding software still determines what the agent can access and do.",
    },
  ],
  "agents-at-work": [
    {
      question: "Which workflows are best suited for AI agents?",
      answer:
        "Good candidates have a clear objective, digitally available information, observable outcomes, and enough repetition to justify automation. Agents are especially useful when work repeatedly moves between systems or requires interpreting unstructured information that fixed rules handle poorly.\n\nStart with a well-understood process and manageable consequences. Customer-support routing, document processing, reporting, scheduling, monitoring, and workflow preparation may fit these conditions, but the suitability depends on the actual process rather than the label attached to it.",
    },
    {
      question: "How do AI agents change people’s roles in a workflow?",
      answer:
        "Agents can take on monitoring, retrieval, routine coordination, and repeatable actions. People then spend more time defining goals, handling exceptions, reviewing consequential output, maintaining relationships, and deciding what should happen when the situation falls outside normal boundaries.\n\nThe effect on a role depends on how much of its work can be separated into reliable tasks. Automating activities does not automatically eliminate the need for the people who provide context, judgment, and accountability.",
    },
  ],
  "reliable-agents": [
    {
      question: "What are the main requirements for a reliable AI agent?",
      answer:
        "A reliable agent needs a clear objective, a well-understood process, current information, dependable integrations, limited permissions, observable success criteria, and a named owner. Testing should cover expected cases, missing or conflicting information, tool failures, and escalation paths.\n\nReliability must also be maintained after launch. Monitor errors, overrides, source changes, and unexpected behavior, then feed those observations back into the process, instructions, permissions, and evaluations.",
    },
    faqFromAgents("reliable-agents", "How much autonomy should agents have?"),
    faqFromAgents(
      "reliable-agents",
      "Who is responsible when an agent makes a mistake?",
    ),
  ],
  "agentic-web": [
    {
      question: "What makes a digital service ready for AI agents?",
      answer:
        "An agent-ready service provides accurate, structured information and reliable interfaces through which authorized software can act. It also needs identity, permissions, validation, clear error responses, and feedback that lets the agent or a person determine whether an action succeeded.\n\nA website can make information easy to retrieve without being safe for automated action. Agent readiness begins when the service can constrain, verify, and account for what software does on a person’s behalf.",
    },
    faqFromAgents(
      "agentic-web",
      "How do agents know which information to trust?",
    ),
    faqFromAgents("agentic-web", "Why are APIs becoming more important?"),
  ],
};

const curatedSections = sections.map((section) => ({
  ...section,
  faqs: agentFaqs[section.id] || [],
}));

const sources = mergeSources([
  {
    title: "Tool Use in Agent Systems",
    publisher: "NIST",
    year: "2025",
    href: "https://www.nist.gov/news-events/news/2025/08/lessons-learned-consortium-tool-use-agent-systems",
    description:
      "A practical taxonomy for describing agent tools, capabilities, constraints, and risk.",
  },
  {
    title: "Identity and Authority of Software Agents",
    publisher: "NIST NCCoE",
    year: "2026",
    href: "https://www.nist.gov/news-events/news/2026/02/new-concept-paper-identity-and-authority-software-agents",
    description:
      "Considerations for identifying, authorizing, auditing, and constraining software agents.",
  },
  {
    title: "Strengthening AI Agent Hijacking Evaluations",
    publisher: "NIST CAISI",
    year: "2025",
    href: "https://www.nist.gov/news-events/news/2025/01/technical-blog-strengthening-ai-agent-hijacking-evaluations",
    description:
      "Research on indirect prompt injection and the security risks of agents acting on untrusted information.",
  },
], sourcesFor(["agentsReliability", "agentsAuthority", "agentsSecurity"]));

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "AI Agents: From Answering Questions to Getting Work Done",
  description:
    "A practical guide to what AI agents are, where they create value, why they fail, and how to build reliable agent-based systems.",
  url: `${siteConfig.siteUrl}/ai-agents`,
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
  about: ["AI agents", "Automation", "Agentic Web", "Artificial intelligence"],
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteConfig.siteUrl}/ai-agents`,
  },
  datePublished: "2026-07-24",
  dateModified: "2026-07-25",
  image: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
  citation: sources.map((source) => source.href),
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: curatedSections.flatMap((section) => section.faqs).map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function AiAgentsPage() {
  return (
    <TopicPage
      topicKey="agents"
      articleSchema={structuredData}
      faqSchema={faqStructuredData}
      path="/ai-agents"
      breadcrumb="AI Agents"
      hero={{ eyebrow: "AI Agents", title: "From Answering Questions to Getting Work Done", lead: "AI agents represent the next step beyond tools that generate text, summarize information, write code, and answer questions.", description: "Agents can plan work, interact with software, retrieve information, make decisions within defined boundaries, and complete multi-step tasks across systems. This guide explains where they create value and how to build them without creating chaos.", updated: "2026-07-25", updatedLabel: "July 25, 2026", startHref: "#what-agents-are", startLabel: "Start with what agents are", titleClassName: "max-w-4xl", image: { src: "/images/topics/ai-agents-hero.webp", alt: "A bounded agent loop moves through information, tools, observation, evaluation, and human oversight." } }}
      audience={["Business leaders evaluating AI agents for their organization.", "Professionals interested in automating complex workflows.", "Developers building AI-powered applications.", "Teams preparing for the next generation of AI-enabled work.", "Anyone separating chatbots, automation, and AI agents."]}
      sectionTitles={{ audience: "Who should learn about AI agents", evidence: "Evidence about AI agents" }}
      sections={curatedSections}
      sources={sources}
      afterSections={<section className="py-14 md:py-20"><div className="max-w-3xl"><p className="type-label text-library-walnut">Closing</p><h2 className="mt-2 text-3xl font-semibold leading-tight md:text-4xl">Machine execution, guided by human judgment</h2><p className="mt-5 text-lg leading-relaxed text-library-ink md:text-xl">AI agents represent a transition from generating information to accomplishing work. Their value comes from reducing the coordination required to move information, execute processes, and connect systems.</p><p className="mt-4 leading-relaxed text-library-muted">Organizations that succeed will focus less on the intelligence of the model alone and more on trustworthy processes, high-quality data, and clear accountability. Reliable agent systems combine machine execution with human judgment.</p></div></section>}
      next={{ title: "See how AI changes software development", description: "Explore how AI affects the development lifecycle, technical roles, engineering workflows, and the judgment required to build reliable systems.", href: "/software-development-and-ai", linkLabel: "Explore Software Development and AI", topicKey: "software" }}
    />
  );
}
