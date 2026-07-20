"use client";

import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import MobileTopbar from "./components/MobileTopbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { IconWhatsApp } from "./components/icons";
import { WHATSAPP_NUMBER } from "./components/data";
import Loader from "./components/Loader";
import { AudioProvider } from "./components/AudioManager";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ids = ["hero", "about", "skills", "projects", "experience", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    setSidebarOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [loading]);

  return (
    <AudioProvider>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      <div className="page-content" style={{ display: "flex", minHeight: "100vh", color: "#f5f0e8" }}>

      <Sidebar
        sidebarOpen={sidebarOpen}
        activeSection={activeSection}
        scrollTo={scrollTo}
      />

      {sidebarOpen && (
        <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} />
      )}

      <MobileTopbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="main-content-wrapper">
        <Hero scrollTo={scrollTo} />
        <About scrollTo={scrollTo} />
        <Skills />
        <Projects />
        <Experience />
        <FAQ />
        <Contact />
        <Footer />
      </div>

      {/* Floating WhatsApp button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed", bottom: 28, right: 28, zIndex: 200,
          width: 56, height: 56, borderRadius: "50%",
          background: "linear-gradient(145deg,#25d366,#128c7e)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "white",
          boxShadow: "7px 7px 15px var(--neu-dark), -5px -5px 13px rgba(37,211,102,0.1)",
          transition: "transform 0.2s, box-shadow 0.2s",
          textDecoration: "none",
        }}
        title="Chat on WhatsApp"
        onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.08)"; e.currentTarget.style.boxShadow = "9px 9px 19px var(--neu-dark), -6px -6px 16px rgba(37,211,102,0.16), 0 8px 24px rgba(37,211,102,0.35)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "7px 7px 15px var(--neu-dark), -5px -5px 13px rgba(37,211,102,0.1)"; }}
      >
        <IconWhatsApp size={26} />
      </a>

      </div>
    </AudioProvider>
  );
}
