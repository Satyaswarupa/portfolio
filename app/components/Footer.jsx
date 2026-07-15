import { IconWhatsApp, IconGithub, IconLinkedIn, IconMail } from "./icons";
import { WHATSAPP_NUMBER } from "./data";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(59,158,255,0.12)", padding: "40px 24px", textAlign: "center" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <span className="gradient-text" style={{ fontWeight: 800, fontSize: 22, display: "block", marginBottom: 12 }}>
          SP.dev
        </span>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", marginBottom: 24 }}>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="social-btn" style={{ color: "#25d366" }} title="WhatsApp">
            <IconWhatsApp size={20} />
          </a>
          <a href="https://github.com/satyaswarupa" target="_blank" rel="noopener noreferrer" className="social-btn" style={{ color: "rgba(245,240,232,0.7)" }} title="GitHub">
            <IconGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/satyaswarupa" target="_blank" rel="noopener noreferrer" className="social-btn" style={{ color: "#0077b5" }} title="LinkedIn">
            <IconLinkedIn size={20} />
          </a>
          <a href="mailto:satyaswarupaparida130@gmail.com" className="social-btn" style={{ color: "#3b9eff" }} title="Email">
            <IconMail size={20} />
          </a>
        </div>
        <p style={{ color: "rgba(245,240,232,0.25)", fontSize: 13 }}>
          © 2026 Satyaswarupa Parida. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
