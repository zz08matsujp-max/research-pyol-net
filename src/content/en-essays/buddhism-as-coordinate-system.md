---
title: "Buddhism as a Coordinate System: A New Computational Foundation for Understanding the Human"
author: "Toshinobu Matsuura"
summary: "The mainstream of contemporary research on emotion and on the human is built on neuroscience and brain physics, but observation from the outside and physico-chemical reduction cannot capture the semantic resolution of human emotion. This essay proposes, methodologically, to incorporate the system of Buddhism — which has observed the human from the inside for 2,500 years — into modern neural-network engineering as a coordinate system for understanding the human. Without rejecting neuroscience, the proposal incorporates it as reinforcement at the physical layer while taking the coordinate system at the semantic layer from Buddhism. This positioning may serve as a methodological complement, from the East, for AI Safety, Affective Computing, and cognitive science alike."
publishedAt: 2026-05-16
updatedAt: 2026-05-16
version: "v1.0"
lang: "en"
tags: ["AI Safety", "cognitive science", "Buddhism", "Affective Computing", "methodology"]
license: "CC BY 4.0"
derivedFrom: "Concept Record §0"
citationKeySuffix: "buddhismCoordinate"
---

> **Note on terminology.** "Mental afflictions" in this essay corresponds to the Buddhist concept of *bonnō* (煩悩) — in Sanskrit, *kleshas* — the mental states held to cause human suffering, classified into 108 categories. The translation of Buddhist terminology in this essay is preliminary and will be refined in v0.2 in consultation with Buddhist scholars.

## Introduction

This essay reorganizes §0 of the [Concept Record v1.6](/en/concept/bonno-virus-mapping/) — the founding document of the research program *Bonnō × Scam-Virus Mapping: An Integrated Database* at Mindseed Research — into a standalone piece. The aim is for the essay to read on its own without requiring familiarity with the other chapters; necessary background is given in the body.

The thesis can be summarized as follows. **Contemporary research on emotion and on the human is built almost entirely on the methodological foundation of "observation from the outside" and "physico-chemical reduction." This provides precise observational means but fails to capture the semantic resolution of human emotion. By adopting the 2,500-year system of internal Buddhist observation as a computable coordinate system, this gap can be filled.** This is a new positioning that may serve as a methodological complement, from the East, for AI Safety, Affective Computing, and cognitive science alike.

> **About the author**[^author]: This research program is led by Toshinobu Matsuura, an independent researcher at Mindseed Research in Wakayama, Japan. See the [About page](/en/about/) for background.

[^author]: See the About page linked above.

## 1. The standard approaches of existing research

The mainstream of contemporary research on emotion and on the human can be organized as follows:

| Approach | Representative work | Direction of observation | Main object |
|---|---|---|---|
| Neuroscience | Damasio, LeDoux, Phelps | external → physical | neurons, functional localization, neurotransmitters |
| Affective Computing | Picard, Cambria | external → statistical | facial expression, voice, text |
| Psychological models of emotion | Ekman, Plutchik, Russell | external → classification | enumeration of basic emotions |
| Predictive Processing | Friston, Clark | internal → mathematical | minimization of prediction error |
| Brain physics | fMRI, EEG, neuropharmacology | external → physical | brain signals and chemistry |

All of these have made great progress in recent years and have produced excellent results. Damasio's somatic-marker hypothesis revealed the importance of bodily reactions in decision-making; Friston's free-energy principle has had broad influence as a unified theory of brain function.

But these methodological approaches share one feature in common. **The observer and the observed are separated**, and **the coordinate system of meaning relies almost entirely on the vocabulary of Western psychology.**

## 2. "Resolution of neural activity" and "semantic resolution of emotion" are different problems

Here is the central observation of this essay.

Suppose fMRI shows activation of the amygdala. Whether that activation is "greed," "envy," "haste," or "loneliness" cannot be distinguished from the neural-activity signal itself. To distinguish, one has no choice but to rely on a different vocabulary system — most often the Big Five, the PAD model, Plutchik's wheel of emotions, or Ekman's six basic emotions, all from Western psychology.

That is, **the resolution of neural activity and the semantic resolution of emotion are different problems.** No matter how high the resolution of the former becomes, if the coordinate system of the latter is coarse, the understanding of emotion remains coarse.

And the Western models of emotion currently relied upon are all **fragmentary systems based on roughly 100 years of research.** Big Five since the 1980s, PAD in 1974, Plutchik in 1980, Ekman's basic emotions in the 1970s. Efforts to improve their precision have continued, but **there is still no established consensus on how many dimensions or what kind of partition is appropriate as a coordinate system in the first place.**

## 3. The methodological significance of Buddhism

What this essay proposes is to take the coordinate system **from Buddhism.**

