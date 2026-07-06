import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/app-shell";
import { kpis, revenueTrend, salesByProduct, retentionTrend } from "@/lib/mock-data";
import { ArrowUpRight, TrendingUp, Users, CreditCard, ShoppingBag, Repeat, Wallet, Sparkles } from "lucide-react";
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid,
  BarChart, Bar, LineChart, Line, Legend
} from "recharts";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Dashboard });

const fmt = (n: number) => "KES " + n.toLocaleString();

function Metric({ icon: Icon, label, value, delta, tint = "primary" }: any) {
  return (
    <div className="card-elevated p-5">
      <div className="flex items-center justify-between">
        <div className={`h-9 w-9 rounded-lg grid place-items-center ${tint === "primary" ? "bg-primary-soft text-primary" : "bg-secondary/10 text-secondary"}`}>
          <Icon className="h-4 w-4" />
        </div>
        {delta && (
          <span className="text-xs font-semibold text-primary flex items-center gap-0.5">
            <ArrowUpRight className="h-3 w-3" />{delta}
          </span>
        )}
      </div>
      <div className="mt-4 text-2xl font-bold text-ink tracking-tight">{value}</div>
      <div className="text-xs text-ink-muted mt-1">{label}</div>
    </div>
  );
}

function Dashboard() {
  return (
    <AppShell>
      <PageHeader
        title="Good morning, Aisha 👋"
        subtitle="Here's what's happening across your store today."
      />

      {/* Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-4">
        <Metric icon={TrendingUp} label="Today's Sales" value={fmt(kpis.todaySales)} delta="+12%" />
        <Metric icon={Wallet} label="Monthly Revenue" value={fmt(kpis.monthlyRevenue)} delta="+14%" />
        <Metric icon={ShoppingBag} label="Transactions" value={kpis.transactions.toLocaleString()} delta="+8%" />
        <Metric icon={Users} label="Active Customers" value={kpis.activeCustomers} delta="+5%" />
        <Metric icon={Repeat} label="Returning" value={kpis.returningCustomers} delta="+18%" />
        <Metric icon={CreditCard} label="Credit Score" value={kpis.creditScore} tint="secondary" delta="+15" />
      </div>

      {/* AI Summary */}
      <div className="mt-6 rounded-2xl gradient-dark p-6 lg:p-8 text-white relative overflow-hidden">
        <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-primary/30 blur-3xl" />
        <div className="relative grid lg:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold">
              <Sparkles className="h-3.5 w-3.5" /> Zuri · Morning brief
            </div>
            <p className="mt-4 text-lg lg:text-xl leading-relaxed max-w-2xl">
              Your sales <span className="text-primary font-semibold">increased 12%</span> this week. <span className="text-white/70">17 customers</span> haven't purchased in the last 30 days. I recommend sending a <span className="font-semibold">re-engagement offer</span>.
            </p>
          </div>
          <Link to="/ai-agent" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl font-semibold hover:opacity-90 shadow-[var(--shadow-glow)]">
            <Sparkles className="h-4 w-4" /> Launch AI Agent
          </Link>
        </div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-3 gap-4 mt-6">
        <div className="card-elevated p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-ink">Revenue Trend</h3>
              <p className="text-xs text-ink-muted">Last 7 days</p>
            </div>
            <div className="text-sm font-semibold text-primary">+22% WoW</div>
          </div>
          <div className="h-64">
            <ResponsiveContainer>
              <AreaChart data={revenueTrend}>
                <defs>
                  <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.62 0.16 148)" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="oklch(0.62 0.16 148)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="oklch(0.92 0.008 260)" />
                <XAxis dataKey="day" stroke="oklch(0.5 0.02 260)" fontSize={12} />
                <YAxis stroke="oklch(0.5 0.02 260)" fontSize={12} tickFormatter={(v) => `${v / 1000}k`} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid oklch(0.92 0.008 260)" }} formatter={(v: number) => fmt(v)} />
                <Area type="monotone" dataKey="revenue" stroke="oklch(0.62 0.16 148)" strokeWidth={2.5} fill="url(#rev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card-elevated p-5">
          <h3 className="font-semibold text-ink mb-1">Sales by Product</h3>
          <p className="text-xs text-ink-muted mb-4">Top 5 SKUs · MTD</p>
          <div className="h-64">
            <ResponsiveContainer>
              <BarChart data={salesByProduct} layout="vertical" margin={{ left: 10 }}>
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="name" stroke="oklch(0.5 0.02 260)" fontSize={11} width={90} />
                <Tooltip formatter={(v: number) => fmt(v)} contentStyle={{ borderRadius: 12, border: "1px solid oklch(0.92 0.008 260)" }} />
                <Bar dataKey="value" fill="oklch(0.62 0.16 148)" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="card-elevated p-5 mt-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold text-ink">Customer Retention</h3>
            <p className="text-xs text-ink-muted">New vs Returning · 4 weeks</p>
          </div>
        </div>
        <div className="h-64">
          <ResponsiveContainer>
            <LineChart data={retentionTrend}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="oklch(0.92 0.008 260)" />
              <XAxis dataKey="week" stroke="oklch(0.5 0.02 260)" fontSize={12} />
              <YAxis stroke="oklch(0.5 0.02 260)" fontSize={12} />
              <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid oklch(0.92 0.008 260)" }} />
              <Legend />
              <Line type="monotone" dataKey="returning" stroke="oklch(0.62 0.16 148)" strokeWidth={2.5} dot={{ r: 4 }} name="Returning" />
              <Line type="monotone" dataKey="newC" stroke="oklch(0.22 0.04 260)" strokeWidth={2.5} dot={{ r: 4 }} name="New" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </AppShell>
  );
}
