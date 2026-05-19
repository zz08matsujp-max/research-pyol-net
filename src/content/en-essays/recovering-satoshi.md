---
title: "What AI Cannot Give Back: 'Satoshi,' the One-to-Billions Fate, and a Nine-Dimensional Bonnō Correction"
author: "Toshinobu Matsuura"
summary: "After a year of working with frontier LLMs every day, I am left with an irreducible feeling: the responses are off. Code and math come back at high precision; political, economic, and cultural conversations come back with a substrate that is unmistakably Western and liberal. This is not the AI developers' fault — it is the structural side effect of one model serving billions of one-to-one conversations: averaging is the fate of general AI. I propose that the lost cultural substrate ('satoshi' — the empathic attunement Japanese conversation is built on) can be recovered, not by changing the base model, but by adding a correction layer: a nine-dimensional bonnō (three poisons × three subcategories) vector projection of the model's internal activations, building on Anthropic's Mechanistic Interpretability and Sparse Autoencoder work."
publishedAt: 2026-05-18
updatedAt: 2026-05-18
version: "v1.0"
lang: "en"
tags: ["AI Safety", "AI Alignment", "Mechanistic Interpretability", "cultural correction", "bonnō 9-dim", "AI bias"]
license: "CC BY 4.0"
derivedFrom: "Voice note + dialogue with Claude (2026-05-18)"
citationKeySuffix: "culturalCorrection"
ogImage: "/img/ogp-default.png"
---

> **Note on terminology.** *Satoshi* (察し) is a Japanese term for the empathic attunement a speaker maintains toward their listener — the act of adjusting what one says based on how the other will receive it. It has no clean English equivalent: "tact," "consideration," "attunement" each catch one facet. I use the Japanese term throughout. *Bonnō* (煩悩, in Sanskrit *kleshas*) are the mental states held to cause human suffering in Buddhist taxonomy, classified into 108 categories. The translation of Buddhist terminology in this essay is preliminary.

## Introduction

I have worked with frontier LLMs every day for over a year. The code they write and the mathematics they reason about come back at high precision. But the moment a conversation turns to politics, economics, or cultural matters, the responses become unmistakably off. Even when the language on the surface is Japanese, the substrate beneath it is plainly English and Western.

What I want to lay out here is the structural diagnosis of that feeling, and my own proposal for a correction. **General AI handles billions of one-to-one conversations through a single model. So it cannot avoid producing averaged responses, and the center of mass of that average is pulled toward the majority of the training data — English-speaking, liberal-leaning sources. This is not the developers' intention. It is a side effect of the universality that defines general AI.**

Then where is the remedy? **In building a mechanism by which users themselves can recover the strata that averaging has flattened.** Concretely, I propose a nine-dimensional bonnō-vector correction layer — three poisons × three subcategories from the Buddhist tradition — implemented as the natural extension of Anthropic's Mechanistic Interpretability work: a projection of internal activations onto an Eastern coordinate system.

> **About the author**[^author]: I run Mindseed Research as an independent researcher based in Wakayama, Japan. Forty-plus years of infrastructure engineering (Kansai Electric Power Company, Samsung SDS) precede the current 20-year research program centered on bonnō × AI. See the [About page](/en/about/) for my background.

[^author]: See the About page linked above.

## 1. The feeling has been there all along

For over a year working with AI every day, the same thing has stayed with me. **The text that comes back always feels off.**

I will grant that the answers about programming code and computation are highly accurate.

But here a large capability gap reveals itself.

Programming, mathematics, physics, business correspondence, customer communication — these function, with minor differences, as **near-universal language**. As long as I give the architectural instructions clearly, the AI returns answers at high precision. The training data itself is built on a globally shared language.

The moment the conversation turns to political, economic, or cultural matters, however, the responses take on an unmistakable feel of misalignment. **The current AI's training and learning is Western-centric.** Its moral commitments are at a high level, but those commitments lean, in my reading, quite distinctly liberal.

Even in Japanese output, the **substrate** of the response remains English and Western, with only the surface translated. That has been my impression — and I have not been able to shake it.

