import path from "node:path";
import { readFile } from "node:fs/promises";
import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const runtime = "nodejs";

export default async function OpenGraphImage() {
  const headshotBuffer = await readFile(path.join(process.cwd(), "public", "headshot.jpg"));
  const headshotSrc = `data:image/jpeg;base64,${headshotBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #0f1713 0%, #1b221d 45%, #8d7446 100%)",
          color: "#f6f1e7",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: "56px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "720px",
          }}
        >
          <div
            style={{
              color: "#d6c29d",
              display: "flex",
              fontSize: 28,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
            }}
          >
            Mike Vallotton
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            Practical AI Guidance
          </div>
          <div
            style={{
              color: "#f6f1e7",
              display: "flex",
              fontSize: 30,
              lineHeight: 1.35,
              opacity: 0.88,
            }}
          >
            Understand AI. Use it well. Become more capable.
          </div>
        </div>

        <div
          style={{
            background: "rgba(246, 241, 231, 0.1)",
            border: "1px solid rgba(246, 241, 231, 0.18)",
            borderRadius: 32,
            display: "flex",
            overflow: "hidden",
            padding: 12,
          }}
        >
          <img
            alt="Mike Vallotton"
            height="460"
            src={headshotSrc}
            style={{
              borderRadius: 24,
              objectFit: "cover",
              objectPosition: "center top",
            }}
            width="460"
          />
        </div>
      </div>
    ),
    size,
  );
}
