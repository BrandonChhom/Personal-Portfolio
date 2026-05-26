export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl rounded-3xl bg-slate-100 px-6 py-10 sm:px-12 sm:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          Contact
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-950 sm:text-4xl">
          Let&apos;s Connect
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-black">
          I am interested in software engineering opportunities and would be
          happy to connect about internships, projects, or professional
          opportunities.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="mailto:s.chhom15@gmail.com"
            className="w-full rounded-full bg-indigo-600 px-6 py-3 text-center font-medium text-white transition duration-200 hover:bg-indigo-400 sm:w-auto"
          >
            Email Me
          </a>

          <a
            href="https://linkedin.com/in/brandon-chhom"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full border border-slate-700 px-6 py-3 text-center font-medium text-black transition duration-200 hover:border-indigo-600 hover:text-indigo-600 sm:w-auto"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/SopeckChhom"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full border border-slate-700 px-6 py-3 text-center font-medium text-black transition duration-200 hover:border-indigo-600 hover:text-indigo-600 sm:w-auto"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
