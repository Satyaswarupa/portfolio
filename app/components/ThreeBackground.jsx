"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// Persistent, full-page Three.js background: a starfield + drifting
// wireframe shapes that move and rotate as the user scrolls.
export default function ThreeBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 200);
    camera.position.z = 12;

    // ── Starfield ──
    const starCount = 1400;
    const starPositions = new Float32Array(starCount * 3);
    const DEPTH = 120; // total world depth the starfield + shapes span
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 40;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * DEPTH;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 30 - 5;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: 0xf5c400,
      size: 0.045,
      transparent: true,
      opacity: 0.45,
      sizeAttenuation: true,
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // ── Drifting wireframe shapes, one roughly per section ──
    const shapeDefs = [
      { geo: new THREE.IcosahedronGeometry(2.2, 0), color: 0xf5c400, y: -2, x: -6 },
      { geo: new THREE.TorusGeometry(2, 0.6, 8, 24), color: 0xfbbf24, y: -22, x: 6 },
      { geo: new THREE.OctahedronGeometry(2.4, 0), color: 0xf59e0b, y: -42, x: -7 },
      { geo: new THREE.IcosahedronGeometry(1.8, 1), color: 0xf5c400, y: -62, x: 6.5 },
      { geo: new THREE.TorusKnotGeometry(1.4, 0.4, 64, 8), color: 0xfbbf24, y: -82, x: -6 },
      { geo: new THREE.OctahedronGeometry(2, 1), color: 0xf59e0b, y: -102, x: 6 },
    ];
    const shapes = shapeDefs.map(({ geo, color, x, y }) => {
      const mat = new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity: 0.28 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(x, y, -4);
      scene.add(mesh);
      return mesh;
    });

    // ── Scroll tracking ──
    let scrollFrac = 0; // 0 -> 1 across the whole document
    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollFrac = max > 0 ? window.scrollY / max : 0;
    };
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    const resize = () => {
      const { clientWidth, clientHeight } = canvas;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      updateScroll();
    };
    resize();
    window.addEventListener("resize", resize);

    let frameId;
    const startTime = performance.now();

    const animate = () => {
      const t = (performance.now() - startTime) / 1000;

      // Move "through" the scene as the page scrolls
      const targetY = scrollFrac * DEPTH;
      camera.position.y += (-targetY - camera.position.y) * 0.08;
      camera.rotation.z = Math.sin(scrollFrac * Math.PI) * 0.05;

      stars.rotation.y = t * 0.015;
      stars.rotation.x = scrollFrac * 0.3;

      shapes.forEach((mesh, i) => {
        mesh.rotation.x = t * (0.08 + i * 0.015);
        mesh.rotation.y = t * (0.06 + i * 0.012);
        mesh.position.x += Math.sin(t * 0.3 + i) * 0.0008;
      });

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", updateScroll);
      starGeo.dispose();
      starMat.dispose();
      shapes.forEach((mesh) => {
        mesh.geometry.dispose();
        mesh.material.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="three-bg-canvas" />;
}
