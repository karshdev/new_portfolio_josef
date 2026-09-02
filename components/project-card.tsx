import Link from "next/link";
import clsx from "clsx";
import type { Project } from "@/lib/types";
import ProjectVisual from "./project-visual";
import { FigCaption, Tags } from "./ui";

function Facet({ label, children, strong = false }: { label: string; children: React.ReactNode; strong?: boolean }) {
  return (
    <div className="flex flex-col gap-2 border-t border-line pt-3">
      <span className="label">{label}</span>
      <span className={clsx("text-[14px] leading-[1.55]", strong ? "font-semibold text-fg" : "text-fg-2")}>
        {children}
      </span>
    </div>
  );
}

function ExternalLinks({ project }: { project: Project }) {
  return (
    <>
      {project.links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="mono-link"
        >
          {link.label} ↗
        </a>
      ))}
    </>
  );
}

export function ProjectRow({
  project,
  index,
  figure,
  last = false,
}: {
  project: Project;
  index: number;
  figure: string;
  last?: boolean;
}) {
  const n = String(index).padStart(2, "0");
  return (
    <article
      className={clsx(
        "row-hover grid grid-cols-1 gap-8 border-t py-10 sm:py-11 lg:grid-cols-[72px_1fr_440px] lg:gap-10",
        index === 1 ? "border-line-2" : "border-line",
        last && "border-b border-b-line-2"
      )}
    >
      <span className="hidden font-mono text-[14px] text-accent lg:block lg:pt-2.5">{n}</span>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-x-3.5 gap-y-1 font-mono text-[12px] text-fg-3">
            <span className="text-accent lg:hidden">{n}</span>
            <span>{project.category}</span>
            <span>{project.period}</span>
            <span>{project.role}</span>
          </div>
          <h3 className="text-[32px] font-bold leading-[1.05] tracking-tighter text-fg sm:text-[40px]">
            {project.name}
          </h3>
          <p className="text-[17px] text-fg-2 sm:text-[18px]">{project.tagline}</p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
          <Facet label="Problem">{project.problem}</Facet>
          <Facet label="Built">{project.built}</Facet>
          <Facet label="Outcome" strong>
            {project.outcome}
          </Facet>
        </div>
        <Tags items={project.stack} />
        <div className="flex flex-wrap items-center gap-5">
          <Link href={`/work/${project.slug}`} className="btn btn-sm">
            Read case study
            <i className="ri-arrow-right-line" />
          </Link>
          <ExternalLinks project={project} />
        </div>
      </div>
      <div className="flex flex-col gap-2.5 lg:order-none order-first">
        <ProjectVisual project={project} />
        <FigCaption n={figure} text={project.fig} />
      </div>
    </article>
  );
}

export function ProjectMiniRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const n = String(index).padStart(2, "0");
  return (
    <article className="grid grid-cols-[40px_1fr] gap-4 border-b border-line py-6 sm:grid-cols-[48px_1fr_180px] sm:gap-5">
      <span className="font-mono text-[13px] text-accent sm:pt-1">{n}</span>
      <div className="flex flex-col gap-2">
        <div className="font-mono text-[11.5px] text-fg-3">
          {project.category} · {project.period} · {project.role}
        </div>
        <h3 className="text-[22px] font-bold tracking-tight text-fg sm:text-[24px]">
          {project.name}
        </h3>
        <p className="text-[14.5px] leading-relaxed text-fg-2">{project.built}</p>
        <div className="mt-1 flex flex-wrap items-center gap-4">
          <Link href={`/work/${project.slug}`} className="mono-link">
            Case study →
          </Link>
          <ExternalLinks project={project} />
        </div>
      </div>
      <div className="col-start-2 sm:col-start-auto">
        <ProjectVisual project={project} sizes="180px" compact className="max-w-[240px] sm:max-w-none" />
      </div>
    </article>
  );
}
