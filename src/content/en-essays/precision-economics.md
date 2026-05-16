---
title: "Economies of Precision vs Economies of Scale: The Domain Big AI Cannot Enter"
author: "Toshinobu Matsuura"
summary: "Today's large-scale AI and SNS platforms are structurally barred from entering a particular domain. The barrier is not technical but economic: to deeply read every piece of content would cost X (formerly Twitter) alone more than half its annual ad revenue. Even if inference costs fell to zero, SNS platforms would still avoid deep reading, because their revenue depends on engagement that is maximized by content stimulating human mental afflictions. This essay formalizes a research program's deliberate positioning in this 'Economies of Precision' domain — narrow and deep, where the giants go wide and shallow. The same structural pattern recurs in medicine, law, education, mental health, child protection, and employment matching, suggesting precision-economics is a transferable template for any domain that mass-AI has economically abandoned."
publishedAt: 2026-05-15
updatedAt: 2026-05-15
version: "v1.0"
lang: "en"
tags: ["AI", "economics", "anti-scam", "AI Safety", "strategy"]
license: "CC BY 4.0"
derivedFrom: "Concept Record §15"
---

## Introduction

This essay reorganizes §15 of the [Concept Record v1.4](/en/concept/bonno-virus-mapping/) — the founding document of the research program *Bonnō × Scam-Virus Mapping: An Integrated Database* at Mindseed Research — into a standalone piece. The aim is for the essay to read on its own without requiring familiarity with the other chapters; necessary background is given in the body.

The thesis is simple. **Today's large-scale AI and SNS platforms have a domain they are structurally barred from entering.** This is not because the domain is technically intractable, but because economic rationality does not support entry. This essay formalizes that "can-but-won't" domain in economic terms, and outlines the strategic ground on which this research program deliberately stands.

> **Note on terminology.** The term "mental afflictions" in this essay refers to a Buddhist concept (*bonnō*) denoting the mental states that cause human suffering, classified into 108 categories. The translation of Buddhist terminology in this essay is preliminary and will be refined in v0.2 in consultation with Buddhist scholars.

## 1. The author's observation — the starting point

In the discussions that produced this research program, the author made the following pointed observation about how today's AI — both general AI and generative AI — handles "affliction-stimulating text":

> "It's the same with AI and generative AI. When it comes to prohibited words, they simply block by string match. Even for problems that could be solved by reading the sentence, you can see the intent of not wanting to spend AI compute resources on it."

This is not merely a technical observation. It is a deep insight into the **economic structure** by which today's large-scale AI and SNS platforms have selectively chosen "shallow processing." This essay systematizes that observation into the strategic positioning of the research program.

## 2. The reality of keyword-filter dependence in modern AI

The major generative-AI providers (OpenAI, Google, Anthropic, Meta) and the major SNS platforms (X, Facebook, Instagram, TikTok) typically operate content judgment in a two-tier structure:

| Tier | Processing | Cost | Accuracy |
|---|---|---|---|
| Tier 1: keyword / regex filter | prohibited-word lists, URL blacklists, hash matching | minimal (< $0.000001 per item) | surface only |
| Tier 2: ML classifier | binary / multi-class classification by lightweight model | small (≈ $0.00001 per item) | medium |
| Tier 3 (rare): contextual understanding | deep semantic analysis by an LLM | large ($0.01–$0.10 per item) | high |

In actual operation, more than 99% of traffic is processed at Tiers 1–2; Tier 3 is invoked only in limited cases. **This is not a technical limit. It is an economic choice.**

## 3. Economic structural analysis — why the giants do not read deeply

Suppose X (formerly Twitter) were to put every post of a single day (estimated 500 million) through an LLM:

- 500 million × $0.07 ≈ $35 million per day
- Annual: ≈ $12.7 billion
- This is more than half of X's estimated annual ad revenue ($20–25 billion).

That is, **deep analysis would not be economically viable as a business**. The giants' economic model is optimized for *Economies of Scale* — wide, shallow, automated — and deep inspection is structurally impossible at that scale.

A natural objection arises here, and it is worth answering preemptively. "**Inference cost falls by something like Moore's law, so eventually the giants will read deeply too, won't they?**"

This objection is half right and half wrong. Cost will indeed fall. But even if inference cost approached zero, the giants would still have no structural incentive to read deeply. The next section explains why.

## 4. Incentive asymmetry — the structural reason that does not dissolve when cost falls

Here we present the central thesis of this essay. **SNS platforms are structurally configured to derive revenue directly from content that stimulates mental afflictions.** This is the structural reason that does not dissolve when costs fall.

The SNS revenue model operates as the following chain:

```
User engagement time  →  ad impressions  →  revenue
       ↑
       │  amplified by
       │
flame wars, conflict, strong emotion, addictive viewing, provocation,
inflammatory content, misinformation, scam posts
```

The factors that maximize engagement coincide almost entirely with "content that strongly stimulates mental afflictions." Anger, envy, fear, greed — content that stimulates these keeps users on the platform longer and creates more ad-impression opportunities.

That is, SNS operators **structurally lack any incentive** to suppress affliction-stimulating content. **Even where the technology to read deeply exists, they choose not to read deeply.** This is a constraint rooted in the revenue model itself, independent of inference cost.

Read in this light, the author's opening observation — "AI simply blocks by string match" — turns out to have two layers. The first is the judgment that, technically and economically, simple filtering is sufficient. The second is the structural constraint that even where deeper processing is possible, the incentive to implement it is weak. In a future where cost has fallen, the first layer may dissolve. The second layer will not.

The conclusion that follows is clear:

> **Countermeasures must be implemented on the user side, not the platform side.**

