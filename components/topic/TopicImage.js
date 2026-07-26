import Image from "next/image";

export default function TopicImage({
  src,
  priority = false,
  variant = "section",
}) {
  const sizes = {
    hero: "(min-width: 1024px) 55vw, 100vw",
    section: "(min-width: 1024px) 38vw, 100vw",
    sidebar: "(min-width: 1024px) 30vw, 0px",
  };

  return (
    <div className={`topic-artwork topic-artwork--${variant}`} aria-hidden="true">
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes={sizes[variant]}
        className="object-cover"
      />
    </div>
  );
}
