import SectionHeading from "./SectionHeading";
import { IconStar, IconGithub, IconExternalLink } from "./icons";
import { projects } from "./data";
import { useSound } from "./AudioManager";
import Reveal from "./Reveal";

export default function Projects() {
  const { playHover, playClick } = useSound();
  return (
    <section id="projects" style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeading label="Projects" title="Featured" highlight="Work" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 32 }}>
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="neu-card" style={{ display: "flex", flexDirection: "column" }}>
              {/* Image with gradient overlay + floating tags */}
              <div className="project-image-wrap">
                <img src={p.image} alt={p.title} className="project-image" />
                <div className="project-image-overlay" />
                <div className="project-tags-float">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="project-tag"
                      style={{ background: `${p.color}26`, border: `1px solid ${p.color}55`, color: p.color }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ width: 10, height: 10, borderRadius: "50%", background: p.color, boxShadow: `0 0 12px ${p.color}` }} />
                  <h3 style={{ fontWeight: 700, fontSize: 18 }}>{p.title}</h3>
                </div>

                <p style={{ color: "rgba(245,240,232,0.55)", fontSize: 14, lineHeight: 1.8, marginBottom: 20, flex: 1 }}>{p.desc}</p>

                {/* Footer with stars and buttons */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, borderTop: "1px solid rgba(245,240,232,0.08)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#f5c400", fontSize: 13 }}>
                    <IconStar size={14} />
                    <span style={{ fontWeight: 600 }}>{p.stars}</span>
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon-btn"
                      style={{ background: `${p.color}18`, border: `1px solid ${p.color}40`, color: p.color }}
                      onMouseEnter={(e) => {
                        playHover();
                        e.currentTarget.style.background = `${p.color}40`;
                        e.currentTarget.style.boxShadow = `0 0 14px ${p.color}60`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${p.color}18`;
                        e.currentTarget.style.boxShadow = "none";
                      }}
                      onClick={playClick}
                      title="Live demo"
                    >
                      <IconExternalLink size={15} />
                    </a>
                    <a
                      href={p.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon-btn"
                      style={{ background: `${p.color}18`, border: `1px solid ${p.color}40`, color: p.color }}
                      onMouseEnter={(e) => {
                        playHover();
                        e.currentTarget.style.background = `${p.color}40`;
                        e.currentTarget.style.boxShadow = `0 0 14px ${p.color}60`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${p.color}18`;
                        e.currentTarget.style.boxShadow = "none";
                      }}
                      onClick={playClick}
                      title="GitHub"
                    >
                      <IconGithub size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
