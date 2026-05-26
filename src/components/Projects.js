import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
          Projects
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Featured Projects
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          A selection of projects I have built while developing my skills in
          full-stack development, cloud technologies, and data analysis.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
