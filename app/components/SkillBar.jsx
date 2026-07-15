"use client";

import { useState, useEffect, useRef } from "react";

export default function SkillBar({ name, level, icon }) {
  const ref = useRef(null);
  const [fill, setFill] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setFill(level), 200); }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="neu-card" style={{ padding: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div className="skill-icon-badge">{icon}</div>
          <span style={{ fontWeight: 600, fontSize: 14, color: "#f5f0e8" }}>{name}</span>
        </div>
        <span style={{ fontSize: 13, color: "#3b9eff", fontWeight: 700 }}>{level}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-bar-fill" style={{ width: `${fill}%` }} />
      </div>
    </div>
  );
}
