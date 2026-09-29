# M-Pesa Growth Engine

Build a high-fidelity web and mobile-first prototype called "M‑Pesa Lift".




PRODUCT VISION




M‑Pesa Lift is an AI-powered SME commerce operating system built on top of M‑Pesa.




The platform transforms M‑Pesa from a payment tool into a growth platform that enables small businesses to:




• Sell products and services online without a website

• Generate smart payment links

• Create digital catalogs instantly

• Manage inventory and orders

• Accept payments via M‑Pesa

• Access business insights powered by AI

• Receive AI-driven customer retention recommendations

• Build a dynamic credit profile

• Access working capital financing

• Access device financing




The target users are Kenyan SMEs, merchants, social commerce sellers, retailers, service providers, WhatsApp businesses, and informal businesses.




DESIGN SYSTEM




Use a modern fintech UX inspired by:

• Safaricom

• M‑Pesa

• Stripe

• Shopify

• Monzo




Primary Color:

#00A651 (Safaricom Green)




Secondary Colors:

#0F172A

#F8FAFC

#E5F4EA

#FFFFFF




Design Style:

• Premium fintech

• AI-native experience

• Mobile-first

• Clean cards

• Soft shadows

• Rounded corners

• Dashboard-driven

• Executive-grade visualizations




APP STRUCTURE




Create the following core modules:




1. DASHBOARD

2. COMMERCE

3. PAYMENTS

4. AI AGENT

5. INSIGHTS

6. CREDIT

7. SETTINGS




--------------------------------------------------

DASHBOARD

--------------------------------------------------




Create an executive dashboard showing:




Top Metrics:

• Today's Sales

• Monthly Revenue

• Transactions

• Active Customers

• Returning Customers

• Credit Score




Include charts:

• Revenue Trend

• Sales by Product

• Customer Retention Trend




Include AI Summary Panel:




Display:




"Good morning Aisha.




Your sales increased 12% this week.




17 customers have not purchased in the last 30 days.




We recommend sending a re-engagement offer."




Provide CTA button:




[Launch AI Agent]




--------------------------------------------------

COMMERCE MODULE

--------------------------------------------------




Screen: Product Catalog




Allow merchant to:




• Add product

• Upload image

• Set price

• Set inventory quantity

• Add description




Display products in modern card layout.




Example Data:




Product:

Organic Honey

KES 850




Product:

Rice 2kg

KES 320




Product:

Fresh Eggs

KES 450




Provide:




[Share Catalog]

[Generate Store Link]




When clicking Share Catalog:




Generate a public storefront page.




--------------------------------------------------

PAYMENTS MODULE

--------------------------------------------------




Screen: Payment Links




Merchant can:




• Enter product

• Enter amount

• Generate MPesa payment link




Display:




Payment Link:

https://mpesalift.co/pay/123




Buttons:




[Copy]

[Share WhatsApp]




Display recent payments table:




Customer

Amount

Status




Example:

John Mwangi

KES 2,500

Paid




--------------------------------------------------

INVENTORY MANAGEMENT

--------------------------------------------------




Screen: Inventory




Display:




Product

Stock

Status




Use color coding:




Green:

In Stock




Orange:

Low Stock




Red:

Out Of Stock




Provide AI recommendation:




"Rice stock likely to run out in 4 days."




--------------------------------------------------

AI AGENT MODULE

--------------------------------------------------




This is the hero feature.




Create a conversational AI assistant called:




Lift AI




Chat interface similar to ChatGPT.




Example prompts:




"Show me today's sales"




"Which customers have churned?"




"Generate a promotion"




"Create a payment reminder"




The AI Agent should return realistic business recommendations.




Example:




"17 customers have not purchased in over 30 days.




I recommend offering 10% discount vouchers."




Buttons:




[Send Campaign]

[Generate Offer]




--------------------------------------------------

CUSTOMER MANAGEMENT

--------------------------------------------------




Screen: Customers




Display:




Customer Name

Last Purchase

Lifetime Value

Status




Status:

• Active

• At Risk

• Churned




Include action buttons:




• Send Reminder

• Offer Discount

• WhatsApp Follow-up




--------------------------------------------------

AI AUTOMATION STUDIOCreate an automation screen.

Users can activate:
1. Auto Payment Reminders

2. Churn Recovery Campaigns

3. Daily Sales Insights

4. Product Recommendations

Show simple ON/OFF toggles.

Example:

Auto Follow-Up

STATUS: ON

INSIGHTS MODULE

Create AI-generated insights.

Example cards:

Insight 1:

Revenue grew 14% this week.

Insight 2:

Returning customers generate 62% of revenue.

Insight 3:

Weekend sales outperform weekdays by 28%

Provide:

[Export PDF]

[Download Report]

CREDIT & FINANCE MODULE

This screen demonstrates embedded finance.

Display merchant credit profile.

Credit Score:

725

Risk Level:

Low

Eligible Loan:

KES 120,000

Repayment Rate:

97%

Provide CTA:

[Apply for Working Capital]

Loan products:

Working Capital Loan

KES 120,000

Inventory Financing

KES 50,000

Device Financing

KES 35,000

CONSUMER AI ASSISTANT

Create a consumer journey


User can:

Search:

"Organic Honey"

AI assistant returns:

Nearby M‑Pesa Lift merchants selling organic honey.

Display:

Product

Price

Merchant Rating

Button:

[Buy Now]

Checkout should use M‑Pesa payment.

MERCHANT ONBOARDING

Step 1:

Business Name

Step 2:

Business Type

Step 3:

M‑Pesa Till Number

Step 4:

Upload Products
Step 5:

Complete Setup

Display success screen:

"Your AI-powered store is now live."

ANALYTICS DATA
Use realistic seed data:

Monthly Revenue:

KES 465,000

Transactions:

1,245

Customers:

342

Returning Customers:

189

Average Order Value:

KES 1,350

Credit Score:

725

DEMO STORY MODE

Include a clickable demo walkthrough.

Merchant:

Aisha Retail Store
Flow:

1. Creates catalog

2. Generates payment link

3. Receives payment

4. AI identifies churned customers

5. AI launches campaign

6. Sales increase

7. Credit score improves

8. Eligible for loan

End with dashboard showing:

Revenue Growth +22%

Credit Increase +15%

Customer Retention +18%Create an investor-grade interactive prototype that demonstrates how M‑Pesa Lift transforms M‑Pesa from a payment platform into an AI-powered commerce, growth, and embedded finance ecosystem for SMEs.

Focus on realistic dashboards, fintech UX, AI experiences, merchant workflows, and embedded lending journeys.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://mpesa-ai-lift.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9b2d7961-d4a2-4aaf-aeef-dfb2d89f04a8).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
