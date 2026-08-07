import Breadcrumbs from "../../../components/Breadcrumbs";
import ContentContinuation from "../../../components/ContentContinuation";
import ContentMeta from "../../../components/ContentMeta";
import EvidenceNote from "../../../components/EvidenceNote";
import FurtherReading from "../../../components/FurtherReading";
import JsonLd from "../../../components/JsonLd";
import RelatedConcepts from "../../../components/RelatedConcepts";
import TopicSectionNav from "../../../components/topic/TopicSectionNav";
import { evidenceNotes, sourcesFor } from "../../../content/evidence";
import { siteConfig } from "../../../content/siteConfig";

const path = "/articles/agentic-soc-enterprise-ai";
const published = "2026-08-07";
const description =
  "A field note from the Agentic SOC Forum on what enterprise AI requires: process design, orchestration, bounded autonomy, auditability, governance, and human accountability.";

const eventUrl =
  "https://1businessworld.com/2026/08/agentic-soc-forum/agentic-soc-forum-leaders-shape-the-future-of-security-operations/";
const oneBusinessWorldUrl = "https://1businessworld.com/";
const cyngularUrl = "https://www.cyngular.com/";

const people = {
  matthewMorrow: "https://www.linkedin.com/in/matthew-morrow-11895183",
  amandaCameronWindsor: "https://www.linkedin.com/in/ancameron/",
  paulMoskovich: "https://www.linkedin.com/in/paul-moskovich-4308787b/",
  tylerMullins: "https://www.linkedin.com/in/tyler-mullins618",
  annDunkin: "https://www.linkedin.com/in/anndunkin",
};

export const metadata = {
  title: {
    absolute: "What an Agentic SOC Teaches Us About Enterprise AI",
  },
  description,
  alternates: { canonical: path },
  openGraph: {
    title: "What an Agentic SOC Teaches Us About Enterprise AI",
    description,
    url: path,
    type: "article",
    publishedTime: published,
    authors: [`${siteConfig.siteUrl}/about`],
  },
};

const sections = [
  { id: "process", title: "Start with the process", navTitle: "Process" },
  { id: "operating-model", title: "AI amplifies the operating model", navTitle: "Operating model" },
  { id: "orchestration", title: "Specialized agents require orchestration", navTitle: "Orchestration" },
  { id: "autonomy", title: "Autonomy should be earned", navTitle: "Autonomy" },
  { id: "human-role", title: "People move from operators to commanders", navTitle: "Human role" },
  { id: "accountability", title: "Accountability stays with people", navTitle: "Accountability" },
  { id: "auditability", title: "Auditability belongs inside the system", navTitle: "Auditability" },
  { id: "governance", title: "Governance follows consequence", navTitle: "Governance" },
  { id: "where-to-start", title: "Start somewhere you can learn", navTitle: "Where to start" },
];

const visibleQuestions = [
  "Which parts of a process should agents perform?",
  "Where must people remain involved?",
  "How should multiple agents and systems coordinate?",
  "What evidence should be preserved?",
  "Who remains accountable when an AI-assisted decision is wrong?",
  "How much autonomy should an agent receive before it has earned more?",
];

