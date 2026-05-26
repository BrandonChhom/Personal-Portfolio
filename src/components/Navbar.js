"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between py-4">
          <a
            href="#"
            onClick={closeMenu}
            className="text-lg font-bold tracking-tight text-slate-950 transition-[text-shadow] hover:[text-shadow:0_2px_3px_rgba(15,23,42,0.25)]"
          >
            Brandon <span className="text-indigo-600">Chhom</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <a
              href="#about"
              className="transition-colors duration-200 hover:text-indigo-600"
            >
              About
            </a>

            <a
              href="#experience"
              className="transition-colors duration-200 hover:text-indigo-600"
            >
              Experience
            </a>

            <a
              href="#projects"
              className="transition-colors duration-200 hover:text-indigo-600"
            >
              Projects
            </a>

            <a
              href="#skills"
              className="transition-colors duration-200 hover:text-indigo-600"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="transition-colors duration-200 hover:text-indigo-600"
            >
              Contact
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full bg-indigo-600 px-6 py-3 text-center font-medium text-white shadow-sm transition duration-200 hover:bg-indigo-400 sm:w-auto"
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
            className="rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:border-indigo-300 hover:text-indigo-600 md:hidden"
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
          <div className="border-t border-slate-200 py-4 md:hidden">
            <div className="flex flex-col gap-1 text-sm font-medium text-slate-700">
              <a
                href="#about"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 transition hover:bg-slate-50 hover:text-indigo-600"
              >
                About
              </a>

              <a
                href="#experience"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 transition hover:bg-slate-50 hover:text-indigo-600"
              >
                Experience
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 transition hover:bg-slate-50 hover:text-indigo-600"
              >
                Projects
              </a>

              <a
                href="#skills"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 transition hover:bg-slate-50 hover:text-indigo-600"
              >
                Skills
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 transition hover:bg-slate-50 hover:text-indigo-600"
              >
                Contact
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-3 rounded-full bg-indigo-600 px-5 py-3 text-center text-white transition hover:bg-indigo-700"
              >
                View Résumé
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
