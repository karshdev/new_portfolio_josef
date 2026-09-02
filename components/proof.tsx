"use client";

import clsx from "clsx";
import { METRICS } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { Container, SectionHeader } from "./ui";

export default function Proof() {
  const { ref } = useSectionInView("Proof", 0.4);

  return (
    <section ref={ref} id="proof" className="scroll-mt-16">
      <Container className="pt-20 sm:pt-24">
        <SectionHeader
          index="01"
          label="Proof"
          title="Shipped, not just started."
          tail="Numbers from products that are live today."
        />
        <div className="grid grid-cols-1 border-l border-t border-t-line-2 border-l-line sm:grid-cols-2 lg:grid-cols-3">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="flex flex-col gap-2.5 border-b border-r border-line px-6 pb-8 pt-7 sm:px-7"
            >
              <span className="label">{m.label}</span>
              <span
                className={clsx(
                  "tabular leading-none text-fg",
                  m.mono
                    ? "font-mono text-[40px] font-semibold tracking-tighter sm:text-[44px]"
                    : "text-[56px] font-extrabold tracking-tightest sm:text-[64px]"
                )}
              >
                {m.value.endsWith("+") ? (
                  <>
                    {m.value.slice(0, -1)}
                    <span className="text-accent">+</span>
                  </>
                ) : (
                  m.value
                )}
              </span>
              <span className="text-[14.5px] leading-relaxed text-fg-2">{m.detail}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
