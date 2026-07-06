import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/app-shell";
import { Bell, RefreshCw, TrendingUp, Package, Sparkles } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/automation")({ component: Automation });

const automations = [
  { id: 1, icon: Bell, title: "Auto Payment Reminders", desc: "Send WhatsApp reminders 24h after unpaid invoices.", on: true, saves: "~4 hrs/wk" },
  { id: 2, icon: RefreshCw, title: "Churn Recovery Campaigns", desc: "Auto-target customers inactive 30+ days with 10% offers.", on: true, saves: "+KES 32k/mo" },
  { id: 3, icon: TrendingUp, title: "Daily Sales Insights", desc: "Get an AI morning brief at 7am with wins and risks.", on: true, saves: "Daily" },
  { id: 4, icon: Package, title: "Product Recommendations", desc: "Suggest bundles to customers based on purchase history.", on: false, saves: "+12% AOV" },
];

function Automation() {
  const [state, setState] = useState(automations);
  return (
    <AppShell>
      <PageHeader
        title="AI Automation Studio"
        subtitle="Set it and forget it. Lift AI runs these workflows for you 24/7."
        actions={
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-soft text-accent-foreground text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5" /> 3 active
          </div>
        }
      />

      <div className="grid lg:grid-cols-2 gap-4">
        {state.map((a) => (
          <div key={a.id} className="card-elevated p-5">
            <div className="flex items-start gap-4">
              <div className={`h-11 w-11 rounded-xl grid place-items-center shrink-0 ${a.on ? "gradient-primary text-primary-foreground" : "bg-muted text-ink-muted"}`}>
                <a.icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold text-ink">{a.title}</h3>
                  <button
                    onClick={() => setState((s) => s.map((x) => x.id === a.id ? { ...x, on: !x.on } : x))}
                    className={`relative h-6 w-11 rounded-full transition-colors shrink-0 ${a.on ? "bg-primary" : "bg-muted"}`}
                  >
                    <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${a.on ? "translate-x-5" : "translate-x-0.5"}`} />
                  </button>
                </div>
                <p className="text-sm text-ink-muted mt-1">{a.desc}</p>
                <div className="mt-3 flex items-center gap-2">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${a.on ? "bg-primary-soft text-accent-foreground" : "bg-muted text-ink-muted"}`}>
                    {a.on ? "STATUS: ON" : "STATUS: OFF"}
                  </span>
                  <span className="text-xs text-ink-muted">Saves {a.saves}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
