"use client";

import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import MobileTopbar from "./components/MobileTopbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { IconWhatsApp } from "./components/icons";
import { WHATSAPP_NUMBER } from "./components/data";
import Loader from "./components/Loader";
import ThreeBackground from "./components/ThreeBackground";

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
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}
      <div className="noise page-content" style={{ display: "flex", minHeight: "100vh", color: "#f5f0e8" }}>

      <ThreeBackground />

      {/* Animated glow orbs */}
      <div className="glow-bg">
        <div className="glow-orb glow-orb-1" />
        <div className="glow-orb glow-orb-2" />
        <div className="glow-orb glow-orb-3" />
      </div>

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
          background: "linear-gradient(135deg,#25d366,#128c7e)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "white", boxShadow: "0 8px 30px rgba(37,211,102,0.5)",
          transition: "transform 0.2s, box-shadow 0.2s",
          textDecoration: "none",
        }}
        title="Chat on WhatsApp"
        onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(37,211,102,0.7)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(37,211,102,0.5)"; }}
      >
        <IconWhatsApp size={26} />
      </a>

      </div>
    </>
  );
}