Buddhism, before being a religion, is **the accumulated outcome of thoroughgoing empirical research on the workings of the human mind.** The three poisons (greed, aversion, ignorance), the 108 mental afflictions, the five aggregates, the twelve links of dependent origination — these are not abstract doctrines but **descriptive vocabulary systematized as the result of countless practitioners observing their own minds.**

Particularly important is that the observation has been **continuous over 2,500 years.** It is the most refined description that humanity reached about itself in an age before research institutions and statistics existed. By the count of practitioners, Buddhists number cumulatively in the billions; even those who seriously observed their minds number in the millions. This is, **by orders of magnitude, the largest dataset of human self-observation** — far exceeding the sample sizes of contemporary psychology research.

To treat this not as something to be quarantined as "religion" but as **a body of empirical observation data**, and to handle it in an engineering framework. This is the methodological core of this essay.

### 3.1 Internal vs external observation

The methodological difference between the two:

| Aspect | Neuroscience | Buddhism |
|---|---|---|
| Observer and object | separated (the person taking the fMRI ≠ the person whose fMRI is taken) | the same (the practitioner observes their own mind) |
| Means of observation | physical measurement (signals, chemistry) | introspection (self-observation) |
| Subjective experience | excluded for the sake of objectification | adopted as primary data |
| Time scale | seconds to minutes | from a moment to a lifetime |
| Period of accumulation | about 100 years | about 2,500 years |
| Number of observers | tens of thousands of subjects | millions to billions of practitioners |

The two are not in opposition. **Neuroscience provides precision at the physical layer; Buddhism provides the coordinate system at the semantic layer.** Each requires the other; they are complementary.

## 4. The 108 dimensions as a computable coordinate system

Concretely, this research program learns the following mapping:

```
Arbitrary text T, situation C, individual U → V = (w₁, w₂, ..., w₁₀₈)
```

Here wᵢ is the stimulation intensity (or weight) of mental affliction i. This 108-dimensional vector provides **a computable coordinate system for the emotional state of the human.**

The number 108 is the granularity of partition empirically reached in Buddhist canonical texts: combinations of 6 sense faculties (eye, ear, nose, tongue, body, mind) × 3 affect attributes (suffering, pleasure, neutral) × 2 classifications (defiled, undefiled) × 3 temporal axes (past, present, future). Compared with contemporary psychological models of emotion (between roughly 5 and 28 dimensions), this is **a granularity orders of magnitude finer.**

These 108 dimensions are not necessarily mathematically independent (orthogonal); see [§16.2 of the Concept Record](/en/concept/bonno-virus-mapping/) for the discussion of this challenge. But by building hierarchically — Level 1: three poisons (3-dim) → Level 2: mid-level classification → Level 3: 108-dim — the coordinate system can be made to function as a computable one.

## 5. Comparison with existing models of emotion

Contrasting the 108 Buddhist afflictions with the major models of emotion in Western psychology:

| Model | Dimensions | Established | Observational basis |
|---|---|---|---|
| Ekman's basic emotions | 6 | 1970s | cross-cultural facial-expression studies |
| Plutchik's wheel | 8 (+ intensity) | 1980 | evolutionary considerations |
| PAD model | 3 | 1974 | psychometrics |
| Big Five | 5 | 1980s | statistical factor analysis |
| OCC model | 22 | 1988 | cognitive-appraisal theory |
| **108 mental afflictions** | **108** | **5th c. (Abhidharmakośa)** | **2,500 years of internal observation** |

This is not a simplistic argument that "finer is better." It is that, **in the historical depth of observation and in the number of observers, the 108 mental afflictions have an empirical foundation that is incomparable with the other models.**

## 6. Complementarity with neuroscience

To repeat: this essay does not reject neuroscience. On the contrary, this research program actively incorporates neuroscientific findings:

- **Physical layer**: neuroscientific knowledge (function of the prefrontal cortex, role of the amygdala, dopamine pathways, etc.)
- **Semantic layer**: Buddhist coordinate system (108 mental afflictions, the three poisons, the five aggregates)

For example, the External Prefrontal Cortex (ExPFC) concept introduced in §13 of the Concept Record is one that integrates neuroscience (the prefrontal cortex falls into functional failure under emotional overwhelm) with Buddhism (the moment when an affliction is activated). Damasio's somatic-marker hypothesis, the affective neuroscience of Phelps and others on emotion and decision-making, Friston's predictive-processing theory — all of these excellent results constitute the physical layer of this research program.

What Buddhism supplements is **a coordinate system for semantically interpreting the signals of these physical layers.** When fMRI shows activation, Buddhism provides the resolution to distinguish "is this greed, attachment, or envy?"

## 7. Implications for the international AI Safety community

A strategic point. Among the fundamental questions facing the AI Safety researchers at MIRI, Anthropic, DeepMind, and the LessWrong community is: "**what is the coordinate system by which AI understands the human?**"

