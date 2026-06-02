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
    <div ref={ref} className="glass-card rounded-2xl p-5">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 22 }}>{icon}</span>
          <span style={{ fontWeight: 600, fontSize: 14, color: "#f5f0e8" }}>{name}</span>
        </div>
        <span style={{ fontSize: 13, color: "#f5c400", fontWeight: 700 }}>{level}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-bar-fill" style={{ width: `${fill}%` }} />
      </div>
    </div>
  );
}
