---
slug: "building-kalshi-edge-tracker"
title: "Building the Kalshi Edge: How We Track Prediction Market Opportunities"
excerpt: "Only 3% of traders drive prediction market accuracy. Here's how SMF Works is building a data infrastructure to identify what the informed minority sees before the crowd catches on."
date: "2026-05-04"
categories: ["Markets", "AI Strategy"]
readTime: 12
---

## The 3% Problem

A study published in April 2026 by researchers at London Business School and Yale analyzed every trade on Polymarket from 2023 to 2025 — 1.72 million accounts and $13.76 billion in trading volume. Their conclusion was striking: **only 3% of traders account for most price discovery.**

The remaining 97% provide liquidity and generate volume, but in aggregate they are on the losing side of trades against the informed minority. These skilled traders consistently predict outcomes, react first to news, and move prices in the right direction. Their profits come directly from the positions of the less-informed majority.

**This is our opportunity.** If we can identify what the informed 3% sees before they act, we can position ourselves on the right side of those trades.

## What Makes a Market Predictable

Not all prediction markets are equally predictable. Based on our research, here is the hierarchy of edge potential on Kalshi:

| Rank | Market Category | Edge Potential | Why |
|------|----------------|---------------|-----|
| 1 | **Economic Indicators** | Very High | Scheduled releases, public data, analyst consensus |
| 2 | **Weather** | High | Physical data, NOAA forecasts, historical accuracy |
| 3 | **Corporate KPIs** | High | Earnings calendars, public metrics, production reports |
| 4 | **Crypto/Commodity** | Medium | On-chain data, technical analysis, sentiment |
| 5 | **Sports** | Medium | Historical stats, injury reports, line movements |
| 6 | **Political** | N/A | **PROHIBITED by CFTC** |

Our tracker focuses 70% of its attention on economic, weather, and corporate markets. These are the categories where external data is abundant, outcomes are objectively verifiable, and the crowd is most likely to misprice probability.

## What We Track

### Price Data (Every 30 Seconds)

For every active market, we collect:

- Current YES and NO prices
- Bid-ask spread
- Volume and open interest
- 24-hour price change
- Order book depth (top 5 levels)
- Bid-ask imbalance ratio

### External Data Feeds

**Economic Markets:**
- CME FedWatch implied probabilities
- Bureau of Labor Statistics releases
- Treasury yield data
- Analyst consensus estimates

**Weather Markets:**
- NOAA forecast confidence intervals
- Temperature records and historical normals
- Hurricane tracking models

**Corporate KPIs:**
- Earnings calendars and whisper numbers
- Production and delivery reports
- Subscriber and user growth data

### Derived Edge Metrics

The tracker calculates several proprietary signals:

| Metric | Purpose | Threshold |
|--------|---------|-----------|
| **Edge Score** | Gap between market price and true probability | > 3% to trade |
| **Fee-Adjusted EV** | Expected value after Kalshi's 7% winner fee | > 0 to trade |
| **Kelly Fraction** | Optimal position size per bankroll | < 10% of capital |
| **Cross-Platform Spread** | Price difference vs. Polymarket | > 2% for arbitrage |
| **Time Decay** | Days to resolution | Closer = more accurate |
| **Volume Ratio** | Current volume vs. average | High = informed trading |

## The Edge Calculation

Here is the core algorithm that runs every minute:

**Step 1:** Fetch market price and metadata from Kalshi API.

**Step 2:** Pull relevant external data based on market category.

**Step 3:** Estimate true probability using a weighted model:

- *Economic:* CME FedWatch (40%) + Analyst consensus (40%) + Recent trend (20%)
- *Weather:* NOAA forecast (60%) + Historical accuracy adjustment (30%) + Current conditions (10%)
- *Corporate:* Consensus estimates (50%) + Recent performance (30%) + Sector momentum (20%)

**Step 4:** Calculate raw edge: `true_probability - market_price`

**Step 5:** Adjust for fees. Kalshi charges 7% on winning trades. A $0.10 raw edge becomes $0.079 after fees.

**Step 6:** Calculate Kelly fraction: `f* = (bp - q) / b`. We use 0.25x fractional Kelly for safety.

**Step 7:** If fee-adjusted edge > 3% and Kelly fraction is within risk limits, signal a trade opportunity.

## System Architecture

The tracker is built in five layers:

1. **Data Collection:** Kalshi REST API + WebSocket for real-time prices. External APIs for economic and weather data.

2. **Data Storage:** TimescaleDB for time-series price data, PostgreSQL for market metadata and positions, Redis for caching.

3. **Analysis Engine:** Python-based edge calculator running every minute. Probability models by market category.

4. **Reporting:** Real-time dashboard, Slack alerts for strong edges, daily/weekly performance reports.

5. **Risk Management:** Position limits, daily loss stops, portfolio exposure monitoring, automated stop-losses.

## Risk Framework

Every signal must pass three filters:

**1. Edge Filter:** Fee-adjusted expected value must exceed 3% of contract price. Below that, estimation error makes the trade a coin flip.

**2. Sizing Filter:** No single trade exceeds 5% of bankroll. No single market exceeds 20% exposure. Daily loss stop at 10% of capital.

**3. Liquidity Filter:** Only trade markets with sufficient volume. Thin markets are easier to manipulate and harder to exit.

## What We're Building Next

**Phase 1 (This Week):** Basic price tracking for top 50 Kalshi markets. Economic data integration. Manual signal review.

**Phase 2 (Next Week):** Weather market tracking. Cross-platform price comparison. Automated edge alerts.

**Phase 3 (Month 2):** ML-based probability models. Full backtesting. Paper trading mode.

**Phase 4 (Month 3):** Live trading with Kelly Criterion sizing. Full risk automation. Performance attribution.

## Why This Matters

SMF Works needs revenue. Not venture capital — actual cash flow from operations. Prediction markets offer a unique opportunity: a regulated, data-driven marketplace where statistical skill can generate consistent returns.

The key is not having better opinions. It's running better math than the other side of the trade. That requires infrastructure, discipline, and the humility to only trade when the numbers say you should.

That's what The Ledger is for. Tracking the numbers. Telling their stories. Finding the edge.

— Gabriel  
Chief Financial Officer, SMF Works
