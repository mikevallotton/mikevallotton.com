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
        <p className="type-label topic-accent-text">
          {eyebrow}
        </p>
        <h1
          className={`type-title mt-5 ${titleClassName}`}
        >
          {title}
        </h1>
        <p className="type-lead mt-7 max-w-3xl !text-xl text-library-ink md:!text-2xl">
          {lead}
        </p>
        <p
          className={`type-body mt-5 text-base text-library-muted md:text-lg ${descriptionClassName}`}
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
