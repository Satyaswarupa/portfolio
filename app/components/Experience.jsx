import SectionHeading from "./SectionHeading";
import { experience } from "./data";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "120px 24px", background: "rgba(59,158,255,0.02)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <SectionHeading label="Experience" title="My" highlight="Journey" />
        <div style={{ position: "relative", paddingLeft: 56 }}>
          <div className="timeline-line" />
          {experience.map((exp, i) => (
            <Reveal key={i} delay={i * 100} style={{ position: "relative", marginBottom: 40 }}>
              <div style={{
                position: "absolute", left: -46, top: 6,
                width: 16, height: 16, borderRadius: "50%",
                background: "linear-gradient(135deg,#3b9eff,#2563eb)",
                border: "3px solid #201e1a",
                boxShadow: "0 0 14px rgba(59,158,255,0.7)",
              }} />
              <div className="neu-card" style={{ borderRadius: 16, padding: 28 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                  <h3 style={{ fontWeight: 700, fontSize: 17 }}>{exp.role}</h3>
                  <span style={{ fontSize: 12, color: "#3b9eff", background: "rgba(59,158,255,0.12)", border: "1px solid rgba(59,158,255,0.28)", borderRadius: 9999, padding: "4px 12px", fontWeight: 600 }}>
                    {exp.period}
                  </span>
                </div>
                <p style={{ color: "#2563eb", fontSize: 14, fontWeight: 600, marginBottom: 12 }}>{exp.company}</p>
                <p style={{ color: "rgba(245,240,232,0.55)", fontSize: 14, lineHeight: 1.8 }}>{exp.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
