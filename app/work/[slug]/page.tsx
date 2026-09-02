import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import clsx from "clsx";
import { PROFILE, PROJECTS } from "@/lib/data";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ProjectVisual from "@/components/project-visual";
import { Container, FigCaption, Marks, Tags } from "@/components/ui";

type Params = { slug: string };

const SECTIONS = [
  ["01", "Overview"],
  ["02", "Challenge"],
  ["03", "Solution"],
  ["04", "My contribution"],
  ["05", "Stack"],
  ["06", "Result"],
] as const;

export function generateStaticParams(): Params[] {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — case study · ${PROFILE.name}`,
    description: project.tagline,
  };
}

function Meta({ label, children, last = false }: { label: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div className={clsx("grid grid-cols-[88px_1fr] gap-3 px-5 py-3.5", !last && "border-b border-line")}>
      <dt className="label pt-0.5">{label}</dt>
      <dd className="text-[15px] text-fg">{children}</dd>
    </div>
  );
}

function Block({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section id={`s${n}`} className="flex scroll-mt-24 flex-col gap-4">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-[12px] text-accent">{n}</span>
        <h2 className="text-[26px] font-bold tracking-tighter text-fg sm:text-[30px]">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function CaseStudyPage({ params }: { params: Params }) {
  const index = PROJECTS.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();

  const project = PROJECTS[index];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const cs = project.caseStudy;
  const caseNo = String(index + 1).padStart(2, "0");

  return (
    <>
      <Nav />
      <main className="pb-24 pt-28 sm:pt-32">
        <Container className="flex flex-col gap-10">
          <Link href="/#work" className="label flex w-max items-center gap-2 hover:text-fg">
            <i className="ri-arrow-left-line text-[14px]" />
            All work
          </Link>

          <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
            <div className="flex flex-col gap-5 lg:col-span-8">
              <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[12.5px] text-fg-3">
                <span className="text-accent">Case {caseNo}</span>
                <span>{project.category}</span>
                <span>{project.period}</span>
              </div>
              <h1 className="display">{project.name}</h1>
              <p className="max-w-[640px] text-[19px] leading-[1.45] text-fg-2 sm:text-[22px]">
                {project.tagline}
              </p>
            </div>
            <dl className="ledger lg:col-span-4">
              <Meta label="Role">
                <span className="font-semibold">{project.role}</span>
              </Meta>
              <Meta label="Timeline">{project.period}</Meta>
              <Meta label="Links">
                {project.links.length ? (
                  <span className="flex flex-col gap-1">
                    {project.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="w-max border-b border-line-2 hover:text-accent">
                        {l.label} ↗
                      </a>
                    ))}
                  </span>
                ) : (
                  <span className="text-fg-3">Internal / private</span>
                )}
              </Meta>
              <Meta label="Result" last>
                {project.outcome}
              </Meta>
            </dl>
          </div>

          <div className="mt-2 flex flex-col gap-4">
            <Marks>
              <ProjectVisual project={project} priority sizes="(min-width: 1280px) 1216px, 100vw" />
            </Marks>
            <FigCaption n="01" text={project.fig} className="!text-[12.5px] !text-fg-2" />
          </div>
        </Container>

        <Container className="mt-16 grid grid-cols-1 items-start gap-10 lg:mt-[72px] lg:grid-cols-[240px_1fr_320px] lg:gap-12">
          <nav className="hidden flex-col gap-3.5 border-t border-line-2 pt-5 font-mono text-[12px] uppercase tracking-[0.08em] lg:sticky lg:top-24 lg:flex">
            {SECTIONS.map(([n, title]) => (
              <a key={n} href={`#s${n}`} className="flex gap-3 text-fg-3 hover:text-fg">
                <span className="text-accent">{n}</span>
                {title}
              </a>
            ))}
          </nav>

          <div className="flex max-w-[640px] flex-col gap-14 border-t border-line-2 pt-7">
            <Block n="01" title="Overview">
              <p className="text-[17px] leading-[1.6] text-fg-2">{cs.overview}</p>
            </Block>
            <Block n="02" title="Challenge">
              <p className="text-[17px] leading-[1.6] text-fg-2">{cs.challenge}</p>
            </Block>
            <Block n="03" title="Solution">
              <p className="text-[17px] leading-[1.6] text-fg-2">{cs.solution}</p>
              {cs.gallery?.map((img, i) => (
                <figure key={img.src} className="mt-2 flex flex-col gap-2.5">
                  <div className="frame max-w-[520px]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      sizes="(min-width: 1024px) 520px, 100vw"
                      className="block h-auto w-full"
                    />
                  </div>
                  {img.caption && <FigCaption n={String(i + 2).padStart(2, "0")} text={img.caption} />}
                </figure>
              ))}
            </Block>
            <Block n="04" title="My contribution">
              <ul className="border-t border-line">
                {cs.contribution.map((item, i) => (
                  <li key={item} className="grid grid-cols-[40px_1fr] gap-3 border-b border-line py-3 text-[16px] text-fg">
                    <span className="pt-1 font-mono text-[11.5px] text-fg-3">
                      {String.fromCharCode(97 + i)}.
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Block>
            <Block n="05" title="Stack">
              <Tags items={project.stack} />
            </Block>
            <Block n="06" title="Result">
              <p className="text-[17px] leading-[1.6] text-fg-2">{cs.result}</p>
              <div className="mt-2 grid grid-cols-2 border-l border-t border-t-line-2 border-l-line">
                {cs.metrics.map((m) => (
                  <div key={m.label} className="border-b border-r border-line p-5">
                    <div className="tabular text-[40px] font-extrabold leading-none tracking-tightest text-fg sm:text-[44px]">
                      {m.value}
                    </div>
                    <div className="mt-2 font-mono text-[12px] text-fg-3">{m.label}</div>
                  </div>
                ))}
              </div>
            </Block>
          </div>

          <aside className="flex flex-col gap-5 border-t border-line-2 pt-5 lg:sticky lg:top-24">
            <div className="flex flex-col gap-2.5">
              <span className="label">At a glance</span>
              <ul>
                {cs.metrics.map((m, i) => (
                  <li
                    key={m.label}
                    className={clsx(
                      "flex items-baseline gap-3.5 py-2.5",
                      i < cs.metrics.length - 1 && "border-b border-line"
                    )}
                  >
                    <span className="w-14 shrink-0 text-[22px] font-extrabold tracking-tighter text-fg">{m.value}</span>
                    <span className="text-[13.5px] text-fg-2">{m.label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link href={`/work/${next.slug}`} className="ledger row-hover flex flex-col gap-1.5 p-4 sm:p-5">
              <span className="label">Next · Case {String(((index + 1) % PROJECTS.length) + 1).padStart(2, "0")}</span>
              <span className="flex items-center justify-between text-[18px] font-bold tracking-tight text-fg">
                {next.name}
                <span className="text-accent">→</span>
              </span>
              <span className="text-[13.5px] text-fg-3">{next.tagline}</span>
            </Link>
          </aside>
        </Container>

        <Container className="mt-20 flex flex-col gap-6 border-t border-line-2 pt-12 sm:mt-24 sm:flex-row sm:items-center sm:justify-between sm:pt-14">
          <div className="flex flex-col gap-2">
            <h2 className="text-[32px] font-bold tracking-tighter text-fg sm:text-[40px]">
              Want to talk about this project?
            </h2>
            <p className="text-[16px] text-fg-2">
              Happy to walk through the architecture, the trade-offs, or what I&apos;d do differently.
            </p>
          </div>
          <div className="flex shrink-0 gap-2.5">
            <a href={`mailto:${PROFILE.email}`} className="btn">Email me</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">LinkedIn</a>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
