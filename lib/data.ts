import type {
  ExperienceEntry,
  Ledger,
  Metric,
  ProcessItem,
  Project,
  StackGroup,
} from "./types";

export const LINKS = [
  { name: "Home", hash: "#home" },
  { name: "Proof", hash: "#proof" },
  { name: "Work", hash: "#work" },
  { name: "Process", hash: "#process" },
  { name: "Stack", hash: "#stack" },
  { name: "Log", hash: "#log" },
  { name: "Contact", hash: "#contact" },
] as const;

export const PROFILE = {
  name: "Josef Al-Masri",
  title: "Fullstack developer",
  role: "Co-founder & CTO, Viafocus",
  short: "CTO @ Viafocus · GBG",
  city: "Gothenburg",
  country: "Sweden",
  phone: "+46 70 725 14 25",
  email: "josefalmasri77@gmail.com",
  linkedin: "https://www.linkedin.com/in/josef-al-masri-245594185",
  github: "https://github.com/Abdurahim00",
  company: "https://viafocus.net",
  companyName: "Viafocus",
  cv: "/Josef_Al-Masri_CV.pdf",
  languages: "EN / SV",
  portrait: "/josef.png",
  version: "v3.0 · shipped 2026-09",
};

export const HERO = {
  status: "Viafocus pilot · a Swedish school · every school day",
  headline: "I build products people",
  highlight: "actually use.",
  sub: "Fullstack developer and co-founder. A SaaS platform live in a Swedish school, a mobile app with 300+ daily users, an internal tool that replaced paid software — built end-to-end, database to deploy to the customer call.",
  ledger: {
    updated: "2026-09",
    role: { title: "Co-founder & CTO", sub: "Viafocus · since 2024" },
    based: { title: "Gothenburg, SE", sub: "Swedish & English" },
    stack: ["TypeScript", "Node", "React", "Postgres"],
    shipped: [
      ["1", "SaaS platform"],
      ["2", "mobile apps"],
      ["1", "internal tool"],
    ],
    status: "Open to fullstack roles",
  } satisfies Ledger,
  figure: {
    src: "/projects/viafocus-dashboard.png",
    alt: "Viafocus teacher dashboard showing every student device in a class with Explore, Focus and Lock modes",
    width: 1600,
    height: 850,
    bar: "viafocus.net — Focuspilot",
    status: "22 devices online",
    caption:
      "Viafocus Focuspilot. One class, every device, one tap. Four backend services, four databases, a native Windows agent — all mine.",
    tag: "Live pilot · 2026",
  },
};

