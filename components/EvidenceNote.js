import { evidenceSources } from "../content/evidence";

export default function EvidenceNote({ note }) {
  if (!note) return null;

  return (
    <div data-evidence-note-trigger className="mt-7">
      <aside
        data-evidence-note
        className="rounded-xl border border-library-parchment bg-accent-soft/70 p-5 md:p-6"
      >
        <p className="type-label text-library-walnut">
          What the evidence shows
        </p>
        <p className="mt-2 max-w-3xl leading-relaxed text-library-muted">{note.text}</p>
        <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm">
          {note.sourceIds.map((id) => {
            const source = evidenceSources[id];
            return (
              <a key={id} href={source.href} target="_blank" rel="noreferrer">
                {source.publisher}, {source.year}
              </a>
            );
          })}
        </p>
      </aside>
    </div>
  );
}
