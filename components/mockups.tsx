import clsx from "clsx";

const DASH_NAV = ["Overview", "Projects", "Clients", "Invoices"];
const DASH_STATS: [string, string][] = [
  ["Open", "24"],
  ["Week", "+18%"],
  ["Avg", "1.2 d"],
];
const DASH_BARS = [40, 55, 35, 70, 60, 85, 50, 75, 90];
const DASH_ROWS: [string, "open" | "done"][] = [
  ["Onboarding — Nordkap AB", "open"],
  ["Q2 invoicing batch", "done"],
  ["Client review — Studio K", "done"],
];

export function DashboardMockup() {
  return (
    <div className="grid min-h-[250px] grid-cols-[110px_1fr] text-[10px]">
      <aside className="flex flex-col gap-1.5 border-r border-line bg-card-solid p-3">
        <span className="mb-2 block h-2.5 w-11 rounded-sm bg-fg/20" />
        {DASH_NAV.map((label, i) => (
          <span
            key={label}
            className={clsx(
              "rounded px-2 py-1.5 font-mono",
              i === 0 ? "bg-ink text-paper" : "text-fg-3"
            )}
          >
            {label}
          </span>
        ))}
      </aside>
      <div className="flex flex-col gap-2.5 p-3.5">
        <div className="grid grid-cols-3 gap-2">
          {DASH_STATS.map(([label, value]) => (
            <div key={label} className="rounded-md border border-line p-2">
              <span className="label !text-[9px]">{label}</span>
              <div className="mt-0.5 text-[17px] font-bold tracking-tight text-fg">
                {value}
              </div>
            </div>
          ))}
        </div>
        <div className="flex h-[68px] items-end gap-1 rounded-md border border-line p-2.5">
          {DASH_BARS.map((h, i) => (
            <span
              key={i}
              className={clsx("flex-1", i === DASH_BARS.length - 1 ? "bg-accent" : "bg-fg")}
              style={{
                height: `${h}%`,
                opacity: i === DASH_BARS.length - 1 ? 1 : 0.2 + (i / DASH_BARS.length) * 0.6,
              }}
            />
          ))}
        </div>
        <div className="flex flex-col gap-1">
          {DASH_ROWS.map(([name, status]) => (
            <div
              key={name}
              className="flex items-center justify-between rounded border border-line px-2 py-1.5 font-mono"
            >
              <span className="truncate text-fg-2">{name}</span>
              <span className={status === "open" ? "text-accent" : "text-live"}>
                {status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const FIN_ROWS: [string, string, string][] = [
  ["Hotel · Oslo", "−1 950 kr", "Alex"],
  ["Train tickets", "−640 kr", "You"],
  ["Dinner", "−1 120 kr", "Sara"],
  ["Top-up", "+500 kr", "You"],
];

export function FintechMockup({ compact = false }: { compact?: boolean }) {
  const rows = compact ? FIN_ROWS.slice(0, 2) : FIN_ROWS;
  return (
    <div
      className={clsx(
        "flex items-center justify-center",
        compact ? "min-h-[150px] px-3 py-4" : "min-h-[280px] px-6 py-7"
      )}
    >
      <div
        className={clsx(
          "overflow-hidden border-ink bg-card-solid",
          compact
            ? "w-[136px] rounded-[16px] border-[3px] text-[8px]"
            : "w-[220px] rounded-[26px] border-[5px] text-[10px]"
        )}
      >
        <div className={clsx("bg-[#0891b2]", compact ? "px-2.5 pb-2.5 pt-3" : "px-4 pb-4 pt-5")}>
          <div className="text-white/70">Shared · Trip to Oslo</div>
          <div
            className={clsx(
              "mt-1 font-bold tracking-tight text-white",
              compact ? "text-[15px]" : "text-[22px]"
            )}
          >
            4 280 kr
          </div>
          <div className={clsx("flex gap-1.5", compact ? "mt-2" : "mt-3")}>
            {["Add", "Split", "Settle"].map((label) => (
              <span
                key={label}
                className={clsx(
                  "rounded-full bg-white/20 font-medium text-white",
                  compact ? "px-1.5 py-0.5" : "px-2.5 py-1"
                )}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
        <div className={clsx("flex flex-col", compact ? "gap-1 p-2" : "gap-1.5 p-3")}>
          {rows.map(([name, amount, who]) => (
            <div
              key={name}
              className={clsx(
                "flex items-center justify-between rounded-md border border-line",
                compact ? "px-2 py-1.5" : "px-2.5 py-2"
              )}
            >
              <div>
                <div className="font-medium text-fg">{name}</div>
                <div className="text-fg-4">{who}</div>
              </div>
              <div
                className={clsx(
                  "tabular font-mono font-semibold",
                  amount.startsWith("+") ? "text-live" : "text-fg"
                )}
              >
                {amount}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
