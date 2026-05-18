---
title: "The External Prefrontal Cortex (ExPFC): An AI Device that Externally Substitutes for a Compromised Prefrontal Cortex"
author: "Toshinobu Matsuura"
summary: "Under strong emotional load, the prefrontal cortex (PFC) is temporarily suppressed. Scam victimization is precisely what happens when a perpetrator deliberately induces this PFC failure, stripping the victim of integrated judgment. I propose to redefine scam victimization, neuroscientifically, as a *temporary functional failure of the prefrontal cortex*, and to call the AI device that externally substitutes for a compromised PFC the **External Prefrontal Cortex (ExPFC)**. In this essay I lay out the theoretical basis (neuroscience), the functional requirements, the core role — substituting for the 'examination' module of the five-senses metaphor — the generality of the concept beyond anti-scam, and the unavoidable neuroethical questions: autonomy, dependence, and proxy judgment. This is a proposal from applied neuroscience standing at the intersection of neuroethics and AI Safety."
publishedAt: 2026-05-18
updatedAt: 2026-05-18
version: "v0.1"
lang: "en"
tags: ["AI Safety", "neuroethics", "cognitive science", "Affective Computing", "decision support"]
license: "CC BY 4.0"
derivedFrom: "Concept Record §13"
citationKeySuffix: "expfcConcept"
ogImage: "/img/ogp-external-prefrontal-cortex.png"
---

> **Note on terminology.** Throughout this essay, "mental afflictions" corresponds to the Buddhist concept of *bonnō* (煩悩) — in Sanskrit, *kleshas* — the mental states held to cause human suffering, classified into 108 categories. I use this taxonomy as the **output vocabulary** of ExPFC; the methodological argument for adopting it is given in the companion essay [*Buddhism as a Coordinate System*](/en/essays/buddhism-as-coordinate-system/).

## Introduction

What follows is my rewriting of §13 of the [Concept Record](/en/concept/bonno-virus-mapping/) — the founding document of the research program I am running at Mindseed Research, "Bonnō × Scam-Virus Mapping: An Integrated Database" — into a standalone piece. My intention is for the essay to stand on its own, without requiring readers to be familiar with the other chapters; the background I need is given in the body.

I have only one thesis. **Scam victimization can be redefined neuroscientifically as a *temporary functional failure of the prefrontal cortex* that the perpetrator deliberately induces. Building an AI device that externally substitutes for a compromised PFC — what I call the External Prefrontal Cortex, ExPFC — is, I argue, the most direct technical approach to protecting potential victims.** The ExPFC concept is not limited to anti-scam; it extends to investing, health, gambling, cults, impulsive SNS posting — every situation where human decision-making collapses under emotional overwhelm. In this essay I lay out the theoretical basis, the functional requirements, and the neuroethical questions I cannot avoid.

> **About the author**[^author]: I run Mindseed Research as an independent researcher based in Wakayama, Japan. Forty-plus years of infrastructure engineering (Kansai Electric Power Company, Samsung SDS) precede the current 20-year research program centered on Bonnō × AI. See the [About page](/en/about/) for my background.

[^author]: See the About page linked above.

## 1. Why look to the structure of the brain

As my research program developed, I came to see that the structure of human cognition — particularly the hierarchical modular structure of **"sensory input → parallel processing by specialized brain regions → integrated judgment by the prefrontal cortex"** — is remarkably useful as a design guide for an AI device meant to support human decision-making.

This started as an intuitive proposal from my background as a working engineer, but it is consistent with established findings in modern neuroscience and cognitive science (Mountcastle, 1978; Felleman & Van Essen, 1991; Dehaene, 2014). My view is that parallel distributed processing (PDP) and hierarchical integration — the core discoveries of late-20th-century cognitive neuroscience — can be used directly as design principles for AI-based decision support.

I leave the detailed modular-architecture discussion to §13.2–§13.4 of the Concept Record, and start this essay from **a neuroscientific account of scam victimization, building up toward the ExPFC concept**.

## 2. The neuroscientific mechanism of scam victimization

Let me lay out how scam victimization is explainable neuroscientifically. As the theoretical foundation of my program, I cannot skip this.

A well-established finding is that **under strong emotional load, the activity of the prefrontal cortex (PFC) is suppressed**, as shown empirically by functional magnetic resonance imaging studies (Phelps et al., 2014; Tom et al., 2007). As I read the literature, the mechanism by which a scam is consummated can be written like this:

```
[1] The perpetrator induces emotional overwhelm
    - Expectation of gain  (stimulating greed)
    - Fear of loss         (stimulating anxiety)
    - Urgency              (stimulating haste)
    - Trust / closeness    (stimulating loneliness)

         ↓

[2] The amygdala (emotional center) becomes over-activated

         ↓

[3] PFC activity is relatively suppressed
    - Inhibitory control weakens
    - Working memory capacity shrinks
    - Risk assessment is distorted
    - Long-term perspective is lost

         ↓

[4] Integrated judgment fails
    - The intuition "isn't this a scam?" is suppressed
    - Only partial facts are accepted; the whole picture is invisible
    - The impulse to seek a third-party opinion does not fire

         ↓

[5] The victim performs actions they would otherwise avoid
    - Large money transfers
    - Avoidance of contacting the police
    - Hiding the situation from family
```

In other words — and this is my central claim — **scam victimization can be redefined as a temporary functional failure of the prefrontal cortex.** This is consistent with Damasio's (1994) somatic-marker hypothesis: failure at the prefrontal level breaks the integration of emotion and reason. The victim was not "tricked." Their judgment apparatus was, quite literally, **temporarily offline**.

From that redefinition, a natural question arises: can a compromised PFC be substituted for, externally?

## 3. The formal definition of the External Prefrontal Cortex

