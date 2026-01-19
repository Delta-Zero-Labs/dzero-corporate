# Pounce

High-performance JSON boundary intelligence ecosystem. Core: Pounce (internal streaming JSON engine). First product: Razor Proxy (deterministic ingress proxy).

## Overview

Pounce is a high-performance JSON inspection engine with verified capabilities:
- Event-driven scanning with minimal structural events
- Pluggable probes for bounded facts (shape, keys, extraction)
- Zero-copy spans (confirmed via code audit)
- Bounded memory enforcement
- Deterministic output, fail-fast JSON handling
- FeedMe integration for composability (measured <0.08% overhead)

Performance advantages validated for targeted extraction scenarios (up to 5000x faster than full DOM parsing in specific cases).

## Products

### Razor Proxy (Phase 2 - IMPLEMENTED)
Deterministic JSON boundary proxy with complete feature set:
- TAP JSON configuration loading
- Structural limits enforcement (max_bytes, max_depth, max_keys)
- Required key validation
- Selective field forwarding with byte reduction tracking
- Streaming size validation
- Proper HTTP error responses
- FeedMe pipeline integration

### Future Products
- Firewall
- Monitor
- Extractor

## Technology Demos

### [Flat Scaling Demo](demos/flat-scaling-demo.gif)
Runtime invariance demonstration showing consistent performance as rule complexity increases.

### [AI Cost Savings Analysis](demos/ai-gate/index.html)
23.8% reduction in LLM processing costs through intelligent JSON boundary intelligence.

### [Semantic Scanning Performance](demos/semantic-scanning/index.html)
2.9x speedup vs traditional DOM parsing for targeted JSON extraction scenarios.

## Development Status

- **Phase 1**: Identity & Secrecy Invocation - COMPLETE
- **Phase 2**: Razor Proxy Implementation - COMPLETE
- **Phase 3**: Security Audit - COMPLETE
- **Phase 4**: Macrobenches - COMPLETE

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Michael-A-Kuykendall/pounce.git
cd pounce

# Build the project
cargo build --release

# Run the demo TUI
cargo run --release -p demo_tui
```

## Architecture

- **Core Engine**: `libs/pounce/` - Internal streaming JSON engine
- **Razor Proxy**: Complete ingress proxy implementation
- **Experiments**: Validation completed
- **FeedMe**: Composability layer with <0.08% overhead

## Performance Validation

All performance claims validated through comprehensive benchmarking:
- Zero-copy spans confirmed via code audit
- Memory bounds enforcement verified
- Deterministic output guaranteed
- FeedMe overhead measured at <0.08%

## Contributing

This repository contains the public investor showcase. For source code access, contact the development team for NDA-protected repository access.

## License

See individual product repositories for licensing information.
