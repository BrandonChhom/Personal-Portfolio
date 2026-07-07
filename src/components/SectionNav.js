"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function SectionNav() {
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    const elements = SECTIONS.map(({ id }) => document.getElementById(id)).filter(
      Boolean
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed top-1/2 right-6 z-40 hidden -translate-y-1/2 flex-col items-end gap-5 lg:flex"
    >
      {SECTIONS.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={label}
          aria-current={active === id ? "true" : undefined}
          className="group flex items-center gap-3"
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-medium text-slate-400 opacity-0 transition-all duration-200 group-hover:max-w-24 group-hover:opacity-100">
            {label}
          </span>
          <span
            className={`h-2.5 w-2.5 rounded-full border transition-colors duration-200 ${
              active === id
                ? "border-indigo-400 bg-indigo-400"
                : "border-slate-600 bg-transparent group-hover:border-indigo-400"
            }`}
          />
        </a>
      ))}
    </nav>
  );
}
