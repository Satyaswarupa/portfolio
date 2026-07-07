import Image from "next/image";
import { IconWhatsApp, IconMail } from "./icons";
import { WHATSAPP_NUMBER } from "./data";
import { useSound } from "./AudioManager";
import Reveal from "./Reveal";

export default function About({ scrollTo }) {
  const { playHover, playClick } = useSound();
  return (
    <section id="about" style={{ padding: "120px 24px", maxWidth: 1100, margin: "0 auto" }}>
      <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

        {/* Avatar */}
        <Reveal style={{ position: "relative", display: "flex", justifyContent: "center" }} className="about-avatar">
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                width: 260, height: 260, borderRadius: "50%",
                background: "linear-gradient(135deg, #f5c400 0%, #f59e0b 100%)",
                padding: 4,
                boxShadow: "0 0 60px rgba(245,196,0,0.4), 0 0 120px rgba(245,158,11,0.2)",
                border: "3px solid rgba(245,196,0,0.4)",
              }}
              className="float"
            >
              <Image
                src="/satyaswarupa-parida.jpg"
                alt="Satyaswarupa Parida"
                width={260}
                height={260}
                style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", display: "block" }}
              />
            </div>
            <div className="float" style={{ position: "absolute", top: -10, right: -30, padding: "10px 18px", background: "rgba(245,196,0,0.12)", border: "1px solid rgba(245,196,0,0.35)", borderRadius: 12, fontSize: 13, fontWeight: 600, backdropFilter: "blur(10px)", boxShadow: "0 10px 30px -8px rgba(245,196,0,0.4)", animationDelay: "-2s" }}>
              ⚡ 2+ Years
            </div>
            <div className="float" style={{ position: "absolute", bottom: 20, left: -40, padding: "10px 18px", background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.35)", borderRadius: 12, fontSize: 13, fontWeight: 600, backdropFilter: "blur(10px)", boxShadow: "0 10px 30px -8px rgba(245,158,11,0.4)", animationDelay: "-4s" }}>
              🚀 10+ Projects
            </div>
          </div>
          <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(245,196,0,0.12)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
          <div style={{ position: "absolute", width: 360, height: 360, borderRadius: "50%", border: "1px solid rgba(245,196,0,0.06)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
        </Reveal>

        {/* Text */}
        <Reveal delay={120}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 40, height: 2, background: "linear-gradient(90deg,#f5c400,#f59e0b)", borderRadius: 9999 }} />
            <span style={{ fontSize: 13, color: "#f5c400", fontWeight: 600, textTransform: "uppercase", letterSpacing: 2 }}>About Me</span>
          </div>
         <h2
  style={{
    fontSize: "clamp(30px, 4vw, 46px)",
    fontWeight: 800,
    lineHeight: 1.2,
    marginBottom: 24,
    letterSpacing: "-1px",
  }}
>
  Crafting Digital<br />
  <span className="gradient-text">Experiences</span>
</h2>

<p
  style={{
    color: "rgba(245,240,232,0.65)",
    lineHeight: 1.9,
    marginBottom: 16,
    fontSize: 15,
  }}
>
  Hi! I'm Satyaswarupa Parida, a MERN Stack Developer from Odisha, India. I specialize in building responsive, scalable, and user-friendly web applications using React.js, Next.js, Node.js, Express.js, and MongoDB.
</p>

<p
  style={{
    color: "rgba(245,240,232,0.65)",
    lineHeight: 1.9,
    marginBottom: 32,
    fontSize: 15,
  }}
>
  With 1+ year of professional experience at Confluentis Consultant Pvt. Ltd., I have worked on enterprise applications, dashboard development, cost monitoring solutions, and modern web platforms. I enjoy transforming business requirements into efficient, high-quality digital products with clean code and intuitive user experiences.
</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
            {["React", "Next.js", "Node.js", "Python", "TypeScript", "MongoDB"].map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ padding: "10px 24px", fontSize: 14 }} onMouseEnter={playHover} onClick={playClick}>
              <IconWhatsApp size={16} /> Let's Talk
            </a>
            <button onClick={() => { playClick(); scrollTo("#contact"); }} onMouseEnter={playHover} className="btn-primary" style={{ padding: "10px 24px", fontSize: 14 }}>
              <IconMail size={16} /> Send Email
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
