import Link from "next/link";

export default function JobSearchPrivacyWarning() {
  return (
    <aside
      className="job-search-privacy-warning"
      aria-labelledby="job-search-privacy-warning-title"
    >
      <div className="job-search-privacy-warning__mark" aria-hidden="true">
        !
      </div>
      <div className="job-search-privacy-warning__copy">
        <p className="type-label">Before you begin</p>
        <h2 id="job-search-privacy-warning-title">
          Protect your private information first
        </h2>
        <p>
          These prompts work best when you give AI real context about your
          resume, work history, constraints, compensation needs, employers,
          projects, and contacts. Treat that information as sensitive.
        </p>
        <p>
          Before using this process, understand how your AI tool handles prompts,
          uploads, retention, and model training. For this exercise, I strongly
          urge you to turn off model training or data sharing if your tool offers
          that setting. Do not paste confidential employer, customer, school,
          patient, student, or proprietary information unless you are using an
          approved account for that data.
        </p>
        <p>
          I talk about this more in{" "}
          <Link href="/ai-fundamentals#using-ai-responsibly">
            the responsible AI section of AI Fundamentals
          </Link>
          , including the privacy video.
        </p>
      </div>
    </aside>
  );
}
