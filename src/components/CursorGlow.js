"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const rootRef = useRef(null);

  useEffect(() => {
    function handleMouseMove(event) {
      const root = rootRef.current;
      if (!root) return;
      root.style.setProperty("--x", `${event.clientX}px`);
      root.style.setProperty("--y", `${event.clientY}px`);
      root.style.setProperty("--glow-opacity", "1");
    }

    function handleMouseLeave() {
      rootRef.current?.style.setProperty("--glow-opacity", "0");
    }

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
      style={{ opacity: "var(--glow-opacity, 0)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(50px circle at var(--x, 50%) var(--y, 50%), rgba(99,102,241,0.35), transparent 70%)",
          mixBlendMode: "screen",
        }}
      />
      <div
        className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: "var(--x, 50%)",
          top: "var(--y, 50%)",
          backgroundColor: "rgba(255,255,255,0.7)",
          boxShadow:
            "0 0 6px 2px rgba(255,255,255,0.45), 0 0 14px 5px rgba(255,255,255,0.2)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}
