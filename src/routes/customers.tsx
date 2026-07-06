import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/app-shell";
import { customers } from "@/lib/mock-data";
import { Send, Percent, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/customers")({ component: Customers });

const statusStyle: Record<string, string> = {
  Active: "bg-primary-soft text-accent-foreground",
  "At Risk": "bg-warning/20 text-warning-foreground",
  Churned: "bg-destructive/10 text-destructive",
};

function Customers() {
  return (
    <AppShell>
      <PageHeader title="Customers" subtitle="AI-scored customer segments with one-tap re-engagement." />

      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { l: "Active", v: 289, c: "text-primary" },
          { l: "At Risk", v: 36, c: "text-warning-foreground" },
          { l: "Churned", v: 17, c: "text-destructive" },
        ].map((s) => (
          <div key={s.l} className="card-elevated p-4">
            <div className="text-xs text-ink-muted font-semibold uppercase tracking-wide">{s.l}</div>
            <div className={`mt-1 text-2xl font-bold ${s.c}`}>{s.v}</div>
          </div>
        ))}
      </div>

      <div className="card-elevated overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr className="text-left text-xs font-semibold text-ink-muted uppercase tracking-wide">
                <th className="px-5 py-3">Customer</th>
                <th className="px-5 py-3">Last Purchase</th>
                <th className="px-5 py-3">Lifetime Value</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr key={c.name} className="border-t border-border">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary-soft grid place-items-center text-primary font-semibold text-xs">
                        {c.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <span className="font-medium text-ink">{c.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-ink-muted">{c.last}</td>
                  <td className="px-5 py-4 font-semibold">KES {c.ltv.toLocaleString()}</td>
                  <td className="px-5 py-4">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${statusStyle[c.status]}`}>{c.status}</span>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex gap-1 justify-end">
                      <button title="Send Reminder" className="p-2 rounded-lg hover:bg-muted"><Send className="h-3.5 w-3.5" /></button>
                      <button title="Offer Discount" className="p-2 rounded-lg hover:bg-muted"><Percent className="h-3.5 w-3.5" /></button>
                      <button title="WhatsApp Follow-up" className="p-2 rounded-lg hover:bg-muted text-[#25D366]"><MessageCircle className="h-3.5 w-3.5" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
