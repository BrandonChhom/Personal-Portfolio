import experience from "@/data/experience";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 px-6 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="01" label="Experience" />

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-2 w-px bg-slate-800 sm:left-3"
          />

          <div className="space-y-8">
            {experience.map((role, index) => (
              <Reveal
                key={`${role.title}-${role.organization}`}
                as="article"
                delay={index * 100}
                className="relative pl-10 sm:pl-12"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-2 left-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-indigo-400 bg-slate-950 sm:left-3"
                />

                <div
                  tabIndex={0}
                  className="group -mx-3 rounded-lg px-3 py-2 outline-none"
                >
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {role.title}
                      </h3>

                      {role.organization && (
                        <p className="mt-2 font-medium text-indigo-400">
                          {role.organization}
                        </p>
                      )}
                    </div>

                    <div className="text-sm text-slate-400 sm:text-right">
                      <p className="font-medium">{role.date}</p>
                      {role.location && <p className="mt-1">{role.location}</p>}
                    </div>
                  </div>

                  <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="max-w-4xl pt-6 leading-7 text-slate-300">
                        {role.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