const autonomyLevels = [
  {
    level: "01",
    title: "Observe",
    body: "Gather context without changing the environment.",
  },
  {
    level: "02",
    title: "Recommend",
    body: "Analyze evidence and propose the next action.",
  },
  {
    level: "03",
    title: "Execute with approval",
    body: "Prepare the action while a person retains authorization.",
  },
  {
    level: "04",
    title: "Execute bounded actions",
    body: "Perform low-risk, reversible actions inside defined limits.",
  },
  {
    level: "05",
    title: "Operate in a controlled domain",
    body: "Handle a narrow class of work with monitoring, escalation, and audit controls.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What an Agentic SOC Teaches Us About Enterprise AI",
  description,
  datePublished: published,
  dateModified: published,
  mainEntityOfPage: `${siteConfig.siteUrl}${path}`,
  image: `${siteConfig.siteUrl}${siteConfig.ogImage}`,
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
  citation: sourcesFor([
    "agenticSocForum",
    "agentsReliability",
    "agentsAuthority",
    "thinkingConfidence",
  ]).map((source) => source.href),
};

function ExternalLink({ href, className = "", children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

function ArticleSection({ id, eyebrow, title, children, related }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="article-field-section scroll-mt-36 border-b border-library-parchment py-14 md:py-20"
    >
      <div className="grid gap-8 md:grid-cols-[15rem_minmax(0,48rem)] md:gap-12">
        <div>
          <p className="type-label text-library-walnut">{eyebrow}</p>
          <h2 id={`${id}-title`} className="mt-3 text-3xl font-semibold leading-tight">
            {title}
          </h2>
        </div>
        <div className="reading-surface space-y-5 text-lg leading-relaxed text-library-muted">
          {children}
          <RelatedConcepts links={related} />
        </div>
      </div>
    </section>
  );
}

export default function AgenticSocEnterpriseAiPage() {
  return (
    <article className="article-page article-page--field-note">
      <JsonLd data={articleSchema} />
      <Breadcrumbs current="Agentic SOC and Enterprise AI" path={path} />

      <header className="article-hero border-b border-library-parchment pb-14 pt-2 md:pb-20 md:pt-6">
        <div className="reading-surface max-w-5xl">
          <p className="eyebrow text-library-walnut">Article / Enterprise AI</p>
          <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-[0.98] sm:text-5xl md:text-7xl">
            What an Agentic SOC Teaches Us About Enterprise AI
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-library-ink md:text-2xl">
            Security operations make the hard questions of enterprise AI visible:
            process, orchestration, autonomy, auditability, governance, and
            accountability.
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-library-muted">
            I attended the{" "}
            <ExternalLink href={eventUrl}>Agentic SOC Forum</ExternalLink> in
            Atlanta, hosted by{" "}
            <ExternalLink href={oneBusinessWorldUrl}>1BusinessWorld</ExternalLink>{" "}
            and presented by{" "}
            <ExternalLink href={cyngularUrl}>Cyngular Security</ExternalLink>,
            expecting a focused discussion about cybersecurity operations. The
            security use case was interesting, but the larger lesson was broader.
          </p>
          <ContentMeta
            published={published}
            publishedLabel="August 7, 2026"
            className="mt-6"
          />
          <div className="mt-9 flex flex-wrap gap-3">
            <ExternalLink href={eventUrl} className="btn btn-primary no-underline">
              Read the event reference <span aria-hidden="true">{"\u2197"}</span>
            </ExternalLink>
            <ExternalLink href={cyngularUrl} className="btn btn-secondary no-underline">
              Visit Cyngular Security <span aria-hidden="true">{"\u2197"}</span>
            </ExternalLink>
          </div>
        </div>
      </header>

      <TopicSectionNav sections={sections} />

      <section className="border-b border-library-parchment py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-[15rem_1fr] md:gap-12">
          <div>
            <p className="type-label text-library-walnut">What security shows</p>
            <h2 className="mt-3 text-2xl font-semibold">
              The questions every enterprise function eventually faces
            </h2>
          </div>
          <ul className="agentic-soc-question-list">
            {visibleQuestions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        </div>
      </section>

      <ArticleSection
        id="process"
        eyebrow="Process before tools"
        title="Start with the process"
        related={[{ href: "/ai-and-work", label: "How AI changes workflows" }]}
      >
        <p>
          Nearly every conversation returned to the same operating questions:
          what agents should do, where people must stay involved, what evidence
          needs to be preserved, and who owns the outcome when an AI-assisted
          decision is wrong.
        </p>
        <p>
          Security makes those questions unusually visible because mistakes can
          have immediate consequences. A poorly designed security agent might
          overlook an attack, block legitimate activity, expose sensitive data,
          or disrupt a critical system, but the underlying requirements are not
          unique to security.
        </p>
        <p className="font-serif text-2xl font-medium leading-relaxed text-library-ink">
          Enterprise AI is not primarily a model-selection problem. It is a
          process, architecture, governance, and accountability problem.
        </p>
        <p>
          <ExternalLink href={people.matthewMorrow}>Matthew Morrow</ExternalLink>,
          CTO at Rockhaven Homes, repeatedly returned to this point during the
          discussion: understand and fix the process before trying to automate it.
          That resonated because process is where organizations often struggle
          first.
        </p>
        <p>
          Organizations may know they want to use AI before they can clearly
          describe how the work gets done today. The documented process explains
          part of it. Experienced employees carry the rest as tribal knowledge.
          Exceptions accumulate, informal handoffs become normal, and decisions
          happen because someone knows whom to call rather than because ownership
          is clear.
        </p>
        <blockquote className="type-quote topic-accent-border border-l-2 pl-5 text-library-ink">
          The better question is not, &quot;Where can we insert an agent?&quot; It is,
          &quot;If we were designing this process today, which parts should be
          performed by people, conventional software, workflow automation,
          analytics, and AI?&quot;
        </blockquote>
        <p>
          The objective is not to automate the existing process exactly as it
          operates today. The objective is to create a better process.
        </p>
      </ArticleSection>

      <ArticleSection
        id="operating-model"
        eyebrow="The inherited system"
        title="AI amplifies the operating model"
        related={[
          { href: "/ai-and-work", label: "Organizational AI adoption" },
          { href: "/systems-that-hold-up", label: "Systems that hold up" },
        ]}
      >
        <p>
          <ExternalLink href={people.amandaCameronWindsor}>
            Amanda Cameron-Windsor
          </ExternalLink>
          , Global Retail Field CTO at Snowflake, made a point that sharpened the
          theme: agentic AI tends to amplify the operating model it inherits.
        </p>
        <p>
          When responsibilities are clear, data is reliable, decision criteria
          are explicit, and governance works, agents can accelerate the work and
          increase capacity. When those foundations are weak, AI accelerates the
          weakness.
        </p>
        <ul className="agentic-soc-question-list">
          <li>Unclear ownership remains unclear.</li>
          <li>Bad data moves faster.</li>
          <li>Inconsistent decisions become automated inconsistencies.</li>
          <li>Poor handoffs create larger operational gaps.</li>
        </ul>
        <p>
          That is a stronger warning than simply saying organizations should fix
          bad processes before implementing AI. AI can amplify organizational
          ambiguity just as readily as it amplifies productivity.
        </p>
        <EvidenceNote note={evidenceNotes.agentsReliability} />
      </ArticleSection>

      <ArticleSection
        id="orchestration"
        eyebrow="Coordinated work"
        title="Specialized agents require orchestration"
        related={[{ href: "/ai-agents", label: "How AI agents work" }]}
      >
        <p>
          The Agentic SOC presented at the forum used multiple specialized
          agents rather than one general-purpose AI.{" "}
          <ExternalLink href={people.paulMoskovich}>Paul Moskovich</ExternalLink>,
          Co-Founder and CEO of{" "}
          <ExternalLink href={cyngularUrl}>Cyngular Security</ExternalLink>,
          demonstrated a system in which agents supported specialized parts of
          the security workflow, including observation, threat hunting,
          investigation, evidence assembly, recommendations, and reporting.
        </p>
        <p>
          The specific security functions matter less to me than the architectural
          pattern. Enterprise agentic systems will often need specialized
          capabilities for gathering information, monitoring events, analyzing
          evidence, identifying anomalies, recommending actions, validating
          outcomes, and documenting what happened.
        </p>
        <p>
          That resembles the way organizations already structure human work.
          Different participants have specialized responsibilities, but something
          must coordinate the whole. For agents, that orchestration layer has to
          determine who does what, what context and tools each agent receives,
          how work is sequenced, what happens when agents disagree, when a person
          must become involved, and how the chain of activity is recorded.
        </p>
        <p>
          Amanda raised another dimension of the same problem:
          enterprise orchestration will have to work across technology
          ecosystems rather than inside a single clean environment. Without that
          coordination, organizations risk replacing disconnected tools with
          disconnected agents.
        </p>
      </ArticleSection>

      <ArticleSection
        id="autonomy"
        eyebrow="Bounded authority"
        title="Autonomy should be earned"
        related={[
          { href: "/ai-agents", label: "Agent permissions and boundaries" },
          { href: "/systems-that-hold-up", label: "Constrained authority" },
        ]}
      >
        <p>
          Paul&apos;s demonstration made the question of autonomy concrete. The
          resolver was described as effectively read-only in the customer
          environment. It could investigate an incident, assemble evidence,
          recommend remediation, and generate the commands needed to act extremely
          rapidly, but it stopped short of executing those commands. People retain
          that authority.
        </p>
        <blockquote className="type-quote topic-accent-border border-l-2 pl-5 text-library-ink">
          Capability and permission are not the same thing.
        </blockquote>
        <p>
          An agent that can perform an action is not necessarily an agent that
          should be authorized to perform it. Instead of treating autonomy as a
          choice between human control and fully independent agents,
          organizations can treat it as a progression.
        </p>
        <ol className="agentic-soc-autonomy-ladder">
          {autonomyLevels.map((item) => (
            <li key={item.level}>
              <span>{item.level}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p>
          The appropriate level depends on consequence, data quality,
          reversibility, whether the situation is routine or unusual, and how
          reliably the agent has performed. The Cyngular example is useful
          precisely because the technology could go further than the permission
          it had been given.
        </p>
        <EvidenceNote note={evidenceNotes.agentsAuthority} />
      </ArticleSection>

      <ArticleSection
        id="human-role"
        eyebrow="Human command"
        title="People move from operators to commanders"
        related={[{ href: "/ai-and-thinking", label: "Human judgment with AI" }]}
      >
        <p>
          Agents can reduce the time people spend collecting information,
          switching between systems, building timelines, preparing reports, and
          performing repetitive analysis. That does not eliminate the human role.
          It changes it.
        </p>
        <p>
          One phrase from the evening described it as moving people from
          data miners to commanders. I think that distinction is useful. People
          spend less time mechanically producing information and more time
          setting objectives, defining constraints, evaluating evidence, handling
          exceptions, making consequential decisions, and improving the process
          itself.
        </p>
        <p>
          That also changes what AI literacy means. Organizations often describe
          AI literacy as knowing how to write prompts or use an assistant. Those
          skills matter, but operational AI literacy is broader. Employees need
          to understand the work well enough to make tacit knowledge explicit,
          define success and failure, supervise automated work, and recognize
          when an agent is confidently wrong.
        </p>
      </ArticleSection>

      <ArticleSection
        id="accountability"
        eyebrow="Responsibility"
        title="Accountability stays with people"
        related={[
          { href: "/ai-and-thinking", label: "AI does not think like people" },
          { href: "/judgment-over-generation", label: "Judgment over generation" },
        ]}
      >
        <p>
          <ExternalLink href={people.tylerMullins}>Tyler Mullins</ExternalLink>{" "}
          made a comment that immediately caught my attention: AI does not
          really think in the human sense. It predicts outputs from the
          information and patterns available to it.
        </p>
        <p>
          Whatever terminology we use to describe model reasoning, the practical
          implication is more important than the philosophical debate. The AI
          cannot be held accountable. Organizations do not get to say, &quot;That is
          what the AI decided.&quot;
        </p>
        <blockquote className="type-quote topic-accent-border border-l-2 pl-5 text-library-ink">
          Accountability cannot be delegated to the model.
        </blockquote>
        <p>
          People choose the system. People provide the data. People define the
          process and controls. People grant access. People decide how much
          autonomy the agent receives. That does not mean every AI-assisted
          action requires manual approval. It means every system participating
          in consequential work needs an identifiable human or organizational
          owner.
        </p>
        <EvidenceNote note={evidenceNotes.thinkingConfidence} />
      </ArticleSection>

      <ArticleSection
        id="auditability"
        eyebrow="Evidence trail"
        title="Auditability belongs inside the system"
        related={[{ href: "/systems-that-hold-up", label: "Reliable AI workflows" }]}
      >
        <p>
          If an agent participates in consequential work, knowing the final
          output is not enough. The organization needs to reconstruct what
          happened: what triggered the agent, what information it accessed,
          which policies and instructions applied, what tools it used, what it
          recommended or attempted, where a person intervened, what action was
          ultimately taken, and what happened next.
        </p>
        <p>
          That record supports compliance, but compliance is only part of the
          value. The same trail supports troubleshooting, performance
          improvement, incident investigation, employee trust, risk management,
          and organizational learning.
        </p>
        <p>
          It can also capture institutional knowledge. When experienced
          operators review recommendations, handle exceptions, and explain why
          one action is better than another, those decisions can improve future
          playbooks and operating procedures.
        </p>
      </ArticleSection>

      <ArticleSection
        id="governance"
        eyebrow="Governance"
        title="Governance follows consequence"
        related={[
          { href: "/systems-that-hold-up", label: "Ownership and controls" },
          { href: "/ai-and-work", label: "Enterprise AI readiness" },
        ]}
      >
        <p>
          AI governance is often treated as an IT responsibility. It is not.
          Technical teams may implement controls, but the people accountable for
          the underlying business process have to participate in deciding what
          an agent may do, what it may never do, who supervises it, and how its
          decisions are reviewed.
        </p>
        <p>
          <ExternalLink href={people.annDunkin}>Ann Dunkin</ExternalLink>{" "}
          moderated the first panel and repeatedly brought the discussion back
          to practical questions of autonomy, trust, governance, and what
          organizations should actually do next.
        </p>
        <p>
          Those questions cannot be answered only in an enterprise-wide AI
          policy. An agent helping draft an internal communication does not
          present the same risk as an agent changing financial records, blocking
          network traffic, modifying production code, or communicating directly
          with customers. Governance has to reflect the actual context and
          consequence of the work.
        </p>
      </ArticleSection>

      <ArticleSection
        id="where-to-start"
        eyebrow="Next step"
        title="Start somewhere you can learn"
        related={[
          { href: "/bottlenecks-over-use-cases", label: "Find practical starting points" },
          { href: "/quality-over-speed", label: "Pair speed with standards" },
        ]}
      >
        <p>
          Organizations do not need to begin with autonomous agents making
          consequential decisions. In fact, they <s>probably</s> definitely
          should not. A good first implementation is frequent enough to produce meaningful
          learning, narrow enough to understand, low-risk enough to experiment
          safely, supported by accessible data, and valuable enough that
          employees care whether it succeeds.
        </p>
        <p>
          Start with the people who perform the work today. Ask where they spend
          their time, what information they repeatedly gather, which decisions
          are routine, where handoffs fail, what mistakes keep happening, and
          what evidence would make them trust an AI recommendation.
        </p>
        <p className="font-serif text-2xl font-medium leading-relaxed text-library-ink">
          Ask one question that may be even more revealing: what would you never
          allow this system to do on its own?
        </p>
        <p>
          The answer helps define the boundary between capability and acceptable
          autonomy. Then redesign the process before selecting the technology.
        </p>
        <p>
          That was my biggest takeaway from an evening focused on the future of
          the security operations center. I went expecting to learn about AI in
          security. I left thinking about something larger: security may be
          giving us an early look at what it takes to put AI to work across an
          enterprise.
        </p>
        <p>
          The specific agents will vary by industry and function. The
          requirements for making them useful, trustworthy, and accountable will
          not.
        </p>
      </ArticleSection>

      <section className="border-b border-library-parchment py-14 md:py-20">
        <div className="panel -mx-5 grid gap-8 md:-mx-8 md:grid-cols-[1fr_auto] md:items-end lg:-mx-12">
          <div>
            <p className="type-label text-library-walnut">Event reference</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold md:text-4xl">
              The Agentic SOC Forum was hosted by 1BusinessWorld and presented
              by Cyngular Security.
            </h2>
          </div>
          <div className="flex flex-col items-start gap-3">
            <ExternalLink href={eventUrl} className="btn btn-primary no-underline">
              Open event page <span aria-hidden="true">{"\u2197"}</span>
            </ExternalLink>
            <ExternalLink href={oneBusinessWorldUrl}>Visit 1BusinessWorld</ExternalLink>
          </div>
        </div>
      </section>

      <FurtherReading
        sources={sourcesFor([
          "agenticSocForum",
          "agentsReliability",
          "agentsAuthority",
          "thinkingConfidence",
        ])}
      />
      <ContentContinuation
        title="Build agent systems that hold up"
        description="Explore how reliable AI workflows depend on sound information, ownership, constrained authority, evaluation, and feedback."
        href="/systems-that-hold-up"
        linkLabel="Explore Systems That Hold Up"
        topicKey="agents"
      />
    </article>
  );
}
