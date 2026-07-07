import Image from "next/image";
import Reveal from "./Reveal";
import { GitHubIcon, LinkedInIcon } from "./icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:py-20 lg:min-h-[calc(100svh-65px)] lg:grid-cols-[1fr_360px]">
        <Reveal>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400">
            Computer Science Student at UC Santa Cruz
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span className="text-slate-300">
              Brandon <span className="text-indigo-400">Chhom</span>
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            I am interested in full-stack development and ML/AI. I am currently
            looking for software engineering internship opportunities.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="w-full rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-center font-medium text-slate-200 transition duration-200 hover:border-indigo-400 hover:text-indigo-400 sm:w-auto"
            >
              Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-slate-700 bg-slate-900 px-6 py-3 text-center font-medium text-slate-200 transition duration-200 hover:border-indigo-400 hover:text-indigo-400 sm:w-auto"
            >
              Résumé
            </a>

            <a
              href="https://linkedin.com/in/brandon-chhom"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition duration-200 hover:border-indigo-400 hover:text-indigo-400"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>

            <a
              href="https://github.com/BrandonChhom"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-200 transition duration-200 hover:border-indigo-400 hover:text-indigo-400"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
          </div>
        </Reveal>

        <Reveal
          as="aside"
          delay={150}
          className="mx-auto w-full max-w-70 sm:max-w-[320px] lg:max-w-none"
        >
          <div className="rounded-full border border-slate-800 bg-slate-900 p-3 shadow-sm">
            <div className="relative aspect-square overflow-hidden rounded-full bg-slate-800">
              <Image
                src="/profile-photo2.jpeg"
                alt="Portrait of Brandon Chhom"
                fill
                priority
                sizes="(max-width: 1024px) 320px, 360px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
