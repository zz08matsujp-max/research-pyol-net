---
title: "Buddhism as a Coordinate System: A New Computational Foundation for Understanding the Human"
author: "Toshinobu Matsuura"
summary: "Almost all contemporary research on emotion and on the human starts by looking at the brain from the outside. I do not think that approach alone can reach the semantic resolution of human emotion. What I want to propose in this essay is a quieter but long-reaching attempt: to take the system Buddhism has built over 2,500 years of observing the human from the inside, and adopt it as a coordinate system inside modern neural-network engineering. I am not rejecting neuroscience. The physical layer I am happy to leave to neuroscience; what I want to take from Buddhism is the coordinate system at the semantic layer."
publishedAt: 2026-05-16
updatedAt: 2026-05-17
version: "v1.1"
lang: "en"
tags: ["AI Safety", "cognitive science", "Buddhism", "Affective Computing", "methodology"]
license: "CC BY 4.0"
derivedFrom: "Concept Record §0"
citationKeySuffix: "buddhismCoordinate"
ogImage: "/img/ogp-buddhism-coordinate.png"
---

> **Note on terminology.** "Mental afflictions" in this essay corresponds to the Buddhist concept of *bonnō* (煩悩) — in Sanskrit, *kleshas* — the mental states held to cause human suffering, classified into 108 categories. The translation of Buddhist terminology in this essay is preliminary; I plan to refine it in v0.2 in consultation with Buddhist scholars.

## Introduction

What follows is my rewriting of §0 of the [Concept Record](/en/concept/bonno-virus-mapping/) — the founding document of the research program I am running at Mindseed Research, "Bonnō × Scam-Virus Mapping: An Integrated Database" — into a standalone piece. My intention is for the essay to stand on its own, without requiring readers to be familiar with the other chapters; the background I need is given in the body.

I have only one thesis. **Almost all contemporary research on emotion and on the human is built on the methodological foundation of "observation from the outside" and "physico-chemical reduction." That gives us precise observational means, but it does not reach the semantic resolution of human emotion. I want to fill that gap by adopting 2,500 years of internal Buddhist observation as a computable coordinate system.** I believe this can serve as a methodological complement, from the East, for AI Safety, Affective Computing, and cognitive science alike.

> **About the author**[^author]: I run Mindseed Research as an independent researcher based in Wakayama, Japan. See the [About page](/en/about/) for my background.

[^author]: See the About page linked above.

## 1. The standard approaches of existing research

As I see it, the mainstream of contemporary research on emotion and on the human can be organized this way:

| Approach | Representative work | Direction of observation | Main object |
|---|---|---|---|
| Neuroscience | Damasio, LeDoux, Phelps | external → physical | neurons, functional localization, neurotransmitters |
| Affective Computing | Picard, Cambria | external → statistical | facial expression, voice, text |
| Psychological models of emotion | Ekman, Plutchik, Russell | external → classification | enumeration of basic emotions |
| Predictive Processing | Friston, Clark | internal → mathematical | minimization of prediction error |
| Brain physics | fMRI, EEG, neuropharmacology | external → physical | brain signals and chemistry |

All of these have made great progress in recent years and have produced excellent results. Damasio's somatic-marker hypothesis revealed the importance of bodily reactions in decision-making; Friston's free-energy principle has had broad influence as a unified theory of brain function.

But there is one feature these methodologies share. **The observer and the observed are separated**, and **the coordinate system of meaning relies almost entirely on the vocabulary of Western psychology.** Both of these I treat as constraints that have to be overcome.

## 2. "Resolution of neural activity" and "semantic resolution of emotion" are different problems

Let me put down something that sounds obvious but is rarely stated clearly.

Suppose fMRI shows activation of the amygdala. From the neural-activity signal itself, you cannot tell whether that activation is "greed," "envy," "haste," or "loneliness." To tell them apart, you have no choice but to reach for some other vocabulary system — most often the Big Five, the PAD model, Plutchik's wheel of emotions, or Ekman's six basic emotions, all from Western psychology.

In other words, **the resolution of neural activity and the semantic resolution of emotion are different problems.** No matter how high you push the former, if the latter's coordinate system is coarse, our understanding of emotion remains coarse.

