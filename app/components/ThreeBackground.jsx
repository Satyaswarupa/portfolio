"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

const SECTION_THEMES = {
  hero: { color: 0xf5c400, shell: () => new THREE.IcosahedronGeometry(2, 1), inner: () => new THREE.IcosahedronGeometry(1.25, 0) },
  about: { color: 0xfbbf24, shell: () => new THREE.TorusKnotGeometry(1.3, 0.4, 80, 12), inner: () => new THREE.IcosahedronGeometry(0.9, 0) },
  skills: { color: 0xf59e0b, shell: () => new THREE.OctahedronGeometry(2, 2), inner: () => new THREE.OctahedronGeometry(1.1, 1) },
  projects: { color: 0xffd54a, shell: () => new THREE.DodecahedronGeometry(1.8, 0), inner: () => new THREE.IcosahedronGeometry(1, 1) },
  experience: { color: 0xf5c400, shell: () => new THREE.TorusGeometry(1.6, 0.5, 16, 40), inner: () => new THREE.SphereGeometry(0.8, 16, 16) },
  contact: { color: 0x25d366, shell: () => new THREE.IcosahedronGeometry(2, 1), inner: () => new THREE.SphereGeometry(0.9, 24, 24) },
};
const SECTION_ORDER = ["hero", "about", "skills", "projects", "experience", "contact"];

const STAR_VERTEX = `
  attribute float aSize;
  attribute float aPhase;
  uniform float uTime;
  varying float vTwinkle;
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vTwinkle = 0.55 + 0.45 * sin(uTime * 1.4 + aPhase);
    gl_PointSize = aSize * vTwinkle * (300.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;
const STAR_FRAGMENT = `
  uniform vec3 uColor;
  varying float vTwinkle;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    float alpha = smoothstep(0.5, 0.0, d);
    vec3 color = mix(vec3(1.0), uColor, 0.45);
    gl_FragColor = vec4(color, alpha * vTwinkle * 0.85);
  }
