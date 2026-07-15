"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const NAME = "Satyaswarupa";

export default function Loader({ onFinish }) {
  const canvasRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [closing, setClosing] = useState(false);

  // Three.js animated background: golden particle field + rotating wireframe core
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.z = 6;

    // Particle field
    const particleCount = 600;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x3b9eff,
      size: 0.035,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Rotating wireframe core
    const coreGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x60a5fa,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    const innerGeo = new THREE.IcosahedronGeometry(1.05, 0);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    scene.add(inner);

    let frameId;
    const startTime = performance.now();

    const resize = () => {
      const { clientWidth, clientHeight } = canvas;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };
    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      const t = (performance.now() - startTime) / 1000;
      core.rotation.x = t * 0.18;
      core.rotation.y = t * 0.26;
      inner.rotation.x = -t * 0.22;
      inner.rotation.y = -t * 0.3;
      particles.rotation.y = t * 0.03;

      const scale = 1 + Math.sin(t * 1.6) * 0.05;
      core.scale.setScalar(scale);
      inner.scale.setScalar(1 / scale);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      particleGeo.dispose();
      particleMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      renderer.dispose();
    };
  }, []);

  // Progress + finish sequence
  useEffect(() => {
    const start = performance.now();
    const duration = 2600;

    let raf;
    const tick = (now) => {
      const pct = Math.min(100, ((now - start) / duration) * 100);
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setClosing(true), 350);
        setTimeout(() => onFinish?.(), 1050);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onFinish]);

  return (
    <div className={`loader-overlay ${closing ? "loader-closing" : ""}`}>
      <canvas ref={canvasRef} className="loader-canvas" />

      <div className="loader-content">
        <div className="loader-name">
          {NAME.split("").map((char, i) => (
            <span
              key={i}
              className="loader-letter"
              style={{ animationDelay: `${0.25 + i * 0.07}s` }}
            >
              {char}
            </span>
          ))}
        </div>

        <svg
          className="loader-underline"
          viewBox="0 0 320 24"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M4 14 C 60 4, 120 20, 180 10 S 280 4, 316 14"
            fill="none"
            stroke="url(#loaderGradient)"
            strokeWidth="3"
            strokeLinecap="round"
            pathLength="1"
          />
          <defs>
            <linearGradient id="loaderGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3b9eff" />
              <stop offset="50%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
        </svg>

        <div className="loader-progress-track">
          <div className="loader-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="loader-progress-label">{Math.floor(progress)}%</div>
      </div>
    </div>
  );
}
