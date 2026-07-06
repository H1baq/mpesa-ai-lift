import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/app-shell";
import { merchant } from "@/lib/mock-data";

export const Route = createFileRoute("/settings")({ component: Settings });

function Settings() {
  return (
    <AppShell>
      <PageHeader title="Settings" subtitle="Manage your store, till, and preferences." />
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="card-elevated p-6">
          <h3 className="font-semibold mb-4">Business Profile</h3>
          <div className="space-y-3">
            <Field label="Business Name" value={merchant.name} />
            <Field label="Owner" value={merchant.owner} />
            <Field label="M‑Pesa Till" value={merchant.till} />
            <Field label="Location" value={merchant.location} />
          </div>
        </div>
        <div className="card-elevated p-6">
          <h3 className="font-semibold mb-4">Preferences</h3>
          <div className="space-y-3">
            {["WhatsApp notifications", "SMS receipts", "Daily AI brief email", "Marketplace listing"].map((p, i) => (
              <div key={p} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <span className="text-sm">{p}</span>
                <div className={`h-6 w-11 rounded-full relative ${i < 3 ? "bg-primary" : "bg-muted"}`}>
                  <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow ${i < 3 ? "translate-x-5" : "translate-x-0.5"}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs font-semibold text-ink-muted uppercase tracking-wide">{label}</div>
      <div className="mt-1 px-3 py-2.5 rounded-lg border border-input bg-background text-sm">{value}</div>
    </div>
  );
}
