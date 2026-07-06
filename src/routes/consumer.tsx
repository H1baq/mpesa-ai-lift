import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/app-shell";
import { Search, Sparkles, Star, MapPin, ShoppingCart } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/consumer")({ component: Consumer });

const results = [
  { merchant: "Aisha Retail Store", product: "Organic Honey 500g", price: 850, rating: 4.9, distance: "1.2 km", reviews: 342 },
  { merchant: "Green Valley Foods", product: "Raw Honey 500g", price: 920, rating: 4.7, distance: "2.4 km", reviews: 189 },
  { merchant: "Mama Njeri's Pantry", product: "Wild Honey Jar 400g", price: 780, rating: 4.8, distance: "3.1 km", reviews: 267 },
  { merchant: "Kitui Naturals", product: "Pure Honey 1kg", price: 1550, rating: 5.0, distance: "4.6 km", reviews: 128 },
];

function Consumer() {
  const [q, setQ] = useState("Organic Honey");
  const [searched, setSearched] = useState(true);
  return (
    <AppShell>
      <PageHeader title="Consumer AI Assistant" subtitle="How shoppers discover M‑Pesa Lift merchants." />

      <div className="card-elevated p-6 mb-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-8 w-8 rounded-lg gradient-primary grid place-items-center text-primary-foreground">
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="font-semibold">Lift Marketplace</div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSearched(true); }} className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Try: organic honey, rice, cooking oil..." className="w-full pl-10 pr-4 py-3 rounded-lg border border-input bg-background text-sm outline-none focus:ring-2 focus:ring-primary/30" />
          </div>
          <button className="px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm">Search</button>
        </form>
      </div>

      {searched && (
        <>
          <div className="rounded-xl bg-primary-soft border border-primary/20 p-4 mb-4 text-sm">
            <span className="font-semibold text-ink">Zuri:</span> <span className="text-ink-muted">Found 4 nearby M‑Pesa Lift merchants selling "{q}". Top match is <span className="text-ink font-semibold">Aisha Retail Store</span> — 1.2 km away with 4.9★ rating.</span>
          </div>

          <div className="space-y-3">
            {results.map((r, i) => (
              <div key={i} className="card-elevated p-4 flex items-center gap-4">
                <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary-soft to-muted shrink-0 grid place-items-center text-2xl">🍯</div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-ink truncate">{r.product}</div>
                  <div className="text-xs text-ink-muted truncate">{r.merchant}</div>
                  <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-ink-muted">
                    <span className="inline-flex items-center gap-1"><Star className="h-3 w-3 fill-warning text-warning" />{r.rating} <span className="text-ink-muted/70">({r.reviews})</span></span>
                    <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{r.distance}</span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-bold text-ink">KES {r.price}</div>
                  <button className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90">
                    <ShoppingCart className="h-3 w-3" /> Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 card-elevated p-5 bg-gradient-to-br from-secondary to-secondary/90 text-white">
            <div className="text-xs font-semibold uppercase tracking-wide text-white/60">Checkout preview</div>
            <div className="mt-1 font-semibold">Pay KES 850 to Aisha Retail Store</div>
            <div className="text-sm text-white/70">via M‑Pesa · Till 5192847</div>
            <button className="mt-4 w-full sm:w-auto bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-semibold">Confirm & Pay with M‑Pesa</button>
          </div>
        </>
      )}
    </AppShell>
  );
}
