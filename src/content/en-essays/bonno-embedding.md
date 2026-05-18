---
title: "Bonnō Embedding and the Scam-Detection Mechanism: Mapping Text into a Vector Space of Psychological Vulnerability"
author: "Toshinobu Matsuura"
summary: "I propose a scam-detection mechanism built around a function f that maps text into a 108-dimensional vector of mental-affliction (bonnō) stimulation. Scam texts, I observe, carry three signatures absent from legitimate advertising — concentrated stimulation of a few specific afflictions, suppression of cautionary afflictions, and the coexistence of logically incompatible appeals. Combining this with a law-grounded check on source attribution makes possible a detection system that minimizes false positives while capturing the invariant structure of fraud at the abstract level. This essay, addressed equally to Affective Computing researchers and to anti-scam practitioners, lays out the definition of bonnō embedding, the three signatures, composite judgment, false-positive countermeasures, and the unavoidable ethical questions."
publishedAt: 2026-05-18
updatedAt: 2026-05-18
version: "v0.1"
lang: "en"
tags: ["Affective Computing", "scam detection", "AI Safety", "embedding learning", "consumer protection"]
license: "CC BY 4.0"
derivedFrom: "Concept Record §14"
citationKeySuffix: "bonnoEmbedding"
ogImage: "/img/ogp-external-prefrontal-desires.png"
---

> **Note on terminology.** "Mental afflictions" in this essay corresponds to the Buddhist concept of *bonnō* (煩悩) — in Sanskrit, *kleshas* — the mental states held to cause human suffering, classified into 108 categories. The translation of Buddhist terminology in this essay is preliminary; I plan to refine it in v0.2 in consultation with Buddhist scholars.

## Introduction

What follows is my rewriting of §14 of the [Concept Record](/en/concept/bonno-virus-mapping/) — the founding document of the research program I am running at Mindseed Research, "Bonnō × Scam-Virus Mapping: An Integrated Database" — into a standalone piece. My intention is for the essay to stand on its own, without requiring readers to be familiar with the other chapters; the background I need is given in the body.

I have only one thesis. **Scam texts carry, in vector space, signatures that target human psychological vulnerability — mental afflictions, in Buddhist terms. By constructing a function f that maps text into a 108-dimensional vector of affliction stimulation, and by judging composite-style across (a) the characteristic shape of that vector and (b) a law-grounded check on source attribution, it becomes possible to detect, at the abstract level and with stable accuracy, fraud that surface-level keyword matching cannot reach.** I write this both as an application of Affective Computing research and as a technical framework that, I believe, can be immediately useful to consumer-protection and anti-scam practitioners.

> **About the author**[^author]: I run Mindseed Research as an independent researcher based in Wakayama, Japan. Forty-plus years of infrastructure engineering (Kansai Electric Power Company, Samsung SDS) precede the current 20-year research program centered on Bonnō × AI. See the [About page](/en/about/) for my background.

[^author]: See the About page linked above.

## 1. The definition of the affliction-embedding space

I define affliction embedding as the following three-way relation:

```
f: (T, C, U) → V = (w₁, w₂, ..., w₁₀₈),  wᵢ ∈ [0, 1]

  T: an arbitrary text
  C: situation / context (time of day, medium, relationship, cumulative behavior, etc.)
  U: the individual's mental-affliction sensitivity profile
  V: a 108-dimensional affliction-stimulation vector
```

Here wᵢ represents **"how strongly text T, in situation C, stimulates affliction i of individual U."** The value range is normalized to [0, 1].

This formulation is positioned in the lineage of **embedding-representation learning** as developed in Word2Vec, BERT, CLIP, and others. What I see as distinctive, though, is that **the meaning of the embedding space corresponds directly to "human psychological vulnerability."** Conventional embeddings learn things like "semantic similarity of words" or "correspondence between images and text"; what I want to learn here is **"the action on human emotion."**

Why 108 dimensions? Because, as I read the Buddhist canon, that is the empirical granularity of partition reached over 2,500 years of internal observation. For the methodological argument, see the companion essay [*Buddhism as a Coordinate System*](/en/essays/buddhism-as-coordinate-system/). As the practical implementation starting point, I begin from the "three poisons × three subcategories each = 9-dimensional minimum model" laid out in §0.4.5 / §4.3.0 of the Concept Record.

