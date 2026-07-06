import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/app-shell";
import { recentPayments } from "@/lib/mock-data";
import { Copy, Send, Link2, Check } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/payments")({ component: Payments });

function Payments() {
  const [amount, setAmount] = useState("2500");
  const [product, setProduct] = useState("Organic Honey (500g)");
  const [copied, setCopied] = useState(false);
  const link = "https://mpesalift.co/pay/123";

  const copy = async () => {
    try { await navigator.clipboard.writeText(link); } catch {}
    setCopied(true); setTimeout(() => setCopied(false), 1500);
  };

  return (
    <AppShell>
      <PageHeader title="Payment Links" subtitle="Generate M‑Pesa payment links in seconds. Share anywhere." />

      <div className="grid lg:grid-cols-2 gap-4">
        <div className="card-elevated p-6">
          <h3 className="font-semibold text-ink mb-4">Generate a payment link</h3>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-semibold text-ink-muted">Product / Description</label>
              <input value={product} onChange={(e) => setProduct(e.target.value)} className="mt-1 w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm" />
            </div>
            <div>
              <label className="text-xs font-semibold text-ink-muted">Amount (KES)</label>
              <input value={amount} onChange={(e) => setAmount(e.target.value)} className="mt-1 w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm" />
            </div>
            <button className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg font-semibold hover:opacity-90 inline-flex items-center justify-center gap-2">
              <Link2 className="h-4 w-4" /> Generate M‑Pesa Link
            </button>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-primary-soft border border-primary/20">
            <div className="text-xs font-semibold text-ink-muted uppercase tracking-wide">Payment Link</div>
            <div className="mt-1 font-mono text-sm text-ink break-all">{link}</div>
            <div className="mt-3 text-xs text-ink-muted">Amount: <span className="font-semibold text-ink">KES {Number(amount).toLocaleString()}</span> · Till 5192847</div>
            <div className="mt-4 flex gap-2">
              <button onClick={copy} className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-border bg-background text-sm font-semibold hover:bg-muted">
                {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied" : "Copy"}
              </button>
              <button className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#25D366] text-white text-sm font-semibold hover:opacity-90">
                <Send className="h-4 w-4" /> Share WhatsApp
              </button>
            </div>
          </div>
        </div>

        <div className="card-elevated p-6">
          <h3 className="font-semibold text-ink mb-4">Recent Payments</h3>
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs font-semibold text-ink-muted uppercase tracking-wide border-b border-border">
                  <th className="pb-2">Customer</th>
                  <th className="pb-2">Amount</th>
                  <th className="pb-2">Status</th>
                  <th className="pb-2 text-right">Time</th>
                </tr>
              </thead>
              <tbody>
                {recentPayments.map((t) => (
                  <tr key={t.id} className="border-b border-border/50 last:border-0">
                    <td className="py-3 font-medium text-ink">{t.customer}</td>
                    <td className="py-3">KES {t.amount.toLocaleString()}</td>
                    <td className="py-3">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        t.status === "Paid" ? "bg-primary-soft text-accent-foreground" :
                        t.status === "Pending" ? "bg-warning/20 text-warning-foreground" :
                        "bg-destructive/10 text-destructive"
                      }`}>{t.status}</span>
                    </td>
                    <td className="py-3 text-right text-xs text-ink-muted">{t.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
