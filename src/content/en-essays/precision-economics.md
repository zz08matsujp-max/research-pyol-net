---
title: "Economies of Precision vs Economies of Scale: The Domain Big AI Cannot Enter"
author: "Toshinobu Matsuura"
summary: "Today's large-scale AI and SNS platforms are structurally barred from a particular domain. The barrier is not technical but economic: deep-reading every piece of content would cost X (formerly Twitter) alone more than half its annual ad revenue. Even if inference costs fell to zero, I argue, SNS platforms would still avoid deep reading — because their revenue depends on engagement that is maximized by content stimulating human mental afflictions. In this essay I formalize the deliberate positioning of my research program in this 'Economies of Precision' domain — narrow and deep, where the giants go wide and shallow. The same structural pattern, I think, recurs in medicine, law, education, mental health, child protection, and employment matching, which makes precision-economics a transferable template for any domain that mass-AI has economically abandoned."
publishedAt: 2026-05-15
updatedAt: 2026-05-17
version: "v1.1"
lang: "en"
tags: ["AI", "economics", "anti-scam", "AI Safety", "strategy"]
license: "CC BY 4.0"
derivedFrom: "Concept Record §15"
citationKeySuffix: "precisionEconomics"
ogImage: "/img/ogp-precision-economics.png"
---

## Introduction

What follows is my rewriting of §15 of the [Concept Record](/en/concept/bonno-virus-mapping/) — the founding document of the research program I am running at Mindseed Research, "Bonnō × Scam-Virus Mapping: An Integrated Database" — into a standalone piece. My intention is for the essay to stand on its own, without requiring readers to be familiar with the other chapters; the background I need is given in the body.

The thesis is simple. **Today's large-scale AI and SNS platforms have a domain they are structurally barred from entering.** It is not that the domain is technically intractable. It is that economic rationality does not support entry. What I want to do in this essay is restate that "can-but-won't" domain in economic terms, and lay out the strategic ground on which my research program deliberately stands.

> **Note on terminology.** "Mental afflictions" in this essay refers to the Buddhist concept of *bonnō* — the mental states held to cause human suffering, classified into 108 categories. The translation of Buddhist terminology in this essay is preliminary; I plan to refine it in v0.2 in consultation with Buddhist scholars.

> **About the author**[^author]: I run Mindseed Research as an independent researcher based in Wakayama, Japan. See the [About page](/en/about/) for my background.

[^author]: See the About page linked above.

## 1. The starting-point observation

My research program starts from the following observation of my own about how today's AI — both general AI and generative AI — handles "affliction-stimulating text":

> "It is the same with AI and generative AI. When it comes to prohibited words, they simply block by string match. Even for problems that could be solved by reading the sentence, you can see the intent of not wanting to spend AI compute resources on it."

To me, this is not merely a technical observation. I read it as a deep insight into the **economic structure** by which today's large-scale AI and SNS platforms have selectively chosen "shallow processing." What I want to do here is turn that observation into the strategic positioning of my research program.

## 2. The reality of keyword-filter dependence in modern AI

As I see it, the major generative-AI providers (OpenAI, Google, Anthropic, Meta) and the major SNS platforms (X, Facebook, Instagram, TikTok) typically run content judgment in a two-tier structure:

| Tier | Processing | Cost | Accuracy |
|---|---|---|---|
| Tier 1: keyword / regex filter | prohibited-word lists, URL blacklists, hash matching | minimal (< $0.000001 per item) | surface only |
| Tier 2: ML classifier | binary / multi-class classification by lightweight model | small (≈ $0.00001 per item) | medium |
| Tier 3 (rare): contextual understanding | deep semantic analysis by an LLM | large ($0.01–$0.10 per item) | high |

In actual operation, more than 99% of traffic is processed at Tiers 1–2; Tier 3 is invoked only in limited cases. In my view, **this is not a technical limit. It is an economic choice.**

## 3. Economic structural analysis — why the giants do not read deeply

Suppose X (formerly Twitter) were to put every post of a single day (estimated 500 million) through an LLM. A rough back-of-the-envelope:

- 500 million × $0.07 ≈ $35 million per day
- Annual: ≈ $12.7 billion
- More than half of X's estimated annual ad revenue ($20–25 billion).

That is, **deep analysis across every post would not stand up as a business**. The giants' economic model is optimized for *Economies of Scale* — wide, shallow, automated — and at that scale deep inspection is, structurally, impossible.

A natural objection comes up here, and I think it is worth answering preemptively: "**Inference cost falls by something like Moore's law, so eventually the giants will read deeply too, won't they?**"

My answer is that this objection is half right and half wrong. Cost will indeed fall. But even if inference cost approached zero, I do not see how the giants would gain any structural incentive to read deeply. The next section is where I explain why.

