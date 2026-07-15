export default function SectionHeading({ label, title, highlight, compact = false }) {
  return (
    <div style={{ textAlign: "center", marginBottom: compact ? 28 : 60 }}>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: compact ? 12 : 20 }}>
        <span className="section-badge">
          <span className="section-badge-dot" />
          {label}
        </span>
      </div>
      <h2 style={{ fontSize: compact ? "clamp(26px, 3.4vw, 40px)" : "clamp(32px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-1px" }}>
        {title} <span className="gradient-text">{highlight}</span>
      </h2>
      <div style={{ width: 64, height: 3, background: "linear-gradient(90deg,#3b9eff,#2563eb)", borderRadius: 9999, margin: compact ? "14px auto 0" : "20px auto 0", boxShadow: "0 0 12px rgba(59,158,255,0.6)" }} />
    </div>
  );
}
