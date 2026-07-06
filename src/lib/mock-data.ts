export const merchant = {
  name: "Aisha Retail Store",
  owner: "Aisha",
  till: "5192847",
  location: "Nairobi CBD",
};

export const kpis = {
  todaySales: 18450,
  monthlyRevenue: 465000,
  transactions: 1245,
  activeCustomers: 342,
  returningCustomers: 189,
  averageOrderValue: 1350,
  creditScore: 725,
};

export const revenueTrend = [
  { day: "Mon", revenue: 42000, tx: 148 },
  { day: "Tue", revenue: 51000, tx: 172 },
  { day: "Wed", revenue: 47500, tx: 165 },
  { day: "Thu", revenue: 63000, tx: 210 },
  { day: "Fri", revenue: 78500, tx: 245 },
  { day: "Sat", revenue: 92000, tx: 289 },
  { day: "Sun", revenue: 71000, tx: 216 },
];

export const salesByProduct = [
  { name: "Organic Honey", value: 128000 },
  { name: "Rice 2kg", value: 96000 },
  { name: "Fresh Eggs", value: 74000 },
  { name: "Cooking Oil", value: 62000 },
  { name: "Maize Flour", value: 48000 },
];

export const retentionTrend = [
  { week: "W1", newC: 42, returning: 96 },
  { week: "W2", newC: 51, returning: 118 },
  { week: "W3", newC: 48, returning: 142 },
  { week: "W4", newC: 62, returning: 189 },
];

export const products = [
  { id: "p1", name: "Organic Honey", price: 850, stock: 42, status: "in", desc: "500g pure raw honey from Kitui" },
  { id: "p2", name: "Rice 2kg", price: 320, stock: 6, status: "low", desc: "Pishori premium long grain" },
  { id: "p3", name: "Fresh Eggs (Tray)", price: 450, stock: 28, status: "in", desc: "30 eggs, farm fresh" },
  { id: "p4", name: "Cooking Oil 1L", price: 380, stock: 0, status: "out", desc: "Sunflower blend" },
  { id: "p5", name: "Maize Flour 2kg", price: 210, stock: 34, status: "in", desc: "Sifted white flour" },
  { id: "p6", name: "Sugar 1kg", price: 180, stock: 12, status: "low", desc: "Refined white sugar" },
];

export const recentPayments = [
  { id: "t1", customer: "John Mwangi", amount: 2500, status: "Paid", time: "2 min ago" },
  { id: "t2", customer: "Grace Wanjiku", amount: 850, status: "Paid", time: "18 min ago" },
  { id: "t3", customer: "Peter Otieno", amount: 1720, status: "Pending", time: "31 min ago" },
  { id: "t4", customer: "Mary Njeri", amount: 640, status: "Paid", time: "1 hr ago" },
  { id: "t5", customer: "Samuel Kiprop", amount: 3200, status: "Paid", time: "2 hr ago" },
  { id: "t6", customer: "Fatuma Ali", amount: 450, status: "Failed", time: "3 hr ago" },
];

export const customers = [
  { name: "John Mwangi", last: "2 days ago", ltv: 28400, status: "Active" },
  { name: "Grace Wanjiku", last: "5 days ago", ltv: 19200, status: "Active" },
  { name: "Peter Otieno", last: "34 days ago", ltv: 42800, status: "At Risk" },
  { name: "Mary Njeri", last: "9 days ago", ltv: 15600, status: "Active" },
  { name: "Samuel Kiprop", last: "62 days ago", ltv: 51200, status: "Churned" },
  { name: "Fatuma Ali", last: "41 days ago", ltv: 8400, status: "At Risk" },
  { name: "David Mutua", last: "3 days ago", ltv: 33100, status: "Active" },
  { name: "Linet Chebet", last: "78 days ago", ltv: 22400, status: "Churned" },
];

export const insights = [
  { title: "Revenue grew 14% this week", body: "Weekend promos on Organic Honey drove KES 34,200 in new sales.", tag: "Growth" },
  { title: "Returning customers = 62% of revenue", body: "Retention is your biggest lever. Reward top 20% with loyalty offers.", tag: "Retention" },
  { title: "Weekend sales outperform weekdays by 28%", body: "Consider pushing catalog campaigns Fri–Sun on WhatsApp.", tag: "Timing" },
  { title: "Rice 2kg likely to stock out in 4 days", body: "Based on 7-day velocity. Reorder 40 units to avoid lost sales.", tag: "Inventory" },
];

export const loanProducts = [
  { name: "Working Capital Loan", amount: 120000, rate: "2.1% / mo", term: "6 months", desc: "Fund inventory and daily operations" },
  { name: "Inventory Financing", amount: 50000, rate: "1.8% / mo", term: "3 months", desc: "Restock fast-moving SKUs" },
  { name: "Device Financing", amount: 35000, rate: "Flat KES 1,200/mo", term: "12 months", desc: "POS terminal or smartphone" },
];
