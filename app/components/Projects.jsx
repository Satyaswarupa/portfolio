import SectionHeading from "./SectionHeading";
import { IconStar, IconGithub, IconExternalLink } from "./icons";
import { projects } from "./data";

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeading label="Projects" title="Featured" highlight="Work" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 32 }}>
          {projects.map((p) => (
            <div key={p.title} style={{ display: "flex", flexDirection: "column", borderRadius: 16, overflow: "hidden" }}>
              {/* Image Container with Shadow */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "75%",
                  overflow: "hidden",
                  borderRadius: 12,
                  boxShadow: `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px ${p.color}40`,
                  background: "linear-gradient(135deg, rgba(100, 100, 100, 0.2), rgba(50, 50, 50, 0.3))",
                  marginBottom: 20,
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </div>

              {/* Content Container */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Color bar */}
                <div style={{ width: 40, height: 4, background: p.color, borderRadius: 9999, marginBottom: 16, boxShadow: `0 0 12px ${p.color}80` }} />

                {/* Title */}
                <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 12 }}>{p.title}</h3>

                {/* Description */}
                <p style={{ color: "rgba(245,240,232,0.55)", fontSize: 14, lineHeight: 1.8, marginBottom: 16, flex: 1 }}>{p.desc}</p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        padding: "3px 10px",
                        borderRadius: 9999,
                        fontSize: 11,
                        fontWeight: 500,
                        background: `${p.color}18`,
                        border: `1px solid ${p.color}40`,
                        color: p.color,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer with stars and buttons */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, borderTop: "1px solid rgba(245,240,232,0.1)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#f5c400", fontSize: 13 }}>
                    <IconStar size={14} />
                    <span style={{ fontWeight: 600 }}>{p.stars}</span>
                  </div>
                  <div style={{ display: "flex", gap: 12 }}>
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "6px 12px",
                        borderRadius: 6,
                        background: `${p.color}20`,
                        border: `1px solid ${p.color}40`,
                        color: p.color,
                        textDecoration: "none",
                        fontSize: 12,
                        fontWeight: 600,
                        transition: "all 0.2s",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${p.color}40`;
                        e.currentTarget.style.boxShadow = `0 0 12px ${p.color}40`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${p.color}20`;
                        e.currentTarget.style.boxShadow = "none";
                      }}
                      title="Live demo"
                    >
                      <IconExternalLink size={14} />
                      Live
                    </a>
                    <a
                      href={p.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "6px 12px",
                        borderRadius: 6,
                        background: `${p.color}20`,
                        border: `1px solid ${p.color}40`,
                        color: p.color,
                        textDecoration: "none",
                        fontSize: 12,
                        fontWeight: 600,
                        transition: "all 0.2s",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = `${p.color}40`;
                        e.currentTarget.style.boxShadow = `0 0 12px ${p.color}40`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${p.color}20`;
                        e.currentTarget.style.boxShadow = "none";
                      }}
                      title="GitHub"
                    >
                      <IconGithub size={14} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
