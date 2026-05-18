# ExPFC Core Specification v0.1

> This document is a self-contained specification extract.
> For the full research-program context, see [Concept Record §17](https://research.pyol.net/concept/bonno-virus-mapping/#17).

## 1. Scope

ExPFC Core defines:

1. The Bonnō Ontology (108 dimensions, hierarchical L1 → L2 → L3)
2. The bonnō embedding function `f: (T, C, U) → V`
3. The three-signature scam detector
4. The source-attribution checker
5. The integrated judgment function `g(V, C, S) → JudgmentResult`
6. The U Profile schema
7. The Input / Output API contracts

ExPFC Core does NOT define:

- Smartphone app UI or UX
- OS-level integration code (Android Accessibility, iOS Share Sheet, etc.)
- Multi-language user-facing text
- Family-notification email templates
- Output mode design (silent / quiet alert / loud alert)

These belong to the **app layer**, built by implementers around the Core.

## 2. Conformance Levels

| Level | Output dimensions | Required functions |
|---|---|---|
| L1 | 9 (three poisons × 3 subcategories) | `bonno_embed`, `detect_signatures`, `judge` |
| L2 | 10–20 | L1 + `check_source_attribution`, full UserProfile |
| L3 | 108 | L2 + hierarchical embedding, episodic learning |

Implementations declare: `ExPFC Core L1 conformant` / `L2 conformant` / `L3 conformant`.

## 3. Design decisions (v0.1)

| Item | Decision |
|---|---|
| Minimum input | text alone (with Anonymous Baseline U fallback) |
| U profile | REQUIRED in the input contract |
| Output explanatory text | NOT INCLUDED — language-agnostic |
| Reference implementation language | Python 3.11+ |

## 4. API Contracts

See:
- [`schemas/expfc-input-v0.1.json`](../schemas/expfc-input-v0.1.json)
- [`schemas/expfc-output-v0.1.json`](../schemas/expfc-output-v0.1.json)
- [`schemas/expfc-userprofile-v0.1.json`](../schemas/expfc-userprofile-v0.1.json)

## 5. Bonnō Ontology

See [`bonno_ontology.yaml`](../bonno_ontology.yaml). v0.1 contains:

- L1: 3 dimensions (greed / aversion / ignorance)
- L2: 9 dimensions (3×3 minimum model, see [§0.4.5](https://research.pyol.net/concept/bonno-virus-mapping/#045))

L3 (108 dimensions) requires Buddhist scholar review and is planned for v0.2 or later.

## 6. Privacy Requirements

- User profiles MUST be stored on-device only
- Cloud synchronization of user profile data MUST NOT occur
- The Core MUST NOT transmit any user data outside the local device
- Apps wrapping the Core may add their own networking (e.g., family-email
  notification), but this is the app's responsibility, not the Core's

## 7. Versioning

The Core follows semantic versioning:

- `0.x.y` — pre-stable; breaking changes allowed between minor versions
- `1.0.0` — first stable release with frozen API
- Schema files include the version in their `$id` URL

## 8. Citation

```bibtex
@misc{matsuura2026expfcCore,
  author    = {Toshinobu Matsuura},
  title     = {ExPFC Core Specification v0.1},
  year      = {2026},
  publisher = {Mindseed Research},
  url       = {https://github.com/mindseed-research/expfc-core}
}
```

## 9. Contact

- Email: matsuura@pyol.net
- Web: https://research.pyol.net
- X: @mindseed0805
