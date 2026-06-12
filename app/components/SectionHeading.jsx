export default function SectionHeading({ label, title, highlight }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 60 }}>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
        <span className="section-badge">
          <span className="section-badge-dot" />
          {label}
        </span>
      </div>
      <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-1px" }}>
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      <div style={{ width: 64, height: 3, background: "linear-gradient(90deg,#f5c400,#f59e0b)", borderRadius: 9999, margin: "20px auto 0", boxShadow: "0 0 12px rgba(245,196,0,0.6)" }} />
    </div>
  );
}
