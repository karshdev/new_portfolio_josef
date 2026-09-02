import { PROFILE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-2 px-5 py-7 font-mono text-[12px] text-fg-3 sm:h-[72px] sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-0">
        <span>© 2026 {PROFILE.name} — built with Next.js in {PROFILE.city}</span>
        <span>{PROFILE.version}</span>
      </div>
    </footer>
  );
}
