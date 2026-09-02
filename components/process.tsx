"use client";

import { PROCESS } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { Container, SectionHeader } from "./ui";

export default function Process() {
  const { ref } = useSectionInView("Process", 0.4);

  return (
    <section ref={ref} id="process" className="scroll-mt-16">
      <Container className="pt-24 sm:pt-32">
        <SectionHeader
          index="03"
          label="Process"
          title="Product-minded. Production-ready."
          tail="The habits behind the numbers."
        />
        <div className="grid grid-cols-1 border-t border-line-2 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
          {PROCESS.map((item, i) => (
            <div
              key={item.title}
              className="flex flex-col gap-2.5 border-b border-line pb-8 pt-7"
            >
              <span className="font-mono text-[12px] text-accent">
                P.{String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[20px] font-bold tracking-tight text-fg">{item.title}</h3>
              <p className="text-[14.5px] leading-[1.55] text-fg-2">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
