import skills from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-slate-50 px-6 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          Skills
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Technical Skills
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Technologies and tools I have used across projects, coursework, and
          software development experience.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skillGroup) => (
            <article
              key={skillGroup.category}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:border-indigo-200 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                {skillGroup.category}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