`;

// Persistent, full-page Three.js background: a custom-shader twinkling
// starfield, drifting wireframe shapes, a lit interactive centerpiece that
// morphs/crossfades per active section, particle bursts on section change,
// and a bloom pass for the neon-glow look.
export default function ThreeBackground({ activeSection = "hero" }) {
  const canvasRef = useRef(null);
  const sceneApiRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x080800);
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 200);
    camera.position.z = 12;

    // ── Lighting ──
    const ambientLight = new THREE.AmbientLight(0xfff3c4, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xf5c400, 6, 60);
    pointLight.position.set(6.5, 1.2, 0);
    scene.add(pointLight);

    // ── Bloom post-processing ──
    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.5, 0.55, 0.25);
    composer.addPass(bloomPass);

    // ── Custom-shader starfield ──
    const starCount = 1400;
    const starPositions = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);
    const starPhases = new Float32Array(starCount);
    const DEPTH = 120; // total world depth the starfield + shapes span
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 40;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * DEPTH;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 30 - 5;
      starSizes[i] = 0.6 + Math.random() * 1.8;
      starPhases[i] = Math.random() * Math.PI * 2;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute("aSize", new THREE.BufferAttribute(starSizes, 1));
    starGeo.setAttribute("aPhase", new THREE.BufferAttribute(starPhases, 1));
    const starUniforms = {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(0xf5c400) },
    };
    const starMat = new THREE.ShaderMaterial({
      uniforms: starUniforms,
      vertexShader: STAR_VERTEX,
      fragmentShader: STAR_FRAGMENT,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const stars = new THREE.Points(starGeo, starMat);
    scene.add(stars);

    // ── Drifting wireframe shapes, one roughly per section ──
    const shapeDefs = [
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

    // ── Interactive centerpiece: per-section morphing core that follows the cursor ──
    const CORE_BASE = { x: 6.5, y: 1.2 };
    const coreGroup = new THREE.Group();
    coreGroup.position.set(CORE_BASE.x, CORE_BASE.y, -8);
    scene.add(coreGroup);

    // One shell+inner pair per section theme, all cross-faded via opacity.
    const centerpieces = SECTION_ORDER.map((key) => {
      const theme = SECTION_THEMES[key];
      const shellMat = new THREE.MeshStandardMaterial({
        color: theme.color, emissive: theme.color, emissiveIntensity: 0.55,
        wireframe: true, transparent: true, opacity: 0, roughness: 0.5, metalness: 0.3,
      });
      const innerMat = new THREE.MeshStandardMaterial({
        color: theme.color, emissive: theme.color, emissiveIntensity: 0.7,
        wireframe: true, transparent: true, opacity: 0, roughness: 0.4, metalness: 0.4,
      });
      const shell = new THREE.Mesh(theme.shell(), shellMat);
      const inner = new THREE.Mesh(theme.inner(), innerMat);
      coreGroup.add(shell, inner);
      return { key, shell, inner, color: new THREE.Color(theme.color) };
    });

    const glowGeo = new THREE.SphereGeometry(0.4, 24, 24);
    const glowMat = new THREE.MeshBasicMaterial({ color: 0xfff3c4, transparent: true, opacity: 0.9 });
    const glowCore = new THREE.Mesh(glowGeo, glowMat);
    coreGroup.add(glowCore);

    // ── Particle burst on section change ──
    const burstGroup = new THREE.Group();
    scene.add(burstGroup);
    const bursts = [];
    const spawnBurst = (color) => {
      const count = 70;
      const positions = new Float32Array(count * 3);
      const velocities = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        positions[i * 3] = coreGroup.position.x;
        positions[i * 3 + 1] = coreGroup.position.y;
        positions[i * 3 + 2] = coreGroup.position.z;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const speed = 0.02 + Math.random() * 0.05;
        velocities[i * 3] = Math.sin(phi) * Math.cos(theta) * speed;
        velocities[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * speed;
        velocities[i * 3 + 2] = Math.cos(phi) * speed;
      }
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const mat = new THREE.PointsMaterial({
        color, size: 0.12, transparent: true, opacity: 1,
        blending: THREE.AdditiveBlending, depthWrite: false,
      });
      const points = new THREE.Points(geo, mat);
      burstGroup.add(points);
      bursts.push({ points, geo, mat, velocities, start: performance.now() });
    };

    // ── Section theming state (driven from the activeSection prop) ──
    const themeTarget = new THREE.Color(SECTION_THEMES.hero.color);
    const currentTheme = new THREE.Color(SECTION_THEMES.hero.color);
    let targetIndex = 0;
    sceneApiRef.current = {
      setSection: (sectionKey) => {
        const theme = SECTION_THEMES[sectionKey];
        if (!theme) return;
        const idx = SECTION_ORDER.indexOf(sectionKey);
        if (idx === -1) return;
        targetIndex = idx;
        themeTarget.setHex(theme.color);
        spawnBurst(theme.color);
      },
    };

    // ── Mouse tracking (normalized -1..1) ──
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

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
      composer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      updateScroll();
    };
    resize();
    window.addEventListener("resize", resize);

    let frameId;
    const startTime = performance.now();
    let coreRotX = 0;
    let coreRotY = 0;

    const animate = () => {
      const t = (performance.now() - startTime) / 1000;
      starUniforms.uTime.value = t;

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

      // Centerpiece: drifts toward the cursor, rotates continuously
      coreRotX += ((mouse.y * 0.6 + t * 0.05) - coreRotX) * 0.06;
      coreRotY += ((mouse.x * 0.6 + t * 0.07) - coreRotY) * 0.06;
      coreGroup.rotation.x = coreRotX;
      coreGroup.rotation.y = coreRotY;
      coreGroup.position.x = CORE_BASE.x + mouse.x * 0.6;
      coreGroup.position.y = CORE_BASE.y - mouse.y * 0.4 - targetY;
      const pulse = 1 + Math.sin(t * 2) * 0.08;
      glowCore.scale.setScalar(pulse);

      // Cross-fade centerpiece geometries toward the active section
      centerpieces.forEach((cp, i) => {
        const target = i === targetIndex ? 1 : 0;
        cp.shell.material.opacity += (target * 0.5 - cp.shell.material.opacity) * 0.06;
        cp.inner.material.opacity += (target * 0.6 - cp.inner.material.opacity) * 0.06;
        cp.shell.rotation.x = t * (0.08 + i * 0.01);
        cp.shell.rotation.y = t * (0.06 + i * 0.008);
        cp.inner.rotation.x -= 0.01;
        cp.inner.rotation.y += 0.015;
      });

      // Lerp theme color across stars, glow core and point light
      currentTheme.lerp(themeTarget, 0.03);
      starUniforms.uColor.value.copy(currentTheme);
      glowCore.material.color.copy(currentTheme);
      pointLight.color.copy(currentTheme);

      pointLight.position.x = coreGroup.position.x;
      pointLight.position.y = coreGroup.position.y;
      pointLight.position.z = coreGroup.position.z + 2;

      // Update particle bursts
      for (let i = bursts.length - 1; i >= 0; i--) {
        const b = bursts[i];
        const age = (performance.now() - b.start) / 1000;
        if (age > 1.4) {
          burstGroup.remove(b.points);
          b.geo.dispose();
          b.mat.dispose();
          bursts.splice(i, 1);
          continue;
        }
        const posAttr = b.geo.attributes.position;
        for (let p = 0; p < posAttr.count; p++) {
          posAttr.array[p * 3] += b.velocities[p * 3];
          posAttr.array[p * 3 + 1] += b.velocities[p * 3 + 1];
          posAttr.array[p * 3 + 2] += b.velocities[p * 3 + 2];
        }
        posAttr.needsUpdate = true;
        b.mat.opacity = 1 - age / 1.4;
      }

      composer.render();
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("mousemove", onMouseMove);
      sceneApiRef.current = null;
      starGeo.dispose();
      starMat.dispose();
      shapes.forEach((mesh) => {
        mesh.geometry.dispose();
        mesh.material.dispose();
      });
      centerpieces.forEach((cp) => {
        cp.shell.geometry.dispose();
        cp.shell.material.dispose();
        cp.inner.geometry.dispose();
        cp.inner.material.dispose();
      });
      bursts.forEach((b) => {
        b.geo.dispose();
        b.mat.dispose();
      });
      glowGeo.dispose();
      glowMat.dispose();
      composer.dispose();
      renderer.dispose();
    };
  }, []);

  // Notify the running scene when the active section changes.
  useEffect(() => {
    sceneApiRef.current?.setSection(activeSection);
  }, [activeSection]);

  return <canvas ref={canvasRef} className="three-bg-canvas" />;
}
