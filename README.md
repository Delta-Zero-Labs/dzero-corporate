# ∂runtime / ∂rules ≈ 0

Pounce is a streaming JSON boundary intelligence engine. These demos are built to make the asymptotics obvious: per-record runtime stays (nearly) invariant as you add more policies/rules that operate over the same JSON stream.

- Live pitch deck + interactive demos: https://delta-zero-labs.github.io/dzero/
- Repo: https://github.com/Delta-Zero-Labs/dzero

Patent status: Provisional filed December 2025 (non-provisional due December 2026). Deeper diligence material is available post-NDA.

---

## Live Demos & What to Verify

All three demos are accessible via the live deck and can be run locally.

1. Flat Scaling Demo
	- Shows: adding rules from 1 to 1,000,000 costs ~0 marginal runtime in the demo harness.
	- Verify: the runtime line stays flat as rule count increases; baseline (naive per-rule evaluation) grows sharply.
	- Notes: numbers are for targeted scenarios; see the benchmark footnotes in the deck.
	- Details: demos/flat-scaling.md

2. AI Gating / Cost Reduction Demo
	- Shows: deterministic pre-filtering before tokenization; reduced token cost without probabilistic model calls.
	- Verify: the deck's token-savings math (23.8% in the demo dataset) and the before/after record counts.
	- Details: demos/ai-gate.md

3. Semantic Scan Demo
	- Shows: targeted extraction without full DOM parsing for selected queries.
	- Verify: the speed/memory comparison chart and the 2.9× claim under the stated conditions.
	- Details: demos/semantic-scanning.md

---

## Quick Start (Local)

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
git clone https://github.com/Delta-Zero-Labs/dzero.git
cd dzero
npm install
```

### Run dev server

```bash
npm run dev
```

Then open the URL Vite prints (typically http://localhost:5173). Use the deck navigation to reach the demo slides.

### Build + preview

```bash
npm run build
npm run preview
```

---

## Testing

```bash
npm test
```

---

## Repo Map

- `src/components/pitch-deck/` — Deck shell (layout, navigation)
- `src/components/pitch-deck/slides/` — Slide source (demo charts, captions, footnotes)
- `demos/` — Short per-demo notes for reviewers
- `public/` — Static assets

---

## Contact

Mike Kuykendall

- Email: michaelallenkuykendall@gmail.com
- LinkedIn: https://www.linkedin.com/in/makuykendall/
