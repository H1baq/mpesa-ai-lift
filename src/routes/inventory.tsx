import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/app-shell";
import { products } from "@/lib/mock-data";
import { Sparkles, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/inventory")({ component: Inventory });

const statusMap = {
  in: { label: "In Stock", cls: "bg-primary-soft text-accent-foreground", dot: "bg-primary" },
  low: { label: "Low Stock", cls: "bg-warning/20 text-warning-foreground", dot: "bg-warning" },
  out: { label: "Out of Stock", cls: "bg-destructive/10 text-destructive", dot: "bg-destructive" },
} as const;

function Inventory() {
  return (
    <AppShell>
      <PageHeader title="Inventory" subtitle="Live stock levels with AI-powered restock predictions." />

      <div className="card-elevated p-5 mb-4 bg-gradient-to-br from-primary-soft to-background border-primary/20">
        <div className="flex gap-3 items-start">
          <div className="h-10 w-10 rounded-lg gradient-primary grid place-items-center text-primary-foreground shrink-0">
            <Sparkles className="h-5 w-5" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-semibold text-ink">Zuri Recommendation</div>
            <p className="text-sm text-ink-muted mt-1">
              <span className="font-semibold text-ink">Rice 2kg</span> stock likely to run out in <span className="font-semibold text-ink">4 days</span> based on 7-day sales velocity. Suggested reorder: <span className="font-semibold text-ink">40 units</span>.
            </p>
          </div>
          <button className="text-sm font-semibold text-primary hover:underline shrink-0">Reorder</button>
        </div>
      </div>

      <div className="card-elevated overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50">
              <tr className="text-left text-xs font-semibold text-ink-muted uppercase tracking-wide">
                <th className="px-5 py-3">Product</th>
                <th className="px-5 py-3">Price</th>
                <th className="px-5 py-3">Stock</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => {
                const s = statusMap[p.status as keyof typeof statusMap];
                return (
                  <tr key={p.id} className="border-t border-border">
                    <td className="px-5 py-4 font-medium text-ink">{p.name}</td>
                    <td className="px-5 py-4">KES {p.price}</td>
                    <td className="px-5 py-4 font-semibold">{p.stock}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-1 rounded-full ${s.cls}`}>
                        <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />{s.label}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      {p.status !== "in" && (
                        <button className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1">
                          <AlertTriangle className="h-3 w-3" /> Restock
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
