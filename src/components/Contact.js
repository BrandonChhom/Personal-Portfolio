import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-16 sm:py-24">
      <Reveal className="mx-auto max-w-6xl">
        <SectionHeading number="04" label="Contact" />

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I am interested in software engineering opportunities and would be
          happy to connect about internships, projects, or professional
          opportunities.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="mailto:s.chhom15@gmail.com"
            aria-label="Email me"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-500 text-white transition duration-200 hover:border-indigo-400 hover:text-indigo-400"
          >
            <MailIcon className="h-5 w-5" />
          </a>

          <a
            href="https://linkedin.com/in/brandon-chhom"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-500 text-white transition duration-200 hover:border-indigo-400 hover:text-indigo-400"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>

          <a
            href="https://github.com/BrandonChhom"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-500 text-white transition duration-200 hover:border-indigo-400 hover:text-indigo-400"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
