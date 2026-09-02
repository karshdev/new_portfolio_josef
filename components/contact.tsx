"use client";

import Image from "next/image";
import clsx from "clsx";
import toast from "react-hot-toast";
import { PROFILE } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { Container } from "./ui";

export function ContactButtons({ compact = false }: { compact?: boolean }) {
  const buttons = [
    { label: "Email me", href: `mailto:${PROFILE.email}`, primary: true },
    { label: "LinkedIn", href: PROFILE.linkedin },
    { label: "GitHub", href: PROFILE.github },
    { label: "Viafocus ↗", href: PROFILE.company },
  ];
  return (
    <div className="flex flex-wrap gap-2.5">
      {buttons.map((b) => (
        <a
          key={b.label}
          href={b.href}
          target={b.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={b.href.startsWith("mailto:") ? undefined : "noreferrer"}
          className={clsx(
            "btn",
            b.primary ? "btn-paper" : "btn-outline-paper",
            compact && "btn-sm"
          )}
        >
          {b.label}
        </a>
      ))}
    </div>
  );
}

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.5);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      toast.success("Email copied");
    } catch {
      toast.error("Couldn't copy — it's " + PROFILE.email);
    }
  }

  return (
    <section ref={ref} id="contact" className="ink-block scroll-mt-16">
      <Container className="grid grid-cols-1 gap-10 py-20 sm:py-28 lg:grid-cols-12 lg:items-end lg:gap-8">
        <div className="flex flex-col gap-7 lg:col-span-8">
          <span className="label !text-accent">06 — Contact · open to fullstack roles</span>
          <h2 className="text-[clamp(40px,5.6vw,80px)] font-bold leading-[0.98] tracking-[-0.035em]">
            Let&apos;s build something great.
          </h2>
          <button
            type="button"
            onClick={copyEmail}
            title="Copy email"
            className="w-max border-b-2 border-accent pb-1.5 text-left font-mono text-[18px] tracking-tight transition-colors hover:text-accent sm:text-[28px]"
          >
            {PROFILE.email}
          </button>
          <ContactButtons />
        </div>
        <div className="flex items-center gap-4 border-t border-paper/20 pt-5 lg:col-span-4">
          <Image
            src={PROFILE.portrait}
            alt={`Portrait of ${PROFILE.name}`}
            width={56}
            height={56}
            className="h-14 w-14 rounded-md object-cover"
          />
          <div className="flex flex-col gap-1">
            <span className="text-[15px] font-semibold">{PROFILE.name}</span>
            <span className="font-mono text-[12px] text-paper/60">
              {PROFILE.city}, SE · email is fastest
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
