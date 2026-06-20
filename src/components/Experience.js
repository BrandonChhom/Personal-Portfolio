import experience from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-slate-50 px-6 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          Experience
        </p>

        <div className="mt-12 space-y-6">
          {experience.map((role) => (
            <article
              key={`${role.title}-${role.organization}`}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:border-indigo-200 hover:shadow-md"
            >
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-xl font-semibold text-slate-950">
                    {role.title}
                  </h3>

                  {role.organization && (
                    <p className="mt-2 font-medium text-indigo-600">
                      {role.organization}
                    </p>
                  )}
                </div>

                <div className="text-sm text-slate-500 sm:text-right">
                  <p className="font-medium">{role.date}</p>
                  {role.location && <p className="mt-1">{role.location}</p>}
                </div>
              </div>

              <p className="mt-6 max-w-4xl leading-7 text-slate-600">
                {role.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
