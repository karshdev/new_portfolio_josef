"use client";

import clsx from "clsx";
import { STACK } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { Container, SectionHeader, Tags } from "./ui";

export default function Stack() {
  const { ref } = useSectionInView("Stack", 0.4);

  return (
    <section ref={ref} id="stack" className="scroll-mt-16">
      <Container className="pt-24 sm:pt-32">
        <SectionHeader
          index="04"
          label="Stack"
          title="What I build with."
          tail="Everything here has shipped to production at least once."
        />
        <div className="border-t border-line-2">
          {STACK.map((group, i) => (
            <div
              key={group.label}
              className={clsx(
                "grid grid-cols-1 gap-3 border-b py-5 sm:grid-cols-[240px_1fr] sm:items-center sm:gap-8",
                i === STACK.length - 1 ? "border-line-2" : "border-line"
              )}
            >
              <span className="text-[17px] font-semibold text-fg">{group.label}</span>
              <Tags items={group.items} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