## 2. The operational definition of scam judgment

For an arbitrary text T, I decompose the scam probability P(scam | T) through the affliction vector V like this:

```
P(scam | T, C, U) = g(V(T, C, U), C(T), S(T))

  V(T, C, U): the affliction-stimulation vector
  C(T):       contextual information about the text (medium, situation, counterparty)
  S(T):       information about the source / sender
  g:          the integrating decision function
```

The core claim, in this decomposition, is that **scam judgment is reduced to a pattern-recognition problem in vector space.** What remains is the question of how to characterize V, C, and S concretely. The next section addresses V; §4 addresses S.

## 3. Three signatures of the scam vector

From empirical observation and theoretical reasoning, I see three common features in the affliction vectors of scam texts. Together, they give us the leverage we need to separate scam texts from legitimate ones.

### Signature 1: concentrated stimulation of a few specific afflictions

A legitimate text stimulates several afflictions mildly. A scam text **stimulates a few specific afflictions intensely**:

```
A legitimate-text vector:
  affliction A: 0.3, affliction B: 0.2, affliction C: 0.4, ...  uniformly low–medium

A scam-text vector:
  affliction A (greed)   : 0.92  ★★★
  affliction B (loneliness): 0.78  ★★★
  affliction C (urgency) : 0.85  ★★★
  affliction X (the rest): 0.05–0.10
```

Compute the **standard deviation** of the vector and the scam case is plainly higher. Simple, but easy to deploy in practice as a feature.

### Signature 2: suppression of cautionary afflictions

A scam text, simultaneously with stimulation, is designed to **suppress the afflictions related to caution**:

```
Typical examples of affliction suppression (negative stimulation):
  - Doubt:                "trust me," "keep this between us"
  - Caution:              "decide now or it's over"
  - Confirmation impulse: "you shouldn't consult your family"
```

This is a **"suppression structure"** not seen in legitimate advertising. I treat it as a decisive feature of fraud. The detection side has to learn the **co-occurrence pattern** of stimulation and suppression, not just stimulation intensity in isolation.

### Signature 3: coexistence of mutually incompatible appeals

"Easy money" (stimulating greed) + "no risk" (suppressing fear) + "special access just for you" (stimulating sociality) — scams routinely place **logically incompatible appeals side by side.** Combinations that would not stand up in legitimate economic activity show up consistently in fraud.

None of these three signatures, alone, cleanly separates fraud from legitimate advertising. **Only by combining them composite-style do we reach into the territory that surface-level keyword matching never touches.** That, at least, is my reading.

## 4. The source-attribution principle — a law-grounded composite axis

Pure affliction vectors alone cannot cleanly separate scams from legitimate advertising — because **legitimate advertising also stimulates afflictions.** Cosmetics legitimately stimulate vanity, diet products legitimately stimulate anxiety about the body, investment products legitimately stimulate desire for gain.

The second axis I want to combine here is **source attribution**, grounded in law.

In Japan:
- **Act against Unjustifiable Premiums and Misleading Representations**: obligation to identify the advertiser
- **Act on Specified Commercial Transactions**: obligation to display business information
- **2023 (Reiwa 5) revision on stealth-marketing regulation**: obligation to disclose that content is an advertisement

In other words, **legitimate advertising is legally obligated to disclose its source.** Stated as a decision rule:

```
[source clearly disclosed] + [strong affliction stimulation]  →  legitimate advertising
[source unclear]           + [strong affliction stimulation]  →  very likely a scam
```

My core view is that this is a far more powerful discrimination axis than affliction vectors alone. The concrete source-attribution checks look like this:

| Item | Scam pattern |
|---|---|
| Company name | none, or fabricated |
| Corporate registration number | none |
| Address | none, or overseas (US / UK / Hong Kong feigned) |
| Contact | LINE / Telegram only, no phone number |
| FSA registration number | none, or forged |
| Website | hastily set up, no operator info |
| Privacy policy | none, or machine-translated |
| Specified Commercial Transactions disclosure | none |

These absences are themselves **violations of law**, so the detection logic has legal grounding. When a detected fraud later needs to be brought to enforcement or administrative guidance, the evidence of missing source attribution is directly usable. My program performs affliction-stimulation analysis and source-attribution analysis in tandem — a design that **minimizes false positives while keeping the detection rationale legally explicable.**

