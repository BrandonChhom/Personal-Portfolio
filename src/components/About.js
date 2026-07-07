import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-16 sm:py-24">
      <Reveal className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[320px_1fr]">
        <div>
          <SectionHeading number="01" label="About" />
        </div>

        <div>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            I am a Computer Science student at UC Santa Cruz interested in
            full-stack software development. I enjoy building practical
            applications using technologies such as React, Node.js, Python, and
            AWS. I am continuing to develop my engineering skills through
            technical projects, coursework, and software engineering
            internships. On my own time I love to play sports and spend quality
            time with friends and family!
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 p-5">
              <p className="text-sm text-slate-400">Studying</p>
              <p className="mt-2 font-semibold text-white">
                Computer Science B.S.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 p-5">
              <p className="text-sm text-slate-400">Interested In</p>
              <p className="mt-2 font-semibold text-white">
                Full Stack Development & AI/ML
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 p-5">
              <p className="text-sm text-slate-400">Currently Building</p>
              <p className="mt-2 font-semibold text-white">
                Personal Portfolio Website
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
