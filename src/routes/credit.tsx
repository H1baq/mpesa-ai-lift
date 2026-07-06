import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/app-shell";
import { loanProducts } from "@/lib/mock-data";
import { Shield, TrendingUp, Wallet, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/credit")({ component: Credit });

function Credit() {
  return (
    <AppShell>
      <PageHeader title="Credit & Finance" subtitle="Your dynamic credit profile, built from real M‑Pesa activity." />

      {/* Credit Card */}
      <div className="rounded-3xl gradient-dark p-6 lg:p-8 text-white relative overflow-hidden mb-6">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute right-8 top-8 opacity-40 text-xs tracking-widest">M‑PESA LIFT · CREDIT</div>
        <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-end">
          <div>
            <div className="text-white/60 text-sm">Credit Score</div>
            <div className="mt-2 flex items-baseline gap-3">
              <div className="text-6xl lg:text-7xl font-bold tracking-tight">725</div>
              <div className="text-primary font-semibold flex items-center gap-1"><TrendingUp className="h-4 w-4" /> +15</div>
            </div>
            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <div>
                <div className="text-white/60 text-xs">Risk Level</div>
                <div className="font-semibold flex items-center gap-1.5 mt-0.5"><Shield className="h-4 w-4 text-primary" /> Low</div>
              </div>
              <div>
                <div className="text-white/60 text-xs">Eligible Loan</div>
                <div className="font-semibold mt-0.5">KES 120,000</div>
              </div>
              <div>
                <div className="text-white/60 text-xs">Repayment Rate</div>
                <div className="font-semibold mt-0.5">97%</div>
              </div>
            </div>
          </div>
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 shadow-[var(--shadow-glow)] inline-flex items-center gap-2">
            <Wallet className="h-4 w-4" /> Apply for Working Capital
          </button>
        </div>

        {/* Score bar */}
        <div className="relative mt-6 h-2 rounded-full bg-white/10 overflow-hidden">
          <div className="absolute inset-y-0 left-0 gradient-primary" style={{ width: "72%" }} />
        </div>
        <div className="relative flex justify-between text-[10px] text-white/50 mt-1">
          <span>300</span><span>500</span><span>650</span><span>750</span><span>900</span>
        </div>
      </div>

      <h3 className="font-semibold text-ink mb-3">Available Loan Products</h3>
      <div className="grid lg:grid-cols-3 gap-4">
        {loanProducts.map((l) => (
          <div key={l.name} className="card-elevated p-6">
            <div className="text-xs font-semibold uppercase tracking-wide text-primary">{l.name}</div>
            <div className="mt-2 text-3xl font-bold text-ink">KES {l.amount.toLocaleString()}</div>
            <p className="text-sm text-ink-muted mt-2">{l.desc}</p>
            <div className="mt-4 pt-4 border-t border-border grid grid-cols-2 gap-3 text-xs">
              <div><div className="text-ink-muted">Rate</div><div className="font-semibold text-ink mt-0.5">{l.rate}</div></div>
              <div><div className="text-ink-muted">Term</div><div className="font-semibold text-ink mt-0.5">{l.term}</div></div>
            </div>
            <button className="w-full mt-5 bg-primary text-primary-foreground py-2.5 rounded-lg font-semibold hover:opacity-90 inline-flex items-center justify-center gap-2">
              <CheckCircle2 className="h-4 w-4" /> Apply now
            </button>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