## 4. Incentive asymmetry — the structural reason that does not dissolve when cost falls

Here is what I most want to say in this essay. **SNS platforms are structurally configured to derive revenue directly from content that stimulates mental afflictions.** This, in my view, is the structural reason that does not dissolve when costs fall.

The SNS revenue model runs along this chain:

```
User engagement time  →  ad impressions  →  revenue
       ↑
       │  amplified by
       │
flame wars, conflict, strong emotion, addictive viewing, provocation,
inflammatory content, misinformation, scam posts
```

The factors that maximize engagement coincide, almost entirely, with "content that strongly stimulates mental afflictions." Anger, envy, fear, greed — content stimulating these keeps users on the platform longer and creates more ad-impression opportunities.

That is, SNS operators **structurally lack any incentive** to suppress affliction-stimulating content. To put it the way I see it: **even where the technology to read deeply exists, they choose not to read deeply.** This is a constraint rooted in the revenue model itself, independent of inference cost.

Read in this light, my opening observation — "AI simply blocks by string match" — splits into two layers in my mind. The first: technically and economically, simple filtering is judged sufficient. The second: even where deeper processing is possible, the incentive to implement it is weak. In a future where cost has fallen, the first layer may dissolve. The second layer will not.

The conclusion I draw is plain:

> **Countermeasures must be implemented on the user side, not the platform side.**

Expecting the platforms to self-regulate is, in my view, structurally contradictory. It amounts to demanding that they regulate the very source of their revenue.

## 5. The blind spots of the giants — the "can-but-won't" domain

What this analysis reveals to me is that a wide **"can-but-won't" domain** exists in modern AI:

| Domain | Why the giants settle for shallow processing | Resulting unaddressed problem |
|---|---|---|
| Contextual analysis of fraudulent DMs | one-to-one communication is small in scale and low in attention | the rise of pig-butchering scams |
| Detection of psychological manipulation through afflictions | the boundary with free expression is unclear | sophisticated manipulation goes unaddressed |
| Protection of vulnerable people (elderly, isolated) | per-segment optimization is costly | harm concentrates in specific demographics |
| Culturally-context-dependent judgment | low ROI for specific languages such as Japanese | local scams are missed |
| Long-term tracking of cumulative behavior | data retention and computation are heavy | the eight-stage scam playbook cannot be addressed |

None of these are technically infeasible. As I read it, **they are simply not implemented, because economic rationality does not support them, or because the revenue model points the other way.**

## 6. My strategic positioning — Economies of Precision

