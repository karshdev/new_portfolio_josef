import clsx from "clsx";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={clsx("mx-auto w-full max-w-[1280px] px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function SectionHeader({
  index,
  label,
  title,
  tail,
}: {
  index: string;
  label: string;
  title: string;
  tail?: string;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 pb-9 md:grid-cols-12 md:items-end md:gap-8">
      <div className="flex items-baseline gap-3 md:col-span-3">
        <span className="font-mono text-[13px] text-accent">{index}</span>
        <span className="label">{label}</span>
      </div>
      <h2 className="h2 md:col-span-9">
        {title}
        {tail && (
          <>
            {" "}
            <span className="tail">{tail}</span>
          </>
        )}
      </h2>
    </div>
  );
}

export function Frame({
  bar,
  status,
  className,
  children,
}: {
  bar?: string;
  status?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={clsx("frame", className)}>
      {bar && (
        <div className="frame-bar">
          <span className="font-mono text-[11px] text-fg-3">{bar}</span>
          {status && (
            <span className="ml-auto flex items-center gap-1.5 font-mono text-[11px] text-live">
              <span className="h-1.5 w-1.5 rounded-full bg-live" />
              {status}
            </span>
          )}
        </div>
      )}
      {children}
    </div>
  );
}

export function Marks({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={clsx("marks", className)}>
      <span className="mark-tr" />
      <span className="mark-bl" />
      {children}
    </div>
  );
}

export function Tags({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={clsx("flex flex-wrap gap-1.5", className)}>
      {items.map((item) => (
        <li key={item} className="tag">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function FigCaption({
  n,
  text,
  className,
}: {
  n: string;
  text: string;
  className?: string;
}) {
  return (
    <p className={clsx("font-mono text-[11.5px] leading-relaxed text-fg-3", className)}>
      <span className="font-semibold text-fg">Fig. {n}</span> — {text}
    </p>
  );
}
