import ContentMeta from "../ContentMeta";
import TopicImage from "./TopicImage";

export default function TopicHero({
  eyebrow,
  title,
  lead,
  description,
  updated,
  updatedLabel,
  startHref,
  startLabel,
  titleClassName = "max-w-3xl",
  descriptionClassName = "max-w-2xl",
  image,
}) {
  return (
    <header
      className={`topic-hero border-b border-library-parchment pb-12 pt-2 md:pb-16 md:pt-6 ${
        image ? "topic-hero--with-art" : ""
      }`}
    >
      {image ? <TopicImage {...image} priority variant="hero" /> : null}
      <div className="topic-hero__content reading-surface">
        <p className="topic-accent-text text-xs font-semibold uppercase tracking-[0.2em]">
          {eyebrow}
        </p>
        <h1
          className={`mt-5 text-4xl font-semibold leading-[0.98] sm:text-5xl md:text-6xl ${titleClassName}`}
        >
          {title}
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-relaxed text-library-ink md:text-2xl">
          {lead}
        </p>
        <p
          className={`mt-5 text-base leading-relaxed text-library-muted md:text-lg ${descriptionClassName}`}
        >
          {description}
        </p>
        <ContentMeta
          updated={updated}
          updatedLabel={updatedLabel}
          className="mt-6"
        />
        <a
          href={startHref}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold no-underline"
        >
          {startLabel} <span aria-hidden="true">↓</span>
        </a>
      </div>
    </header>
  );
}
