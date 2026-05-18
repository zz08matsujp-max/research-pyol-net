# Conformance Tests

Conformance test suite for ExPFC Core implementations.

## Status

v0.1 — placeholder. Test suite arrives in v0.2 alongside the reference
implementation of `f`, `detect`, `check`, `judge`.

## Planned structure

```
tests/
├── conformance/
│   ├── level1/       # 9-dim minimum tests
│   ├── level2/       # 10-20-dim tests
│   └── level3/       # 108-dim tests
├── fixtures/
│   ├── scam_corpus.jsonl       # anonymized scam samples
│   ├── legitimate_corpus.jsonl # legitimate-advertising samples
│   └── user_profiles.json      # diverse U profile examples
└── README.md
```

## How to run (planned)

```bash
pip install expfc-core
python -m expfc_core.conformance --level=1 --implementation=mymodule
```

The harness will report:
- Per-dimension accuracy
- Inter-annotator κ (when ground-truth available)
- False-positive rate on legitimate samples
- Latency benchmarks
