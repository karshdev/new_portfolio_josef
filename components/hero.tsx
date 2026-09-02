"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { HERO, PROFILE } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Container, FigCaption, Frame, Marks, Tags } from "./ui";

function LedgerCell({
  label,
  className,
  children,
}: {
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={clsx("flex flex-col gap-2.5 p-5", className)}>
      <span className="label">{label}</span>
      <div>{children}</div>
    </div>
  );
}

export default function Hero() {
  const { ref } = useSectionInView("Home", 0.4);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const ledger = HERO.ledger;

  return (
    <section ref={ref} id="home">
      <Container className="grid grid-cols-1 items-start gap-10 pb-16 pt-32 sm:pt-40 lg:grid-cols-12 lg:gap-8 lg:pb-20">
        <div className="flex flex-col gap-7 lg:col-span-8">
          <div className="flex items-center gap-4 animate-lift-in">
            <Image
              src={PROFILE.portrait}
              alt={`Portrait of ${PROFILE.name}`}
              width={112}
              height={112}
              priority
              className="h-14 w-14 shrink-0 rounded-md object-cover ring-1 ring-line-2"
            />
            <div className="flex min-w-0 flex-col gap-1">
              <span className="text-[15px] font-semibold text-fg">{PROFILE.name}</span>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[12.5px] text-fg-2">
                <span className="flex items-center gap-2">
                  <span className="live-dot" />
                  <span className="font-semibold text-fg">LIVE</span>
                </span>
                <span>{HERO.status}</span>
              </div>
            </div>
          </div>
          <h1
            className="display max-w-[820px] animate-lift-in"
            style={{ animationDelay: "60ms" }}
          >
            {HERO.headline} <span className="hl">{HERO.highlight}</span>
          </h1>
          <p
            className="max-w-[580px] text-[18px] leading-relaxed text-fg-2 sm:text-[20px] animate-lift-in"
            style={{ animationDelay: "120ms" }}
          >
            {HERO.sub}
          </p>
          <div
            className="flex flex-wrap items-center gap-3 animate-lift-in"
            style={{ animationDelay: "180ms" }}
          >
            <Link
              href="/#work"
              onClick={() => {
                setActiveSection("Work");
                setTimeOfLastClick(Date.now());
              }}
              className="btn"
            >
              View work
              <i className="ri-arrow-down-line" />
            </Link>
            <a
              href={PROFILE.company}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              See Viafocus
              <i className="ri-arrow-right-up-line" />
            </a>
            <a
              href={PROFILE.cv}
              target="_blank"
              rel="noreferrer"
              className="mono-link ml-1"
            >
              CV (PDF) ↓
            </a>
          </div>
        </div>

        <aside
          className="ledger animate-lift-in lg:col-span-4 lg:mt-2"
          style={{ animationDelay: "240ms" }}
        >
          <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
            <span className="label">At a glance</span>
            <span className="font-mono text-[11px] text-fg-3">{ledger.updated}</span>
          </div>
          <div className="grid grid-cols-2">
            <LedgerCell label="Role" className="border-b border-r border-line">
              <div className="text-[15px] font-semibold leading-snug text-fg">
                {ledger.role.title}
              </div>
              <div className="mt-1 text-[13px] text-fg-3">{ledger.role.sub}</div>
            </LedgerCell>
            <LedgerCell label="Based" className="border-b border-line">
              <div className="text-[15px] font-semibold leading-snug text-fg">
                {ledger.based.title}
              </div>
              <div className="mt-1 text-[13px] text-fg-3">{ledger.based.sub}</div>
            </LedgerCell>
            <LedgerCell label="Stack" className="border-r border-line">
              <Tags items={ledger.stack} />
            </LedgerCell>
            <LedgerCell label="Shipped">
              <ul className="space-y-1 text-[14px] leading-snug text-fg">
                {ledger.shipped.map(([n, what]) => (
                  <li key={what} className="flex items-baseline gap-2">
                    <span className="tabular w-3 font-mono text-[13px] font-semibold text-accent">
                      {n}
                    </span>
                    {what}
                  </li>
                ))}
              </ul>
            </LedgerCell>
          </div>
          <div className="flex items-center gap-2.5 border-t border-line px-5 py-3.5 text-[14px] font-medium text-fg">
            <span className="live-dot" />
            {ledger.status}
          </div>
        </aside>
      </Container>

      <div className="border-y border-line bg-bg-2 py-14 sm:py-[72px]">
        <Container className="flex flex-col gap-5">
          <Marks>
            <Frame bar={HERO.figure.bar} status={HERO.figure.status}>
              <Image
                src={HERO.figure.src}
                alt={HERO.figure.alt}
                width={HERO.figure.width}
                height={HERO.figure.height}
                priority
                sizes="(min-width: 1280px) 1216px, 100vw"
                className="block h-auto w-full"
              />
            </Frame>
          </Marks>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <FigCaption n="01" text={HERO.figure.caption} className="!text-[12.5px] !text-fg-2" />
            <span className="label whitespace-nowrap">{HERO.figure.tag}</span>
          </div>
        </Container>
      </div>
    </section>
  );
}
