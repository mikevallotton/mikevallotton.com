import Link from "next/link";
import Image from "next/image";

const topics = [
  {
    key: "fundamentals",
    href: "/ai-fundamentals",
    title: "AI Fundamentals",
    description:
      "Understand how AI works, why context and iteration matter, and how to use it responsibly.",
    image: "/images/topics/ai-fundamentals-hero.webp",
  },
  {
    key: "work",
    href: "/ai-and-work",
    title: "AI and Work",
    description:
      "Learn how AI is changing workflows, careers, teams, and organizational expectations.",
    image: "/images/topics/ai-work-hero.webp",
  },
  {
    key: "agents",
    href: "/ai-agents",
    title: "AI Agents",
    description:
      "Understand how AI moves from answering questions to completing multi-step work.",
    image: "/images/topics/ai-agents-hero.webp",
  },
  {
    key: "search",
    href: "/ai-search-and-geo",
    title: "AI Search and GEO",
    description:
      "Learn how AI is changing discovery and what makes information understandable and trustworthy to generative systems.",
    image: "/images/topics/ai-search-hero.webp",
  },
  {
    key: "software",
    href: "/software-development-and-ai",
    title: "Software Development and AI",
    description:
      "Explore how AI changes the development lifecycle, technical roles, and the judgment required to build reliable systems.",
    image: "/images/topics/software-ai-hero.webp",
  },
  {
    key: "thinking",
    href: "/ai-and-thinking",
    title: "AI and Thinking",
    description:
      "Use AI to support reasoning, learning, creativity, and exploration without outsourcing the thinking that matters.",
    image: "/images/topics/ai-thinking-hero.webp",
  },
];

export default function TopicsSection() {
  return (
    <section
      id="topics"
      aria-labelledby="topics-title"
      className="scroll-mt-28 border-b border-library-parchment py-14 md:py-20"
    >
      <div className="grid gap-6 md:grid-cols-[15rem_1fr] md:gap-12">
        <div>
          <p className="type-label text-library-walnut">
            Topics
          </p>
          <h2 id="topics-title" className="mt-3 text-3xl font-semibold md:text-4xl">
            Build your AI fluency
          </h2>
          <p className="mt-4 leading-relaxed text-library-muted">
            Explore topics that help you understand AI, apply it to your work,
            extend your personal capabilities, and prepare for the systems it is
            changing.
          </p>
        </div>
        <div className="topic-index border-t border-library-ink/30">
          {topics.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className={`topic--${topic.key} group grid border-b border-library-ink/30 py-7 no-underline md:grid-cols-[1fr_auto] md:items-center md:gap-6 md:py-10`}
            >
              <span className="topic-index__art" aria-hidden="true">
                <Image
                  src={topic.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 28vw, 0px"
                  className="object-cover"
                />
              </span>
              <h3 className="mt-5 text-3xl font-semibold transition-transform duration-500 group-hover:translate-x-2 md:mt-0 md:text-5xl">
                {topic.title}
              </h3>
              <p className="mt-3 max-w-xl leading-relaxed text-library-muted md:col-start-1">
                {topic.description}
              </p>
              <span className="topic-index__link mt-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[.16em] text-library-walnut md:col-start-1">
                Explore {topic.title}
                <span aria-hidden="true" className="site-menu__arrow topic-index__link-arrow">
                  ↗
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
