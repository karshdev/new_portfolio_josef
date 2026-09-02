"use client";

import clsx from "clsx";
import { EXPERIENCE, PROFILE } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { Container, SectionHeader } from "./ui";

export default function Experience() {
  const { ref } = useSectionInView("Log", 0.3);

  return (
    <section ref={ref} id="log" className="scroll-mt-16">
      <Container className="pb-24 pt-24 sm:pb-32 sm:pt-32">
        <SectionHeader
          index="05"
          label="Log"
          title="Where I've built."
          tail="Five roles and a degree. All of them shipped something."
        />
        <div className="border-t border-line-2">
          {EXPERIENCE.map((entry, i) => (
            <div
              key={`${entry.org}-${entry.dates}`}
              className={clsx(
                "grid grid-cols-1 gap-2 border-b py-6 sm:grid-cols-[240px_1fr] sm:gap-8",
                i === EXPERIENCE.length - 1 ? "border-line-2" : "border-line"
              )}
            >
              <div className="flex flex-col gap-1 font-mono text-[12.5px]">
                <span className="text-fg">{entry.dates}</span>
                <span className="text-fg-3">{entry.where}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="text-[19px] font-bold tracking-tight text-fg sm:text-[20px]">
                  {entry.role}{" "}
                  <span className="font-medium text-fg-3">
                    ·{" "}
                    {entry.href ? (
                      <a
                        href={entry.href}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-accent"
                      >
                        {entry.org}
                      </a>
                    ) : (
                      entry.org
                    )}
                  </span>
                </div>
                <p className="max-w-[720px] text-[14.5px] leading-[1.55] text-fg-2">
                  {entry.body}
                </p>
              </div>
            </div>
          ))}
        </div>
        <a
          href={PROFILE.cv}
          target="_blank"
          rel="noreferrer"
          className="mono-link mt-6 inline-block"
        >
          Full CV (PDF) ↓
        </a>
      </Container>
    </section>
  );
}
