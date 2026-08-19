"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    function handleMouseMove(event) {
      glowRef.current?.style.setProperty("--x", `${event.clientX}px`);
      glowRef.current?.style.setProperty("--y", `${event.clientY}px`);
      glowRef.current?.style.setProperty("--glow-opacity", "1");
    }

    function handleMouseLeave() {
      glowRef.current?.style.setProperty("--glow-opacity", "0");
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
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
      style={{
        opacity: "var(--glow-opacity, 0)",
        background:
          "radial-gradient(125px circle at var(--x, 50%) var(--y, 50%), rgba(99,102,241,0.35), transparent 70%)",
        mixBlendMode: "screen",
      }}
    />
  );
}
