import Image from "next/image";
import clsx from "clsx";
import type { Project } from "@/lib/types";
import { Frame } from "./ui";
import { DashboardMockup, FintechMockup } from "./mockups";

export default function ProjectVisual({
  project,
  priority = false,
  sizes = "(min-width: 1024px) 440px, 100vw",
  compact = false,
  className,
}: {
  project: Project;
  priority?: boolean;
  sizes?: string;
  compact?: boolean;
  className?: string;
}) {
  const v = project.visual;

  switch (v.kind) {
    case "browser-image":
      return (
        <Frame bar={v.url} className={className}>
          <Image
            src={v.src}
            alt={v.alt}
            width={v.width}
            height={v.height}
            priority={priority}
            sizes={sizes}
            className="block h-auto w-full"
          />
        </Frame>
      );
    case "image":
      return (
        <Frame className={className}>
          <Image
            src={v.src}
            alt={v.alt}
            width={v.width}
            height={v.height}
            priority={priority}
            sizes={sizes}
            className="block h-auto w-full"
            style={v.background ? { background: v.background } : undefined}
          />
        </Frame>
      );
    case "dashboard":
      return (
        <Frame bar={v.url} className={className}>
          <DashboardMockup />
        </Frame>
      );
    case "fintech":
      return (
        <Frame className={clsx("bg-card-solid", className)}>
          <FintechMockup compact={compact} />
        </Frame>
      );
  }
}
