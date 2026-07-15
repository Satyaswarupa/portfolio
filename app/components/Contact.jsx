import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import { IconWhatsApp, IconMail, IconLinkedIn, IconGithub } from "./icons";
import { WHATSAPP_NUMBER } from "./data";
import { useSound } from "./AudioManager";
import Reveal from "./Reveal";

export default function Contact() {
  const { playHover, playClick } = useSound();
  return (
    <section id="contact" style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeading label="Contact" title="Let's" highlight="Connect" />
        <p style={{ textAlign: "center", color: "rgba(245,240,232,0.5)", fontSize: 16, maxWidth: 480, margin: "-36px auto 48px" }}>
          Have a project in mind? I'd love to hear about it. Let's create something amazing together.
        </p>

        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 48, alignItems: "start" }}>
          {/* Info */}
          <Reveal>
            <h3 style={{ fontWeight: 700, fontSize: 22, marginBottom: 24 }}>Get in Touch</h3>

            {/* WhatsApp CTA */}
            <div className="neu-card" style={{
              padding: 24, marginBottom: 24,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div className="neu-flat-sm" style={{ width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", color: "#25d366" }}>
                  <IconWhatsApp size={24} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>WhatsApp</div>
                  <div style={{ color: "#25d366", fontSize: 14 }}>+91 7008671443</div>
                </div>
              </div>
              <p style={{ color: "rgba(245,240,232,0.5)", fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>
                Fastest way to reach me! Usually respond within minutes.
              </p>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ width: "100%", padding: "12px 20px", fontSize: 14 }} onMouseEnter={playHover} onClick={playClick}>
                <IconWhatsApp size={18} /> Start WhatsApp Chat
              </a>
            </div>

            {/* Other contacts */}
            {[
              { icon: <IconMail size={20} />, label: "Email", value: "satyaswarupaparida130@gmail.com", color: "#3b9eff" },
              { icon: <IconLinkedIn size={20} />, label: "LinkedIn", value: "linkedin.com/in/satyaswarupa", color: "#0077b5" },
              { icon: <IconGithub size={20} />, label: "GitHub", value: "github.com/satyaswarupa", color: "#f5f0e8" },
            ].map(({ icon, label, value, color }) => (
              <div key={label} className="contact-info-row">
                <div className="contact-info-icon" style={{ color }}>
                  {icon}
                </div>
                <div>
                  <div style={{ fontSize: 12, color: "rgba(245,240,232,0.4)", marginBottom: 2 }}>{label}</div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "#f5f0e8" }}>{value}</div>
                </div>
              </div>
            ))}
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="neu-card" style={{ borderRadius: 24, padding: 40 }}>
            <h3 style={{ fontWeight: 700, fontSize: 20, marginBottom: 8 }}>Send a Message</h3>
            <p style={{ color: "rgba(245,240,232,0.45)", fontSize: 14, marginBottom: 28 }}>
              Fill in the form and I'll receive your message directly on WhatsApp.
            </p>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
