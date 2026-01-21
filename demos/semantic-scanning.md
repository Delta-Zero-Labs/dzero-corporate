# Semantic Scanning Demo

Patent status: Provisional filed December 2025 (non-provisional due December 2026).

## Targeted JSON Extraction Performance

**Claim**: Event-driven scanning beats DOM parsing for focused field extraction.

## Benchmark Results

```
METHOD              TIME (108K events)
DOM Parse + Query   287ms
Pounce Scan         99ms
```

**2.9× speedup** for targeted field extraction.

## Key Metrics

- **108,341 events processed** in validation corpus
- **Zero-copy spans**: No intermediate string allocations
- **Bounded memory**: Fixed overhead regardless of document size
- **Deterministic hashing**: SHA-256 verified output consistency

## Technical Innovation

1. **Event-driven architecture**: Process JSON as a stream of events, not a tree
2. **Selective materialization**: Only extract fields matching probe criteria
3. **Early termination**: Stop parsing when all required fields found
4. **Zero-copy extraction**: Return spans into original buffer, no copies

## Use Cases

- **Log processing**: Extract specific fields from JSONL streams
- **API response filtering**: Forward only required fields to downstream
- **Schema validation**: Verify structure without full parse
- **Cost reduction**: Avoid tokenizing irrelevant content

## Verify (Live)

1. Open the live deck: https://delta-zero-labs.github.io/dzero/
2. Navigate to the "Demo: Semantic Scan" slide.
3. Confirm the comparison table and the stated speedup/memory reduction under the stated conditions.

## Run Locally

```bash
git clone https://github.com/Delta-Zero-Labs/dzero.git
cd dzero
npm install
npm run dev
```

Then open the URL Vite prints and navigate to the demo slide.

## Where the Demo Lives

- Slide implementation: `src/components/pitch-deck/slides/Slide15DemoSemanticScan.tsx`

## Integrity Guarantees

- **Corpus**: vega-datasets movies.json (Apache 2.0)
- **Hash verification**: Deterministic output validated via SHA-256
- **No cherry-picking**: Results from full corpus, not selected samples

Status: Demonstrates the targeted extraction approach; full benchmark artifacts available post-NDA.