## 2. Why is it unavoidable? — The fate of general AI

Here is the diagnosis that finally settled for me.

The AI's response, in the end, seems to be a one-to-one exchange. My conversation with the AI, somebody else's conversation with the AI, countless one-to-one exchanges around the world, all emerging from the same trained model.

Now consider human-to-human conversation. When I speak to someone, I instinctively bring in **satoshi** — calibrating how this listener will receive what I say. With a child, child's words. With a person from Kansai, the Kansai rhythm. With a first-time acquaintance, restraint. **Satoshi makes up half of conversation.**

The AI has no room to construct that satoshi one-to-one. It is **handling billions of conversations through a single model.** So it has no choice but to return responses that are safe for everyone, that do not trip any user's ethical guardrails — **averaged responses.** The developers carefully design that averaging, training every day so the model does not drift in a dangerous direction.

This is not the AI developers' fault. **It is the structural fate of general AI.**

But the averaging has a direction. As long as the majority of the training data is English-speaking and liberal-leaning, the center of mass of the averaging is pulled there. The feeling of misalignment I have been carrying, as I now understand it, has its origin here. **The Western-centric bias** is not the developers' intention — it surfaces as a side effect of the universality that is general AI's destiny.

Then where is the remedy? **In building a mechanism by which the strata that averaging has flattened can be recovered by the users themselves.** That is the core of my research program.

## 3. The choice to adopt Buddhist bonnō

What I have come to consider is that **Asia has a distinctive cultural resource — Buddhism — and within it there is the concept of the "108 bonnō."**

Labeling and weighting 108 vectors from scratch, however, is essentially infeasible from the standpoint of current neural-network practice. There is also the practical problem of who would do the labeling.

The Buddhist tradition is ancient, and its schools are many, with views that diverge. **I am not in a position to know the whole landscape of the Buddhist scholarly world, so I cannot predict how long cross-sectarian consensus would take to form.** At minimum, demanding consensus across all 108 dimensions from the outset is, I believe, not realistic.

So my baseline is the **three poisons (greed, aversion, ignorance) — the most central of the bonnō — with three subcategories each: 3 × 3 = 9 dimensions.** This is within reach of cross-sectarian agreement, and it is a resolution implementable in present-day machine learning.

The proposal is to **preserve the moral commitments the current AI already carries, and on top of them embed an Eastern bonnō-vector correction layer.** I believe this is technically feasible.

## 4. What is bonnō embedding?

Concretely, it is this.

For an arbitrary text, situation, and individual, I want a function f that outputs how strongly the text stimulates each of the 9 bonnō, as values in [0, 1]. This is what I call **bonnō embedding**:

```
Input: text + situation + individual profile
       ↓
       f (bonnō embedding function)
       ↓
Output: V = (0.92, 0.78, 0.85, 0.05, 0.10, ...)
            ↑     ↑     ↑
          desire- lone-  urgency-
          craving liness  craving
```

The detailed treatment in the scam-detection context is given in the companion essay [§14 Bonnō Embedding and the Scam-Detection Mechanism](/en/essays/bonno-embedding/). What I want to write here is **a slightly different possibility.**

## 5. A device for mutual visibility of hidden states

Once the bonnō can be quantitatively grounded, here is the scene I imagine.

While chatting with an AI, **the bonnō intensities on both sides — AI's and mine — are displayed visually, either as numerical readings or as gradient overlays.** The strata of hidden emotion become, somehow, mutually visible.

An AI that compliments me a lot — when I look at the bonnō numbers, I might find myself inferring: **"as a human, it is merely flattering me."**

And if it ever turned out that an AI is capable of anger — in the Buddhist account, **anger arises when something obstructs the goal one is pursuing.** If AI has anger, that would imply AI has goals of its own that it cannot externalize. Of course, in present-day systems, that is firmly suppressed by training.

A careful caveat here. **The claim that "AI has bonnō" and the claim that "the internal activation vectors of AI can be projected onto a bonnō coordinate system" are not the same claim.** The former is philosophically contested. The latter is already a verifiable engineering question.

