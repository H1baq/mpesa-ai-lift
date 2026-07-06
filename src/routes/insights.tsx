import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/app-shell";
import { insights } from "@/lib/mock-data";
import { Download, FileText, Sparkles, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/insights")({ component: Insights });

function Insights() {
  return (
    <AppShell>
      <PageHeader
        title="AI Insights"
        subtitle="Executive-grade intelligence generated from your M‑Pesa data."
        actions={
          <>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-semibold hover:bg-muted">
              <FileText className="h-4 w-4" /> Export PDF
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90">
              <Download className="h-4 w-4" /> Download Report
            </button>
          </>
        }
      />

      <div className="grid lg:grid-cols-2 gap-4">
        {insights.map((ins, i) => (
          <div key={i} className="card-elevated p-6 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-8 w-8 rounded-lg gradient-primary grid place-items-center text-primary-foreground">
                  <Sparkles className="h-4 w-4" />
                </div>
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary-soft text-accent-foreground">{ins.tag}</span>
              </div>
              <h3 className="text-lg font-bold text-ink leading-snug">{ins.title}</h3>
              <p className="text-sm text-ink-muted mt-2 leading-relaxed">{ins.body}</p>
              <button className="mt-4 text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1">
                <TrendingUp className="h-3.5 w-3.5" /> Take action
              </button>
            </div>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
