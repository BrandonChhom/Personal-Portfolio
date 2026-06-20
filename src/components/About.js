export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[320px_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            About
          </p>
        </div>

        <div>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            I am a Computer Science student at UC Santa Cruz interested in
            full-stack software development. I enjoy building practical
            applications using technologies such as React, Node.js, Python, and
            AWS. I am continuing to develop my engineering skills through
            technical projects, coursework, and software engineering
            internships. On my own time I love to play sports and spend quality
            time with friends and family!
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="text-sm text-slate-500">Studying</p>
              <p className="mt-2 font-semibold text-slate-900">
                Computer Science B.S.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="text-sm text-slate-500">Interested In</p>
              <p className="mt-2 font-semibold text-slate-900">
                Full Stack Development & AI/ML
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-5">
              <p className="text-sm text-slate-500">Currently Building</p>
              <p className="mt-2 font-semibold text-slate-900">
                Personal Portfolio Website
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
