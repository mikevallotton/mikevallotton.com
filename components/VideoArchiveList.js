import Image from "next/image";
import { evidenceSources } from "../content/evidence";

function formatPublishedDate(value) {
  if (!value) return "Date pending";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="video-archive__play">
      <path d="M8 5.5v13l10-6.5L8 5.5z" />
    </svg>
  );
}

function platformLinks(video) {
  return [
    ["YouTube", video.youtubeUrl],
    ["TikTok", video.tiktokUrl],
    ["LinkedIn", video.linkedinUrl],
    ["X", video.xUrl],
  ].filter(([, href]) => Boolean(href));
}

function Transcript({ text, note, title }) {
  if (!text) return null;

  const paragraphs = text
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <details className="video-archive__transcript">
      <summary>
        Read transcript<span className="sr-only"> for “{title}”</span>
      </summary>
      <div>
        <p className="video-archive__transcript-note">Lightly edited for clarity.</p>
        {note ? <p className="video-archive__transcript-note">{note}</p> : null}
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </details>
  );
}

function VideoSources({ sourceIds, title }) {
  const sources = (sourceIds || [])
    .map((id) => evidenceSources[id])
    .filter(Boolean);

  if (!sources.length) return null;

  return (
    <div className="mt-5 border-t border-library-parchment pt-4">
      <p className="type-label text-library-walnut">Sources</p>
      <ul className="mt-2 space-y-2 text-sm leading-relaxed">
        {sources.map((source) => (
          <li key={source.href}>
            <a
              href={source.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${source.title}, ${source.publisher} (opens in a new tab)`}
              className="font-semibold text-library-walnut"
            >
              {source.title}
            </a>{" "}
            <span className="text-library-muted">
              ({source.publisher}, {source.year})
            </span>
          </li>
        ))}
      </ul>
      <p className="sr-only">Sources for {title}</p>
    </div>
  );
}

export default function VideoArchiveList({ videos }) {
  if (!videos?.length) return null;

  return (
    <div className="video-archive-list">
      {videos.map((video) => {
        const links = platformLinks(video);
        const hasYoutube = Boolean(video.youtubeUrl);
        const thumbContent = (
          <>
            {video.videoId && hasYoutube ? (
              <Image
                src={`https://i.ytimg.com/vi/${video.videoId}/maxresdefault.jpg`}
                alt=""
                fill
                sizes="(min-width: 768px) 144px, 55vw"
                className="video-archive__thumb-image"
              />
            ) : null}
            <span className="video-archive__thumb-shade" aria-hidden="true" />
            <span>{hasYoutube ? "Watch video" : "Link pending"}</span>
            <span className="video-archive__play-button">
              <PlayIcon />
            </span>
          </>
        );

        return (
          <article key={video.slug} className="video-archive-item">
            {hasYoutube ? (
              <a
                href={video.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Watch “${video.title}” on YouTube`}
                className="video-archive__thumb no-underline"
              >
                {thumbContent}
              </a>
            ) : (
              <div className="video-archive__thumb">
                {thumbContent}
              </div>
            )}
            <div className="video-archive__body">
              <p className="type-label text-library-walnut">
                {formatPublishedDate(video.published)}
              </p>
              <h2>{video.title}</h2>
              {video.description ? <p>{video.description}</p> : null}
              {links.length ? (
                <div className="video-archive__links" aria-label="Video links">
                  {links.map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${video.title} on ${label} (opens in a new tab)`}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              ) : (
                <p className="type-label text-library-walnut">Video link pending</p>
              )}
              <Transcript
                text={video.transcript}
                note={video.transcriptNote}
                title={video.title}
              />
              <VideoSources sourceIds={video.sourceIds} title={video.title} />
            </div>
          </article>
        );
      })}
    </div>
  );
}