## 5. The strategic advantage at the abstract level — robustness to changing techniques

The strategic advantage of the affliction-vectorization approach, in my view, is that it **fights one level of abstraction higher**:

```
[concrete level]   the perpetrators change techniques every month
  ↓
[middle level]     paraphrasing, new names, new platforms
  ↓
[abstract level ← this approach] the afflictions targeted cannot be changed
```

However the concrete techniques evolve, **the structure of exploiting human vulnerability remains invariant.** Capturing that invariance, I believe, makes it possible to build a detection system that holds up against unknown techniques.

This is a textbook instance of what I think of as **"combining mature logics"**:

- Buddhist affliction theory (2,500 years)
- Source-attribution obligation in law (decades)
- Pattern-recognition engineering (70 years)

Integrating three mature logics, to take on a new problem (SNS-mediated investment fraud). The Samsung SDS philosophy I internalized — "mature technology is safety first" — aligns directly with this positioning.

As I argue in the companion essay [*Economies of Precision*](/en/essays/precision-economics/), the giants stay at surface-level keyword matching because of Economies-of-Scale incentives. My place is the opposite: deep, abstract-level analysis. This essay is the technical implementation of what I call Economies of Precision.

## 6. False-positive risk and countermeasures

If affliction vectorization becomes too strong, **legitimate economic activity and ordinary communication can be misclassified as fraud.** This is, realistically, one of the heaviest responsibilities a consumer-protection system bears. I want to address it with layered defense:

| Countermeasure | Description |
|---|---|
| Source-attribution check (§4) | exclude legally registered sources |
| Context filter | distinguish public advertising from one-to-one DMs |
| Cumulative-behavior analysis | judge on a sequence of actions, not single ones |
| Transparent false-positive reporting | let the user push back with "this was a false positive" |
| Threshold tiers | three-level output: strong warning / caution / information |
| Thorough explanation | always present the reasoning behind the warning |

The design principle I want to hold firm to is this: **the output is a "warning," not a "block."** Final judgment rests with the user. For details, see the companion essay [*The External Prefrontal Cortex (ExPFC)*](/en/essays/external-prefrontal-cortex/). Once ExPFC is positioned as a device that substitutes for the "examination" module, the final decision-maker has to remain the user themselves.

## 7. Ethical questions — six of them

By this point, I expect it is clear that affliction-vectorization technology is double-edged. What can be used for detection can be used for attack. The ethical questions I see as continuing items for inquiry are six:

1. **Misuse potential.** A technology that understands the affliction-stimulation structure of text can also become **a tool for crafting more sophisticated scams.** This is the defender's dilemma itself.
2. **Manipulation detection vs freedom of expression.** Where does "fraud" end and "strong opinion" begin? The boundary is context-dependent, and machine judgment alone cannot draw it.
3. **Cultural bias.** Does the Buddhist taxonomy of afflictions function appropriately in non-Buddhist cultures? The cultural validity of the coordinate system bears on the entire program.
4. **Personal privacy.** The ethics of subjecting individual speech to affliction analysis. Whose speech, for whose sake, to what depth?
5. **Value judgment by AI.** Is it right for an AI to tell you "you are being stimulated to greed"? The philosophical implications of delegating value judgment to AI.
6. **Risk of dependence.** Do users abdicate their own judgment? This is isomorphic to the question raised in the companion essay §13 ExPFC.

These are continuing considerations. I plan to develop ethical guidelines in parallel with development. This essay only raises the questions; the answers will be sharpened through dialogue with collaborators. The points here are related to §10.3 (general / cross-cutting issues) and §13.11 (ExPFC-specific ethics) in the Concept Record, and will eventually be consolidated into a single ethical guideline.

## 8. Conclusion

Let me restate my thesis one more time, in my own words.

**Scam texts carry, in vector space, signatures that target human psychological vulnerability — mental afflictions. By constructing a function f that maps text into a 108-dimensional affliction-stimulation vector, and by judging composite-style across (a) the characteristic shape of that vector — concentrated stimulation + suppression of cautionary afflictions + coexistence of incompatible appeals — and (b) a law-grounded check on source attribution, we can reach, at the abstract level and stably, into the territory that surface-level keyword matching cannot cover.** That is the core of my detection mechanism.

