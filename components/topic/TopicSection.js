import EvidenceNote from "../EvidenceNote";
import FaqList from "../FaqList";
import RelatedConcepts from "../RelatedConcepts";
import VideoGrid from "../VideoGrid";
import TopicImage from "./TopicImage";

export default function TopicSection({ section, faqItems }) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-title`}
      className={`topic-section scroll-mt-36 border-b border-library-parchment py-14 last:border-b-0 md:py-20 ${section.image ? "topic-section--with-art" : ""}`}
    >
      {section.image ? <TopicImage {...section.image} /> : null}
      <div className="topic-section__content reading-surface max-w-3xl">
        <h2
          id={`${section.id}-title`}
          className="text-3xl font-semibold leading-tight md:text-4xl"
        >
          {section.title}
        </h2>
        <p className="mt-5 text-lg font-medium leading-relaxed text-library-ink md:text-xl">
          {section.answer}
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-library-muted">
          {section.body}
        </p>
        {section.evidence?.map((note) => (
          <EvidenceNote key={note.text} note={note} />
        ))}
        <RelatedConcepts links={section.related} />
      </div>
      <VideoGrid videos={section.videos} articles={section.articles} />
      {section.closing ? (
        <blockquote className="reading-surface topic-accent-border mt-9 border-l-2 pl-5 font-serif text-xl font-medium leading-relaxed text-library-ink md:text-2xl">
          {section.closing}
        </blockquote>
      ) : null}
      <FaqList items={faqItems || section.faqs} className="mt-10" />
    </section>
  );
}
