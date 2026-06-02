"use client";

import { useState } from "react";
import { IconWhatsApp } from "./icons";
import { WHATSAPP_NUMBER } from "./data";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);

  const update = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

  const sendWhatsApp = (e) => {
    e.preventDefault();
    if (!form.name || !form.message) return;
    const text = encodeURIComponent(
      `Hi Satyaswarupa! 👋\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Subject:* ${form.subject}\n\n*Message:*\n${form.message}\n\n— Sent from your portfolio`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    setStatus("sent");
    setTimeout(() => {
      setStatus(null);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <form onSubmit={sendWhatsApp} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div className="contact-name-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label style={{ display: "block", fontSize: 13, color: "rgba(245,240,232,0.5)", marginBottom: 8, fontWeight: 500 }}>
            Your Name *
          </label>
          <input className="form-input" type="text" placeholder="John Doe" value={form.name} onChange={update("name")} required />
        </div>
        <div>
          <label style={{ display: "block", fontSize: 13, color: "rgba(245,240,232,0.5)", marginBottom: 8, fontWeight: 500 }}>
            Email Address
          </label>
          <input className="form-input" type="email" placeholder="john@example.com" value={form.email} onChange={update("email")} />
        </div>
      </div>

      <div>
        <label style={{ display: "block", fontSize: 13, color: "rgba(245,240,232,0.5)", marginBottom: 8, fontWeight: 500 }}>
          Subject
        </label>
        <input className="form-input" type="text" placeholder="Project Collaboration, Freelance, etc." value={form.subject} onChange={update("subject")} />
      </div>

      <div>
        <label style={{ display: "block", fontSize: 13, color: "rgba(245,240,232,0.5)", marginBottom: 8, fontWeight: 500 }}>
          Message *
        </label>
        <textarea
          className="form-input" rows={5}
          placeholder="Tell me about your project or idea..."
          value={form.message} onChange={update("message")}
          required style={{ resize: "vertical" }}
        />
      </div>

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <button type="submit" className="btn-whatsapp" style={{ flex: 1 }}>
          <IconWhatsApp size={20} />
          {status === "sent" ? "Message Sent! ✓" : "Send via WhatsApp"}
        </button>
        <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flex: 1 }}>
          <IconWhatsApp size={18} /> Direct Chat
        </a>
      </div>

      <p style={{ textAlign: "center", fontSize: 12, color: "rgba(245,240,232,0.3)", marginTop: 4 }}>
        Clicking "Send via WhatsApp" will open WhatsApp with your message pre-filled.
      </p>
    </form>
  );
}