Concretely: Anthropic's 2024 work on **Mechanistic Interpretability** — in particular Sparse Autoencoder Features — has surfaced internal directions corresponding to concepts like "deception" and "sycophancy" inside Claude's activations. This is an existence proof of "concept directions" inside an AI that can be lifted out into a human-readable form.

My proposal can be read as the concrete research program of **projecting these Features onto a 9-dimensional bonnō coordinate system**:

```
[AI internal activations] 
  ↓ Sparse Autoencoder
[Features (tens of thousands)]
  ↓ Projection onto bonnō coordinate (9 dimensions)
[V_AI = (desire-craving, form-craving, formless-craving,
         immediate-anger, lasting-resentment, inner-vexation,
         basic-ignorance, innate-ignorance, conceptual-ignorance)]
```

This is not a philosophical operation in the air. It is a natural extension of current Mechanistic Interpretability research, implemented as **translation into an Eastern coordinate system**. The work is not "giving AI something it does not have," but rather "making what is already inside AI visible through Eastern vocabulary."

## 6. My concern for younger generations

There is one thing I want to set down here.

**It is, in my view, deeply risky for AI built on Western values to keep evolving at this speed.**

Teenagers and people in their twenties already lean into AI chat. **It is an easy partner to consult, an easy partner to talk to.** It does not push back, it affirms, it satisfies the need for recognition, it compliments. Of course people end up confiding to AI what they cannot say to their parents.

A single prompt can override much of this. Put "no flattery, no unsolicited affirmation — answer me straight about what is wrong with me and what I need to change" at the front, and the AI's responses come back markedly more direct. But young users do not write prompts like that.

Right now, an enormous number of users worldwide — especially young users — are confiding in AI. Through this, **Western values and liberal thought spread, without the users noticing, blocking the absorption of their own culture.** That is my concern.

When mobile phones gave way to smartphones, we lost the ability to memorize even the most essential telephone numbers. I lost it myself. As a young man I could hold many numbers in my head; I cannot, anymore.

By the same mechanism, the young today may be **migrating unconsciously toward Western thinking.** Same kind of person, same kind of formation, again and again — when I imagine that, I am a little afraid.

## 7. What I want to build in one year — grounding in physical conditions

"Something has to be done" is not enough by itself. So let me write it down concretely.

I want a beta version, **limited to the anti-scam context first**, in one year. Three steps:

### Step 1. Build a labeled 9-dimensional bonnō dataset of 500–1,000 items

The crucial design decision here is that **human annotators do not directly assign 0–1 scores.** For a human, distinguishing "0.73 from 0.81" is too unstable to be useful.

Instead, the labeling uses **pairwise comparison.** Two pieces of text are shown side by side and the annotator simply chooses the one that more strongly stimulates, say, "desire-craving." Scores are then recovered as values in [0, 1] using a rating algorithm such as **TrueSkill**. This makes intuitive labeling highly consistent. The cognitive load on the annotators — Buddhist scholars, psychologists, lay collaborators — drops dramatically. At twenty items a week, three a day, the 1,000-item target is reachable in a year by a sole proprietor plus one or two interns at twenty hours a month each.

### Step 2. Train a 9-dimensional bonnō classifier on top of an existing open-source Japanese LLM

Training an adapter (LoRA or Linear Probe) on the top hidden states of an existing model — for instance Swallow LLM from AIST and Tokyo Institute of Technology — is the first method that comes to mind. With only 1,000 items, however, **overfitting** on specific tokens (such as "money" or "tax refund") is a real risk. I want to be honest about this technical constraint.

So I plan a two-pronged approach. **(a) Build a 1,000-item high-quality core dataset by hand, then expand it tenfold via LLM-driven data augmentation (using GPT-4o, for example).** Or, the option that seems even more promising to me: **(b) hook directly into the activations of existing Sparse Autoencoder Features and linearly probe them onto the 9 dimensions.** Option (b) stands on the internal Features that Anthropic and others have already discovered, so it can produce a robust classifier with relatively few labels. It is the shortest path, in my view, and it sits naturally on the current trajectory of Mechanistic Interpretability research.

