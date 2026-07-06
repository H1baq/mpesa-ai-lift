import { createFileRoute, Link } from "@tanstack/react-router";
import { products, merchant } from "@/lib/mock-data";
import { ImageIcon, Star, MapPin, ShoppingCart, Share2 } from "lucide-react";

export const Route = createFileRoute("/store/aisha")({ component: Storefront });

function Storefront() {
  return (
    <div className="min-h-screen bg-background">
      {/* Public storefront header */}
      <header className="gradient-dark text-white">
        <div className="max-w-5xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
          <div className="flex items-center gap-2 text-xs text-white/60">
            <Link to="/" className="hover:text-white">M‑Pesa Lift</Link>
            <span>/</span>
            <span>Store</span>
          </div>
          <div className="mt-4 flex flex-wrap items-start gap-6">
            <div className="h-20 w-20 rounded-2xl gradient-primary grid place-items-center text-3xl font-bold shrink-0 shadow-[var(--shadow-glow)]">A</div>
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight">{merchant.name}</h1>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-white/70">
                <span className="inline-flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-warning text-warning" /> 4.9 (342 reviews)</span>
                <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {merchant.location}</span>
                <span className="inline-flex items-center gap-1">✓ Verified M‑Pesa merchant</span>
              </div>
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-sm font-semibold hover:bg-white/20">
              <Share2 className="h-4 w-4" /> Share
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 lg:px-8 py-8">
        <h2 className="text-xl font-bold text-ink mb-4">Shop the catalog</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((p) => (
            <div key={p.id} className="card-elevated overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-primary-soft to-muted grid place-items-center">
                <ImageIcon className="h-10 w-10 text-primary/40" />
              </div>
              <div className="p-4">
                <div className="font-semibold text-ink truncate">{p.name}</div>
                <div className="text-xs text-ink-muted line-clamp-1 mt-0.5">{p.desc}</div>
                <div className="mt-3 flex items-center justify-between gap-2">
                  <div className="font-bold text-primary">KES {p.price}</div>
                  <button disabled={p.status === "out"} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 disabled:opacity-40">
                    <ShoppingCart className="h-3 w-3" /> Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 card-elevated p-6 text-center">
          <div className="text-xs font-semibold text-primary uppercase tracking-wide">Secure checkout</div>
          <div className="mt-1 font-semibold text-ink">Pay directly with M‑Pesa · Till {merchant.till}</div>
          <p className="text-sm text-ink-muted mt-1">Powered by M‑Pesa Lift</p>
        </div>
      </main>
    </div>
  );
}
