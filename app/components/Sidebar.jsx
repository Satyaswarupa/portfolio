import {
  IconWhatsApp, IconGithub, IconLinkedIn, IconMail,
  IconHome, IconUser, IconZap, IconFolder, IconBriefcase,
} from "./icons";
import { WHATSAPP_NUMBER } from "./data";
import { useSound } from "./AudioManager";

const navLinks = [
  { label: "Home",       href: "#hero",       icon: <IconHome /> },
  { label: "About",      href: "#about",      icon: <IconUser /> },
  { label: "Skills",     href: "#skills",     icon: <IconZap /> },
  { label: "Projects",   href: "#projects",   icon: <IconFolder /> },
  { label: "Experience", href: "#experience", icon: <IconBriefcase /> },
  { label: "Contact",    href: "#contact",    icon: <IconMail /> },
];

const quickStats = [
  { val: "10+", label: "Projects Done" },
  { val: "2+",  label: "Years Exp." },
  { val: "0+", label: "Happy Clients" },
];

export default function Sidebar({ sidebarOpen, activeSection, scrollTo }) {
  const { playHover, playClick } = useSound();
  return (
    <aside className={`sidebar${sidebarOpen ? " sidebar-open" : ""}`}>
      {/* Logo */}
      <div className="sidebar-logo">
        <span className="gradient-text logo-name">SP.dev</span>
        <span className="logo-subtitle">Full Stack Developer</span>
        <div className="sidebar-avail">
          <span className="avail-dot" />
          Available for projects
        </div>
      </div>

      {/* Nav */}
      <nav className="sidebar-nav">
        <span className="sidebar-nav-label">Navigation</span>
        {navLinks.map((l) => (
          <button
            key={l.label}
            onClick={() => { playClick(); scrollTo(l.href); }}
            onMouseEnter={playHover}
            className={`sidebar-link${activeSection === l.href.slice(1) ? " active" : ""}`}
          >
            <span className="sidebar-link-icon">{l.icon}</span>
            {l.label}
          </button>
        ))}

        <span className="sidebar-nav-label" style={{ marginTop: 16 }}>Quick Stats</span>
        {quickStats.map(({ val, label }) => (
          <div
            key={label}
            style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "8px 14px", marginBottom: 2,
              borderRadius: 8,
              background: "rgba(245,196,0,0.04)",
              border: "1px solid rgba(245,196,0,0.08)",
            }}
          >
            <span style={{ fontSize: 12, color: "rgba(245,240,232,0.45)" }}>{label}</span>
            <span style={{ fontSize: 14, fontWeight: 700, color: "#f5c400" }}>{val}</span>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="sidebar-footer">
        <div className="sidebar-socials">
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="sidebar-social-btn" title="WhatsApp">
            <IconWhatsApp size={16} />
          </a>
          <a href="https://github.com/satyaswarupa" target="_blank" rel="noopener noreferrer" className="sidebar-social-btn" title="GitHub">
            <IconGithub size={16} />
          </a>
          <a href="https://linkedin.com/in/satyaswarupa" target="_blank" rel="noopener noreferrer" className="sidebar-social-btn" title="LinkedIn">
            <IconLinkedIn size={16} />
          </a>
          <a href="mailto:satyaswarupaparida130@gmail.com" className="sidebar-social-btn" title="Email">
            <IconMail size={16} />
          </a>
        </div>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-yellow"
          style={{ width: "100%", padding: "10px 16px", fontSize: 13, borderRadius: 10 }}
          onMouseEnter={playHover}
          onClick={playClick}
        >
          <IconWhatsApp size={15} /> Hire Me
        </a>
      </div>
    </aside>
  );
}
