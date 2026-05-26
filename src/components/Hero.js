import Image from "next/image";

export default function Hero() {
  return (
    <section className="border-b border-slate-100 bg-linear-to-b from-white to-slate-50/80">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:py-20 lg:min-h-[calc(100svh-65px)] lg:grid-cols-[1fr_360px]">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Computer Science Student at UC Santa Cruz
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="text-indigo-600">Brandon Chhom.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            I am interested in full-stack development and ML/AI. I am currently
            looking for software engineering internship opportunities. I build
            practical applications using technologies such as React, Node.js,
            and Python.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="w-full rounded-full bg-indigo-600 px-6 py-3 text-center font-medium text-white shadow-sm transition duration-200 hover:bg-indigo-400 sm:w-auto"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-slate-300 bg-white px-6 py-3 text-center font-medium text-slate-700 transition duration-200 hover:border-indigo-600 hover:text-indigo-600 sm:w-auto"
            >
              View Résumé
            </a>

            <a
              href="https://github.com/SopeckChhom"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-slate-300 bg-white px-6 py-3 text-center font-medium text-slate-700 transition duration-200 hover:border-indigo-600 hover:text-indigo-600 sm:w-auto"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/brandon-chhom"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-slate-300 bg-white px-6 py-3 text-center font-medium text-slate-700 transition duration-200 hover:border-indigo-600 hover:text-indigo-600 sm:w-auto"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <aside className="mx-auto w-full max-w-70 sm:max-w-[320px] lg:max-w-none">
          <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-slate-100">
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
        </aside>
      </div>
    </section>
  );
}
