"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";
import { LINKS, PROFILE } from "@/lib/data";
import type { SectionName } from "@/lib/types";

const NAV_LINKS = LINKS.filter(
  (l) => l.name !== "Home" && l.name !== "Contact"
);

export default function Nav() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (name: SectionName) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
    setOpen(false);
  };

  return (
    <header
      className={clsx(
        "nav-glass fixed inset-x-0 top-0 z-50 border-b transition-colors",
        scrolled || open ? "border-line" : "border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="/#home"
          onClick={() => go("Home")}
          className="flex items-baseline gap-3.5"
        >
          <span className="whitespace-nowrap text-[16px] font-bold tracking-tight">
            {PROFILE.name}
          </span>
          <span className="hidden font-mono text-[12px] text-fg-3 lg:inline">
            {PROFILE.short}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 font-mono text-[12px] uppercase tracking-[0.1em] md:flex">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.hash}
              href={`/${link.hash}`}
              onClick={() => go(link.name)}
              className={clsx(
                "flex gap-2 transition-colors",
                activeSection === link.name ? "text-fg" : "text-fg-3 hover:text-fg"
              )}
            >
              <span className="text-accent">0{i + 1}</span>
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="grid h-9 w-9 place-items-center rounded-md border border-line-2 text-fg-2 transition-colors hover:border-fg hover:text-fg"
          >
            <i
              className={clsx(
                "text-[16px]",
                theme === "dark" ? "ri-sun-line" : "ri-moon-line"
              )}
            />
          </button>
          <Link
            href="/#contact"
            onClick={() => go("Contact")}
            className="btn btn-xs hidden sm:inline-flex"
          >
            Get in touch
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-md border border-line-2 text-fg-2 md:hidden"
          >
            <i className={clsx("text-[18px]", open ? "ri-close-line" : "ri-menu-line")} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line md:hidden">
          <ul className="mx-auto flex w-full max-w-[1280px] flex-col px-5 py-3 font-mono text-[13px] uppercase tracking-[0.1em]">
            {[...NAV_LINKS, LINKS[LINKS.length - 1]].map((link, i) => (
              <li key={link.hash}>
                <Link
                  href={`/${link.hash}`}
                  onClick={() => go(link.name)}
                  className="flex gap-3 py-3 text-fg-2 hover:text-fg"
                >
                  <span className="text-accent">0{i + 1}</span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
