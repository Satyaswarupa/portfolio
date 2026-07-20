import SkillBar from "./SkillBar";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skills } from "./data";

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "120px 24px", background: "rgba(59,158,255,0.02)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeading
          label="Skills"
          title="Technologies I"
          highlight="Master"
          description="A working toolkit built on daily use, not tutorials. Every tool below has shipped in production — from React front ends and Node APIs to database design and containerised deployments."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 16 }}>
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 60}>
              <SkillBar {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
