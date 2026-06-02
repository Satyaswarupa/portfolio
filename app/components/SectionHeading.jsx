export default function SectionHeading({ label, title, highlight }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 60 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 16 }}>
        <div style={{ width: 40, height: 2, background: "linear-gradient(90deg,#f5c400,#f59e0b)", borderRadius: 9999 }} />
        <span style={{ fontSize: 13, color: "#f5c400", fontWeight: 600, textTransform: "uppercase", letterSpacing: 2 }}>
          {label}
        </span>
        <div style={{ width: 40, height: 2, background: "linear-gradient(90deg,#f59e0b,#f5c400)", borderRadius: 9999 }} />
      </div>
      <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-1px" }}>
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
    </div>
  );
}
