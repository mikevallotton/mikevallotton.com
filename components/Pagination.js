import Link from "next/link";

export default function Pagination({ currentPage, pageCount, pathForPage }) {
  if (pageCount <= 1) return null;

  return (
    <nav className="pagination" aria-label="Video archive pages">
      {currentPage > 1 ? (
        <Link href={pathForPage(currentPage - 1)} rel="prev">Previous</Link>
      ) : null}
      <p>Page {currentPage} of {pageCount}</p>
      {currentPage < pageCount ? (
        <Link href={pathForPage(currentPage + 1)} rel="next">Next</Link>
      ) : null}
    </nav>
  );
}
