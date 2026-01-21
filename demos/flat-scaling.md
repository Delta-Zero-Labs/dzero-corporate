# Flat Scaling Demo

Claim (as shown in the deck): adding orders of magnitude more rules costs ~0 marginal runtime in the demo harness.

Patent status: Provisional filed December 2025 (non-provisional due December 2026).

## Verify (Live)

1. Open the live deck: https://delta-zero-labs.github.io/dzero/
2. Navigate to the "Demo: Flat Scaling" slide.
3. Confirm the chart stays flat as rule count increases, while the baseline curve increases sharply.

## Run Locally

```bash
git clone https://github.com/Delta-Zero-Labs/dzero.git
cd dzero
npm install
npm run dev
```

Then open the URL Vite prints and navigate to the demo slide.

## Where the Demo Lives

- Slide implementation: `src/components/pitch-deck/slides/Slide13DemoFlatScaling.tsx`

Notes:
- Reported numbers are for targeted scenarios under the conditions stated in the slide footnote.
- Full end-to-end benchmark harness + raw artifacts are available post-NDA.
