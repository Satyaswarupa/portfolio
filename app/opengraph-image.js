import { ImageResponse } from "next/og";

export const alt = "Satyaswarupa Parida — MERN Stack Developer & UI Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#080800",
          backgroundImage:
            "radial-gradient(circle at 18% 20%, rgba(59,158,255,0.20), transparent 45%), radial-gradient(circle at 85% 85%, rgba(37,99,235,0.16), transparent 45%)",
          color: "#f5f0e8",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 600,
            color: "#3b9eff",
            letterSpacing: 6,
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          Rabble Razz
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 900, letterSpacing: -3 }}>
          <span>Satyaswarupa&nbsp;</span>
          <span style={{ color: "#3b9eff" }}>Parida</span>
        </div>
        <div style={{ display: "flex", fontSize: 34, marginTop: 30, color: "rgba(245,240,232,0.75)" }}>
          MERN Stack Developer &amp; UI Designer
        </div>
        <div style={{ display: "flex", fontSize: 24, marginTop: 16, color: "rgba(245,240,232,0.45)" }}>
          Bhadrak, Odisha · Building for clients across the US
        </div>
      </div>
    ),
    { ...size }
  );
}