My research program stands on the opposite economic principle. As an implementation foundation I start from the existing [PYOL Mind Mirror](https://ai.pyol.net) — a fraud-awareness tool I am already running in production — and I intend to add, in stages, mental-affliction mapping and contextual analysis by small neural networks.

The table below describes the *design goal* of the program in its completed state. It is not the current functionality of ai.pyol.net. Components such as mental-affliction vector representation and cumulative-behavior analysis are still in design.

| Axis | Big AI / SNS (Economies of Scale) | PYOL Mind Mirror (Economies of Precision — design goal of the completed program) |
|---|---|---|
| Processing target | all content worldwide | the specific text received by an individual user |
| Volume | billions of items per day | a few to a few hundred items per day per user |
| Per-unit cost | $0.000001–$0.00001 | $0.01–$0.10 |
| Depth of judgment | keyword / pattern match | mental-affliction vector + context + cumulative behavior |
| Purpose | removing illegality / TOS violations | protecting individual vulnerability |
| Final judge | the platform | the user themselves |
| Scaling strategy | one-to-all (wide and shallow) | one-to-one (narrow and deep) |

If I had to compress my principle into a single line:

> Today's AI is optimized for Economies of Scale, and in doing so it abandons Economies of Precision.
> That abandoned domain is precisely the legitimate domain of activity for my research program.

This is also, for me, the clearest instance of the *mismatch thinking* I picked up during my years at Samsung SDS: that unexpected combinations across disciplines yield the strongest differentiation. **Where the giants go wide and shallow, I go narrow and deep.** That very asymmetry is, in my view, the strategic advantage of my program.

## 7. Applicability to isomorphic problems

The structure of "Economies of Scale vs Economies of Precision," as I see it, is not limited to anti-scam. The same isomorphic pattern shows up across many social domains:

| Domain | Economies of Scale (the giants) | Economies of Precision (the type my program represents) |
|---|---|---|
| Medicine | mass screening, standard care | personalized precision medicine, deep reading of individual history |
| Law | template contracts, general terms | deep examination of individual cases |
| Education | mass curriculum | personalized tutoring optimized to the individual |
| Mental health | screening questionnaires | contextual understanding of each person |
| Child protection | keyword surveillance | contextual reading of relationship and developmental stage |
| Employment matching | job-board matching | understanding of an individual's long-term career trajectory |

In every case, the domain is one the giants have given up on for reasons of economic rationality, and I believe an AI tool that goes deep into individual cases can offer decisive value.

For instance, in medicine, decoding 108-dimensional emotional vectors from a patient's narrative may reveal anxieties that standardized questionnaires miss. In mental health, distinguishing "attachment-driven" from "aversion-driven" depressive states could inform the choice of therapeutic approach. In law, detecting affliction-stimulation (anxiety, haste, status-desire) latent in contract language could surface clauses unfavorable to consumers. In education, individual-level affliction sensitivity could shape both the prediction of stumbling points and the design of interventions.

The methods I want my research program to establish, I believe, can serve as a **template** for horizontal expansion into these other domains.

## 8. Strategic implications

Several practical implications follow from how I read this.

First, **my research program does not compete with Big AI.** It does not sit in the contested zone; it sits in the domain the giants have abandoned.

Second, **it does not pursue scale.** Rather than maximizing user count, it pursues depth for each individual user.

Third, **it accepts per-unit cost.** It pays a per-judgment cost on the order of cents, in exchange for deep analysis.

Fourth, **it favors per-individual optimization**, customizing to the affliction tendencies and vulnerability profile of each user.

Fifth, **it is highly compatible with open-sourcing.** Because it does not aim at Economies of Scale, publishing the code does not put it at competitive disadvantage. If anything, social value increases.

Sixth, **it provides grounds for policy proposals.** The analysis that "the giants are structurally unable to solve this problem" is a basis, in my view, for the policy legitimacy of supporting user-side tools.

## 9. Conclusion

My opening observation — that "AI simply blocks by string match" — exposes, as I read it, a fundamental structure of today's AI economy. **There is a domain that Big AI, optimized for Economies of Scale, is structurally barred from entering.** That domain is precisely where mental affliction, vulnerability, context, and relationship matter — the most human domain.

This domain is abandoned by the giants in two senses. First, the cost of reading deeply does not fit the current revenue model. Second, even if cost approached zero, the very incentive structure — that revenue is derived from affliction-stimulating content — does not motivate deep reading. The first, I expect, will dissolve with technical progress. The second, I do not believe will.

What I am doing is deliberately standing in that domain. **I choose precision over scale. Depth over breadth. The individual over the mass.**

This is not, for me, an abandonment of economic rationality. It is **the choice of a different economic principle.** And I think this choice is one of the most realistic paths to protecting human dignity in the age of AI.

> Where Big AI goes wide and shallow, I go narrow and deep.
> That asymmetry is the legitimate reason my research program exists.

---

## Related materials

- [Concept Record (full text)](/en/concept/bonno-virus-mapping/) — the parent research program from which this essay is derived
- [Companion essay: Buddhism as a Coordinate System](/en/essays/buddhism-as-coordinate-system/) — the methodological tier (Level 1) of my research program
- [日本語版](/essays/precision-economics/)
- [PYOL Mind Mirror](https://ai.pyol.net) — a fraud-awareness tool I am running in production. The starting point of my research program; full mental-affliction mapping is a future implementation goal

## Contact

If anything in this essay resonates with you — as a researcher, a critic, or a possible successor — I would welcome hearing from you. Collaboration, constructive disagreement, citation requests, or media inquiries are all welcome via the [contact page](/en/contact/). English and Japanese are both fine.

## References

1. Anderson, C. (2006). *The Long Tail: Why the Future of Business is Selling Less of More*. Hyperion.
2. Carroll, M., Chan, A., Ashton, H., & Krueger, D. (2023). Characterizing manipulation from AI systems. *Proceedings of the 3rd ACM Conference on Equity and Access in Algorithms, Mechanisms, and Optimization (EAAMO '23)*.
3. Kahneman, D. (2011). *Thinking, Fast and Slow*. Farrar, Straus and Giroux.
4. National Police Agency of Japan. (2025). *Statistics on SNS-mediated investment and romance fraud, 2023–2025*.
5. Park, P. S., Goldstein, S., O'Gara, A., Chen, M., & Hendrycks, D. (2024). AI deception: a survey of examples, risks, and potential solutions. *Patterns*, 5(5), 100988.
6. Thaler, R. H., & Sunstein, C. R. (2008). *Nudge: Improving Decisions about Health, Wealth, and Happiness*. Yale University Press.
7. Whitty, M. T. (2013). The scammers persuasive techniques model: Development of a stage model to explain the online dating romance scam. *British Journal of Criminology*, 53(4), 665-684.
