"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";

const SoundContext = createContext({
  enabled: false,
  toggle: () => {},
  playHover: () => {},
  playClick: () => {},
});

export function useSound() {
  return useContext(SoundContext);
}

// Builds a short noise-burst impulse response for a soft reverb tail.
function buildImpulse(ctx, duration = 2.2, decay = 3.2) {
  const rate = ctx.sampleRate;
  const length = Math.floor(rate * duration);
  const impulse = ctx.createBuffer(2, length, rate);
  for (let ch = 0; ch < 2; ch++) {
    const data = impulse.getChannelData(ch);
    for (let i = 0; i < length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, decay);
    }
  }
  return impulse;
}

export function AudioProvider({ children }) {
  const [enabled, setEnabled] = useState(false);
  const ctxRef = useRef(null);
  const ambientRef = useRef(null);
  const masterRef = useRef(null);

  // Restore preference (does not auto-start audio — needs a user gesture).
  useEffect(() => {
    const saved = localStorage.getItem("sound-enabled");
    if (saved === "true") setEnabled(true);
  }, []);

  const ensureContext = () => {
    if (!ctxRef.current) {
      const AC = window.AudioContext || window.webkitAudioContext;
      ctxRef.current = new AC();
      const master = ctxRef.current.createGain();
      master.gain.value = 0;
      master.connect(ctxRef.current.destination);
      masterRef.current = master;
    }
    return ctxRef.current;
  };

  const startAmbient = (ctx) => {
    if (ambientRef.current) return;
    const master = masterRef.current;

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 900;

    const convolver = ctx.createConvolver();
    convolver.buffer = buildImpulse(ctx);
    const wetGain = ctx.createGain();
    wetGain.gain.value = 0.35;

    const dry = ctx.createGain();
    dry.gain.value = 0.7;

    filter.connect(dry);
    filter.connect(convolver);
    convolver.connect(wetGain);
    dry.connect(master);
    wetGain.connect(master);

    const freqs = [110, 164.81, 220];
    const oscillators = freqs.map((freq, i) => {
      const osc = ctx.createOscillator();
      osc.type = i === 1 ? "triangle" : "sine";
      osc.frequency.value = freq;
      const gain = ctx.createGain();
      gain.gain.value = 0.18 / freqs.length;
      osc.connect(gain);
      gain.connect(filter);
      osc.start();
      return osc;
    });

    // Slow LFO sweeps the filter cutoff for a breathing pad feel.
    const lfo = ctx.createOscillator();
    lfo.type = "sine";
    lfo.frequency.value = 0.05;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 400;
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    lfo.start();

    ambientRef.current = { filter, convolver, wetGain, dry, oscillators, lfo, lfoGain };
  };

  const toggle = () => {
    const ctx = ensureContext();
    if (ctx.state === "suspended") ctx.resume();
    startAmbient(ctx);

    setEnabled((prev) => {
      const next = !prev;
      localStorage.setItem("sound-enabled", String(next));
      const master = masterRef.current;
      const now = ctx.currentTime;
      master.gain.cancelScheduledValues(now);
      master.gain.linearRampToValueAtTime(next ? 0.06 : 0, now + 0.8);
      return next;
    });
  };

  const playBlip = ({ freq, toFreq, type, duration, gain }) => {
    if (!enabled || !ctxRef.current) return;
    const ctx = ctxRef.current;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    if (toFreq) osc.frequency.exponentialRampToValueAtTime(toFreq, ctx.currentTime + duration);
    g.gain.setValueAtTime(gain, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    osc.connect(g);
    g.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  };

  const playHover = () => playBlip({ freq: 700, toFreq: 1100, type: "sine", duration: 0.09, gain: 0.05 });
  const playClick = () => playBlip({ freq: 520, toFreq: 220, type: "triangle", duration: 0.16, gain: 0.08 });

  // Resume audio context if it gets suspended (e.g. tab switch).
  useEffect(() => {
    const onVisible = () => {
      if (ctxRef.current && enabled && ctxRef.current.state === "suspended") {
        ctxRef.current.resume();
      }
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, [enabled]);

  return (
    <SoundContext.Provider value={{ enabled, toggle, playHover, playClick }}>
      {children}
      <button
        type="button"
        onClick={toggle}
        className="sound-toggle"
        title={enabled ? "Mute sound" : "Enable sound"}
        aria-pressed={enabled}
      >
        {enabled ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="3 9 7 9 11 5 11 19 7 15 3 15 3 9" fill="currentColor" />
            <path d="M15.5 8.5a4.5 4.5 0 0 1 0 7" />
            <path d="M18 6a8 8 0 0 1 0 12" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="3 9 7 9 11 5 11 19 7 15 3 15 3 9" fill="currentColor" />
            <line x1="16" y1="9" x2="22" y2="15" />
            <line x1="22" y1="9" x2="16" y2="15" />
          </svg>
        )}
      </button>
    </SoundContext.Provider>
  );
}