export const METRICS: Metric[] = [
  {
    value: "1",
    label: "Production SaaS",
    detail: "Viafocus — built end-to-end, architected and run by me.",
  },
  {
    value: "300+",
    label: "Daily active users",
    detail: "On the Algebraskolan app, App Store and Google Play.",
  },
  {
    value: "45",
    label: "Qualified leads",
    detail: "Swedish schools, from one trade show — Sett mässan 2026.",
  },
  {
    value: "Daily",
    label: "Pilot use",
    detail: "Teachers and students on it every school day.",
  },
  {
    value: "DB→UI",
    label: "Fullstack ownership",
    detail: "Schema, APIs, frontend, CI/CD, deploy, monitoring.",
    mono: true,
  },
  {
    value: "Live",
    label: "AI in production",
    detail: "LLM lesson builder and teaching assistant, shipped to teachers.",
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "viafocus",
    name: "Viafocus",
    tagline: "Classroom focus on school devices. One platform, three buttons.",
    category: "SaaS · EdTech",
    period: "2024 — present",
    role: "Co-founder & CTO",
    problem:
      "Laptops open, teachers lose the room. Existing tools are built for American rules, not Swedish schools.",
    built:
      "Teacher dashboard, real-time backend (4 services, 4 databases, WebSockets, Yjs), a native Windows agent, LLM lesson tooling.",
    outcome: "Live pilot in a Swedish school. 45 qualified leads. ALMI-backed.",
    stack: [
      "TypeScript",
      "Node.js",
      "Encore.ts",
      "React",
      "PostgreSQL",
      "WebSockets",
      "Yjs",
      "C#/.NET",
      "Docker",
      "AWS",
    ],
    links: [{ label: "viafocus.net", href: "https://viafocus.net" }],
    visual: {
      kind: "browser-image",
      src: "/projects/viafocus-dashboard.png",
      alt: "Viafocus Focuspilot dashboard with student device cards",
      width: 1600,
      height: 850,
      url: "viafocus.net",
    },
    fig: "Focuspilot, live class view",
    featured: true,
    caseStudy: {
      overview:
        "Viafocus is a Swedish EdTech platform for K–12 schools. A teacher sets a mode for the class — Explore, Focus or Lock — and every student device follows. It runs on Chromebook and Windows, is hosted in the EU, and is built around Skolverket's guidelines. I co-founded it in January 2024 and have been the CTO, and the engineer, from the first prototype through the current pilot.",
      challenge:
        "The hard part isn't the three buttons. A mode set by a teacher has to reach every device in the room before the lesson stalls, survive school Wi-Fi, work on two operating systems, and be enforced below the browser so a VPN extension or a renamed firefox.exe doesn't get around it — all while no student data ever leaves the EU. And it had to be built by one person, fast enough to have something worth piloting.",
      solution:
        "Four Encore.ts microservices over four PostgreSQL databases, with WebSockets for device state and Yjs CRDTs for collaborative lesson editing. Chromebooks deploy through Google Admin Console; Windows machines run a native C#/.NET service I wrote that speaks to the same WebSocket layer. Lesson authoring and the teaching assistant call LLM APIs from the backend, so AI is part of the product rather than bolted onto it. Docker and GitHub Actions handle CI/CD; I own deployment and monitoring.",
      contribution: [
        "Architecture, data model and all four backend services",
        "React teacher dashboard: live device grid, modes, scheduling",
        "C#/.NET Windows agent and device-level enforcement",
        "LLM integrations for lesson building and the teaching assistant",
        "CI/CD, deployment and monitoring",
        "Requirements straight from teachers and school leadership; pilot conversations from first contact to deployment",
      ],
      result:
        "A live pilot at a Swedish school with teachers and students on the platform every school day, 45 qualified school leads from Sett mässan 2026, and a place in ALMI's national innovation program.",
      metrics: [
        { value: "4", label: "microservices, 4 databases" },
        { value: "2", label: "platforms: Chromebook & Windows" },
        { value: "45", label: "qualified school leads" },
        { value: "EU", label: "hosted, GDPR by default" },
      ],
      gallery: [
        {
          src: "/projects/viafocus-quiz.png",
          alt: "Viafocus Studio turning a text into a live quiz",
          width: 1280,
          height: 880,
          caption: "Studio: paste any text, get a ready-to-run quiz. LLM calls happen server-side.",
        },
      ],
    },
  },
  {
    slug: "algebraskolan",
    name: "Algebraskolan Intra",
    tagline:
      "A school's reward system, moved from physical coins to an app on every phone.",
    category: "Mobile · Flutter",
    period: "2023 — 2024",
    role: "Freelance, sole developer",
    problem:
      "Rewards ran on physical coins. Counting and tracking them ate teacher time and went wrong often.",
    built:
      "Flutter app on Firebase: roles, per-class views, real-time balances. Published on both app stores.",
    outcome: "300+ daily active users. ~20% less time on the manual workflow.",
    stack: ["Flutter", "Dart", "Firebase", "iOS", "Android"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.aj.algebrona&hl=en_US",
      },
    ],
    visual: {
      kind: "image",
      src: "/projects/algebrona.png",
      alt: "Algebrona app screens: a student's balance card and the teacher's class view for awarding coins",
      width: 1600,
      height: 800,
      background: "#2fa7f0",
    },
    fig: "Student balance and teacher class view",
    featured: true,
    caseStudy: {
      overview:
        "Algebraskolan is a school in Gothenburg that motivates students with a house currency, algebronor. It used to be physical coins. I built the app that replaced them, working directly with the school as a freelance developer for a year.",
      challenge:
        "The users were teachers between lessons and students on their own phones. Awarding a coin had to take seconds, cope with school Wi-Fi, and never lose a balance. It also had to pass App Store and Google Play review as a real product, not a school project.",
      solution:
        "A Flutter app on a Firebase backend: Firestore for balances and history, Firebase Auth for teacher and student roles, and per-class views so a teacher only sees their own students. Teachers pick a class, tap students, and send — the same flow they used with coins, minus the counting. Students see their balance and history on their own phone.",
      contribution: [
        "Scoping and design with the school",
        "Flutter frontend for iOS and Android",
        "Firebase data model, security rules and auth",
        "App Store and Google Play submissions",
        "Feedback loops with teachers; fixes shipped between terms",
      ],
      result:
        "300+ daily active users on both app stores, and roughly a 20% operational efficiency gain from digitizing a workflow that used to run on coins and paper.",
      metrics: [
        { value: "300+", label: "daily active users" },
        { value: "~20%", label: "efficiency gain" },
        { value: "2", label: "app stores" },
        { value: "1", label: "developer, end-to-end" },
      ],
    },
  },
  {
    slug: "luday",
    name: "Luday internal dashboard",
    tagline: "An internal tool that replaced a paid one.",
    category: "Internal tool · Web",
    period: "2024",
    role: "Developer intern",
    problem:
      "A paid third-party tool the team used a fraction of, with the workflow split across two systems.",
    built:
      "React / Next.js dashboard with a Flask backend covering the paths the team actually used.",
    outcome: "Subscription cancelled. One workflow instead of two tools.",
    stack: ["React", "Next.js", "Python", "Flask", "REST"],
    links: [],
    visual: { kind: "dashboard", url: "internal.luday.se" },
    fig: "Internal dashboard (schematic; no screenshot released)",
    featured: true,
    caseStudy: {
      overview:
        "Luday is a software company in Gothenburg. During my internship I built the internal dashboard that replaced a paid third-party tool, so the team could run its workflow in one place it owned.",
      challenge:
        "Replacing a tool people already use is a product problem before it's a technical one: the new thing has to cover the paths people actually take, on day one, or they go back to the old one. And an intern's project has to be something the people who stay can keep maintaining.",
      solution:
        "I started by mapping how the team actually used the paid tool, built only those paths first, and shipped early so feedback came from real use rather than a spec. React and Next.js for the frontend, a Flask backend for data and integrations, and a codebase structured so the team could extend it after I left.",
      contribution: [
        "Requirements gathering with the team",
        "Frontend in React and Next.js",
        "Backend and API in Flask",
        "Rollout and handover",
      ],
      result:
        "The paid tool was retired, which removed the subscription cost and consolidated the team's workflow into a single internal system.",
      metrics: [
        { value: "1", label: "subscription retired" },
        { value: "1", label: "workflow instead of two" },
        { value: "4", label: "months, brief to handover" },
      ],
    },
  },
  {
    slug: "cirkly",
    name: "Cirkly",
    tagline: "Real-time financial collaboration, on mobile.",
    category: "Mobile · Fintech",
    period: "2025",
    role: "Intern",
    problem:
      "Managing money together — splitting, tracking, settling — usually lives in a group chat and a spreadsheet.",
    built:
      "React Native app for real-time financial collaboration; secure REST APIs for transaction flows. Shipped in sprints.",
    outcome: "Production features shipped on a sprint cadence in a fintech context.",
    stack: ["React Native", "TypeScript", "Node.js", "REST APIs", "Jira"],
    links: [],
    visual: { kind: "fintech" },
    fig: "Shared-balance flow (schematic)",
    featured: false,
    caseStudy: {
      overview:
        "Cirkly is a fintech startup building an app for real-time financial collaboration. I joined as a mobile developer intern for six months and worked across the React Native app and the APIs behind it.",
      challenge:
        "Money can't be eventually consistent from the user's point of view. Transaction endpoints had to be secure and unambiguous, and the mobile UI had to show the right state on both platforms, every time.",
      solution:
        "I built screens and flows in React Native with TypeScript, and designed and implemented the RESTful endpoints backing the transaction flows, with authentication and validation at the API boundary. Work shipped in two-week Scrum sprints, tracked in Jira.",
      contribution: [
        "React Native features for iOS and Android",
        "Secure REST API design and implementation for transaction flows",
        "Sprint delivery with the product team",
      ],
      result:
        "Production features shipped across the mobile app and its APIs on a regular sprint cadence.",
      metrics: [
        { value: "6", label: "months" },
        { value: "2", label: "platforms, one codebase" },
      ],
    },
  },
  {
    slug: "talklink",
    name: "TalkLink",
    tagline: "Chat across languages. Every message translated on the way.",
    category: "Web · Personal",
    period: "2023",
    role: "Solo",
    problem: "Two people who don't share a language can't just chat.",
    built:
      "Real-time chat on Node.js, messages translated per recipient via the Google Translate API, JWT auth, MongoDB, AWS EC2.",
    outcome: "Live at talklink.online.",
    stack: ["Node.js", "MongoDB", "AWS EC2", "JWT", "Google Translate API"],
    links: [{ label: "talklink.online", href: "https://talklink.online/login" }],
    visual: {
      kind: "browser-image",
      src: "/projects/talklink.jpg",
      alt: "TalkLink chat interface with translated messages",
      width: 1600,
      height: 951,
      url: "talklink.online",
    },
    fig: "Login, contacts and a translated thread",
    featured: false,
    caseStudy: {
      overview:
        "TalkLink is a personal project: a chat app where each person reads every message in their own language. I built it to learn real-time systems and deployment properly — the whole thing, from message delivery to the EC2 instance it runs on.",
      challenge:
        "Translation adds latency and cost to every message, and a chat app has to feel instant. Sessions, history and user search all had to keep working across page reloads and devices.",
      solution:
        "A Node.js backend handles real-time delivery, translating each message through the Google Translate API to the recipient's locale before it lands. JWT-based auth, MongoDB for users and message history, deployed and operated on AWS EC2.",
      contribution: ["Backend, frontend, auth and deployment — all of it"],
      result: "Live and usable at talklink.online.",
      metrics: [
        { value: "1", label: "codebase, end-to-end" },
        { value: "AWS", label: "EC2 deployment" },
      ],
    },
  },
];

