import { createFileRoute } from "@tanstack/react-router";
import { AppShell, PageHeader } from "@/components/app-shell";
import { Sparkles, Send, User, Zap } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export const Route = createFileRoute("/ai-agent")({ component: AiAgent });

type Msg = { role: "user" | "ai"; text: string; actions?: string[] };

const suggestions = [
  "Show me today's sales",
  "Which customers have churned?",
  "Generate a promotion",
  "Create a payment reminder",
];

const responses: Record<string, Omit<Msg, "role">> = {
  "sales": {
    text: "Today you've made **KES 18,450** across **34 transactions** — up 12% vs yesterday. Top seller: Organic Honey (12 units, KES 10,200). Peak hour: 2–3pm.",
  },
  "churn": {
    text: "17 customers haven't purchased in over 30 days. Combined lifetime value: **KES 284,600**. I recommend offering them 10% discount vouchers via WhatsApp.",
    actions: ["Send Campaign", "Generate Offer"],
  },
  "promo": {
    text: "Here's a promotion draft:\n\n**Weekend Special — 15% off Organic Honey**\n\"Restock your pantry! Get 15% off Aisha Retail's award-winning Organic Honey this weekend only. Reply YES to claim.\"\n\nEstimated reach: 342 customers · Expected uplift: KES 24,000",
    actions: ["Send Campaign", "Generate Offer"],
  },
  "reminder": {
    text: "Payment reminder drafted for 8 pending invoices totaling **KES 14,320**:\n\n\"Hi {name}, this is a friendly reminder from Aisha Retail. Your order KES {amount} is pending. Pay securely: mpesalift.co/pay/{id}\"",
    actions: ["Send Campaign"],
  },
  "default": {
    text: "I can help you analyze sales, find churned customers, draft campaigns, generate offers, and forecast inventory. What would you like to explore?",
  },
};

function match(q: string) {
  const l = q.toLowerCase();
  if (l.includes("sales") || l.includes("today")) return responses.sales;
  if (l.includes("churn") || l.includes("customer")) return responses.churn;
  if (l.includes("promo") || l.includes("offer") || l.includes("discount")) return responses.promo;
  if (l.includes("remind") || l.includes("pay")) return responses.reminder;
  return responses.default;
}

function AiAgent() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "ai", text: "Hi Aisha, I'm **Zuri** — your business copilot. Ask me anything about sales, customers, inventory, or growth.", actions: [] },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => { scrollRef.current?.scrollTo({ top: 999999, behavior: "smooth" }); }, [messages]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTimeout(() => {
      const r = match(text);
      setMessages((m) => [...m, { role: "ai", ...r }]);
    }, 500);
  };

  return (
    <AppShell>
      <PageHeader
        title={<span className="inline-flex items-center gap-2">Zuri <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary text-primary-foreground">BETA</span></span>}
        subtitle="Your AI business copilot. Ask about sales, customers, inventory, or growth."
      />

      <div className="card-elevated overflow-hidden flex flex-col h-[calc(100vh-14rem)]">
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((m, i) => (
            <div key={i} className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
              <div className={`h-8 w-8 rounded-lg grid place-items-center shrink-0 ${m.role === "ai" ? "gradient-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}>
                {m.role === "ai" ? <Sparkles className="h-4 w-4" /> : <User className="h-4 w-4" />}
              </div>
              <div className={`max-w-[80%] ${m.role === "user" ? "text-right" : ""}`}>
                <div className={`inline-block text-left px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                  m.role === "ai" ? "bg-muted text-ink" : "bg-primary text-primary-foreground"
                }`}>
                  {m.text.split(/(\*\*[^*]+\*\*)/g).map((chunk, j) =>
                    chunk.startsWith("**") ? <strong key={j}>{chunk.slice(2, -2)}</strong> : <span key={j}>{chunk}</span>
                  )}
                </div>
                {m.actions && m.actions.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {m.actions.map((a) => (
                      <button key={a} className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90 inline-flex items-center gap-1.5">
                        <Zap className="h-3 w-3" /> {a}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {messages.length <= 1 && (
          <div className="px-5 pb-3 flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <button key={s} onClick={() => send(s)} className="text-xs px-3 py-1.5 rounded-full border border-border bg-background hover:bg-muted text-ink-muted">
                {s}
              </button>
            ))}
          </div>
        )}

        <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="border-t border-border p-3 flex gap-2 bg-background">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Zuri anything about your business..."
            autoFocus
            className="flex-1 px-4 py-2.5 rounded-lg border border-input bg-background text-sm outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button type="submit" className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold inline-flex items-center gap-2 hover:opacity-90">
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </AppShell>
  );
}
