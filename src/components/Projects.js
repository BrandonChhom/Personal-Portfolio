import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading number="02" label="Projects" />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 80} className="h-full">
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                image={project.image}
                github={project.github}
                demo={project.demo}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