And the Western models of emotion we are currently relying on are all, by my reading, **fragmentary systems built on roughly 100 years of research.** Big Five since the 1980s, PAD in 1974, Plutchik in 1980, Ekman's basic emotions in the 1970s. Efforts to improve their precision continue, but I think it is fair to say **there is still no settled consensus on how many dimensions or what kind of partition is appropriate as a coordinate system in the first place.**

## 3. The methodological significance of Buddhism

What I want to propose here is to take the coordinate system **from Buddhism.**

The way I read it, Buddhism — before being a religion — is **the accumulated outcome of thoroughgoing empirical research on the workings of the human mind.** The three poisons (greed, aversion, ignorance), the 108 mental afflictions, the five aggregates, the twelve links of dependent origination — these are not abstract doctrines, but **descriptive vocabulary systematized as the result of countless practitioners observing their own minds.**

What I find particularly important is that this observation has been **continuous over 2,500 years.** It is the most refined description that humanity reached about itself, in an age before research institutions and statistics existed. Counted by practitioners, Buddhists number cumulatively in the billions; even those who seriously observed their minds number in the millions. The way I see it, **this is, by orders of magnitude, the largest dataset of human self-observation we have** — far exceeding the sample sizes of contemporary psychology research.

I want to treat this, not as something to be quarantined as "religion," but as **a body of empirical observation data**, and handle it within an engineering framework. That is the core of my methodology.

### 3.1 Internal vs external observation

The difference becomes clear when I put the two side by side:

| Aspect | Neuroscience | Buddhism |
|---|---|---|
| Observer and object | separated (the person taking the fMRI ≠ the person whose fMRI is taken) | the same (the practitioner observes their own mind) |
| Means of observation | physical measurement (signals, chemistry) | introspection (self-observation) |
| Subjective experience | excluded for the sake of objectification | adopted as primary data |
| Time scale | seconds to minutes | from a moment to a lifetime |
| Period of accumulation | about 100 years | about 2,500 years |
| Number of observers | tens of thousands of subjects | millions to billions of practitioners |

I am not setting the two against each other. **Neuroscience provides precision at the physical layer; Buddhism provides the coordinate system at the semantic layer.** Each needs the other; they are complementary.

## 4. The 108 dimensions as a computable coordinate system

Concretely, the mapping I want my research program to learn is this:

```
Arbitrary text T, situation C, individual U → V = (w₁, w₂, ..., w₁₀₈)
```

Here wᵢ is the stimulation intensity (or weight) of mental affliction i. My view is that this 108-dimensional vector gives us **a computable coordinate system for the emotional state of the human.**

The number 108 is the granularity of partition empirically reached in Buddhist canonical texts: combinations of 6 sense faculties (eye, ear, nose, tongue, body, mind) × 3 affect attributes (suffering, pleasure, neutral) × 2 classifications (defiled, undefiled) × 3 temporal axes (past, present, future). Compared with contemporary psychological models of emotion (between roughly 5 and 28 dimensions), this is **a granularity that is orders of magnitude finer.**

I am not assuming these 108 dimensions are mathematically independent (orthogonal); see [§16.2 of the Concept Record](/en/concept/bonno-virus-mapping/) for that discussion. But my position is that, by building hierarchically — Level 1: three poisons (3-dim) → Level 2: mid-level classification → Level 3: 108-dim — the coordinate system can be made to function as a computable one. As the concrete starting point for the implementation, I intend to begin with the "three poisons × 3 subcategories each = 9-dimensional minimum model" laid out in §0.4.5 and §4.3.0 of the Concept Record.

## 5. Comparison with existing models of emotion

If I line up the 108 Buddhist afflictions next to the major Western models of emotion:

| Model | Dimensions | Established | Observational basis |
|---|---|---|---|
| Ekman's basic emotions | 6 | 1970s | cross-cultural facial-expression studies |
| Plutchik's wheel | 8 (+ intensity) | 1980 | evolutionary considerations |
| PAD model | 3 | 1974 | psychometrics |
| Big Five | 5 | 1980s | statistical factor analysis |
| OCC model | 22 | 1988 | cognitive-appraisal theory |
| **108 mental afflictions** | **108** | **5th c. (Abhidharmakośa)** | **2,500 years of internal observation** |

