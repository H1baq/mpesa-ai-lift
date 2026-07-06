import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/app-shell";
import { Play, CheckCircle2, ArrowRight, Sparkles, TrendingUp } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/demo")({ component: Demo });

const flow = [
  { title: "Creates catalog", desc: "Aisha adds 6 products in under 2 minutes." },
  { title: "Generates payment link", desc: "Shares mpesalift.co/pay/123 on WhatsApp." },
  { title: "Receives payment", desc: "John Mwangi pays KES 2,500 instantly via M‑Pesa." },
  { title: "AI identifies churned customers", desc: "Lift AI flags 17 customers inactive 30+ days." },
  { title: "AI launches campaign", desc: "Auto-sends 10% offer to churned segment via WhatsApp." },
  { title: "Sales increase", desc: "9 of 17 customers return in 5 days. +KES 34,200." },
  { title: "Credit score improves", desc: "Score rises 710 → 725 based on new activity." },
  { title: "Eligible for loan", desc: "Aisha unlocks KES 120,000 in working capital." },
];

function Demo() {
  const [step, setStep] = useState(0);
  const [ended, setEnded] = useState(false);

  return (
    <AppShell>
      <PageHeader
        title="Demo Story Mode"
        subtitle="Watch Aisha's 8-step journey through M‑Pesa Lift."
      />

      {!ended ? (
        <div className="grid lg:grid-cols-[1fr_360px] gap-6">
          <div className="card-elevated p-6 lg:p-10">
            <div className="text-xs font-semibold text-primary uppercase tracking-wide">Step {step + 1} of {flow.length}</div>
            <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-ink tracking-tight">{flow[step].title}</h2>
            <p className="mt-4 text-lg text-ink-muted leading-relaxed">{flow[step].desc}</p>

            <div className="mt-8 rounded-2xl gradient-dark text-white p-6 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/40 blur-3xl" />
              <div className="relative flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg gradient-primary grid place-items-center"><Sparkles className="h-5 w-5" /></div>
                <div>
                  <div className="text-white/60 text-xs">Lift AI is</div>
                  <div className="font-semibold">Working in the background</div>
                </div>
              </div>
              <div className="relative mt-4 h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full gradient-primary transition-all" style={{ width: `${((step + 1) / flow.length) * 100}%` }} />
              </div>
            </div>

            <div className="mt-8 flex gap-2">
              {step > 0 && <button onClick={() => setStep((s) => s - 1)} className="px-5 py-2.5 rounded-lg border border-border font-semibold">Back</button>}
              <button
                onClick={() => step < flow.length - 1 ? setStep((s) => s + 1) : setEnded(true)}
                className="ml-auto px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold inline-flex items-center gap-2"
              >
                {step < flow.length - 1 ? "Next" : "See results"} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="card-elevated p-4">
            <div className="text-xs font-semibold uppercase text-ink-muted mb-3">Journey</div>
            <div className="space-y-1">
              {flow.map((f, i) => (
                <button
                  key={i}
                  onClick={() => setStep(i)}
                  className={`w-full text-left flex items-start gap-3 p-2.5 rounded-lg transition-colors ${
                    i === step ? "bg-primary-soft" : i < step ? "opacity-60" : ""
                  } hover:bg-muted`}
                >
                  <div className={`h-6 w-6 rounded-full grid place-items-center text-xs font-bold shrink-0 ${
                    i <= step ? "bg-primary text-primary-foreground" : "bg-muted text-ink-muted"
                  }`}>
                    {i < step ? <CheckCircle2 className="h-3.5 w-3.5" /> : i + 1}
                  </div>
                  <div className="text-sm font-medium text-ink truncate">{f.title}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="card-elevated p-8 lg:p-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-soft text-accent-foreground text-xs font-semibold">
            <Play className="h-3.5 w-3.5" /> Demo complete
          </div>
          <h2 className="mt-4 text-3xl lg:text-5xl font-bold text-ink tracking-tight">
            Aisha's business, transformed.
          </h2>
          <p className="mt-4 text-lg text-ink-muted max-w-2xl mx-auto">
            In just 6 weeks with M‑Pesa Lift, Aisha Retail Store unlocked measurable growth across every metric.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 max-w-3xl mx-auto">
            {[
              { l: "Revenue Growth", v: "+22%" },
              { l: "Credit Increase", v: "+15%" },
              { l: "Customer Retention", v: "+18%" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl gradient-primary text-primary-foreground p-6 shadow-[var(--shadow-glow)]">
                <TrendingUp className="h-5 w-5 mx-auto opacity-80" />
                <div className="mt-3 text-4xl font-bold tracking-tight">{s.v}</div>
                <div className="mt-1 text-sm opacity-90">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2 justify-center">
            <button onClick={() => { setEnded(false); setStep(0); }} className="px-5 py-2.5 rounded-lg border border-border font-semibold">Replay</button>
            <Link to="/" className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold inline-flex items-center gap-2">Open Dashboard <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      )}
    </AppShell>
  );
}