Out of §2 a definition emerges, for the role of the [PYOL Mind Mirror](https://ai.pyol.net) — the tool I run in production — and, more broadly, for the AI foundation for human understanding that I am building for the long term:

> **"PYOL Mind Mirror is a device that externally provides integrated judgment in place of a victim's compromised prefrontal cortex."**

I call this the **External Prefrontal Cortex, or ExPFC**.

The functional requirements ExPFC should satisfy, as I see them:

| Function | Description |
|---|---|
| Multi-modal integration | Integrates the visual, linguistic, behavioral, relational, and temporal modules |
| Proxy judgment under emotional suppression | Operates independently even when the user's own PFC is offline |
| Optimal-timing intervention | Estimates the window during which intervention is possible — before the cognitive lock is complete |
| Interpretable output | Presents the reasoning ("why is this a warning?") in a form the user can understand |
| Explicit value judgment | Delivers a clear value judgment ("this is likely a scam") |

There is one thing about this definition I want to underline. **ExPFC is positioned not as an "autonomous decision-maker" but as "an extended part of cognition."** The AI does not decide on behalf of the human. The AI stands in for *part of the human's judgment apparatus* during the moments when that apparatus is offline — and as soon as the human's judgment recovers, the locus of decision returns to the human.

In my view, this position provides a new vantage point for both neuroethics and the philosophy of mind on the relation between AI and humans. The ethical implications are taken up in §6.

## 4. The five-senses metaphor and the "examination" module

I want to formalize, a little more precisely, what ExPFC ought to substitute for. For this, I use a metaphor that maps the five senses onto the scam context:

| Human sense | Counterpart in anti-scam |
|---|---|
| Sight | fake platform screens, fabricated company logos, deepfake advertising |
| Hearing | the scammer's voice, AI-synthesized speech, video calls |
| Touch | the bodily experience of executing a transfer |
| Smell (intuition) | the meta-cognitive sense of "something is off" |
| Taste (examination) | careful evaluation of the truth of presented information |

What I want to draw attention to is that the scammer's strategy is focused on **over-stimulating sight / hearing / smell as "reassurance," and skipping over taste (examination)**. The victim is bombarded with visual and auditory signals that "this counterparty is trustworthy," and even smell — intuition — is overridden by "yes, something feels off, but with this much polish it must be fine." What collapses is *taste*: the cognitive process of carefully verifying each piece of presented information.

The core role of ExPFC, in the way I want to put it, is this:

> **"It externally substitutes for the 'examination' module that the user has skipped."**

This is, as I see it, the most precise formulation of the ExPFC concept. ExPFC is *not* a device that takes over judgment in its entirety. It is a device that **externalizes, pinpoint, the one stage that drops out first under emotional overwhelm — examination.** Defining the AI's scope of proxy judgment narrowly and deeply is, structurally, my answer to the autonomy problem discussed in §6.

## 5. Generality of application beyond anti-scam

In my mind, the ExPFC concept is not limited to anti-scam. PFC dysfunction leading to inappropriate decision-making occurs in every domain of human life:

| Domain | Isomorphic problem |
|---|---|
| Investing | revenge trading, FOMO, failure to cut losses |
| Health | impulsive overeating, avoidance of exercise, delayed medical consultation |
| Gambling | the "next time I'll win" dependency cycle |
| Romantic / partner choice | choosing dangerous partners, difficulty leaving abusive relationships |
| Cults / religious fraud | total-asset donation in states of exaltation |
| Politics / society | susceptibility to incitement, amplified hatred toward opposing camps |
| SNS | impulsive posting, flame wars, defamation |
| Childcare | emotional abuse, inappropriate discipline |
| The elderly | early-cognitive-decline judgment failures |

I expect an ExPFC-style support device to be applicable to all of these. My research program starts from anti-scam, but in the long run it has the scope of **fundamental research on supporting human decision-making**.

The horizontal expansion discussed in the companion essay [*Economies of Precision*](/en/essays/precision-economics/) — into medicine, education, mental health, and child protection — connects to ExPFC as well. Advertising ethics (automated detection of affliction-inflaming advertising), ethical evaluation of AI-generated text (analysis of affliction biases in LLM outputs), education (intervening to unlock cognitive lock-in in learners) — the application space is wide. But under a 20-year program, I intend to focus on a narrow set of domains and implement them one at a time.

## 6. Philosophical and ethical scope — seven unavoidable questions

By this point I think you can see that ExPFC is "an AI device that substitutes for part of a user's judgment." From that definition, seven neuroethical questions rise unavoidably, in my mind. These are the questions I want to take up, eventually, in serious dialogue with researchers in both neuroethics and AI Safety:

1. **Autonomy.** Is reliance on AI judgment a loss of autonomy or its extension? My current position is that the "narrow, deep substitution" — pinpoint substitution for the examination module, as in §4 — is a design that minimizes the erosion of autonomy. But this needs continuing verification.
2. **Locus of responsibility.** Who is responsible for a decision made under ExPFC's advice? Since the final decision-maker is the user, I think responsibility is the user's; but the question of how to allocate responsibility when ExPFC issues a false warning needs careful legal work.
3. **Individual differences and the right to refuse.** I do not position ExPFC as a coercive device, but as a tool the user voluntarily engages. The question of an opt-out, and frameworks like the Ulysses contract (pre-committing to constrain one's future, less-calm self), deserve study.
4. **Misuse potential.** What happens if ExPFC is hijacked by a malicious agent? ExPFC is, by definition, "a device that changes the user's judgment," and the harm from misuse is far beyond ordinary malware. The threat model has to be built into the design from the start.
5. **Dependence.** Does the user's own prefrontal cortex atrophy? Long-term reliance on ExPFC could realistically degrade the user's own judgment capacity. This can be partially addressed by design choices that actively support the user's own recovery of judgment, but at root it is an empirical question.
6. **Fairness.** Does inequality in access to ExPFC produce inequality in the quality of judgment? A society in which only the affluent get high-quality decision support would create a new dimension of social inequality. I lean toward open-sourcing the program, but that is at best a partial answer to the fairness problem.
7. **The wall of qualia — stated as a boundary condition.** Between "an AI detecting an affliction" and "an AI *experientially understanding* that affliction" lies the so-called hard problem of consciousness. **My research program does not aim at endowing AI with subjective experience.** What ExPFC substitutes for is the functional "examination" module, not the qualia of an affliction itself. Detection ≠ experiential understanding. I state this boundary explicitly here as a brake against over-extending the program.

These seven overlap with the central topics of AI ethics. Over my 20-year horizon, I want to treat them as continuing items of inquiry. This essay only raises the questions; the answers will be sharpened through dialogue with collaborators.

## 7. Conclusion

Let me state my thesis one more time, in my own words.

**Scam victimization can be redefined neuroscientifically as a temporary functional failure of the prefrontal cortex, deliberately induced by the perpetrator. Building an AI device that externally substitutes for a compromised PFC — the External Prefrontal Cortex (ExPFC) — is the most direct technical approach I can see to protecting potential victims. The core role of ExPFC is to externally substitute for the "examination" module that the user has skipped under emotional overwhelm.** This is not confined to anti-scam; it extends to investing, health, gambling, cults, impulsive SNS posting — every situation in which decision-making collapses under emotional overload.

And the ExPFC concept brings new questions to both neuroethics and AI Safety. Autonomy, responsibility, individual differences, misuse, dependence, fairness — these six questions are what I intend to work on over a 20-year horizon.

The Buddhist taxonomy of mental afflictions functions, in my design, as the **output vocabulary** of this device. That is, ExPFC says, "the state you are in right now has affliction X active," and through that explanation the user deepens self-understanding and is prompted toward an autonomous recovery of judgment. This positions AI not as "a black-box decision-maker" but as **"a mirror that helps the human understand the self."** This is, in my view, the deepest technical and ethical implementation of the Mindseed philosophy of "regaining one's calm self."

> The scammer temporarily disables the victim's prefrontal cortex.
> ExPFC inserts, from outside, the "examination" that the disabled cortex would have performed.
> The point is not to make AI the decider. It is to make the human stand up again, as the decider.
> That is the relation between AI and humans I am aiming at.

---

## Related materials

- [Concept Record (full text)](/en/concept/bonno-virus-mapping/) — including §13, the parent research program from which this essay is derived
- [Concept Record §17: ExPFC Core Specification v0.1](/en/concept/bonno-virus-mapping/#17) — the formalization of the ExPFC discussed in this essay as a core specification (API contracts, JSON Schemas, reference-implementation distribution plan)
- [Companion essay: Buddhism as a Coordinate System](/en/essays/buddhism-as-coordinate-system/) — the coordinate system that supplies ExPFC's semantic layer (Level 1)
- [Companion essay: §14 Bonnō Embedding and the Scam-Detection Mechanism](/en/essays/bonno-embedding/) — the concrete implementation device driving ExPFC's "examination" module (Affective Computing + scam detection)
- [Companion essay: Economies of Precision vs Economies of Scale](/en/essays/precision-economics/) — the strategic positioning in which ExPFC stands (Level 2)
- [日本語版](/essays/external-prefrontal-cortex/)
- [PYOL Mind Mirror](https://ai.pyol.net) — a fraud-awareness tool I run in production, serving as ExPFC's implementation foundation

## Contact

If anything in this essay resonates with you — as a researcher, a critic, or a possible successor — I would welcome hearing from you. Constructive critique or collaboration proposals from neuroscience, neuroethics, cognitive science, AI Safety, or Affective Computing are all welcome via the [contact page](/en/contact/). English and Japanese are both fine.

## References

1. Anderson, J. R. (1996). ACT: A simple theory of complex cognition. *American Psychologist*, 51(4), 355–365.
2. Baars, B. J. (1988). *A Cognitive Theory of Consciousness*. Cambridge University Press.
3. Clark, A. (2013). Whatever next? Predictive brains, situated agents, and the future of cognitive science. *Behavioral and Brain Sciences*, 36(3), 181–204.
4. Damasio, A. R. (1994). *Descartes' Error: Emotion, Reason, and the Human Brain*. Putnam.
5. Dehaene, S. (2014). *Consciousness and the Brain: Deciphering How the Brain Codes Our Thoughts*. Viking.
6. Felleman, D. J., & Van Essen, D. C. (1991). Distributed hierarchical processing in the primate cerebral cortex. *Cerebral Cortex*, 1(1), 1–47.
7. Friston, K. (2010). The free-energy principle: A unified brain theory? *Nature Reviews Neuroscience*, 11(2), 127–138.
8. Mountcastle, V. B. (1978). An organizing principle for cerebral function: The unit module and the distributed system. In G. M. Edelman & V. B. Mountcastle (Eds.), *The Mindful Brain* (pp. 7–50). MIT Press.
9. Newell, A. (1990). *Unified Theories of Cognition*. Harvard University Press.
10. Phelps, E. A., Lempert, K. M., & Sokol-Hessner, P. (2014). Emotion and decision making: Multiple modulatory neural circuits. *Annual Review of Neuroscience*, 37, 263–287.
11. Radford, A., et al. (2021). Learning transferable visual models from natural language supervision. *Proceedings of the 38th International Conference on Machine Learning*, 8748–8763.
12. Shazeer, N., et al. (2017). Outrageously large neural networks: The sparsely-gated mixture-of-experts layer. *International Conference on Learning Representations (ICLR)*.
13. Tom, S. M., Fox, C. R., Trepel, C., & Poldrack, R. A. (2007). The neural basis of loss aversion in decision-making under risk. *Science*, 315(5811), 515–518.