export const PROCESS: ProcessItem[] = [
  {
    title: "Product first",
    body: "Every Viafocus feature started as a sentence from a teacher. I build for the job the user is doing, then argue about architecture.",
  },
  {
    title: "Backend and frontend, same person",
    body: "I own the whole path — schema, API, UI. Fewer handoffs, and no \"that's not my side\" bugs.",
  },
  {
    title: "APIs and data models that last",
    body: "Four services, four databases, one consistent contract. Boundaries designed early so later features are additive, not surgery.",
  },
  {
    title: "Ship, listen, adjust",
    body: "Pilot users beat roadmaps. Feedback from teachers and school leadership goes straight into the next release.",
  },
  {
    title: "AI in the loop",
    body: "Claude Code, Cursor and Copilot in my daily workflow; LLM features in my product. Fast without lowering the bar.",
  },
  {
    title: "Production is the job",
    body: "Docker, GitHub Actions, monitoring. If it isn't deployed and observable, it isn't done.",
  },
];

export const STACK: StackGroup[] = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "React Native", "Flutter", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Encore.ts",
      "REST & GraphQL",
      "WebSockets",
      "Yjs / CRDT",
      "C#/.NET",
      "Python / Flask",
    ],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "Firebase / Firestore"],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "AWS (EC2, S3, Lambda)",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Linux",
      "Git",
      "Vercel",
    ],
  },
  {
    label: "AI & tools",
    items: ["Claude Code", "Cursor", "GitHub Copilot", "LLM API integration", "Jira"],
  },
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    dates: "2024-01 — now",
    role: "Co-founder & CTO",
    org: "Viafocus",
    where: "Gothenburg · ALMI-backed",
    body: "Built and run the whole platform: 4 Encore.ts services, 4 PostgreSQL databases, real-time features, a C#/.NET Windows agent and LLM integrations. Active pilot; 45 qualified leads from Sett mässan 2026.",
    href: "https://viafocus.net",
  },
  {
    dates: "2025-01 — 2025-07",
    role: "Mobile developer intern",
    org: "Cirkly",
    where: "Sweden",
    body: "React Native fintech app for real-time financial collaboration; secure REST APIs for transaction flows. Scrum with Jira.",
  },
  {
    dates: "2024-08 — 2024-11",
    role: "Teaching assistant",
    org: "University of Gothenburg",
    where: "Gothenburg",
    body: "Tutored web development and debugged responsive layouts and API integrations across student projects.",
  },
  {
    dates: "2024-03 — 2024-06",
    role: "Software developer intern",
    org: "Luday",
    where: "Gothenburg",
    body: "Internal dashboard in React, Next.js and Flask that replaced a paid third-party tool.",
  },
  {
    dates: "2023-06 — 2024-06",
    role: "Freelance developer",
    org: "Algebraskolan",
    where: "Gothenburg",
    body: "Flutter + Firebase app on the App Store and Google Play. 300+ daily active users, ~20% efficiency gain.",
  },
  {
    dates: "2022 — 2025",
    role: "BSc Software Engineering & Management",
    org: "Chalmers / GU",
    where: "Education",
    body: "Thesis on ML robustness and data-quality engineering. Software Architecture, Software Quality & Testing (pass with credit), Distributed Systems, Databases.",
    kind: "education",
  },
];