At present, they have no choice but to rely on Western psychological models of emotion (Ekman, PAD, Big Five, etc.). But as discussed above, all of these are fragmentary systems based on roughly 100 years of research. As AI tackles the fundamental problems of "accurately understanding human intent" and "acting in accordance with human values" (AI Alignment), the low resolution of the coordinate system becomes a serious constraint.

Into this, this essay presents **a coordinate system based on 2,500 years of internal observation.** For Western researchers, this may have a stronger appeal than expected, as **an epistemological complement they had overlooked.**

This is, alongside [§15 "Economies of Precision vs Economies of Scale"](/en/essays/precision-economics/), another "domain Big AI cannot enter." Where §15 addressed an economic inability to enter, this essay addresses **an epistemological inability to enter.** Big AI is structurally unable to access 2,500 years of Buddhist internal-observation data — not as a technical problem, but because, culturally, historically, and philosophically, it has not been part of the imagination of Western researchers to seek a coordinate system there.

## 8. Applications — the mirror of self-understanding, ExPFC, anti-scam

The methodology argued in this essay has several concrete applications:

### 8.1 The mirror of self-understanding

What this research program aims at is a device by which the user can visualize, at any moment, **"which afflictions in me are active right now and to what degree."** This is a means of scam detection and, simultaneously, a mirror by which the human understands the self.

The moment of waking up; after an argument with one's spouse; the moment of irritation while looking at SNS; the moment of joy at a child's growth — for each, the weighting of the 108 dimensions becomes visible. This is an attempt to make introspection more precise through mechanical assistance.

### 8.2 External Prefrontal Cortex (ExPFC)

The ExPFC concept introduced in [§13 of the Concept Record](/en/concept/bonno-virus-mapping/) acquires meaning only on the methodological foundation of this essay. Neuroscience provides the fact that "the PFC falls into functional failure under emotional overwhelm"; Buddhism provides the semantic description "the moment when a particular affliction is activated." The integration of the two allows ExPFC to be defined as a device that **"detects affliction activation and externally substitutes for the judgment in a state of functional failure."**

### 8.3 Anti-scam

The anti-scam discussion developed in [§1–§14 of the Concept Record](/en/concept/bonno-virus-mapping/) is the **most pressing application** of the methodological foundation of this essay. Scams are situations in which "particular aspects of humanity (particular afflictions) are exploited," and they can be precisely described and detected in the coordinate system of this program.

### 8.4 Horizontal expansion (medicine, education, mental health)

As discussed in the companion essay [§15 "Economies of Precision vs Economies of Scale"](/en/essays/precision-economics/), this methodology is not limited to anti-scam. Personalized precision medicine, individually optimized education, contextual understanding in mental health, contextual reading of relationships in child protection — all are domains that need to raise "the semantic resolution of the human," and the template of this methodology can be applied to them.

For instance, in medicine, decoding 108-dimensional vectors from a patient's narrative may reveal anxieties that standardized questionnaires miss. In mental health, distinguishing "attachment-driven" from "aversion-driven" depressive states could inform the choice of therapeutic approach. In education, individual-level affliction sensitivity could shape both the prediction of stumbling points and the design of interventions. In child protection, reading the affliction structure latent in family relationships could surface warning signs that surface behavior alone cannot capture.

## 9. Conclusion

The thesis of this essay is plain. **Contemporary research on emotion and on the human, because its methodological foundation is observation from the outside and physico-chemical reduction, fails to capture the semantic resolution of human emotion. By adopting the 2,500-year system of internal Buddhist observation as a coordinate system, this gap can be filled.**

This is not opposition to neuroscience but its complement. Neuroscience handles the physical layer; Buddhism handles the semantic layer. The integration of the two makes possible an understanding of the human at a resolution previously unattainable.

This research program takes on this methodological wager over a 20-year span. Anti-scam is its most pressing application; horizontal expansion to medicine, education, mental health, and child protection follows. The ultimate aim is **a foundation by which the human more accurately understands the self and the other.**

> Neuroscience has observed the brain from the outside.
> Buddhism has observed the mind from the inside.
> This research program integrates the two into a single computable system.
> This is a new starting point for understanding the human in the age of AI.

---

## Related materials

- [Concept Record (full text)](/en/concept/bonno-virus-mapping/) — including §0, the parent research program from which this essay is derived
- [Companion essay: §15 Economies of Precision vs Economies of Scale](/en/essays/precision-economics/) — the strategic positioning (Level 2)
- [日本語版](/essays/buddhism-as-coordinate-system/)

## Contact

Replies from resonant researchers, critics, and successor candidates are welcomed. Constructive critique or collaboration proposals from Buddhist studies, neuroscience, cognitive science, AI Safety, or Affective Computing are received at any time via the [contact page](/en/contact/). Both English and Japanese are accepted.

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
