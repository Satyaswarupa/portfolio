"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeading from "./SectionHeading";
import { IconGithub, IconExternalLink } from "./icons";
import { projects } from "./data";
import { useSound } from "./AudioManager";

// >1 stretches the pinned scroll range so the horizontal pan reads as a
// deliberate glide instead of flying by in a single wheel tick/swipe.
const SCROLL_SPEED = 1.7;

export default function Projects() {
  const { playHover, playClick } = useSound();
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  // Vertical scroll/swipe pins the section and drives the project row horizontally,
  // at every viewport size (phones included).
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const getDistance = () => Math.max(0, track.scrollWidth - section.clientWidth);

    const ctx = gsap.context(() => {
      if (getDistance() <= 0) return;

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance() * SCROLL_SPEED}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="projects-section">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", flexShrink: 0 }}>
        <SectionHeading label="Projects" title="Featured" highlight="Work" compact />
      </div>

      <div className="projects-track-wrap">
        <div ref={trackRef} className="projects-track">
          {projects.map((p) => (
            <div key={p.title} className="neu-card projects-card" style={{ display: "flex", flexDirection: "column" }}>
              {/* Image with gradient overlay + floating tags */}
              <div className="project-image-wrap">
                <img src={p.image} alt={p.title} className="project-image" />
                <div className="project-image-overlay" />
                <div className="project-tags-float">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="project-tag"
                      style={{ background: `${p.color}26`, border: `1px solid ${p.color}55`, color: p.color }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: 20 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 8 }}>
                  <span style={{ width: 10, height: 10, marginTop: 6, borderRadius: "50%", background: p.color, boxShadow: `0 0 12px ${p.color}`, flexShrink: 0 }} />
                  <h3 className="project-title-clamp" style={{ fontWeight: 700, fontSize: 16 }}>{p.title}</h3>
                </div>

                <p className="project-desc-clamp" style={{ color: "rgba(245,240,232,0.55)", fontSize: 13, lineHeight: 1.6, marginBottom: 12, flex: 1 }}>{p.desc}</p>

                {/* Footer with buttons */}
                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", paddingTop: 12, borderTop: "1px solid rgba(245,240,232,0.08)" }}>
                  <div style={{ display: "flex", gap: 10 }}>
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon-btn"
                      style={{ background: `${p.color}18`, border: `1px solid ${p.color}40`, color: p.color }}
                      onMouseEnter={(e) => {
                        playHover();
                        e.currentTarget.style.background = `${p.color}40`;
                        e.currentTarget.style.boxShadow = `0 0 14px ${p.color}60`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${p.color}18`;
                        e.currentTarget.style.boxShadow = "none";
                      }}
                      onClick={playClick}
                      title="Live demo"
                    >
                      <IconExternalLink size={15} />
                    </a>
                    <a
                      href={p.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon-btn"
                      style={{ background: `${p.color}18`, border: `1px solid ${p.color}40`, color: p.color }}
                      onMouseEnter={(e) => {
                        playHover();
                        e.currentTarget.style.background = `${p.color}40`;
                        e.currentTarget.style.boxShadow = `0 0 14px ${p.color}60`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = `${p.color}18`;
                        e.currentTarget.style.boxShadow = "none";
                      }}
                      onClick={playClick}
                      title="GitHub"
                    >
                      <IconGithub size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