This is not me arguing that "finer is better." What I want to say is that, **in the historical depth of observation and in the number of observers, the 108 mental afflictions rest on an empirical foundation that is not comparable with any of the other models.**

## 6. Complementarity with neuroscience

To repeat: I am not rejecting neuroscience. On the contrary, I plan to actively incorporate neuroscientific findings into my research program. Concretely, I divide the roles like this:

- **Physical layer**: neuroscientific knowledge (function of the prefrontal cortex, role of the amygdala, dopamine pathways, etc.)
- **Semantic layer**: Buddhist coordinate system (108 mental afflictions, the three poisons, the five aggregates)

For example, the External Prefrontal Cortex (ExPFC) concept I introduce in §13 of the Concept Record is one that integrates neuroscience (the prefrontal cortex falls into functional failure under emotional overwhelm) with Buddhism (the moment when an affliction is activated). Damasio's somatic-marker hypothesis, the affective neuroscience of Phelps and others on emotion and decision-making, Friston's predictive-processing theory — I see all of these excellent results as constituting the physical layer of my research.

What I am asking Buddhism to provide is **a coordinate system for semantically interpreting the signals at those physical layers.** When fMRI shows activation, the resolution to distinguish "is this greed, attachment, or envy?"

## 7. Implications for the international AI Safety community

Let me take a strategic angle for a moment. My understanding is that one of the fundamental questions facing AI Safety researchers at MIRI, Anthropic, DeepMind, and the LessWrong community is: "**what is the coordinate system by which AI understands the human?**"

At present, they have no choice but to rely on Western psychological models of emotion (Ekman, PAD, Big Five, etc.). But as I wrote above, all of these are fragmentary systems based on roughly 100 years of research. When AI takes on the fundamental problems of "accurately understanding human intent" and "acting in accordance with human values" (AI Alignment), the low resolution of the coordinate system, I think, becomes a serious constraint.

Into this situation I want to bring **a coordinate system based on 2,500 years of internal observation.** My sense is that, for Western researchers, this may have a stronger appeal than they expect, **as an epistemological complement they had been overlooking.**

This is, alongside the companion essay [§15 "Economies of Precision vs Economies of Scale"](/en/essays/precision-economics/), another "domain Big AI cannot enter." Where §15 addressed an economic inability to enter, what I want to point at here is **an epistemological inability to enter.** Big AI is structurally unable to access 2,500 years of Buddhist internal-observation data — not as a technical problem, but because, culturally, historically, and philosophically, it has not been part of the imagination of Western researchers to look for a coordinate system there.

## 8. Applications — the mirror of self-understanding, ExPFC, anti-scam

The methodology I have been describing has, as I see it, several concrete applications. Four of them in particular.

### 8.1 The mirror of self-understanding

What I am ultimately aiming at is a device by which the user can visualize, at any moment, **"which afflictions in me are active right now and to what degree."** I think of it as both a means of scam detection and, at the same time, a mirror by which the human understands the self.

The moment of waking up; after an argument with one's spouse; the moment of irritation while scrolling SNS; the moment of joy at a child's growth — for each, the weighting across the 108 dimensions becomes visible. I see this as an attempt to make introspection more precise through mechanical assistance.

### 8.2 External Prefrontal Cortex (ExPFC)

The ExPFC concept I introduce in [§13 of the Concept Record](/en/concept/bonno-virus-mapping/) only acquires meaning, in my view, on the methodological foundation laid out in this essay. Neuroscience provides the fact that "the PFC falls into functional failure under emotional overwhelm"; Buddhism provides the semantic description "the moment when a particular affliction is activated." Integrating the two, ExPFC can be defined as a device that **"detects affliction activation and externally substitutes for the judgment in a state of functional failure."**

### 8.3 Anti-scam

The anti-scam discussion I develop in [§1–§14 of the Concept Record](/en/concept/bonno-virus-mapping/) is, in my view, the **most pressing application** of the methodological foundation laid out in this essay. Scams are situations in which "particular aspects of humanity — particular afflictions — are exploited," and I expect they can be precisely described and detected within my coordinate system.

