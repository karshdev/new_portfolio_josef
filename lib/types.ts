import type { LINKS } from "./data";

export type SectionName = (typeof LINKS)[number]["name"];

export type ProjectVisual =
  | {
      kind: "browser-image";
      src: string;
      alt: string;
      width: number;
      height: number;
      url?: string;
    }
  | {
      kind: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
      background?: string;
    }
  | { kind: "dashboard"; url?: string }
  | { kind: "fintech" };

export type ProjectLink = { label: string; href: string };

export type CaseStudyMetric = { value: string; label: string };

export type CaseStudy = {
  overview: string;
  challenge: string;
  solution: string;
  contribution: string[];
  result: string;
  metrics: CaseStudyMetric[];
  gallery?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption?: string;
  }[];
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  period: string;
  role: string;
  problem: string;
  built: string;
  outcome: string;
  stack: string[];
  links: ProjectLink[];
  visual: ProjectVisual;
  fig: string;
  featured: boolean;
  caseStudy: CaseStudy;
};

export type Metric = {
  value: string;
  label: string;
  detail: string;
  mono?: boolean;
};

export type Ledger = {
  updated: string;
  role: { title: string; sub: string };
  based: { title: string; sub: string };
  stack: string[];
  shipped: [string, string][];
  status: string;
};

export type ProcessItem = {
  title: string;
  body: string;
};

export type StackGroup = {
  label: string;
  items: string[];
};

export type ExperienceEntry = {
  dates: string;
  role: string;
  org: string;
  where: string;
  body: string;
  href?: string;
  kind?: "work" | "education";
};
