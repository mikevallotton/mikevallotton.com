export default function PrinciplesGrid({ items }) {
  return (
    <ul className="editorial-grid">
      {items.map((item) => {
        const [title, description] = Array.isArray(item) ? item : [item, null];

        return (
          <li key={title} className="editorial-grid__item">
            <h3>{title}</h3>
            {description ? <p>{description}</p> : null}
          </li>
        );
      })}
    </ul>
  );
}
