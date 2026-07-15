import Counter from "./Counter";
import { IconCode, IconWhatsApp, IconArrowDown } from "./icons";
import { WHATSAPP_NUMBER } from "./data";
import { useSound } from "./AudioManager";

export default function Hero({ scrollTo }) {
  const { playHover, playClick } = useSound();
  return (
    <section
      id="hero"
      style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}
    >
      <div className="hero-bg" aria-hidden="true" />

      <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "80px 24px 0", maxWidth: 860, margin: "0 auto" }}>
        {/* Availability badge */}
        <div className="neu-pill" style={{ marginBottom: 32 }}>
          <span style={{ width: 8, height: 8, background: "#25d366", borderRadius: "50%", display: "inline-block", boxShadow: "0 0 10px rgba(37,211,102,0.8)" }} className="pulse-glow" />
          <span style={{ fontSize: 13, color: "#25d366", fontWeight: 500 }}>Available for new projects</span>
        </div>

        <h1 style={{ fontSize: "clamp(44px, 7.5vw, 90px)", fontWeight: 900, lineHeight: 1, letterSpacing: "-3px", marginBottom: 24 }}>
          <span style={{ color: "#f5f0e8" }}>Satyaswarupa</span>
          <br />
          <span className="gradient-text text-glow">Parida</span>
        </h1>

        <p style={{ fontSize: "clamp(15px, 2.2vw, 20px)", color: "rgba(245,240,232,0.6)", maxWidth: 580, margin: "0 auto 14px", lineHeight: 1.7, fontWeight: 400 }}>
          MERN Stack Developer · UI/UX Enthusiast · Open Source Contributor
        </p>
        <p style={{ fontSize: 15, color: "rgba(245,240,232,0.4)", maxWidth: 480, margin: "0 auto 48px", lineHeight: 1.8 }}>
          I craft high-performance web applications that users love. Passionate about clean code, beautiful design, and innovative solutions.
        </p>

        <div className="hero-btns" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 64 }}>
          <button onClick={() => { playClick(); scrollTo("#projects"); }} onMouseEnter={playHover} className="btn-accent" style={{ padding: "14px 32px" }}>
            <IconCode size={18} /> View Projects
          </button>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" onMouseEnter={playHover} onClick={playClick}>
            <IconWhatsApp size={18} /> Chat on WhatsApp
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stats" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, maxWidth: 480, margin: "0 auto" }}>
          {[
            { val: 10, suffix: "+", label: "Projects Done" },
            { val: 2,  suffix: "+", label: "Years Exp." },
            { val: 0, suffix: "+", label: "Happy Clients" },
          ].map(({ val, suffix, label }) => (
            <div key={label} className="neu-card" style={{ textAlign: "center", padding: "18px 8px" }}>
              <div style={{ fontSize: "clamp(26px, 4.5vw, 38px)", fontWeight: 900, color: "#3b9eff" }}>
                <Counter target={val} suffix={suffix} />
              </div>
              <div style={{ fontSize: 12, color: "rgba(245,240,232,0.4)", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div style={{ marginTop: 72, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, color: "rgba(245,240,232,0.3)" }} className="float">
          <span style={{ fontSize: 12 }}>scroll down</span>
          <IconArrowDown size={18} />
        </div>
      </div>
    </section>
  );
}
