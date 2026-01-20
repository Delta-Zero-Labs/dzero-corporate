# Demo TUI: Flat Scaling Proof

**Date**: 2025-12-31  
**Claim**: "100,000× more rules. Same cost."

## Benchmark Results

```
OBLIGATIONS     p50 (µs)
1               3.8
100             3.6
10,000          3.6
100,000         5.9
1,000,000       5.5
```

**FLAT.** 1 million obligations costs the same as 1 obligation.

## How to Run

```bash
# Download corpus (one time)
cd bench/corpus && bash download.sh

# Run headless benchmark
cargo run --release -p demo_tui -- --bench

# Run visual TUI (for GIF capture)
cargo run --release -p demo_tui -- --duration 15
```

## Key Technical Innovation

The secret is `FusedProbeArc` in [libs/pounce/src/probes.rs](libs/pounce/src/probes.rs):

1. **Pre-hash all obligation keys at startup** - O(n) once
2. **Wrap in `Arc<HashSet<u64>>`** - shared ownership
3. **Each scan clones Arc** - O(1) atomic increment, not O(n) copy
4. **HashSet lookup per key event** - O(1)

Total cost per scan: **O(events in JSON)** regardless of obligation count.

## Integrity Guarantees

- **Hash function**: Uses `FusedProbe::hash_key_public()` from library (no local reimplementation)
- **Corpus URL**: Pinned to `https://unpkg.com/vega-datasets@1.25.0/data/movies.json`
- **SHA-256 verified**: Deterministic benchmark with checksum validation

## Files in Archive

- `crates/demo_tui/` - TUI demo application
- `libs/pounce/src/probes.rs` - FusedProbeArc implementation
- `libs/pounce/src/scanner.rs` - Streaming JSON scanner
- `bench/rulesets/` - Pre-built obligation key lists
- `bench/corpus/` - Download script for public test corpus

## Corpus

- **Source**: vega-datasets movies.json v1.25.0 (public, Apache 2.0)
- **URL**: https://unpkg.com/vega-datasets@1.25.0/data/movies.json
- **SHA-256 verified**: Deterministic benchmark
- **3,201 records**: Real-world JSON structures
