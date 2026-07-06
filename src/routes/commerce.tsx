import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/app-shell";
import { products } from "@/lib/mock-data";
import { Plus, Share2, ExternalLink, ImageIcon } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/commerce")({ component: Commerce });

function Commerce() {
  const [showAdd, setShowAdd] = useState(false);
  return (
    <AppShell>
      <PageHeader
        title="Product Catalog"
        subtitle="Sell online without a website. Share your catalog anywhere."
        actions={
          <>
            <Link to="/store/aisha" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-semibold hover:bg-muted">
              <ExternalLink className="h-4 w-4" /> Generate Store Link
            </Link>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-semibold hover:opacity-90">
              <Share2 className="h-4 w-4" /> Share Catalog
            </button>
            <button onClick={() => setShowAdd(true)} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90">
              <Plus className="h-4 w-4" /> Add Product
            </button>
          </>
        }
      />

      <div className="card-elevated p-4 mb-4 bg-primary-soft border-primary/20 flex flex-wrap gap-3 items-center">
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-ink">Your store is live</div>
          <div className="text-sm text-ink-muted truncate">mpesalift.co/store/aisha-retail</div>
        </div>
        <button className="text-sm font-semibold text-primary hover:underline">Copy link</button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((p) => (
          <div key={p.id} className="card-elevated overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="aspect-square bg-gradient-to-br from-primary-soft to-muted grid place-items-center relative">
              <ImageIcon className="h-10 w-10 text-primary/40" />
              {p.status === "out" && (
                <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-1 rounded-full bg-destructive text-destructive-foreground">OUT OF STOCK</span>
              )}
              {p.status === "low" && (
                <span className="absolute top-2 left-2 text-[10px] font-bold px-2 py-1 rounded-full bg-warning text-warning-foreground">LOW</span>
              )}
            </div>
            <div className="p-4">
              <div className="font-semibold text-ink truncate">{p.name}</div>
              <div className="text-xs text-ink-muted line-clamp-1 mt-0.5">{p.desc}</div>
              <div className="mt-3 flex items-center justify-between">
                <div className="font-bold text-primary">KES {p.price}</div>
                <div className="text-xs text-ink-muted">{p.stock} in stock</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showAdd && (
        <div className="fixed inset-0 bg-black/50 z-50 grid place-items-center p-4" onClick={() => setShowAdd(false)}>
          <div className="bg-card rounded-2xl w-full max-w-md p-6" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-bold mb-4">Add Product</h3>
            <div className="space-y-3">
              <div className="aspect-video border-2 border-dashed border-border rounded-lg grid place-items-center text-ink-muted text-sm">
                <div className="text-center"><ImageIcon className="h-8 w-8 mx-auto mb-1" />Tap to upload image</div>
              </div>
              <input placeholder="Product name" className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm" />
              <div className="grid grid-cols-2 gap-2">
                <input placeholder="Price (KES)" className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm" />
                <input placeholder="Quantity" className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm" />
              </div>
              <textarea placeholder="Description" rows={3} className="w-full px-3 py-2.5 rounded-lg border border-input bg-background text-sm" />
              <button onClick={() => setShowAdd(false)} className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg font-semibold">Add to Catalog</button>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}
