import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/app-shell";
import { CheckCircle2, ArrowRight, Sparkles, Store, Package } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/onboarding")({ component: Onboarding });

const steps = ["Business Name", "Business Type", "M‑Pesa Till", "Upload Products", "Complete Setup"];

function Onboarding() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <AppShell>
        <div className="min-h-[60vh] grid place-items-center">
          <div className="text-center max-w-lg">
            <div className="h-20 w-20 mx-auto rounded-full gradient-primary grid place-items-center text-primary-foreground shadow-[var(--shadow-glow)]">
              <CheckCircle2 className="h-10 w-10" />
            </div>
            <h1 className="mt-6 text-3xl font-bold text-ink">Your AI-powered store is now live 🎉</h1>
            <p className="mt-3 text-ink-muted">Aisha Retail Store is ready to accept M‑Pesa payments, share catalogs, and grow with Zuri.</p>
            <div className="mt-6 flex gap-2 justify-center">
              <Link to="/" className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold inline-flex items-center gap-2">Open Dashboard <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/ai-agent" className="px-5 py-2.5 rounded-lg border border-border font-semibold inline-flex items-center gap-2"><Sparkles className="h-4 w-4" /> Meet Zuri</Link>
            </div>
          </div>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <PageHeader title="Merchant Onboarding" subtitle="Get set up in under 3 minutes." />

      <div className="card-elevated p-6 lg:p-8 max-w-2xl mx-auto">
        {/* Stepper */}
        <div className="flex items-center gap-2 mb-8">
          {steps.map((_, i) => (
            <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-primary" : "bg-muted"}`} />
          ))}
        </div>

        <div className="text-xs font-semibold text-primary uppercase tracking-wide">Step {step + 1} of {steps.length}</div>
        <h2 className="mt-2 text-2xl font-bold text-ink">{steps[step]}</h2>

        <div className="mt-6 space-y-3">
          {step === 0 && <input placeholder="e.g. Aisha Retail Store" defaultValue="Aisha Retail Store" className="w-full px-4 py-3 rounded-lg border border-input text-sm" />}
          {step === 1 && (
            <div className="grid grid-cols-2 gap-2">
              {["Retail Shop", "Restaurant", "Salon / Beauty", "WhatsApp Business", "Services", "Wholesaler"].map((t, i) => (
                <button key={t} className={`px-4 py-3 rounded-lg border text-sm font-semibold text-left ${i === 0 ? "border-primary bg-primary-soft text-accent-foreground" : "border-border hover:bg-muted"}`}>
                  <Store className="h-4 w-4 inline mr-2" />{t}
                </button>
              ))}
            </div>
          )}
          {step === 2 && (
            <>
              <input placeholder="M‑Pesa Till Number" defaultValue="5192847" className="w-full px-4 py-3 rounded-lg border border-input text-sm font-mono" />
              <div className="text-xs text-ink-muted">We'll verify with Safaricom automatically.</div>
            </>
          )}
          {step === 3 && (
            <div className="aspect-video border-2 border-dashed border-border rounded-xl grid place-items-center text-center p-6">
              <div>
                <Package className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold text-ink">Drop product photos here</div>
                <div className="text-xs text-ink-muted mt-1">Or skip — you can add them later.</div>
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="text-center py-6">
              <div className="text-ink-muted">Review your info and go live.</div>
              <ul className="mt-4 text-sm text-left inline-block space-y-2">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Aisha Retail Store</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Retail Shop</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Till 5192847</li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> 6 products uploaded</li>
              </ul>
            </div>
          )}
        </div>

        <div className="mt-8 flex gap-2">
          {step > 0 && <button onClick={() => setStep((s) => s - 1)} className="px-5 py-2.5 rounded-lg border border-border font-semibold">Back</button>}
          <button
            onClick={() => step < steps.length - 1 ? setStep((s) => s + 1) : setDone(true)}
            className="ml-auto px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold inline-flex items-center gap-2"
          >
            {step < steps.length - 1 ? "Continue" : "Go Live"} <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </AppShell>
  );
}
