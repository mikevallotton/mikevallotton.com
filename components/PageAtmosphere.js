const ornaments = [
  { className: "page-orbit page-orbit--one", drift: "-18", rotate: "32" },
  { className: "page-orbit page-orbit--two", drift: "22", rotate: "-38" },
  { className: "page-orbit page-orbit--three", drift: "-26", rotate: "46" },
  { className: "page-orbit page-orbit--four", drift: "18", rotate: "-28" },
  { className: "page-orbit page-orbit--five", drift: "-22", rotate: "40" },
  { className: "page-orbit page-orbit--six", drift: "26", rotate: "-44" },
  { className: "page-orbit page-orbit--seven", drift: "-18", rotate: "34" },
  { className: "page-orbit page-orbit--eight", drift: "24", rotate: "-36" },
  { className: "page-orbit page-orbit--nine page-orbit--accent", drift: "20", rotate: "-30" },
  { className: "page-orbit page-orbit--ten page-orbit--accent", drift: "-24", rotate: "42" },
  { className: "page-orbit page-orbit--eleven page-orbit--accent", drift: "18", rotate: "-36" },
  { className: "page-orbit page-orbit--twelve page-orbit--accent", drift: "-20", rotate: "32" },
  { className: "page-orbit page-orbit--thirteen page-orbit--accent", drift: "26", rotate: "-44" },
  { className: "page-orbit page-orbit--fourteen page-orbit--accent", drift: "-18", rotate: "38" },
  { className: "page-orbit page-orbit--fifteen page-orbit--accent", drift: "22", rotate: "-34" },
  { className: "page-orbit page-orbit--sixteen page-orbit--accent", drift: "-24", rotate: "40" },
];

export default function PageAtmosphere() {
  return (
    <div className="page-atmosphere" aria-hidden="true">
      {ornaments.map((ornament) => (
        <span
          key={ornament.className}
          className={ornament.className}
          data-page-orbit
          data-orbit-drift={ornament.drift}
          data-orbit-rotate={ornament.rotate}
        >
          <span className="page-orbit__satellite" data-orbit-satellite />
        </span>
      ))}
    </div>
  );
}
