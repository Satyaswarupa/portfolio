import { IconWhatsApp, IconGithub, IconLinkedIn, IconMail } from "./icons";
import { WHATSAPP_NUMBER } from "./data";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(245,196,0,0.12)", padding: "40px 24px", textAlign: "center" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <span className="gradient-text" style={{ fontWeight: 800, fontSize: 22, display: "block", marginBottom: 12 }}>
          SP.dev
        </span>
        <div style={{ display: "flex", gap: 24, justifyContent: "center", marginBottom: 24 }}>
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" style={{ color: "#25d366" }} title="WhatsApp">
            <IconWhatsApp size={22} />
          </a>
          <a href="https://github.com/satyaswarupa" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(245,240,232,0.6)" }} title="GitHub">
            <IconGithub size={22} />
          </a>
          <a href="https://linkedin.com/in/satyaswarupa" target="_blank" rel="noopener noreferrer" style={{ color: "#0077b5" }} title="LinkedIn">
            <IconLinkedIn size={22} />
          </a>
          <a href="mailto:satyaswarupaparida130@gmail.com" style={{ color: "#f5c400" }} title="Email">
            <IconMail size={22} />
          </a>
        </div>
        <p style={{ color: "rgba(245,240,232,0.25)", fontSize: 13 }}>
          © 2026 Satyaswarupa Parida. Built with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