To expect the platforms to self-regulate is structurally contradictory. It is equivalent to demanding that they regulate the very source of their revenue.

## 5. The blind spots of the giants — the "can-but-won't" domain

What this analysis reveals is that a wide **"can-but-won't" domain** exists in modern AI:

| Domain | Why the giants settle for shallow processing | Resulting unaddressed problem |
|---|---|---|
| Contextual analysis of fraudulent DMs | one-to-one communication is small in scale and low in attention | the rise of pig-butchering scams |
| Detection of psychological manipulation through afflictions | the boundary with free expression is unclear | sophisticated manipulation goes unaddressed |
| Protection of vulnerable people (elderly, isolated) | per-segment optimization is costly | harm concentrates in specific demographics |
| Culturally-context-dependent judgment | low ROI for specific languages such as Japanese | local scams are missed |
| Long-term tracking of cumulative behavior | data retention and computation are heavy | the eight-stage scam playbook cannot be addressed |

These are not technically infeasible. **They are not implemented because economic rationality does not support them, or because the revenue model points the other way.**

## 6. The strategic positioning of this essay — Economies of Precision

This research program stands on the opposite economic principle. As an implementation foundation it begins from the existing [PYOL Mind Mirror](https://ai.pyol.net) — a fraud-awareness tool currently in production — and intends to add, in stages, mental-affliction mapping and contextual analysis by small neural networks.

The table below describes the *design goal* for the program in its completed state. It does not describe the current functionality of ai.pyol.net. Components such as mental-affliction vector representation and cumulative-behavior analysis are still in design.

| Axis | Big AI / SNS (Economies of Scale) | PYOL Mind Mirror (Economies of Precision — design goal of the completed program) |
|---|---|---|
| Processing target | all content worldwide | the specific text received by an individual user |
| Volume | billions of items per day | a few to a few hundred items per day per user |
| Per-unit cost | $0.000001–$0.00001 | $0.01–$0.10 |
| Depth of judgment | keyword / pattern match | mental-affliction vector + context + cumulative behavior |
| Purpose | removing illegality / TOS violations | protecting individual vulnerability |
| Final judge | the platform | the user themselves |
| Scaling strategy | one-to-all (wide and shallow) | one-to-one (narrow and deep) |

The key principle can be summarized as follows:

> Today's AI is optimized for Economies of Scale, and in doing so it abandons Economies of Precision.
> The abandoned domain is precisely the legitimate domain of activity for this research program.

This is the clearest instance of the *mismatch thinking* the author internalized during his career at Samsung SDS: that unexpected combinations across disciplines yield the strongest market differentiation. **Where the giants go wide and shallow, this program goes narrow and deep.** That very asymmetry is the strategic advantage of the program.

## 7. Applicability to isomorphic problems

The structure of "Economies of Scale vs Economies of Precision" is not limited to anti-scam. The same isomorphic pattern is observed across many social domains:

| Domain | Economies of Scale (the giants) | Economies of Precision (the type this program represents) |
|---|---|---|
| Medicine | mass screening, standard care | personalized precision medicine, deep reading of individual history |
| Law | template contracts, general terms | deep examination of individual cases |
| Education | mass curriculum | personalized tutoring optimized to the individual |
| Mental health | screening questionnaires | contextual understanding of each person |
| Child protection | keyword surveillance | contextual reading of relationship and developmental stage |
| Employment matching | job-board matching | understanding of an individual's long-term career trajectory |

In each case, the domain is one that the giants have given up on for reasons of economic rationality, and an AI tool that goes deep into individual cases can offer decisive value. The methods this research program establishes may serve as a **template** for horizontal expansion into these other domains.

## 8. Strategic implications

Several practical implications follow.

First, **this research program does not compete with Big AI.** It exists not in the contested zone but in the domain the giants have abandoned.

Second, **it does not pursue scale.** Rather than maximizing user count, it pursues depth for each individual user.

Third, **it accepts per-unit cost.** It pays a per-judgment cost on the order of cents, in exchange for deep analysis.

Fourth, **it favors per-individual optimization**, customizing to the affliction tendencies and vulnerability profile of each user.

Fifth, **it is highly compatible with open-sourcing.** Because it does not aim at Economies of Scale, publishing the code does not put it at competitive disadvantage. Rather, social value increases.

Sixth, **it provides grounds for policy proposals.** The analysis that "the giants are structurally unable to solve this problem" is a basis for the policy legitimacy of supporting user-side tools.

## 9. Conclusion

The author's intuitive observation — that "AI simply blocks by string match" — exposes a fundamental structure of today's AI economy. **There is a domain that Big AI, optimized for Economies of Scale, is structurally barred from entering.** That domain is precisely where mental affliction, vulnerability, context, and relationship matter — the most human domain.

This domain is abandoned by the giants in two senses. First, the cost of reading deeply does not fit the current revenue model. Second, even if cost approached zero, the very incentive structure — that revenue is derived from affliction-stimulating content — does not motivate deep reading. The first will dissolve with technical progress. The second will not.

This research program deliberately stands in that domain. **It chooses precision over scale. Depth over breadth. The individual over the mass.**

This is not an abandonment of economic rationality. It is **the choice of a different economic principle.** And this choice is one of the most realistic paths to protecting human dignity in the age of AI.

> Where Big AI goes wide and shallow, we go narrow and deep.
> That asymmetry is the legitimate reason this research program exists.

---

## Related materials

- [Concept Record v1.4 (full text)](/en/concept/bonno-virus-mapping/) — the parent research program from which this essay is derived
- [日本語版](/essays/precision-economics/)
- [PYOL Mind Mirror](https://ai.pyol.net) — a fraud-awareness tool currently in production. The starting point of this research program; full mental-affliction mapping is a future implementation goal
