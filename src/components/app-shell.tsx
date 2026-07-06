import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard, ShoppingBag, Link2, Boxes, Sparkles, Users,
  Zap, LineChart, Wallet, Search, Rocket, Play, Settings, Bell, Menu, X
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { merchant } from "@/lib/mock-data";

const nav = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/commerce", label: "Commerce", icon: ShoppingBag },
  { to: "/payments", label: "Payments", icon: Link2 },
  { to: "/inventory", label: "Inventory", icon: Boxes },
  { to: "/ai-agent", label: "Lift AI", icon: Sparkles, badge: "New" },
  { to: "/customers", label: "Customers", icon: Users },
  { to: "/automation", label: "Automation", icon: Zap },
  { to: "/insights", label: "Insights", icon: LineChart },
  { to: "/credit", label: "Credit & Finance", icon: Wallet },
  { to: "/consumer", label: "Consumer AI", icon: Search },
  { to: "/onboarding", label: "Onboarding", icon: Rocket },
  { to: "/demo", label: "Demo Story", icon: Play },
  { to: "/settings", label: "Settings", icon: Settings },
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className={`fixed lg:sticky top-0 left-0 z-40 h-screen w-72 shrink-0 border-r border-border bg-surface flex flex-col transition-transform ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="px-5 py-5 flex items-center gap-3 border-b border-border">
          <div className="h-10 w-10 rounded-xl gradient-primary grid place-items-center text-primary-foreground font-bold shadow-[var(--shadow-glow)]">
            M
          </div>
          <div className="min-w-0">
            <div className="font-bold text-ink leading-tight">M‑Pesa Lift</div>
            <div className="text-xs text-ink-muted truncate">AI Commerce OS</div>
          </div>
          <button className="lg:hidden ml-auto p-1.5 rounded-md hover:bg-muted" onClick={() => setOpen(false)}>
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
          {nav.map(({ to, label, icon: Icon, badge }) => {
            const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
            return (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active ? "bg-primary-soft text-accent-foreground" : "text-ink-muted hover:bg-muted hover:text-ink"
                }`}
              >
                <Icon className={`h-4 w-4 shrink-0 ${active ? "text-primary" : ""}`} />
                <span className="truncate">{label}</span>
                {badge && <span className="ml-auto text-[10px] font-semibold px-1.5 py-0.5 rounded bg-primary text-primary-foreground">{badge}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="px-3 py-3 border-t border-border">
          <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted">
            <div className="h-9 w-9 rounded-full gradient-primary grid place-items-center text-primary-foreground font-semibold text-sm shrink-0">
              A
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-semibold text-ink truncate">{merchant.owner}</div>
              <div className="text-xs text-ink-muted truncate">Till {merchant.till}</div>
            </div>
          </div>
        </div>
      </aside>

      {open && <div className="fixed inset-0 bg-black/40 z-30 lg:hidden" onClick={() => setOpen(false)} />}

      {/* Main */}
      <div className="flex-1 min-w-0 flex flex-col">
        <header className="sticky top-0 z-20 bg-background/80 backdrop-blur border-b border-border">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 lg:px-8 h-14">
            <div className="flex items-center gap-2 min-w-0">
              <button className="lg:hidden p-2 rounded-md hover:bg-muted" onClick={() => setOpen(true)}>
                <Menu className="h-5 w-5" />
              </button>
              <div className="text-sm text-ink-muted truncate">
                <span className="hidden sm:inline">Merchant · </span>
                <span className="text-ink font-medium">{merchant.name}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button className="p-2 rounded-lg hover:bg-muted relative">
                <Bell className="h-4 w-4" />
                <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
              </button>
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-soft text-accent-foreground text-xs font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Live
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 lg:px-8 py-6 lg:py-8 max-w-[1400px] w-full">
          {children}
        </main>
      </div>
    </div>
  );
}

export function PageHeader({ title, subtitle, actions }: { title: string; subtitle?: string; actions?: ReactNode }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 mb-6">
      <div className="min-w-0">
        <h1 className="text-2xl lg:text-3xl font-bold text-ink tracking-tight">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-ink-muted">{subtitle}</p>}
      </div>
      {actions && <div className="flex items-center gap-2 shrink-0">{actions}</div>}
    </div>
  );
}
