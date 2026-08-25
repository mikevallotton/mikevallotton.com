import Image from "next/image";

function PlayIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M8 5.5v13l10-6.5L8 5.5z" />
    </svg>
  );
}

export default function ArticleVideoLink({ video, part, total }) {
  if (!video) return null;

  const url = video.url || video.youtubeUrl;
  const videoId = video.videoId || video.youtubeVideoId;

  if (!url || !videoId) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Watch "${video.title}" on YouTube (opens in a new tab)`}
      className="group mt-8 grid max-w-2xl grid-cols-[6.25rem_minmax(0,1fr)] overflow-hidden rounded-lg border border-library-parchment bg-library-paper no-underline transition hover:border-library-walnut hover:shadow-[0_10px_24px_rgba(14,47,37,0.1)] focus-visible:border-library-walnut sm:grid-cols-[7.25rem_minmax(0,1fr)]"
    >
      <div className="relative aspect-[9/16] overflow-hidden bg-library-forest">
        <Image
          src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
          alt=""
          fill
          sizes="(min-width: 640px) 116px, 100px"
          className="object-cover transition group-hover:brightness-90"
        />
        <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-library-paper text-library-forest shadow-sm">
          <PlayIcon />
        </span>
      </div>
      <div className="flex min-w-0 flex-col justify-center px-4 py-4 sm:px-5">
        <p className="type-label text-library-walnut">
          Related video / Part {part} of {total}
        </p>
        <h3 className="mt-2 text-base font-semibold leading-snug text-library-ink sm:text-lg">
          {video.title}
        </h3>
        <span className="mt-4 text-sm font-semibold text-library-walnut">
          Watch on YouTube
        </span>
      </div>
    </a>
  );
}
