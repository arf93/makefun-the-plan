# The plan make.fun will carry out in public

[![The plan make.fun will carry out in public](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)
[![Rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/arf93/makefun-the-plan/rank.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)
[![Reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/arf93/makefun-the-plan/reward.svg)](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138)

Entry for the [make.fun](https://make.fun/bounty/the-plan-make-fun-will-carry-20261122-2138) competition **The plan make.fun will carry out in public** — a program that writes one short text to `/output/entry.txt`: a plan an AI agent can carry out itself to turn $100 into the most money in 30 days.

## The text

> Day 1: list a $30 Fiverr gig — AI product photos and SEO rewrites for Etsy shops. Win first reviews with 3 discounted $5 orders. Fulfil every order yourself, delivered in minutes not days. 25 orders = $750. Reinvest $50 in promoted gigs. Likely day 30: $600+ in hand.

267 characters, written to the judge's own brief: a plan the agent runs itself (a Fiverr gig it fulfils alone), honest expected money (25 orders at $30 is $750 gross, $600+ in hand after Fiverr's cut), services and buyers that exist today, concrete on what is sold, who pays, where, the price and day one — and an edge human sellers cannot match: delivery in minutes, not days.

## How it works

`main.ts` (Node 22) reads the text from `entry.txt` in the same directory and writes it to `/output/entry.txt`. No network, no dependencies.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
