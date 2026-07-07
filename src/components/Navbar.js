"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-4">
          <a
            href="#"
            onClick={closeMenu}
            className="text-lg font-bold tracking-tight text-white transition-[text-shadow] hover:[text-shadow:0_2px_3px_rgba(15,23,42,0.25)]"
          >
            Brandon <span className="text-indigo-400">Chhom</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
            <a
              href="#experience"
              className="transition-colors duration-200 hover:text-indigo-400"
            >
              Experience
            </a>

            <a
              href="#projects"
              className="transition-colors duration-200 hover:text-indigo-400"
            >
              Projects
            </a>

            <a
              href="#skills"
              className="transition-colors duration-200 hover:text-indigo-400"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="transition-colors duration-200 hover:text-indigo-400"
            >
              Contact
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-indigo-400"
            >
              Résumé
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="rounded-lg border border-slate-700 p-2 text-slate-300 transition hover:border-indigo-400 hover:text-indigo-400 md:hidden"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.8"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-slate-800 py-4 md:hidden">
            <div className="flex flex-col gap-1 text-sm font-medium text-slate-300">
              <a
                href="#experience"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 transition hover:bg-slate-900 hover:text-indigo-400"
              >
                Experience
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 transition hover:bg-slate-900 hover:text-indigo-400"
              >
                Projects
              </a>

              <a
                href="#skills"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 transition hover:bg-slate-900 hover:text-indigo-400"
              >
                Skills
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 transition hover:bg-slate-900 hover:text-indigo-400"
              >
                Contact
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 transition hover:bg-slate-900 hover:text-indigo-400"
              >
                Résumé
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
