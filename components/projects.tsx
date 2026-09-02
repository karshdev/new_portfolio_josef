"use client";

import { PROJECTS } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { Container, SectionHeader } from "./ui";
import { ProjectMiniRow, ProjectRow } from "./project-card";

export default function Projects() {
  const { ref } = useSectionInView("Work", 0.15);
  const featured = PROJECTS.filter((p) => p.featured);
  const more = PROJECTS.filter((p) => !p.featured);

  return (
    <section ref={ref} id="work" className="scroll-mt-16">
      <Container className="pt-24 sm:pt-32">
        <SectionHeader
          index="02"
          label="Work"
          title="Real products. Real users."
          tail="Three projects, each shipped to people who depended on them."
        />
        <div>
          {featured.map((project, i) => (
            <ProjectRow
              key={project.slug}
              project={project}
              index={i + 1}
              figure={String(i + 2).padStart(2, "0")}
              last={i === featured.length - 1}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-x-8 pt-6 lg:grid-cols-2">
          {more.map((project, i) => (
            <ProjectMiniRow key={project.slug} project={project} index={featured.length + i + 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}