### 8.4 Horizontal expansion (medicine, education, mental health)

As I wrote in the companion essay [§15 "Economies of Precision vs Economies of Scale"](/en/essays/precision-economics/), I do not intend to limit this methodology to anti-scam. Personalized precision medicine, individually optimized education, contextual understanding in mental health, contextual reading of relationships in child protection — these are all domains where "the semantic resolution of the human" needs to be raised, and I believe the template laid out here can be applied to them.

For instance, in medicine, decoding 108-dimensional vectors from a patient's narrative may surface anxieties that standardized questionnaires miss. In mental health, distinguishing "attachment-driven" from "aversion-driven" depressive states could inform the choice of therapeutic approach. In education, individual-level affliction sensitivity could shape both the prediction of stumbling points and the design of interventions. In child protection, reading the affliction structure latent in family relationships could surface warning signs that surface behavior alone cannot capture.

## 9. Conclusion

Let me restate my thesis one more time, in my own words.

**Contemporary research on emotion and on the human, because its methodological foundation is observation from the outside and physico-chemical reduction, is not reaching the semantic resolution of human emotion. I believe that by adopting the 2,500-year system of internal Buddhist observation as a coordinate system, this gap can be filled.**

This is not opposition to neuroscience; it is its complement. Neuroscience handles the physical layer; Buddhism handles the semantic layer. Only by integrating the two, in my view, does an understanding of the human at a previously unattainable resolution become possible. This is the wager I am making.

I intend to give this methodological wager a 20-year horizon. Anti-scam is its most pressing application; horizontal expansion to medicine, education, mental health, and child protection follows. What I am ultimately aiming at is **a foundation by which the human more accurately understands the self and the other.**

> Neuroscience has observed the brain from the outside.
> Buddhism has observed the mind from the inside.
> What I want to do is integrate the two into a single computable system.
> I believe that, in the age of AI, this can be a new starting point for understanding the human.

---

## Related materials

- [Concept Record (full text)](/en/concept/bonno-virus-mapping/) — including §0, the parent research program from which this essay is derived
- [Companion essay: §13 The External Prefrontal Cortex (ExPFC)](/en/essays/external-prefrontal-cortex/) — the neuroscientific implementation device that gives the Buddhist coordinate system a semantic layer in practice (neuroethics + AI Safety)
- [Companion essay: §15 Economies of Precision vs Economies of Scale](/en/essays/precision-economics/) — the strategic positioning (Level 2)
- [日本語版](/essays/buddhism-as-coordinate-system/)

## Contact

If anything in this essay resonates with you — as a researcher, a critic, or a possible successor — I would welcome hearing from you. Constructive critique or collaboration proposals from Buddhist studies, neuroscience, cognitive science, AI Safety, or Affective Computing are all welcome, at any time, via the [contact page](/en/contact/). English and Japanese are both fine.

## References

1. Clark, A. (2013). Whatever next? Predictive brains, situated agents, and the future of cognitive science. *Behavioral and Brain Sciences*, 36(3), 181-204.
2. Damasio, A. R. (1994). *Descartes' Error: Emotion, Reason, and the Human Brain*. Putnam.
3. Ekman, P. (1992). An argument for basic emotions. *Cognition and Emotion*, 6(3-4), 169-200.
4. Friston, K. (2010). The free-energy principle: a unified brain theory? *Nature Reviews Neuroscience*, 11(2), 127-138.
5. McCrae, R. R., & Costa, P. T. (1987). Validation of the five-factor model of personality across instruments and observers. *Journal of Personality and Social Psychology*, 52(1), 81-90.
6. Mehrabian, A., & Russell, J. A. (1974). *An Approach to Environmental Psychology*. MIT Press.
7. Phelps, E. A., Lempert, K. M., & Sokol-Hessner, P. (2014). Emotion and decision making: multiple modulatory neural circuits. *Annual Review of Neuroscience*, 37, 263-287.
8. Picard, R. W. (1997). *Affective Computing*. MIT Press.
9. Plutchik, R. (1980). *Emotion: A Psychoevolutionary Synthesis*. Harper & Row.
10. Vasubandhu (5th century). *Abhidharmakośa*. Buddhist canonical text on the taxonomy of mental afflictions.