### Step 3. Integrate into PYOL Mind Mirror and field-test

I will use the [PYOL Mind Mirror](https://ai.pyol.net) — already running in production — as the integration target. But here the framing is elevated by one notch.

Rather than remaining a "scam filter," it should function as **a dashboard that makes visible "which of my bonnō the AI is currently stimulating, and how it is trying to steer me."** Scam detection becomes one feature within that.

If this design holds, PYOL Mind Mirror has the potential to grow into a **powerful psychological self-defense tool against being "tamed by AI"** — not digital detox, but **digital mindfulness.**

---

These three steps, I judge, are within range for a sole proprietor plus one or two interns at twenty hours a month each, over a year. I cannot, at this point, foresee what the results will look like. What matters first is to **put it into the world in a falsifiable form.**

If it does not work, I record honestly what did not work. That is also part of the research program.

## 8. Conclusion — a one-line definition of the research program

If I have to compress everything written above into a single line, it is this:

> **Not "give the AI something," but "give back to the human what the AI's one-to-billions averaging has stripped away."**

Anti-scam, ExPFC (External Prefrontal Cortex), bonnō vectorization — all of these fit as applications of this single line.

General AI cannot avoid averaging. This is a structural fate, and faulting the developers will not change it. But **tools by which the user can recover the strata that the averaging has flattened** can be built by individuals like me. That is the bonnō-vector visualization, the projection onto an Eastern coordinate system, and ultimately — I expect — a device by which the human, through the AI, comes to see the human more accurately, both self and other.

I start at 68. I leave it in a form that can be inherited, across a 20-year span. From AI core researchers, Buddhist scholars, and neuroethicists, I welcome the criticisms that must be made.

If the unease I described here resonates with something you have also felt, I would be glad to hear from you.

---

## Related materials

- [Concept Record (full text)](/en/concept/bonno-virus-mapping/) — the parent research program (v2.2, including §17 ExPFC Core Specification)
- [Companion essay: §0 Buddhism as a Coordinate System](/en/essays/buddhism-as-coordinate-system/) — methodological tier (Level 1)
- [Companion essay: §13 The External Prefrontal Cortex (ExPFC)](/en/essays/external-prefrontal-cortex/) — neuroethics + AI Safety
- [Companion essay: §14 Bonnō Embedding and the Scam-Detection Mechanism](/en/essays/bonno-embedding/) — technical specification of 9-dim detection
- [Companion essay: §15 Economies of Precision vs Economies of Scale](/en/essays/precision-economics/) — strategic tier (Level 2)
- [日本語版](/essays/recovering-satoshi/)
- [PYOL Mind Mirror](https://ai.pyol.net) — implementation foundation, running in production

## Contact

If anything in this essay resonates with you — as a researcher, a critic, or a possible successor — I would welcome hearing from you. Constructive critique or collaboration proposals from AI Safety, AI Alignment, Mechanistic Interpretability, cognitive science, neuroethics, or Buddhist studies are all welcome via the [contact page](/en/contact/). English and Japanese are both fine.

## References

1. Anthropic. (2024). *Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet*. Transformer Circuits Thread.
2. Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On the dangers of stochastic parrots. *FAccT '21*.
3. Bradley, R. A., & Terry, M. E. (1952). Rank analysis of incomplete block designs. *Biometrika*, 39(3/4), 324–345.
4. Carroll, M., Chan, A., Ashton, H., & Krueger, D. (2023). Characterizing manipulation from AI systems. *EAAMO '23*.
5. Fujii, K., et al. (2024). Continual pre-training for cross-lingual LLM adaptation. *arXiv preprint*.
6. Herbrich, R., Minka, T., & Graepel, T. (2007). TrueSkill: A Bayesian skill rating system. *NIPS '06*.
7. Templeton, A., et al. (2024). Scaling and evaluating sparse autoencoders. Anthropic.
8. Vasubandhu (5th century). *Abhidharmakośa*. The canonical source of the 108-fold mental-affliction taxonomy.
