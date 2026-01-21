# AI Gating / Cost Reduction Demo

This demo shows deterministic pre-tokenization gating: inspect structured payloads first, and only pay tokenization/LLM costs for the records that pass.

Patent status: Provisional filed December 2025 (non-provisional due December 2026).

## Verify (Live)

1. Open the live deck: https://delta-zero-labs.github.io/dzero/
2. Navigate to the "Demo: AI Gating" slide.
3. Confirm the token-savings math and the before/after record counts shown on the slide.

## Run Locally

```bash
git clone https://github.com/Delta-Zero-Labs/dzero.git
cd dzero
npm install
npm run dev
```

Then open the URL Vite prints and navigate to the demo slide.

## Where the Demo Lives

- Slide implementation: `src/components/pitch-deck/slides/Slide14DemoAIGating.tsx`

Notes:
- Savings figures are computed under the pricing assumptions shown in the slide.
- Full data + runner used for the charted numbers are available post-NDA.