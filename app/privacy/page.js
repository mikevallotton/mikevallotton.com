import Breadcrumbs from "../../components/Breadcrumbs";
import ContentMeta from "../../components/ContentMeta";

const updated = "2026-07-26";

export const metadata = {
  title: "Privacy",
  description: "How mikevallotton.com handles analytics, local consent choices, and third-party video thumbnails.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="reading-surface mx-auto max-w-3xl">
      <Breadcrumbs current="Privacy" path="/privacy" />
      <header className="border-b border-library-parchment pb-10 pt-8">
        <p className="eyebrow">Site information</p>
        <h1 className="mt-4 text-5xl font-semibold">Privacy</h1>
        <p className="mt-6 text-lg leading-relaxed text-library-muted">
          This site is designed to collect as little visitor information as practical.
        </p>
        <ContentMeta
          showAuthor={false}
          updated={updated}
          updatedLabel="July 26, 2026"
          className="mt-5"
        />
      </header>

      <div className="prose-content space-y-10 py-10">
        <section>
          <h2>Google Analytics</h2>
          <p>
            If Google Analytics is enabled, it does not load or send information
            to Google until you select “Accept analytics.” I use the resulting
            reports only to review site traffic and understand which pages are
            useful. I do not use them for advertising or personalized marketing.
          </p>
          <p>
            If you decline, no Google Analytics tag is loaded. Your choice is
            stored in your browser so the site can remember it. You can reopen
            the privacy choices from the footer and withdraw consent at any time.
          </p>
        </section>

        <section>
          <h2>Video thumbnails and external links</h2>
          <p>
            Topic pages display thumbnails hosted by YouTube. Loading those
            images makes a request to YouTube and may disclose ordinary request
            information such as your IP address, browser details, and referring
            page. Videos open on YouTube only when you follow a video link.
          </p>
        </section>

        <section>
          <h2>Information you provide elsewhere</h2>
          <p>
            This site has no accounts, comments, database, or contact form.
            External services linked from this site operate under their own
            privacy terms.
          </p>
        </section>

        <section>
          <h2>Questions</h2>
          <p>
            Privacy questions can be sent through the social and professional
            links on the <a href="/links">links page</a>.
          </p>
        </section>
      </div>
    </article>
  );
}
