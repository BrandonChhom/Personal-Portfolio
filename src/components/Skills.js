import skills from "@/data/skills";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 px-6 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="03" label="Skills" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skillGroup, index) => (
            <Reveal
              key={skillGroup.category}
              as="article"
              delay={index * 80}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-sm transition duration-200 hover:border-indigo-500/40 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-white">
                {skillGroup.category}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-800 px-3 py-1.5 text-sm font-medium text-indigo-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