The position of fighting at the abstract level is of a piece with the strategic argument of the companion essay [*Economies of Precision*](/en/essays/precision-economics/). And this detection mechanism is positioned as the **concrete implementation device** of what is discussed in the companion essay [*The External Prefrontal Cortex (ExPFC)*](/en/essays/external-prefrontal-cortex/):

> **"Map text into an affliction vector; from its shape, make the action on psychological vulnerability visible; and substitute, externally, for the user's 'examination' module (the prefrontal-cortex function)."**

This is the core technology of my research program. To Affective Computing researchers, I offer this as the proposal of a new embedding space — one that learns the action on human emotion. To anti-scam practitioners, I offer it as a design guide for a detection mechanism that holds up, stably, at the abstract level. The two readings, in my mind, collapse into a single question: **how far can the psychological vulnerability of a human being be described, machine-readably?**

> Big AI blocks scams with keywords.
> I capture the structure of scams with affliction vectors.
> Don't look at the surface. Look at psychological vulnerability itself.
> That is the core of the scam detection I am aiming at.

---

## Related materials

- [Concept Record (full text)](/en/concept/bonno-virus-mapping/) — including §14, the parent research program from which this essay is derived
- [Concept Record §17: ExPFC Core Specification v0.1](/en/concept/bonno-virus-mapping/#17) — the formalization of the function f and three-signature detection of this essay as a core specification (API contracts, JSON Schemas, Python reference implementation)
- [Companion essay: §0 Buddhism as a Coordinate System](/en/essays/buddhism-as-coordinate-system/) — the methodological tier that backs the 108-dimensional coordinate system (Level 1)
- [Companion essay: §13 The External Prefrontal Cortex (ExPFC)](/en/essays/external-prefrontal-cortex/) — the device that this detection mechanism drives (neuroethics + AI Safety)
- [Companion essay: §15 Economies of Precision vs Economies of Scale](/en/essays/precision-economics/) — the strategic tier supporting the fight at the abstract level (Level 2)
- [日本語版](/essays/bonno-embedding/)
- [PYOL Mind Mirror](https://ai.pyol.net) — a fraud-awareness tool I run in production, serving as the implementation foundation for this detection mechanism

## Contact

If anything in this essay resonates with you — as a researcher, a critic, or a possible successor — I would welcome hearing from you. Constructive critique or collaboration proposals from Affective Computing, AI Safety, anti-scam practice, consumer protection, law, or Buddhist studies are all welcome via the [contact page](/en/contact/). English and Japanese are both fine.

## References

1. Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On the dangers of stochastic parrots: Can language models be too big? *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency (FAccT '21)*, 610–623.
2. Carroll, M., Chan, A., Ashton, H., & Krueger, D. (2023). Characterizing manipulation from AI systems. *Proceedings of the 3rd ACM Conference on Equity and Access in Algorithms, Mechanisms, and Optimization (EAAMO '23)*.
3. Devlin, J., Chang, M.-W., Lee, K., & Toutanova, K. (2019). BERT: Pre-training of deep bidirectional transformers for language understanding. *NAACL-HLT 2019*, 4171–4186.
4. Marcus, G., & Davis, E. (2019). *Rebooting AI: Building Artificial Intelligence We Can Trust*. Pantheon.
5. Mikolov, T., Sutskever, I., Chen, K., Corrado, G., & Dean, J. (2013). Distributed representations of words and phrases and their compositionality. *Advances in Neural Information Processing Systems*, 26.
6. National Police Agency of Japan. (2025). *Statistics on SNS-mediated investment and romance fraud, 2023–2025*.
7. Park, P. S., Goldstein, S., O'Gara, A., Chen, M., & Hendrycks, D. (2024). AI deception: A survey of examples, risks, and potential solutions. *Patterns*, 5(5), 100988.
8. Picard, R. W. (1997). *Affective Computing*. MIT Press.
9. Radford, A., et al. (2021). Learning transferable visual models from natural language supervision. *Proceedings of the 38th International Conference on Machine Learning*, 8748–8763.
10. Whitty, M. T. (2013). The scammers persuasive techniques model: Development of a stage model to explain the online dating romance scam. *British Journal of Criminology*, 53(4), 665–684.
