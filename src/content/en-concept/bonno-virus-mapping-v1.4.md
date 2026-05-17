---
title: "Bonnō × Scam-Virus Mapping: An Integrated Database and a Study of Human Emotional Structure via Small Neural Networks"
author: "Toshinobu Matsuura"
summary: "The deepest-layer purpose of my research program is to understand the human as a structure of mental afflictions and to visualize their dynamic weighting through a computable coordinate system. I adopt the 2,500 years of internal Buddhist observation as the coordinate system for modern neural-network engineering. Anti-scam (SNS-mediated investment fraud / Pig Butchering Scam) is the most pressing first application of that program. Updated in v1.6 with §0 'The fundamental purpose of the research'; in v1.7 with §16.5 'Personalization and the individual mental-affliction sensitivity profile'; in v1.8 with §0.4.5 'The 3×3 minimum model' and §4.3.0 (a concrete implementation roadmap); in v1.9 with a stylistic sweep into first-person voice; in v2.0 with consistency fixes across eleven points (unified mapping form, References, cost figures updated, §16 numbering corrected, etc.)."
publishedAt: 2026-05-12
updatedAt: 2026-05-17
version: "v2.0"
lang: "en"
license: "CC BY 4.0"
slug: "bonno-virus-mapping"
---

> **Position and status (as of 2026-05-17)**
> This is the Concept Record of the research program I am running. The implementation foundation, [PYOL Mind Mirror](https://ai.pyol.net) (a general fraud-awareness tool), is already running in production. The affliction-mapping and small-neural-network contextual analysis layered on top of it are still in design. This is a 20-year research program, and I will keep updating this record in stages.

> **Translator's note.** This English version is my preliminary translation of the Japanese original. Buddhist terminology in particular is in conservative form for v0.1; the rigorous final wording will be settled in v0.2 in consultation with Buddhist scholars. The term "mental afflictions" corresponds to the Buddhist concept of *bonnō* (煩悩) — in Sanskrit, *kleshas* — the mental states held to cause human suffering, classified into 108 categories.

## Abstract

My research program addresses the rapid expansion of SNS-mediated international investment fraud (Pig Butchering Scam / 殺豬盤), which has caused annual losses exceeding 130 billion yen in Japan, by integrating the Buddhist taxonomy of mental afflictions (108 categories) with the tactics of scam organizations (modeled as computer viruses) into a single database, and by **learning their nonlinear relations through small neural networks.** As a secondary outcome, the program discusses possible contributions to large language model (LLM) research, which currently lacks a structured model of human emotion. By fusing Eastern anthropology and Western engineering methods, the program aims to advance both anti-scam practice and AI research on emotional understanding.

**Keywords**: SNS-mediated investment fraud, Pig Butchering Scam, mental afflictions, behavioral economics, graph neural networks, affective computing, variational autoencoders, Swallow LLM, Eastern philosophy

---

## §0. The fundamental purpose of the research (added in v1.6, §0.4.5 supplemented in v1.8)

This chapter states explicitly the deepest-layer purpose of the research program, prior to the concrete motivation (anti-scam) developed in §1 onward. It was newly added in Concept Record v1.6. What had been touched on only fragmentarily through the discussion of §1–§16 in earlier versions is here articulated as a single fundamental purpose.

### 0.1 Origin — a methodological concern about existing research

The starting point of my research program lies in my own candid question about contemporary research on emotion and on the human.

To the extent that I have been able to survey the field, much of the research that addresses human emotion is centered on neuroscience and brain physics (fMRI, EEG, neurotransmitters, functional localization). These methods possess precise observational means and have made great progress in recent years. Damasio's somatic-marker hypothesis, Friston's free-energy principle, the affective neuroscience of Phelps and others — all are excellent achievements.

But I could not avoid noticing one limit shared by these methodological approaches: **observation from the outside and physico-chemical reduction may not capture the semantic resolution of human emotion.**

Even when fMRI shows activation of the amygdala, distinguishing whether that activation is "greed," "envy," "haste," or "loneliness" requires reliance on a different vocabulary system — most often the Big Five, the PAD model, Plutchik's wheel of emotions, or Ekman's six basic emotions, all of Western psychology. **The resolution of neural activity and the semantic resolution of emotion are different problems.** And the Western emotion models are all fragmentary systems based on roughly 100 years of research.

### 0.2 Hypothesis — adopt Buddhism as a coordinate system

The hypothesis I then formulated is simple:

> **The system of Buddhism, which has observed the human from the inside for 2,500 years, may be more refined as a coordinate system for understanding the human than any contemporary system of emotion research.**

Buddhism, before being a religion, is the accumulated outcome of thoroughgoing empirical research on the workings of the human mind. The three poisons (greed, aversion, ignorance), the 108 mental afflictions, the five aggregates, the twelve links of dependent origination — these are not abstract doctrines but **descriptive vocabulary systematized as the result of countless practitioners observing their own minds.** They are the most refined description that humanity reached about itself in an age before research institutions and statistics existed.

To treat this not as something to be quarantined as "religion" but as **a body of empirical observation data**, and to handle it in an engineering framework. This is the methodological core of the program.

Concretely:

- **Neuroscience**: observer and observed are separated (the person taking the fMRI ≠ the person whose fMRI is taken); external physical measurement
- **Buddhism**: observer and observed are the same (the practitioner observes their own mind); internal self-description

The two are not in opposition; they are complementary. Neuroscience captures the physical layer; Buddhism provides the coordinate system for the semantic layer. My program **adopts Buddhism as the coordinate system for the semantic layer, and incorporates neuroscientific findings as reinforcement at the physical layer.** This is a new approach not yet seriously attempted anywhere in modern AI research.

### 0.3 An ontological premise — mental afflictions are humanity itself

My program treats the mental afflictions not as "evils to be removed" but as **humanity itself.**

In the traditional understanding (early Buddhism), mental afflictions are the root of suffering, to be removed. But in the development of Mahāyāna Buddhism, particularly in the Yogācāra and esoteric traditions, the formula "**afflictions are themselves enlightenment**" (煩悩即菩提) is reached: the afflictions themselves are the material of awakening. The author's stance is closer to this Mahāyāna understanding.

Concretely:

- **"Loving another person"** is classified as a form of attachment (greed), but it is also the source of compassion
- **"Protecting one's child"** is classified as a mixture of possessiveness, control, and fear (aversion), but it is what makes the survival of the species possible
- **"Seeking truth"** is classified as thirst for knowledge (a form of greed), but it is what makes scholarship possible

Without afflictions, the human is not human. **The human is an animal that lives together with mental afflictions.** My program begins from this premise. Anti-scam (§1–§14) is positioned, under this premise, as the response to a situation in which **a particular aspect of humanity is exploited.**

### 0.4 Aim — dynamic analysis of the moment-to-moment weighting of mental afflictions

What my program ultimately aims at is **the analysis and visualization, by neural networks, of how much weight a person places on which mental afflictions at any given moment.**

For an arbitrary text T, an arbitrary situation C, and an arbitrary individual U:

```
Human state (T, C, U) → V = (w₁, w₂, ..., w₁₀₈)
```

Here wᵢ is the weight of affliction i, **dynamically changing with time.** The moment of reading a scam message, the moment of seeing a photo of one's child, the moment of arguing with one's spouse, the moment of listening to a beloved piece of music — for each, the program visualizes where the energy is concentrated within the 108 dimensions.

This is a means of scam detection and at the same time a **mirror by which the human understands the self.** The External Prefrontal Cortex (ExPFC) introduced in §13 functions, in the anti-scam context, as a "warning device"; in its original context, it functions as a **"mirror of self-understanding."**

### 0.4.5 The implementation starting point — a 3×3 minimum model (added in v1.8)

Implementing the full 108-dimensional form shown in §0.4 in one go is, as discussed in §16.2, technically and operationally difficult. My research program begins implementation from a **minimum model of 9 dimensions: the three poisons (greed / aversion / ignorance) × three subcategories each = 9 dimensions.** This is a verifiable first step that upgrades the program from a philosophical proposal to a proposal carrying a concrete implementation roadmap.

| Three poisons | Three subcategories (from Buddhist canonical texts) | Computational interpretation |
|---|---|---|
| **Greed** (貪) | desire-craving / form-craving / formless-craving | reward and attachment hierarchy (craving for immediate reward / attachment to formed objects / attachment to formless ideation) |
| **Aversion** (瞋) | immediate anger / lasting resentment / inner vexation | error and adversarial time axis (instantaneous anger / sustained resentment / inward affliction) |
| **Ignorance** (癡) | basic ignorance / innate ignorance / conceptual ignorance | structural bugs and learned bugs (missing information / congenital blind spots / mis-segmentation by conceptualization) |

This 3×3 minimum model functions, within the three-tier structure shown in §0.6, as the **first implementation step of Level 3 (the applied tier).** At the same time, it is the **concretization of Level 2** within the hierarchical embedding (Level 1: 3 dim → Level 2: 10–20 dim → Level 3: 108 dim) proposed in §16.2.2.

Why begin with these 9 dimensions:

1. **Buddhological validity is secured**: each subcategory of the three poisons is a traditional classification referenced across multiple canonical texts (e.g., the *Abhidharmakośa*, the *Cheng Weishi Lun*), and can serve as the starting point of agreement-building with Buddhist scholars (at institutions such as Bukkyo University, Komazawa University, and Ryukoku University)
2. **Computationally meaningful**: each dimension corresponds to a concept that modern machine learning can handle — a reward mechanism, a time dynamic, a learning bias — preserving the correspondence between neural-network implementation and Buddhological structure
3. **Low annotator load**: with 9 dimensions, inter-annotator agreement of κ > 0.7 is realistically achievable, fitting the first stage of the coarse-to-fine curriculum learning of §16.2.2
4. **Verifiable on scam cases**: typical SNS-investment-scam patterns can be described within the 9 dimensions — for example, "desire-craving (immediate financial greed) × basic ignorance (gap in financial knowledge)" or "form-craving (romantic fantasy) × innate ignorance (avoidance from loneliness)" — making it tractable as a Phase 1 MVP (§7)

The concrete computational definition is given in §4.3.0; the connection to the implementation roadmap is in §7. This minimum model is the **concrete starting point** of the proposal and provides a workable footing for dialogue with international AI Safety researchers, domestic Buddhist scholars, and computational psychologists, showing that the research program is not a philosophical aspiration but a verifiable engineering plan.

### 0.5 Relation to §1 onward — anti-scam is "the most pressing application"

Against the fundamental purpose stated in this chapter, the anti-scam work developed from §1 onward is its **most pressing application.**

Why begin with anti-scam:

1. **High social urgency**: SNS-mediated investment fraud causes annual damage exceeding 130 billion yen in Japan; an immediate response is required
2. **Ethical legitimacy of data collection**: the public benefit of victim protection underwrites the ethical legitimacy of personal-data collection
3. **Technical verifiability**: the objective metric "scam-detection accuracy" allows the validity of the affliction mapping to be tested
4. **PYOL Mind Mirror as an existing implementation foundation**: the existing tool I run (a fraud-awareness tool currently in production) provides a venue for data collection and verification

But the scope of the program does not stop at anti-scam. In addition to the generality of application discussed in §13.8 (investing, health, gambling, love, cults, politics, SNS, childcare, the elderly), the program holds a broader social value as **a foundational technology by which the human understands the self and the other.**

### 0.6 The strategic significance of this chapter

This chapter organizes the research program as a **three-tier structure**:

```
┌─────────────────────────────────────────────┐
│  Level 1: Methodological tier (this chapter) │
│  Understanding the human via Buddhism        │
│  as a coordinate system                      │
│  — complement / alternative to neuroscience  │
└─────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────┐
│  Level 2: Strategic tier (§15)               │
│  Economies of Precision vs Economies of Scale│
│  — deliberate positioning in a domain Big AI │
│    cannot enter                              │
└─────────────────────────────────────────────┘
                      ↓
┌─────────────────────────────────────────────┐
│  Level 3: Applied tier (§1–§14, §16)         │
│  Anti-scam + ExPFC + affliction embedding    │
│  — application to the most pressing social   │
│    problem                                   │
└─────────────────────────────────────────────┘
```

Level 1 is the philosophical and methodological core of the program; Level 2 is its implementation strategy; Level 3 is its application. The appeal of the program to the international AI Safety community (Anthropic, DeepMind, MIRI, LessWrong) may, in principle, be stronger at Level 1 (a structural coordinate system for humanity) than at Level 3 (anti-scam).

### 0.7 Conclusion (§0)

The deepest-layer purpose of this program is not anti-scam. It is **to understand the human as a structure of mental afflictions, to visualize their dynamic weighting in a computable coordinate system, and thereby to provide a foundation by which the human more accurately understands the self and the other.**

Anti-scam is the first application of this. Over the 20-year span of the research, applications will progressively expand. My program stands, as **a synthesis of 2,500 years of internal Buddhist observation and modern neural-network engineering**, in a domain that no one has yet seriously attempted.

---

## 1. Motivation and problem awareness

### 1.1 The rapid expansion of SNS-mediated investment fraud

According to the Japanese National Police Agency (NPA), the annual damage from SNS-mediated investment and romance fraud in Japan rose from approximately 45.5 billion yen in 2023 to over 137 billion yen by October 2025 (provisional) — roughly tripling in just two years (NPA, 2025). It now exceeds the total of "special fraud" and stands as the largest category of property crime in modern Japan. Damage is concentrated in middle-aged and older adults (40s–70s), with an average loss of about 11 million yen per case.

### 1.2 The structural limit of existing countermeasures

The intervention methods proven over the past 30 years against impersonation fraud ("It's-me" fraud) — voice screening at financial institution counters, ATM withdrawal limits, automatic call-recording devices, etc. — all presupposed **physical interruption by a third party.** SNS-mediated investment fraud, however, has a communication structure in which no physical third party can intervene between perpetrator and victim, and these intervention methods are structurally rendered ineffective.

### 1.3 The epistemological limit of detection logic

Existing detection approaches (keyword matching, broker-list matching, anomaly detection in behavior) all attempt to capture **surface signals.** But scam organizations change their surface in short cycles (broker names rotate every 2–4 weeks), so surface-dependent detection is essentially a chase from behind.

### 1.4 Reframing the question

From these limits, my program reframes the question:

> "Rather than surface signals, can we structurally model **the human vulnerability that scams exploit**?"

This is a research object of cognitive science, behavioral economics, and neuroeconomics, but their existing knowledge remains a fragmentary aggregation; an integrated structural model has yet to be presented. My program approaches the unfinished work of structuring from a new angle, by combining **an Eastern view of the human (the Buddhist theory of mental afflictions) with modern engineering (neural networks).**

---

## 2. Foundations of thought

### 2.1 The Mindseed philosophy: "Protect Your Only Life"

The philosophical core of this research is the *Protect Your Only Life* (PYOL) framing presented by Mindseed Research. It positions scam victimization **not as a financial loss but as a violation of life itself**, and treats countermeasures not as a technical problem but as an **ethical** one.

### 2.2 Mismatch thinking (from Samsung SDS)

The author internalized during his career at Samsung SDS in Korea a sales philosophy that "**mismatch is the best fit**" — the empirical principle that unexpected combinations across disciplines yield the strongest market differentiation. My program adopts that thesis as a guideline for interdisciplinary research. The combination of anti-scam (criminology, law) and Buddhism (religious philosophy) is a typical mismatch, and for that very reason can produce a resolution unattainable by conventional approaches.

### 2.3 The Buddhist understanding of the human: the three poisons and the 108 mental afflictions

At the core of the Buddhist understanding of the human are the **three poisons**: greed, aversion (anger / anxiety), and ignorance (or lack of insight). They capture the root of human suffering in three layers. The further-subdivided **108 mental afflictions** are structured as combinations of six sense faculties × three affect attributes (suffering, pleasure, neutral) × two classifications (defiled, undefiled) × three temporal axes (past, present, future), drawn from Buddhist canonical texts.

This system was refined over more than a millennium of empirical observation as **a comprehensive taxonomy of human suffering.** My program treats it not as "a religious concept" but as **an empirical taxonomy of human emotion** to be used in engineering.

### 2.4 Borrowing from anti-virus engineering

The methods accumulated by the computer-security industry over 30 years — signature matching, heuristic detection, behavioral analysis, sandbox analysis, and vaccines (preemptive immunity) — are the crystallization of an arms race between adaptive attackers and defenders. By modeling the techniques of scam organizations as "viruses," the program transposes those methods into anti-scam.

### 2.5 Philosophical synthesis

Synthesizing the four foundations above, the position of this research can be summarized as follows:

> "Scams are viruses that exploit the mental afflictions of the human.
> We describe those viruses at the resolution of the Eastern view of the human,
> and detect and counter them with Western engineering methods."

---

## 3. The central concept: an integrated database of mental afflictions × scam-viruses

### 3.1 A two-layer model

The core data structure of the research is a two-layer taxonomy and the mapping between them:

```
┌─────────────────────────────────────────────┐
│  Layer 1: Mental-afflictions taxonomy (108) │
│  - exhaustive classification of human       │
│    emotional vulnerability                  │
│  - extracted from Buddhist canon, contrasted │
│    with modern psychology                   │
└─────────────────────────────────────────────┘
              ↑ many-to-many mapping
┌─────────────────────────────────────────────┐
│  Layer 2: Scam-virus database               │
│  - each virus "targets" specific afflictions│
│  - signatures (text, image, behavior pattern)│
│  - variants                                 │
│  - detection rules (regex, AI prompt)       │
└─────────────────────────────────────────────┘
```

### 3.2 Modeling scam tactics as viruses

Each scam tactic is described as a "virus" with the following attributes:

| Attribute | Example |
|---|---|
| Virus ID | SCAM-2025-0047 |
| Type | text / image / behavior / platform / multi-stage |
| Signature | "my uncle is at a financial institution," "20% monthly return" |
| Targeted-affliction tags | greed (B-001), conceit (B-023) |
| Detection rule | regex + AI prompt |
| First observed | 2024-08-15 |
| Last observed | 2025-03-22 |
| Mutation source | SCAM-2024-0031 (previous generation) |
| Severity | critical / high / medium / low |
| Status | active / dormant / retired |

### 3.3 Modeling vulnerabilities as mental afflictions

Each affliction has the following attributes:

| Attribute | Example |
|---|---|
| Affliction ID | B-001 |
| Buddhist name | greed (*ton*) |
| Modern-psychology counterpart | greed / acquisitive desire |
| Three-poisons class | greed |
| Triggering conditions | financial loss, relative deprivation, perceived opportunity |
| Individual-difference factors | economic situation, age, gender, past experience |
| Temporal sensitivity | most sensitive 24–72 hours after an economic shock |
| Related viruses | SCAM-2025-0047, 0048, 0051... |

### 3.4 Many-to-many mapping

Each virus targets multiple afflictions, and each affliction is attacked by multiple viruses. This relationship is not a simple correspondence table but must be described as **a graph structure with intensities (exploitation_strength) and conditions (triggering conditions).**

The intensity range is unified across my research program at **continuous values in [0, 1]** — the same scale as wᵢ in §14.1 and V_min in §4.3.0. In annotation work it is sometimes convenient to use a human-friendly 1–10 integer scale, but the values are normalized to [0, 1] when stored in the database. This allows graph edge weights and affliction vectors to be combined at a single scale.

---

## 4. The need for neural networks

### 4.1 The limits of linear models

Describing the affliction × virus relationship as a simple static matrix cannot capture the following phenomena:

1. **Nonlinearity**: simultaneous stimulation of "greed + loneliness" produces a vulnerability far exceeding the sum of each stimulus alone
2. **Context dependence**: the trigger threshold of the same affliction varies greatly with age, marital status, and economic situation
3. **Temporal dependence**: once an affliction has been stimulated, sensitivity rises for hours or days (the inverse of a cooling-off effect)
4. **Interference effects**: stimulating a different affliction changes the sensitivity to the first
5. **Individual specificity**: with the same stimulus, responses differ depending on personal history

These are phenomena that **neural networks are particularly good at capturing** (Goodfellow et al., 2016).

### 4.2 The principle of "ultra-small" neural networks

My program adopts not large language models (tens to hundreds of billions of parameters) but **specialized small models in the range of one million to tens of millions of parameters**, for the following reasons:

| Aspect | Large LLM | Small specialized model |
|---|---|---|
| Interpretability | difficult (black box) | possible (e.g. attention visualization) |
| Compute cost | several yen per inference | less than 1/10,000 of that |
| Operating environment | requires cloud | runs on smartphone or embedded device |
| Training data | large amount required | a few thousand items suffice |
| Specialized accuracy | reduced by generalization | high |

This is consistent with the philosophy I, as a former infrastructure engineer, hold to: "**use mature technology at the necessary and sufficient scale.**"

### 4.3 Candidate architectures

#### 4.3.0 The 3×3 minimum model — the shared first implementation step for all architectures (added in v1.8)

The 3×3 minimum model introduced in §0.4.5 is adopted as the shared input/output dimensionality of all candidate architectures in this section (4.3.1–4.3.4):

```
Input / output vector V_min = (g₁, g₂, g₃, a₁, a₂, a₃, i₁, i₂, i₃) ∈ ℝ⁹

  Greed:      g₁ = desire-craving, g₂ = form-craving, g₃ = formless-craving
  Aversion:   a₁ = immediate anger, a₂ = lasting resentment, a₃ = inner vexation
  Ignorance:  i₁ = basic ignorance, i₂ = innate ignorance, i₃ = conceptual ignorance

Each value is a continuous variable in [0, 1] — the minimum implementation
of V in the mapping f: (T, C, U) → V from §14.1.
```

How it fits each candidate architecture:

- **4.3.1 (GNN)**: construct the affliction layer with 9 nodes; add nodes when expanding beyond Level 2
- **4.3.2 (VAE)**: adopt the 9-dimensional structure as the prior of the latent space z (10–30 dim)
- **4.3.3 (Small Transformer)**: use a 9-dimensional multi-label head as the output
- **4.3.4 (Multi-task learning)**: attach a 9-dimensional output as one head atop the shared backbone

Implementation order (mapping onto §7 "Implementation Roadmap"):

1. **Phase 1 (6 months)**: build a scam-detection MVP on V_min (9 dim); target inter-annotator κ > 0.7
2. **Phase 2 (6 months)**: expand to Level 2 (10–20 dim); finalize dimensions after Buddhist-scholar review
3. **Phase 3 onward**: progressively expand to Level 3 (108 dim); finalize after cross-checking across multiple canonical texts and schools

By this staged expansion, the orthogonality and sparsity problems discussed in §16.2 are mitigated as coarse-to-fine curriculum learning, while each stage produces a verifiable deliverable (the MVP).

#### 4.3.1 Graph Neural Networks (GNN)

Mental afflictions, viruses, and users are nodes; relationships are edges. Representative methods include GCN (Kipf & Welling, 2017) and GAT (Veličković et al., 2018).

```
Nodes:
  - Affliction nodes: 108 (embedding dim. 64–128)
  - Virus nodes: variable (hundreds to thousands)
  - User nodes: variable (existing PYOL users)

Edges:
  - Affliction ↔ virus (attack intensity)
  - User ↔ affliction (individual vulnerability)
  - Virus ↔ virus (mutation relation)

Learning tasks:
  - Given user × context, predict the most-activated affliction
  - Given a piece of text, estimate matching viruses
```

#### 4.3.2 Variational Autoencoders (VAE)

Compress a user's emotional state into a **low-dimensional continuous latent space** (Kingma & Welling, 2014).

```
Input: user profile + past search history + context
        ↓ encoder (small NN)
Latent vector z (10–30 dim, continuous)
        ↓ decoder
Output: predicted reactions / vulnerability profile
```

By analyzing the structure of the latent space, one can compare the **108 afflictions empirically arrived at by Buddhism with the classifications statistically discovered by machine learning.** Whether they coincide or are complementary is itself a research question.

#### 4.3.3 Small Transformers

For context-dependent detection, the program adopts a small version of the Transformer family (Vaswani et al., 2017). The attention mechanism makes it possible to visualize **which words are stimulating which affliction**, providing interpretability.

#### 4.3.4 Multi-task learning

Multiple tasks are learned in a shared representation:
- virus detection
- affliction classification
- user-vulnerability prediction
- scam-stage estimation

A shared backbone with multiple heads (Caruana, 1997).

### 4.4 Swallow LLM as a base model

Swallow LLM (Fujii et al., 2024), jointly developed by Tokyo Institute of Technology and the National Institute of Advanced Industrial Science and Technology (AIST), is an open-source LLM with continual pretraining specialized for Japanese. It is published on HuggingFace in three sizes (7B / 13B / 70B).

Swallow is appropriate for this research for the following reasons:

1. **Japanese specialization**: strong on Japanese scam text and Buddhist terminology
2. **Open source**: fine-tuning is permitted; freely usable for research
3. **Academically validated**: performance has been evaluated in multiple papers
4. **Realistic compute requirements**: the 13B model can be fine-tuned with 1–2 GPUs

Concrete usage:
- Adopt Swallow as a large-scale knowledge base
- Build small specialized NNs (GNN/VAE etc.) on top
- Fine-tune on the scam-detection task
- Acquire the depth of Japanese understanding while preserving interpretability

---

## 5. Secondary contribution to AI research

### 5.1 The absence of emotional understanding in modern AI

Large language models learn from vast amounts of text "the words used to talk about emotions," but this is **mimicry of the language about emotion, not understanding of emotion** (Bender et al., 2021; Marcus & Davis, 2019). What is specifically absent:

| Necessary element | Current state |
|---|---|
| Structured representation of emotion | vague word-embedding vectors |
| Coupling with behavioral prediction | sparse observational data |
| Quantification of trigger conditions | almost none |
| Cross-cultural emotional vocabulary | English-centered, Eastern concepts thin |
| Grounding | reliant on text alone, behavioral data weak |

### 5.2 What this research can offer

If this program succeeds, it can offer the following to modern AI research:

1. **A structured taxonomy**: a computable classification of human emotion that maps the 108 mental afflictions to modern psychology
2. **Behavioral grounding**: emotional states grounded in the real behavioral record of scam victimization
3. **Synthesis of Eastern and Western knowledge**: an integrated combination of Buddhism (East) and behavioral economics (West)
4. **A public dataset**: anonymized "afflictions × viruses × responses" data released for academic use

### 5.3 Implications for AI safety

In recent years, **human manipulation** has drawn attention as an important field of AI safety research (Carroll et al., 2023; Park et al., 2024) — the question of how AI may recognize and exploit human psychological vulnerability.

The afflictions × viruses database of this research has the character of **"a complete list of how AI could manipulate humans."** Making it public knowledge can:

- Make AI misuse more predictable
- Provide a basis for AI safety evaluation benchmarks
- Provide material for designing AI that intentionally avoids exploiting human vulnerability

The terrain is ethically delicate, but the position is that **transparency and publication** are safer than concealment.

---

## 6. Data sources and acquisition strategy

### 6.1 Public-sector data

| Source | Content | Method |
|---|---|---|
| NPA SOS47 | monthly damage statistics, typical methods | PDF, statistics |
| National Consumer Affairs Center | consumer complaints nationwide | text, PDF |
| Financial Services Agency (FSA) | warning broker list | HTML (already incorporated into PYOL) |
| Consumer Affairs Agency | misleading-representation cases | published pages |
| FBI IC3 | US annual report | English, PDF |
| Interpol / Europol | international cases | English, requires cooperation request |
| UNODC | Southeast-Asia organized-crime reports | English, annual |

### 6.2 Private-sector data

| Source | Content |
|---|---|
| GASO (Global Anti-Scam Org) | international scam-case database |
| Chainalysis | crypto scam addresses |
| NHK / Asahi / Bungei Shunjū | investigative journalism cases |
| Academic papers | Kimura (2025), UNODC research, etc. |

### 6.3 Primary data (collected in-house)

| Source | Content |
|---|---|
| **PYOL Mind Mirror user reports** | actual scam text, screenshots |
| Public ads on X / Telegram / Instagram | underground-job and investment-scam recruitment |
| Interviews with scam victims | chronological description of cognitive lock-in |
| Testimony from former compound workers | internal playbook |

**The fact that the PYOL existing data-collection mechanism becomes the largest data source for this research** is the strategic advantage of my program.

### 6.4 Ethical considerations

- All data are anonymized
- Cases containing personally identifiable information are excluded or partially masked
- Ethical review (when conducted as joint research with universities)
- Treatment that avoids retraumatization of victims

---

## 7. Implementation roadmap

### Phase 1: Foundation (6 months)

1. Definition of the affliction taxonomy (initial version simplified to 30–50 items)
2. Dialogue with Buddhist scholars and psychologists
3. Manual tagging of an initial 50–100 viruses
4. Organization of existing PYOL data

### Phase 2: Prototype (6 months)

5. Finalize the database schema
6. Implement a simple detection engine
7. Prototype small NN (GNN or VAE)
8. Integration experiment with the existing PYOL system

### Phase 3: Validation (6 months)

9. Internal evaluation (accuracy on past cases)
10. External evaluation (joint research with universities, preparation for publication)
11. Analysis of user reactions
12. Ethical review

### Phase 4: Publication and release (6 months)

13. Preprint release (arXiv / J-STAGE)
14. Submission to peer-reviewed journals (cognitive science, information engineering)
15. Open-data release
16. International conference presentation

**Total: a 24-month (2-year) minimum-viable research program.**

---

## 8. Organizational structure

### 8.1 Mindseed Research as a hub

The author serves as director and hub of the research program, overseeing:

- Overall vision
- Data collection and management
- Connections with external collaborators
- Intellectual-property and ethics management

### 8.2 Necessary external collaborators

| Role | Candidates | Engagement |
|---|---|---|
| Academic advisor (victimology of fraud) | Kimura (Nihon University) | once or twice a month |
| Academic advisor (Buddhist philosophy) | Bukkyo University / Komazawa University / Ryukoku University | once a month |
| Academic advisor (cognitive science) | research labs at the University of Tokyo, Kyoto, Tohoku | once a month |
| Machine-learning engineer | 1–2 master's-course interns | about 20 hours / week |
| Designer | spouse | as needed |

### 8.3 Compute resources

- Swallow LLM inference: HuggingFace Inference API or local GPU
- Fine-tuning: GPU cloud (50,000–200,000 yen / month)
- Database: existing PYOL infrastructure + extensions

**A scale realistically achievable within the budget of a sole-proprietorship.**

---

## 9. Academic positioning and relation to existing research

### 9.1 Prior research (related fields)

#### Victimology of fraud
- Kimura, A. (2025). *On the deception process and countermeasures of SNS-mediated investment and romance fraud: a cognitive- and social-psychological consideration*. Journal of Crisis Management Research.
- Whitty, M. T. (2013). *The scammer's persuasive techniques model: development of a stage model.* British Journal of Criminology.

#### Behavioral economics
- Kahneman, D. (2011). *Thinking, Fast and Slow.*
- Thaler, R. H., & Sunstein, C. R. (2008). *Nudge.*

#### Affective computing
- Picard, R. W. (1997). *Affective Computing.*
- Cambria, E., et al. (2020). *SenticNet 6: ensemble application of symbolic and subsymbolic AI.*

#### Neural networks
- Kipf, T. N., & Welling, M. (2017). *Semi-supervised classification with graph convolutional networks.*
- Veličković, P., et al. (2018). *Graph Attention Networks.*
- Kingma, D. P., & Welling, M. (2014). *Auto-encoding variational Bayes.*
- Vaswani, A., et al. (2017). *Attention is all you need.*

#### Japanese LLMs
- Fujii, K., et al. (2024). *Continual pre-training for cross-lingual LLM adaptation: enhancing Japanese language capabilities.* Swallow technical report.

#### Buddhist philosophy / theory of mental afflictions
- *Abhidharmakośa* (5th century, Vasubandhu)
- *Mahāprajñāpāramitāśāstra* (attrib. Nāgārjuna)
- Nakamura, H. (1981). *Bukkyōgo Daijiten* (Great Dictionary of Buddhist Terms).

#### Neuroscience / cognitive science (added in §13)
- Mountcastle, V. B. (1978). An organizing principle for cerebral function: the unit module and the distributed system. *In The Mindful Brain.*
- Felleman, D. J., & Van Essen, D. C. (1991). Distributed hierarchical processing in the primate cerebral cortex. *Cerebral Cortex*, 1(1), 1–47.
- Anderson, J. R. (1996). ACT: a simple theory of complex cognition. *American Psychologist*, 51(4), 355.
- Newell, A. (1990). *Unified Theories of Cognition.* Harvard University Press.
- Baars, B. J. (1988). *A Cognitive Theory of Consciousness.* Cambridge University Press.
- Dehaene, S. (2014). *Consciousness and the Brain.* Viking.
- Friston, K. (2010). The free-energy principle: a unified brain theory? *Nature Reviews Neuroscience*, 11(2), 127–138.
- Clark, A. (2013). Whatever next? Predictive brains, situated agents, and the future of cognitive science. *Behavioral and Brain Sciences*, 36(3), 181–204.
- Damasio, A. R. (1994). *Descartes' Error: Emotion, Reason, and the Human Brain.* Putnam.
- Phelps, E. A., Lempert, K. M., & Sokol-Hessner, P. (2014). Emotion and decision making: multiple modulatory neural circuits. *Annual Review of Neuroscience*, 37, 263–287.
- Tom, S. M., Fox, C. R., Trepel, C., & Poldrack, R. A. (2007). The neural basis of loss aversion in decision-making under risk. *Science*, 315(5811), 515–518.

#### AI / machine learning (added in §13)
- Shazeer, N., et al. (2017). Outrageously large neural networks: the sparsely-gated mixture-of-experts layer. *ICLR.*
- Radford, A., et al. (2021). Learning transferable visual models from natural language supervision (CLIP). *ICML.*
- LeCun, Y., Bengio, Y., & Hinton, G. (2015). Deep learning. *Nature*, 521(7553), 436–444.

### 9.2 The originality of this research

To my knowledge, no research simultaneously satisfies the following three points:

1. Adopting the Buddhist taxonomy of mental afflictions as an engineered data structure
2. Modeling scam tactics as computer viruses
3. Integrated learning of the two by small neural networks

This is the embodiment of the "mismatch thinking" mentioned earlier, and it is **a research blank space.**

---

## 10. Limits and ethical considerations

> **Cross-references on ethical issues**
> I discuss ethical issues in three places across this Concept Record: (a) §10.3 — general / cross-cutting ethical issues (this section); (b) §13.11 — philosophical and ethical scope (specific to the brain-inspired architecture); (c) §14.12 — ethical considerations specific to affliction vectorization. These will be consolidated into a single ethical guideline in a future version, with the present sections as its starting points.

### 10.1 Epistemological limits

- Human emotion may be only incompletely captured
- Data bias (victims tend to fall into specific demographics)
- The difficulty of translating Buddhist concepts into modern terms
- Cultural transferability (applicability outside Japan)

### 10.2 Technical limits

- Small NNs have an upper bound of expressive capacity
- Scam organizations will adopt countermeasures after the research is published (an arms race)
- Securing continuity of data collection

### 10.3 Ethical issues

- **Treatment of individual vulnerability data**: classifying an individual as "easy to target" may affect their self-perception
- **Public release of scam techniques**: a degree of public release can be exploited for criminal learning (the dilemma of public information)
- **Misuse for AI manipulation**: a correspondence table of "afflictions × stimuli" can also become a tool by which a malicious AI manipulates humans

These will require ethical guidelines to be drafted in parallel with research progress.

---

## 11. Expected ripple effects

### 11.1 Direct outcomes

- Improved detection accuracy of SNS-mediated investment fraud
- Preventive warnings tailored to individual users
- A theoretical foundation for educational content

### 11.2 Indirect ripple effects

| Field | Ripple content |
|---|---|
| Cognitive science | a structured model of human emotion |
| AI research | material for emotionally-aware AI |
| Buddhist studies | a case of modern applied research |
| Behavioral economics | a systematic description of biases |
| International coordination | Japan-side contribution to UNODC, Interpol |
| Education | curriculum material for prevention education |

### 11.3 Social value

Beyond rescuing victims, the program holds value as **a transformation of the harm itself into the wisdom of humanity** — which may be regarded as the ultimate form of the Mindseed philosophy.

---

## 12. Conclusion

My program proposes, against the concrete and urgent social problem of SNS-mediated investment fraud, **a research program that integrates the Buddhist theory of mental afflictions with modern neural networks — a research program of East-West synthesis.**

It is technically implementable, and the data foundation already exists in PYOL Mind Mirror. Academically, it is an approach without parallel in the world; and as a side effect, contributions to AI research and cognitive science can be expected.

What characterizes the program is that the starting point of the research is not "academic interest" but **the wish for a society that does not produce victims.** This sits at the nodal point of my personal history: more than 40 years of large-corporate engineering, the experience of running a grassroots BBS in the 1990s, the present connection to welfare practice, and the experience of fraud victimization by someone close to me.

It is positioned as a 20-year-span research program, "slowly and surely, but steadily."

---

## 13. Brain-inspired architecture and the External Prefrontal Cortex concept (supplement)

> **A standalone essay is also published.** The core of this §13 (13.1 / 13.5 / 13.6 / 13.7 / 13.8 / 13.11) has been rewritten for neuroethics + AI Safety readers as a [standalone essay, *The External Prefrontal Cortex (ExPFC)*](/en/essays/external-prefrontal-cortex/). For citation or critique, that standalone version is the preferable target. The §13 here is more comprehensive and also covers the implementation roadmap (§13.2–§13.4, §13.10).

### 13.1 Reframing the problem — why refer to the structure of the brain

In developing this program, it has been found that the human cognitive system — in particular the hierarchical modular structure of "**five-sense input → parallel processing by specialized brain regions → integrated judgment by the prefrontal cortex**" — is an extremely useful design guide for the present research system. This is an insight derived as the intuitive proposal of an active engineer, and it is consistent with the established findings of modern neuroscience and cognitive science.

### 13.2 The hierarchical modular structure of human cognition

In neuroscience it is established knowledge that the human brain has a hierarchical and modular information-processing architecture (Mountcastle, 1978; Felleman & Van Essen, 1991).

```
[Sensory input layer]
  Visual    → visual cortex (occipital lobe)
  Auditory  → auditory cortex (temporal lobe)
  Somatic   → somatosensory cortex (parietal lobe)
  Olfactory → olfactory bulb / olfactory cortex
  Gustatory → gustatory cortex

           ↓ each module processes independently

[Intermediate integration layer]
  Parietal association area (spatial integration)
  Temporal association area (semantic integration)

           ↓

[Final integration layer]
  Prefrontal cortex (PFC)
  - executive function, decision-making
  - inhibitory control, working memory
  - value judgment and social judgment

           ↓

[Output to action / consciousness]
```

This structure, as **parallel distributed processing (PDP) + hierarchical integration**, is the core finding of late-20th-century cognitive neuroscience.

### 13.3 Existing related AI architectures

Attempts to reproduce this structure in AI form a major current of modern AI research:

| Approach | Representative work | Relation to my program |
|---|---|---|
| Mixture of Experts (MoE) | Shazeer et al., 2017; GPT-4, Gemini, Mixtral | specialized subnetworks + gating |
| Multi-modal Fusion | CLIP (Radford et al., 2021), GPT-4V | integrated representation of heterogeneous inputs |
| Cognitive Architectures | ACT-R (Anderson, 1996), SOAR (Newell, 1990) | modularized cognition |
| Global Workspace Theory | Baars (1988), Dehaene (2014) | the theory of an integrated workspace |
| Predictive Processing | Friston (2010), Clark (2013) | hierarchical minimization of prediction error |
| Brain-Inspired AI | Numenta, DeepMind | imitation of the brain's anatomical structure |

These are individually distinct research programs, but they share the common intellectual goal of "**algorithmizing the cognitive structure of the human.**" My program takes its place in this current, with the further fusion of **an Eastern view of the human (the Buddhist theory of mental afflictions) and the concrete task of anti-scam.**

### 13.4 Applying brain-inspired architecture to this research system

Reformulating the integrated affliction × scam-virus judgment system as a brain-inspired architecture yields the following:

```
┌─────────────────────────────────────────────┐
│       Brain-inspired scam judgment system    │
├─────────────────────────────────────────────┤
│                                              │
│  [Visual module] ←─ input: screenshots       │
│    function: UI structure judgment, logo     │
│              matching, chart-image authenticity│
│                                              │
│  [Linguistic module] ←─ input: message text  │
│    function: scam-virus signature matching,  │
│              semantic analysis by AI         │
│                                              │
│  [Behavioral module] ←─ input: user-action  │
│                          history             │
│    function: anomaly-pattern detection,      │
│              estimating signs of haste /     │
│              fixation                        │
│                                              │
│  [Relational module] ←─ input: contact-      │
│                          channel info        │
│    function: SNS-inflow analysis, identity   │
│              evaluation of the counterpart   │
│                                              │
│  [Temporal module] ←─ input: chronology of   │
│                       the conversation       │
│    function: estimation of stage-model       │
│              position, long-term pattern     │
│              recognition                     │
│                                              │
│       ↓ each module reasons independently   │
│       ↓                                      │
│  ┌──────────────────────────────────────┐  │
│  │  Integration layer (analog of the    │  │
│  │  prefrontal cortex)                   │  │
│  │  - weighted integration of module    │  │
│  │    outputs                            │  │
│  │  - estimate which of the 108         │  │
│  │    afflictions are currently active  │  │
│  │  - compute overall scam probability  │  │
│  │  - judge necessity and timing of     │  │
│  │    intervention                       │  │
│  └──────────────────────────────────────┘  │
│       ↓                                      │
│  [Output: warning + interpretation +         │
│           recommended action]                │
│                                              │
└─────────────────────────────────────────────┘
```

This architecture **uses the small neural networks discussed in §4 (GNN, VAE, Transformer) per module**, integrating them at the upper layer. Concretely:

- Visual module: a convolutional net (CNN) or Vision Transformer
- Linguistic module: small Transformer (Swallow base)
- Behavioral module: time-series model (LSTM / Temporal Transformer)
- Integration layer: graph neural net (GNN) or attention-based fusion

### 13.5 The neuroscientific mechanism of scam victimization

As a theoretical foundation of the program, here is how scam victimization can be described neuroscientifically.

It is established knowledge that **under strong emotional states, activity of the prefrontal cortex (PFC) is suppressed**, as demonstrated by functional magnetic resonance imaging (fMRI) studies (Phelps et al., 2014; Tom et al., 2007).

The mechanism by which a scam succeeds can be described as follows:

```
[1] The scammer launches an emotional overwhelming
    - expectation of gain (stimulating greed)
    - fear of loss (stimulating anxiety)
    - imposition of urgency (stimulating haste)
    - relationship of trust (stimulating loneliness)

         ↓

[2] The amygdala (emotional center) becomes hyperactive

         ↓

[3] PFC activity is relatively suppressed
    - degraded inhibitory control
    - reduced working-memory capacity
    - distorted risk evaluation
    - loss of long-term perspective

         ↓

[4] Integrated judgment fails
    - the unease "isn't this a scam?" is suppressed
    - only fragments of fact are accepted; the whole is unseen
    - the cognitive option of seeking a third party's opinion does not engage

         ↓

[5] The action that would normally be avoided is executed
    - a large transfer
    - avoidance of consulting the police
    - concealment from the family
```

That is, **scam victimization can be redefined as a temporary functional failure of the prefrontal cortex.** This is also consistent with Damasio's (1994) somatic-marker hypothesis: a failure of the frontal lobe disrupts the integration of emotion and reason.

### 13.6 The External Prefrontal Cortex concept

From the above understanding, a new definition of the role of this research system is derived:

> **"PYOL Mind Mirror is a device that supplies integrated judgment from outside, in place of the prefrontal cortex of a victim that has fallen into functional failure."**

This is named **External Prefrontal Cortex (ExPFC).**

Functional requirements of ExPFC:

| Function | Description |
|---|---|
| Multi-modal integration | integrates the visual, linguistic, behavioral, relational, and temporal modules |
| Surrogate judgment under emotional suppression | operates independently even when the user's PFC has failed |
| Optimal-timing judgment | estimates when intervention is possible before the cognitive lock-in is complete |
| Interpretable output | presents "why a warning is issued" in a form the user can understand |
| Surrogate value judgment | makes the value judgment "this may be a scam" explicitly |

This concept positions the relation of AI and the human **not as "an autonomous judging device" but as "part of an extended cognition,"** providing a new point of discussion for neuroethics and the philosophy of mind.

### 13.7 The five-senses metaphor and the "examination" module

Translating the human five senses into the scam context yields the following mapping:

| Human sense | Correspondence in anti-scam |
|---|---|
| Vision | fake-platform screens, broker logos, deepfake ads |
| Hearing | the scammer's voice, AI-synthesized voice, video calls |
| Touch | the bodily experience of executing a deposit |
| Smell (intuition) | meta-cognitive unease ("something feels off") |
| Taste (examination) | careful evaluation of the truth of presented information |

What is notable is that the scammer's strategy focuses on **over-stimulating the visual / auditory / "olfactory" senses of reassurance, while making the user skip "taste" (examination).**

The core role of ExPFC is then:

> **"To act, as an external device, in place of the 'examination' module that the user has skipped."**

This is the precise formulation of the philosophical core of scam judgment.

### 13.8 Generality of application

The ExPFC concept is not limited to anti-scam. Inappropriate decisions due to PFC dysfunction occur across all areas of human life:

| Area | Isomorphic problem |
|---|---|
| Investing | revenge trading, FOMO (fear of missing out), failure to cut losses |
| Health | impulsive overeating, avoidance of exercise, delay in medical consultation |
| Gambling | the "next time I'll win" addiction cycle |
| Romance / partner choice | choosing dangerous partners, difficulty leaving DV relationships |
| Cult / religious fraud | giving away one's entire wealth in an exalted state |
| Politics / society | yielding to demagoguery, amplifying hatred toward opposing camps |
| SNS | impulsive posting, flame wars, harassment |
| Childcare | emotional abuse, inappropriate discipline |
| Elderly | judgment-function decline in early-stage dementia |

For all of these, an ExPFC-style support device may be effective. This research thus has the scope of **fundamental research on supporting human decision-making.**

### 13.9 Relation to existing research programs and interdisciplinary positioning

My program stands at the intersection of several traditionally independent disciplines:

```
                    Neuroscience
                       ↑
                       │
  Buddhist philosophy ←── My program ──→ AI / machine learning
                       │
                       ↓
                  Cognitive psychology
                       │
                       ↓
              Behavioral economics / criminology
```

It is a research program that fuses five traditionally independent disciplines, addressing questions unreachable by any of them alone. The specific related research programs are:

| Program | Institution | Relation |
|---|---|---|
| NeurIPS Workshops on Human-AI Decision Making | international conference | directly related |
| Affective Computing | MIT Media Lab | computational treatment of emotion |
| Brain-Inspired AI | DeepMind, Numenta | brain-imitation methods |
| Cognitive Tutors | educational-technology field | application of external cognitive support |
| Predictive Processing | Friston group | integrative theoretical background |
| AI Alignment / Safety | Anthropic, OpenAI, etc. | understanding human intent |
| Neuroethics | neuroethics | the ethical issues of ExPFC |

The originality of this program lies in integrating these with **"an Eastern view of the human + the concrete application of anti-scam."**

### 13.10 Implications for the research program

Augmenting §7 (the implementation roadmap) in light of this section:

#### Phase 1 extension: design the modular structure in advance
- define the scope of each "sensory module"
- choose the architecture of the integration layer (attention-based fusion recommended)

#### Phase 2 extension: per-module prototypes
- develop and evaluate each module independently first
- add the integration layer last

#### Phase 4 extension: publish on the ExPFC concept
- in parallel with the anti-scam paper, submit a separate ExPFC concept paper
- present at neuroethics / AI Safety conferences

### 13.11 Philosophical and ethical scope

The ExPFC concept raises deep questions about the relation between humans and technology:

1. **Autonomy**: is reliance on AI judgment a loss or an extension of autonomy
2. **Locus of responsibility**: who is responsible for a decision made under ExPFC advice
3. **Individual differences**: the right of those who do not wish for ExPFC intervention
4. **Misuse potential**: what happens if ExPFC is hijacked by a malicious agent
5. **Dependence**: does the user's own frontal lobe atrophy
6. **Fairness**: does inequality in access to ExPFC produce inequality in the quality of judgment

These overlap with the central topics of AI ethics and must be treated continuously as ethical considerations of my program. The points raised in this section are related to §10.3 (general / cross-cutting ethical issues) and §14.12 (ethics specific to affliction vectorization), and will eventually be consolidated into a single ethical guideline.

### 13.12 Conclusion (§13)

This research, which begins from anti-scam, is, when reconstructed neuroscientifically, redefined as the more universal research program of **building an external device that supports human decision-making (External Prefrontal Cortex).**

The Buddhist taxonomy of mental afflictions functions as the **output vocabulary** of this device. That is, ExPFC explains "your present state has affliction X activated," helping the user deepen self-understanding and recover autonomous judgment.

This is the philosophical position that places AI **not as "a black-box judging device" but as "a mirror that helps the human understand themselves."** It is the deepest technical and ethical implementation of the Mindseed philosophy of "regaining the calm self."

---

## 14. Vectorization of mental afflictions and the scam-detection mechanism (supplement)

### 14.1 Conceptual definition — the affliction-embedding space

I define the affliction embedding as the following three-way relation:

```
f: (T, C, U) → V = (w₁, w₂, ..., w₁₀₈),  wᵢ ∈ [0, 1]

  T: an arbitrary text
  C: the situation / context (time of day, medium, relationship, cumulative behavior, etc.)
  U: the individual's mental-affliction sensitivity profile (detailed in §16.5)
  V: a 108-dimensional affliction-stimulation vector
```

Here wᵢ represents **"how strongly text T, in situation C, stimulates affliction i of individual U."** The value range is normalized to [0, 1]. This is exactly the same mapping as the "human state (T, C, U) → V" presented in §0.4.

In earlier versions of this record (up to v1.4), I had described f as `f: T → V` — a function of T alone. But when I added §16.5 in v1.7, it became clear that judgment does not close at the level of text alone: V varies with the situation C and the individual U as well — that is, this is **a three-way relation.** I unified this §14.1 to the three-way form in v2.0.

Through this mapping, every text is represented as a point in the **affliction-embedding space** (with individual U and context C fixed as parameters).

This is positioned in the lineage of **embedding-representation learning** as developed in Word2Vec, BERT, CLIP, and so on, but it is distinctive in that **the meaning of the embedding space corresponds directly to "human psychological vulnerability."** Conventional embeddings learn things like "semantic similarity of words" or "correspondence between images and text"; the program learns "the action on human emotion."

### 14.2 Operational definition of scam judgment

For an arbitrary text T, the scam probability P(scam|T) is decomposed via the affliction vector V as follows:

```
P(scam|T) = g(V(T), C(T), S(T))
```

Where:
- V(T): affliction-stimulation vector
- C(T): contextual information of the text (medium, situation, counterpart)
- S(T): source / origin information
- g: the judgment function that integrates these

By this decomposition, **scam judgment is reduced to a pattern-recognition problem in a vector space.**

### 14.3 Characteristic signatures of scam vectors

From empirical observation and theoretical consideration, the affliction vectors of scam text are believed to share the following common features:

#### Feature 1: concentrated stimulation of a specific affliction

Rather than mildly stimulating multiple afflictions, scam text **strongly stimulates a specific one.**

```
Vector of legitimate text:
  affliction A: 0.3, B: 0.2, C: 0.4, ...  generally low to medium

Vector of scam text:
  affliction A (greed):     0.92 ★★★
  affliction B (loneliness): 0.78 ★★★
  affliction C (urgency):    0.85 ★★★
  affliction X (others):     0.05–0.10
```

If we compute the **standard deviation** of the vector, the scam case is clearly higher.

#### Feature 2: a suppression pattern of cautionary afflictions

Scams are designed not only to stimulate but to **simultaneously suppress afflictions related to caution:**

```
Affliction suppression (negative stimulation):
  - doubt: "trust me," "keep this secret"
  - prudence: "if you don't decide now, it ends"
  - urge to verify: "better not consult your family"
```

This is a **"suppression structure"** not seen in legitimate advertising; it is a decisive feature of scams.

#### Feature 3: coexistence of contradictory stimuli

"Easy to earn" (greed stimulation) + "no risk" (fear suppression) + "telling only you" (sociality stimulation) — **the simultaneous presentation of appeals that are logically incompatible.** Combinations that would not stand in a legitimate economic activity are frequently observed in scams.

### 14.4 Distinguishing from legitimate advertising — the limit of a single criterion

The affliction-stimulation profile alone cannot perfectly separate legitimate advertising from scams, because **legitimate advertising also stimulates afflictions:**

| Industry | Main stimulated afflictions |
|---|---|
| Cosmetics | conceit, envy, attachment to beauty |
| Diet | anxiety, vanity, self-loathing |
| Real estate | desire for security, status, possession |
| Automobiles | conceit, desire for freedom, superiority |
| Investment funds | greed, anxiety, desire for security |
| Insurance | fear, family love |

These are legitimate business activities. If only affliction stimulation is the criterion, **all advertising will be classified as "scam"** — a false-positive overdetection.

### 14.5 The need for composite testing

To avoid overdetection, judgment is designed as **multi-dimensional composite testing:**

| Dimension | Content |
|---|---|
| 1. Affliction vector | stimulation intensity, pattern, suppression structure |
| 2. Source attribution | identifiability of the originator |
| 3. Context | public post vs one-to-one DM, type of medium |
| 4. Action demand | immediate transfer, account opening, sending personal information |
| 5. Temporal pattern | imposition of urgency, deadlines |
| 6. Network | the set of similar postings, bot-likeness |

Through the integrating judge g, scams and legitimate advertising are distinguished with high accuracy.

### 14.6 The principle of source attribution — a legally grounded discrimination axis

The starting-point observation:

> "If an ad has nothing — no organization name, nothing to identify its origin — then it is not really an ad. There must always be some explicit company name, organization name, or account."

This is a legally and regulatorily important observation. In Japan:

- **Act against Unjustifiable Premiums and Misleading Representations**: the duty to identify the advertiser
- **Act on Specified Commercial Transactions**: the duty to display business-operator information
- **2023 amendment regulating stealth marketing**: the duty to indicate that something is an advertisement

That is, **legitimate ads are legally obliged to identify their source.** Conversely:

```
[source identified] + [strong affliction stimulation] = legitimate ad
[source unclear]    + [strong affliction stimulation] = highly likely a scam
```

This is a far more powerful axis of discrimination than the affliction vector alone. The system of this program **performs affliction-stimulation analysis and source analysis simultaneously, so as to avoid overdetection.**

Concrete source-verification items:

| Item | Scam characteristic |
|---|---|
| Company name | absent or fictitious |
| Corporate registration number | absent |
| Address | absent or overseas (US / UK / Hong Kong pretense) |
| Contact | only LINE / Telegram, no phone number |
| FSA registration number | absent or fabricated |
| Website | provisional, no operator information |
| Privacy policy | absent or machine-translated |
| Specified Commercial Transactions notice | absent |

These absences are also **legal violations**, so the detection logic has a legal basis.

### 14.7 The advantage at the abstraction level

The strategic advantage of the affliction-vectorization approach is that **it fights one level higher in abstraction:**

```
[Concrete level] scammers change their methods every month
  ↓
[Mid level]   rephrasing, new names, new platforms
  ↓
[Abstract level ← this approach] the afflictions targeted cannot be changed
```

However the concrete scam techniques evolve, **the structure of ultimately exploiting human vulnerability is invariant.** By capturing this invariance, a detection system that responds to unknown techniques becomes possible.

This is a clear instance of my "**combination of mature logics**":
- the Buddhist theory of mental afflictions (2,500 years)
- the legal duty of source identification (decades)
- pattern-recognition engineering (70 years)

By integrating three mature logics, my program counters a new problem (SNS-mediated investment fraud).

### 14.8 Implementation architecture

The implementation of this detection mechanism takes the following form:

#### Step 1: affliction-embedding model

```
Base model: Swallow-13B (Tokyo Tech / AIST)
  ↓
Fine-tuning:
  - training data: pairs of (text, 108-dim affliction tag), several thousand items
  - loss function: multivariate regression or classification
  ↓
Output model: text → 108-dim vector
```

#### Step 2: source-analysis module

```
Input: HTML metadata, URL, text inside images, etc.
Processing: rule-based + small classifier
Output: source-attribution score
```

#### Step 3: integrating judge

```
Inputs:
  - affliction vector (108-dim)
  - source-attribution score
  - contextual information
  ↓
Processing: a small neural net (a few layers, interpretable)
  ↓
Outputs:
  - scam probability
  - list of primary stimulated afflictions
  - explanation of "why this was judged a scam"
```

#### Step 4: interpretation layer

```
Output to the user:
  "This message:
   - strongly stimulates greed at 87%
   - suppresses prudence at 12%
   - the source (company name, contact) cannot be confirmed
   - similarity 89% to past pig-butchering-style scams
   → very likely a scam"
```

Not a black box, but **a design that presents the basis of the judgment**, is the ethical core of the program.

### 14.9 Application to general text classification

I believe affliction embedding can extend well beyond anti-scam, as **a general scale for measuring psychological influence on humans.** The application space is wide, but here I limit myself to the four areas I want to prioritize in practice:

| Priority | Area | Application |
|:---:|---|---|
| 1 | **Clinical psychology / mental health** | analysis of the emotional distribution of a client's speech; for example, distinguishing "attachment-driven" from "aversion-driven" depressive states to inform therapeutic choice |
| 2 | **Advertising ethics / consumer protection** | automatic detection of excessively affliction-inflaming advertising (anxiety, haste, status-desire). A natural extension of anti-scam, on the same implementation base |
| 3 | **Ethical evaluation of AI-generated text** | analysis of the affliction biases of LLM outputs. A strategic connection point with AI Safety research |
| 4 | **Education / mentoring of successors** | clarification of the structure of persuasive writing; teaching readers to recognize cognitive biases. Fits naturally with the 20-year horizon of cultivating successors |

Other possibilities exist as well — analyzing the affliction-stimulation structure of political propaganda; psychological-structure comparison of literary and artistic works; detection of cult / brainwashing persuasion structures; cross-cultural comparison of affliction sensitivity; ethical-judgment work on the boundary between "incitement" and "enlightenment" — but for a 20-year program I want to focus first on the four above.

This may become a new foundation for affective-computing research.

### 14.10 The incentive structure of SNS operators

The starting-point observation:

> "On the company side, the SNS makes more money when there's a flame war, so they don't really stop it."

This is a structural truth of the contemporary internet economy. The SNS-platform revenue model:

```
User engagement time → ad impressions → revenue
       ↑
       │ amplified by
       │
flame wars, conflict, strong emotion, addictive viewing, provocation
       ↑
       │ includes
       │
scam posts, misinformation, inflammatory content
```

That is, SNS operators **derive revenue directly from content that stimulates afflictions.** Expecting them to self-regulate is structurally contradictory.

The conclusion that follows from this observation:

> **Countermeasures must be implemented on the user side, not on the platform side.**

My program (PYOL Mind Mirror) is designed precisely as a user-side tool — the right approach to this structural problem.

In the longer term:

- legal clarification of platform responsibility
- international coordination on content regulation
- alternatives to the ad-revenue model itself

will be needed; until then, **user-side self-defense tools** are the only realistic countermeasure.

### 14.11 Risk of overdetection and countermeasures

If affliction vectorization is too strong, **legitimate economic activity and communication may be misjudged as scams.** Countermeasures:

| Countermeasure | Description |
|---|---|
| Source-attribution check (§14.6) | exclude legally registered originators |
| Context filter | distinguish public ads from one-to-one DMs |
| Cumulative-behavior analysis | judge by a sequence of actions, not a single one |
| Transparent misdetection reporting | allow users to feed back "this was a misdetection" |
| Stepwise threshold adjustment | three levels: strong warning / caution / informational |
| Thoroughness of explanation | always present why the warning was issued |

So long as the judgment is **"warning" rather than "block,"** the harm of misdetection is minimized. A design that leaves the final judgment to the user is desirable both ethically and practically.

### 14.12 Ethical considerations

Ethical considerations of affliction-vectorization technology:

1. **Misuse potential**: a technology that understands the affliction-stimulation structure of text **can also be a tool for crafting more sophisticated scams**
2. **Manipulation detection vs freedom of expression**: where does "scam" end and "strong opinion" begin
3. **Cultural bias**: does Buddhist affliction classification function appropriately in non-Buddhist cultures
4. **Personal privacy**: the ethics of subjecting individual speech to affliction analysis
5. **Value judgment by AI**: the rightness of an AI declaring "you are being stimulated to greed"
6. **Risk of dependence**: do users abdicate their own judgment

These are continuing considerations; I plan to develop ethical guidelines in parallel with development. This section (ethics specific to affliction vectorization) is related to §10.3 (general / cross-cutting issues) and §13.11 (ethics specific to ExPFC), and will eventually be consolidated into a single ethical guideline.

### 14.13 Conclusion (§14)

Text analysis through affliction embedding is the technical implementation mechanism of the philosophical core of this program — **"directly capturing human vulnerability."**

Particularly important findings:

1. **Concentrated stimulation of specific afflictions + suppression of cautionary afflictions** as a scam-specific signature
2. **Composite judgment with source attribution** to avoid overdetection
3. **A strategy at the abstraction level** that is robust against changing techniques
4. **The structural limits of SNS platforms** make user-side tools indispensable

This mechanism is positioned as the **concrete implementation mechanism** of the External Prefrontal Cortex concept introduced in §13. That is:

> **"Map text into an affliction vector, visualize from its shape the action on psychological vulnerability, and act on behalf of the user's examination module (frontal-lobe function)."**

This becomes the core technology of the program.

---

## §15. Economies of Scale and Economies of Precision — the strategic positioning of my program

> **Note.** §15 is reproduced here as part of the Concept Record. A standalone, more detailed essay version (which integrates the incentive-asymmetry analysis from §14.10) is available at [Economies of Precision vs Economies of Scale](/en/essays/precision-economics/).

### 15.1 Starting-point observation

My program starts from the following observation about how today's AI — both general AI and generative AI — handles "affliction-stimulating text":

> "It's the same with AI and generative AI. When it comes to prohibited words, they simply block by string match. Even for problems that could be solved by reading the sentence, you can see the intent of not wanting to spend AI compute resources on it."

This is not merely a technical observation. It is a deep insight into the **economic structure** by which today's large-scale AI / SNS platforms have selectively chosen "shallow processing." This section systematizes that observation as the strategic positioning of the program.

### 15.2 The reality of keyword-filter dependence in modern AI

The major generative-AI providers (OpenAI, Google, Anthropic, Meta) and the major SNS platforms (X, Facebook, Instagram, TikTok) typically operate content judgment in a two-tier structure:

| Tier | Processing | Cost (as of May 2026) | Accuracy |
|---|---|---|---|
| Tier 1: keyword / regex filter | prohibited-word lists, URL blacklists, hash matching | minimal (< $0.0000001 per item) | surface only |
| Tier 2: ML classifier | binary / multi-class classification by lightweight model | small (≈ $0.00001 per item) | medium |
| Tier 3 (rare): contextual understanding (low-cost LLM) | semantic analysis by GPT-4o mini, Claude Haiku 3.5, etc. | medium ($0.0001–$0.001 per item) | high |
| Tier 3 (rare): contextual understanding (high-end LLM) | deep analysis by Claude Opus, GPT-5, etc. | large ($0.01–$0.10 per item) | highest |

In actual operation, more than 99% of traffic is processed at Tiers 1–2; Tier 3 is invoked only in limited cases. **This is not a technical limit but an economic choice.**

### 15.3 Economic structural analysis: why the giants do not read deeply

Suppose X (formerly Twitter) were to put every post of a single day (estimated 500 million) through a low-cost LLM (at, say, $0.0005 per item):

- 500 million × $0.0005 = $250,000 per day
- Annual: ≈ $91 million
- A small percentage of X's estimated annual ad revenue ($20–25 billion)

In strict numerical terms, that no longer means "not economically viable." LLM inference cost dropped one to two orders of magnitude between 2024 and 2026, and is likely to keep falling. But what I want to emphasize is: **even when cost falls, the structural barrier is somewhere else.** The incentive asymmetry I discuss in §15.4 is the real barrier.

If instead we applied a high-end LLM (deep context, multi-turn reasoning, source verification) to every single post, we would still be in the dollars-per-item range, and the annual total would still run into the billions. But my point here is not the per-item price — it is **the structure by which SNS operators derive revenue from affliction-stimulating content,** which remains a constraint independent of inference cost.

Furthermore, as discussed in §14.10, **SNSs derive revenue from affliction-stimulating content**, so even if deep analysis became economically feasible, the structural incentive to implement it would remain weak.

### 15.4 The blind spots of the giants — the "can-but-won't" domain

What this analysis reveals is that a wide **"can-but-won't" domain** exists in modern AI:

| Domain | Why the giants settle for shallow processing | Resulting unaddressed problem |
|---|---|---|
| Contextual analysis of fraudulent DMs | one-to-one communication is small in scale and low in attention | rise of pig-butchering scams |
| Detection of psychological manipulation through afflictions | the boundary with free expression is unclear | sophisticated manipulation goes unaddressed |
| Protection of vulnerable people (elderly, isolated) | per-segment optimization is costly | harm concentrates in specific demographics |
| Culturally-context-dependent judgment | low ROI for specific languages such as Japanese | local scams are missed |
| Long-term tracking of cumulative behavior | data retention and computation are heavy | the eight-stage scam playbook cannot be addressed |

These are not technically infeasible. **They are not implemented because economic rationality does not support them.**

### 15.5 The strategic positioning of the program — Economies of Precision

My program (PYOL Mind Mirror) stands on the opposite economic principle:

| Axis | Big AI / SNS (Economies of Scale) | PYOL Mind Mirror (Economies of Precision) |
|---|---|---|
| Processing target | all content worldwide | the specific text received by an individual user |
| Volume | billions of items per day | a few to a few hundred items per day per user |
| Per-unit cost | $0.000001–$0.00001 | $0.01–$0.10 |
| Depth of judgment | keyword / pattern match | affliction vector + context + cumulative behavior |
| Purpose | removing illegality / TOS violations | protecting individual vulnerability |
| Final judge | the platform | the user themselves |
| Scaling strategy | one-to-all | one-to-one (deep) |

**Key principle:**

> Today's AI is optimized for Economies of Scale, and in doing so it abandons Economies of Precision.
> The abandoned domain is precisely the legitimate domain of activity for this program.

This is the clearest instance of my mismatch-thinking philosophy discussed in §3. **Where the giants go wide and shallow, my program goes narrow and deep.** That very asymmetry is the strategic advantage of the program.

### 15.6 Applicability to isomorphic problems

The structure "Economies of Scale vs Economies of Precision" is observed isomorphically across many social domains beyond anti-scam:

| Domain | Economies of Scale (giants) | Economies of Precision (this-program type) |
|---|---|---|
| Medicine | mass screening, standard care | personalized precision medicine, deep reading of individual history |
| Law | template contracts, general terms | deep examination of individual cases |
| Education | mass curriculum | personalized tutoring optimized to the individual |
| Mental health | screening questionnaires | contextual understanding of each person |
| Child protection | keyword surveillance | contextual reading of relationship and developmental stage |
| Employment matching | job-board matching | understanding of an individual's long-term career trajectory |

In each case, the domain is one that the giants have given up on for reasons of economic rationality, and an AI tool that goes deep into individual cases can offer decisive value. The methods this program establishes may serve as a **template** for horizontal expansion into these other domains.

### 15.7 Connection to §14 (affliction vectorization) and §13 (ExPFC)

The strategic positioning of this section is closely tied to other sections of the program:

- **§14 (affliction vectorization)**: this is the concrete implementation mechanism of "Economies of Precision." Where the giants settle for keyword filtering, my program reads deeply through the 108-dimensional affliction-stimulation structure.
- **§13 (ExPFC)**: this is the external surrogate for individual prefrontal-cortex function made possible by Economies of Precision. Impossible for mass AI; possible for individual AI.
- **§7 (small neural networks)**: the design choice of light, distributed, individually-optimized is the infrastructural choice that realizes Economies of Precision.
- **§3 (mismatch thinking)**: betting in the opposite direction of the giants is itself the embodiment of the mismatch strategy.

That is, §15 occupies the position of providing the **strategic frame** for the entire program.

### 15.8 Strategic implications

Practical implications drawn from this section:

1. **My program does not compete with Big AI.** It exists not in the contested zone but in the domain the giants have abandoned.
2. **It does not pursue scale.** Rather than maximizing user count, it pursues depth for each individual user.
3. **It accepts per-unit cost.** It pays a per-judgment cost on the order of cents in exchange for deep analysis.
4. **It is built for per-individual optimization**, customized to the affliction tendencies and vulnerability profile of each user.
5. **It is highly compatible with open-sourcing.** Because it does not aim at Economies of Scale, publishing the code does not put it at competitive disadvantage. Rather, social value increases.
6. **It provides grounds for policy proposals.** The analysis that "the giants are structurally unable to solve this problem" is a basis for the policy legitimacy of supporting user-side tools.

### 15.9 Conclusion (§15)

The author's intuitive observation — "AI simply blocks by string match" — exposes a fundamental structure of today's AI economy. **There is a domain that Big AI, optimized for Economies of Scale, is structurally barred from entering.** That domain is precisely where mental affliction, vulnerability, context, and relationship matter — the most human domain.

My program deliberately stands in that domain. **It chooses precision over scale. Depth over breadth. The individual over the mass.**

This is not an abandonment of economic rationality. It is **the choice of a different economic principle.** And this choice is one of the most realistic paths to protecting human dignity in the age of AI.

> Where Big AI goes wide and shallow, we go narrow and deep.
> That asymmetry is the legitimate reason the program exists.

---

## Appendix A: Glossary — this program's own terms and the general technical terms used

If you are a first-time reader, I recommend skimming this glossary before the main body. It will speed up your reading of my own terms ("mental afflictions," "three poisons," "ExPFC," "affliction vector," "Economies of Precision," "mismatch thinking," and so on).

A note on the word **"virus"**: in this Concept Record I use it as a metaphor for *computer virus* (malware), not biological virus (pathogen). The methods that the computer-security industry has accumulated over 30 years — signature detection, heuristics, vaccines (preemptive immunity) — are what I want to transpose into anti-scam, which is why I adopt this metaphor.

| Term | Definition |
|---|---|
| Mental afflictions (*bonnō*) | In Buddhism, the fundamental mental states that cause human suffering. As mental functions, they are subdivided into 108 categories |
| Pig Butchering Scam (*殺豬盤*) | The international name for SNS-mediated investment fraud (Chinese: "to fatten people up like a pig before slaughter") |
| Virus (in this research's definition) | A scam tactic with a detectable signature, designed to target a specific affliction |
| Three poisons | The three roots of human suffering in Buddhism: greed, aversion (anger / anxiety), and ignorance |
| Mismatch thinking | The empirical principle, which I picked up at Samsung SDS, that unexpected combinations across disciplines yield the strongest market differentiation |
| Affective Computing | The research field that addresses the recognition, processing, and generation of emotion by computers |
| Swallow LLM | An open-source Japanese-specialized large language model developed jointly by Tokyo Institute of Technology and AIST |
| External Prefrontal Cortex (ExPFC) | The central concept of my program. An AI device that supplies integrated judgment from outside, in place of a human prefrontal cortex that has fallen into functional failure due to emotional arousal |
| Prefrontal cortex (PFC) | The anterior part of the frontal lobe, responsible for decision-making, inhibitory control, and working memory |
| Mixture of Experts (MoE) | An AI architecture composed of specialized subnetworks and a gating mechanism that selects which subnetwork to use for a given input |
| Brain-inspired architecture | An AI system design that takes the anatomical and functional structure of the brain as reference |
| Five-senses metaphor | An expression in which the visual / linguistic / behavioral / relational / temporal modules of the anti-scam system are mapped onto the human five senses |
| Examination module | The cognitive function of carefully evaluating the truth of information; the function scammers deliberately make the user skip |
| Bonnō Embedding | A representation learning that maps text to a 108-dimensional affliction-stimulation vector |
| Scam signature | The common affliction-vector feature of scam text: concentrated stimulation of specific afflictions + suppression of cautionary afflictions |
| Source attribution | The verifiability of the originator (company name, contact, registration number) of an advertisement or message; an important axis distinguishing scams from legitimate advertising |
| Suppression structure | A characteristic feature of scams: text design that simultaneously stimulates (greed, loneliness) and suppresses cautionary afflictions (doubt, prudence) |
| False positive (overdetection) | Misclassifying legitimate economic activity or communication as a scam |
| Flame-war economics | The observation that SNS platforms structurally cannot self-regulate because they derive revenue from affliction-stimulating content |
| Economies of Scale | The economic principle that pursues per-unit cost reduction through mass processing. The basic model adopted by Big AI and SNS — wide, shallow, automatic, minimal per-unit cost |
| Economies of Precision | The economic principle that finds value in deep processing of individual cases. The position of the program — narrow, deep, individually optimized, accepting per-unit cost |
| Keyword-filter dependence | The operational reality that, for reasons of economic rationality, Big AI and SNS avoid deep contextual analysis and rely on surface keyword matching |
| The "can-but-won't" domain | A domain that is technically possible but not implemented by the giants because economic rationality does not support it: contextual analysis of scam DMs, affliction detection, protection of the vulnerable, and so on |
| Strategic positioning | The strategic choice of this program to deliberately occupy the "Economies of Precision" domain that the giants have abandoned for Economies of Scale |
| One-to-one (deep) scale | A scaling strategy that performs deep processing for each individual user. Contrasted with one-to-all (shallow) |

## Appendix B: Data sources (recap)

[See §6 in the main text.]

## Appendix C: Candidate paper titles

1. "Bonnō × Scam-Virus Mapping: An Integrated Database — A Buddhism × Engineering Synthesis Toward Structural Understanding of Human Emotion"
2. "Bonnō-Virus Mapping: A Buddhist-Engineering Framework for SNS-Investment Fraud Detection"
3. "The Affliction-Embedding Space: A Machine-Learning Representation of Human Emotion through the Lens of Victimology of Fraud"
4. "Eastern Anthropology and AI Safety: A Research Program Starting from Anti-Scam"

---

## Appendix D: Notes on a staged-publication strategy (from a 2026-05-13 dialogue with an AI)

A record of the AI's evaluation when I candidly asked an AI (Claude Opus 4.7) "is this research worth doing?" **Recorded as a reference observation, not as a decision.**

### E.1 Summary of the AI's value evaluation

| Section | The AI's evaluation | Reason |
|---|---|---|
| §15 Economies of Scale vs Economies of Precision | **strongest** | could become an independent contribution to AI-society discourse beyond anti-scam. A formalization of the structural blind spot of Big AI in economic terms is not yet sufficiently systematized. The horizontal expansion to medicine / education / law shown in §15.6 elevates it to a general framework. |
| §14 Bonnō Embedding | **strong** | possible attention in cultural psychology / HCI as an Eastern alternative to existing emotion-computation research (Ekman / PAD / Plutchik / Big Five). 108 dimensions are a resolution unattainable by Western models. |
| §13 ExPFC | **interesting** | a human-centered complementary framework absent from the current AI alignment discussion. |

### E.2 Points of caution (frank notes from the AI)

1. To turn the 108 afflictions into ML features requires substantial labor on **operational definitions** of religious terms. Collaboration with religious scholars and psychologists is essentially required. A finished form by one person alone is unrealistic.
2. To assert "world-first" or "novel," a careful comparison with existing research (manipulation detection, persuasion mining, social engineering detection, computational rhetoric) is required. The literature review alone is half a year to a year.
3. Doing the entire 20-year span single-handedly, without funding, is hard. Prioritization is needed.

### E.3 The recommended staged-publication strategy (proposed by the AI)

Partial publication in the order **§15 → §14 → §13** was identified as the realistic, value-maximizing route. Reasons:

- §15 is strong enough to be published as an independent paper (low dependence on implementation)
- The PYOL Mind Mirror app already exists and can serve as a demonstration bench
- The publication of §15 can come within reach in half a year to a year
- §14 and §13 can be progressively reinforced within the framework set by §15

### E.4 An admonition to myself

> Do not aim at perfection; reliably bring out parts.

This was the AI's strategic advice as the most effective approach over a 20-year span. The trap experienced during the development of CineBASIC — "being defeated by the fluctuation of generative AI" — also lies in wait for my program; **the key is not to attempt a complete form at once.**

### E.5 Reservation

The above is the AI's external view; I am under no obligation to agree. The direction and prioritization of the research are ultimately my judgment. Re-discussion is planned for the next session.

---

## §16. Implementation challenges and response strategies (supplement)

### 16.1 Introduction — why this chapter is added

This chapter is included to record, candidly, the "essential challenges that will inevitably become walls in the implementation phase" — challenges that I re-recognized while reading back through Concept Record v1.4.

My program runs on a 20-year span, and as argued in §15 it stands on Economies of Precision. It therefore should not rush into implementation. Rather than aiming at a complete form at once, the program first acknowledges challenges candidly, holds response strategies as hypotheses, and improves precision through verification. This chapter is the starting point of that posture: an explicit demonstration that **"the challenges that will draw criticism are recognized."**

Three challenges are described below in the form of (1) the locus of the challenge, (2) the response strategy, and (3) remaining issues. Each response strategy is a hypothesis at this stage, not a finalized solution.

### 16.2 Challenge 1: orthogonality and sparsity of the 108-dimensional embedding

#### 16.2.1 The locus of the challenge

For the affliction embedding f: (T, C, U) → V (108 dimensions) introduced in §14.1, the 108 dimensions are not necessarily mathematically independent (orthogonal). Many afflictions overlap strongly in meaning: "greed" and "attachment," "conceit" and "desire for superiority," "haste" and "anxiety." If they are simply treated as 108 independent dimensions, the machine-learning model risks falling into something like a multicollinearity state, and may not be able to accurately separate and identify specific emotional triggers.

A still more serious problem is **the consistency of labeling**. If, for the same scam text, multiple annotators are split on "is this greed or attachment?", the training data itself becomes noisy. This is the most concrete manifestation of the issue the AI raised in Appendix D.2: "establishing operational definitions of religious terms requires substantial labor."

#### 16.2.2 Response strategy — hierarchical embedding structure

Rather than demanding the independence of 108 dimensions from the start, build the structure hierarchically:

```
Level 1 (3 dim): the three poisons (greed, aversion, ignorance)
                 — the basis vectors. Inter-annotator agreement
                 is most easily obtained here.

Level 2 (9–20 dim): mid-level classification
                    Base (fixed in v1.8): the 3×3 minimum model
                    from §0.4.5 (9 dim)
                      greed     → desire-craving / form-craving / formless-craving
                      aversion  → immediate anger / lasting resentment / inner vexation
                      ignorance → basic / innate / conceptual ignorance
                    Expansion examples: greed → desire for objects,
                    status, sex, security, savings, superiority
                    Final Level 2 dimensionality fixed after
                    review by Buddhist scholars.

Level 3 (108 dim): detailed classification
                   The final form after expert review.
```

The 3×3 minimum model that anchors Level 2 is introduced in §0.4.5 and its computational embedding into the candidate architectures is defined in §4.3.0.

The learning strategy is **coarse-to-fine curriculum learning**: first build a stable classifier at Level 1, then progressively raise the resolution at lower levels. Technically, this is compatible with Hierarchical Multi-label Classification or with Poincaré Embedding (Nickel & Kiela, 2017), which is well-suited to representations of hierarchical structure.

Annotation work also becomes feasible: starting from "which of the three poisons does this belong to?" makes inter-annotator kappa easier to secure. An operational rule can be set: progress to Level 2 only after κ > 0.7 has been achieved at Level 1.

#### 16.2.3 Remaining issues

- Even after hierarchization, if multicollinearity remains at Level 3 (108 dimensions), additional processing is needed: measuring the effective dimensionality with PCA, enforcing sparse solutions with L1 regularization, etc.
- The agreement points between Buddhist scholars and psychologists may differ across cultures and schools (whether the views of the different schools at Bukkyo University, Komazawa, Ryukoku, etc., can be integrated)
- How the three-poisons classification itself maps to modern psychology's Big Five or PAD models is a question to be examined separately

### 16.3 Challenge 2: tracking dynamic changes in scam techniques

#### 16.3.1 The locus of the challenge

§14.7 argued that "afflictions are invariant; techniques are mutable." That is a strategic-level argument, but it does not touch the operational-level implementation details. As described in §3.2, scam techniques (viruses) have a lifespan from first observation to last observation, and they mutate on a monthly cycle. Training data is by definition past data at the time of observation, and against new variants, **catastrophic forgetting** and **dataset shift** (the divergence between training distribution and operational distribution) occur.

If GNN (§4.3.1) is used as the model, the affliction nodes can be fixed but the affliction-to-virus edges are dynamically updated. The operational focus becomes how to suppress the cost of real-time retraining.

#### 16.3.2 Response strategy — separation into invariant and variable layers

| Layer | Content | Retraining frequency |
|---|---|---|
| Invariant layer | affliction embedding (human psychology does not change at less than generational time scales) | annual |
| Variable layer | concrete virus detection (techniques mutate monthly) | monthly |

Cost reduction through incremental learning:

- **Replay buffer**: keep past virus data and rehearse on it to prevent catastrophic forgetting
- **Elastic Weight Consolidation (EWC)** (Kirkpatrick et al., 2017): protect important parameters
- **GraphSAGE** (Hamilton et al., 2017): retrain only subgraphs through its sampling mechanism

The choice of "small NN" made in §4.2 pays off here. Heavy bases such as Swallow-13B can be updated quarterly, while the detection head on top (a few MB to a few hundred MB) is retrained monthly — a two-stage configuration that fits within the GPU-cloud budget of 50,000–200,000 yen per month assumed in §8.3.

In addition, **the combined use of a signature layer and a structural-analysis layer**:

- **Signature layer**: an explicit virus database, version-managed, with new entries added on discovery
- **Structural-analysis layer**: affliction vector + suppression pattern (the signature features in §14.3) — invariant

Even for unknown techniques, if the structural-analysis layer captures the signature of "concentrated stimulation of specific afflictions + suppression of cautionary afflictions + coexistence of contradictory stimuli," detection is possible. This is the concrete form in which the program transposes the wisdom of anti-virus engineering (§2.4).

#### 16.3.3 Remaining issues

- How to detect the cumulative degradation of accuracy under incremental learning (designing a "shelf life" evaluation metric for the model)
- The follow-up strategy if scam organizations, after this research is published, deliberately blur their affliction signatures
- The trade-off between personalization at the individual user level and generalization

### 16.4 Challenge 3: the timing paradox of ExPFC intervention

#### 16.4.1 The locus of the challenge

The ExPFC introduced in §13.6 is a device that acts in place of the user's PFC under emotional overwhelm. However, it is a fact in cognitive psychology that **humans tend to reject or ignore external logical advice precisely when their emotions are most aroused**. Even if the ExPFC issues a warning that "this is highly likely a scam" to a user under dopamine release, the message may not reach.

§14.11 stated the policy "warning, not blocking" and "the final judgment is the user's." But that policy faces an effectiveness problem. If the warning does not reach, the very raison d'être of the ExPFC is shaken.

#### 16.4.2 Response strategy — graded intervention + Ulysses contract + third-party notification

**Graded-intervention model**:

| Stage | Score | Intervention |
|---|---|---|
| Tier A (informational) | low | a quiet notice; the user may ignore |
| Tier B (strong warning) | medium | a strong visual interruption; an explicit confirmation dialog |
| Tier C (unconditional block + cooling-off period) | high | 24-hour automatic block; can be released after the cooling-off period |

The basis for Tier C is a cognitive-science approach: **"have the PFC recover during the cooling-off period before judgment is made."** The same idea as a bank's "24-hour transfer freeze."

But unconditional blocking conflicts with the autonomy issue raised in §13.11. The response is **the modern version of the Ulysses contract**:

```
At registration, the user chooses:
  "I, the calm self (the self with a functioning PFC),
   delegate to the ExPFC the right to invoke Tier C,
   so that my emotionally-overwhelmed self does not make
   a misjudgment."
```

This follows the story of Odysseus, who had himself bound to the mast in advance so as not to be drawn to the sirens' song. The form is **a prior contract in which "the calm self" protects "the emotionally-overwhelmed self"**, so that the right of delegation derives from autonomy itself. It has the same structure as the voluntary guardianship in the Japanese adult-guardianship system.

A parallel strategy is **third-party notification**: at high scores, an automatic notification is sent to family members or friends pre-registered by the user. "Your father has just initiated a transaction with a high probability of fraud." Against the situation argued in §1.2 — that SNS-mediated fraud structurally invalidates the intervention of physical third parties — bringing third parties back via the ExPFC is itself a countermeasure.

The core of UI/UX design is to show **"a letter the user wrote in advance"**, not a "warning":

> "To the present you under dopamine release: one month ago, the calm you wrote this..."

The voice is delivered not as that of a third party but as that of the past self. This is an application of the **commitment device** in behavioral economics.

#### 16.4.3 Remaining issues

- If the opt-in rate of the Ulysses contract is low (if many users do not delegate Tier C), is implementing Tier C still meaningful?
- The risk that third-party notification expands the scammer's targets to family members (e.g., family-impersonation scams)
- The decline in effectiveness when "the letter from the past self" feels, after long use, "no longer who I am now"
- Countermeasures against relapse after the block is lifted (still transferring the money 24 hours later)

### 16.5 Challenge 4: personalization and the individual mental-affliction sensitivity profile (added in v1.7)

#### 16.5.1 The locus of the challenge

The mental-affliction embedding f: T → V (108 dimensions) introduced in §14.1 was defined as a mapping from text to a 108-dimensional stimulation vector. But an important issue, that I recognized during the English-translation work on this Concept Record, is that **scam judgment does not close at the level of "text alone."**

The same scam text resonates differently depending on the recipient's state of mind:

- A lonely person → romance-scam type resonates (resonance with the loneliness-affliction)
- A person with strong anxiety about the future → investment-scam type resonates (resonance with the anxiety-affliction)
- A person with strong need for recognition → "special treatment" type resonates (resonance with the conceit-affliction)
- A person carrying anger → conspiracy-theory / divisive-incitement type resonates (resonance with the aversion-affliction)

That is, the actual judgment is a **three-way relation**, and the mapping in §14.1 must be developed as follows:

```
g: (T, C, U) → (P_scam, V_active)

  T = text
  C = situation / context
  U = the individual's mental-affliction sensitivity profile
  P_scam = scam probability
  V_active = list of afflictions primarily activated
```

Here, U is **not merely demographic data** (age, gender, profession), but **a "mental-affliction sensitivity profile" inside the individual's mind**. This is an **incomplete-observation problem of inner information**, which cannot be fully captured by labeling or behavioral observation alone.

The equation `P(scam|T) = g(V(T), C(T), S(T))` in §14.2 generated V via the text T, but a more accurate form is:

```
P(scam) = g(V_text(T, C), V_user(U), context)
```

That is, scam judgment must be captured as **resonance** between the **"mental-affliction-stimulation profile of the text"** and the **"mental-affliction sensitivity profile of the user."** When both vectors simultaneously take high values on a specific affliction, the scam is most effective.

#### 16.5.2 Response strategies (composite approach)

##### Strategy A: progressive personalization

A new user begins from an "average sensitivity profile," and U_i is progressively updated based on the user's behavior, reactions, and self-reports:

- **Phase 0**: U = average profile (general mental-affliction sensitivity)
- **Phase 1**: basic input (optional self-report) — "currently feeling strong anxiety," "feeling lonely," etc.
- **Phase 2**: behavioral observation (clicks, dwell time, warning reactions) for estimation
- **Phase 3**: accuracy improves with accumulated data

This has the same structure as the classical response to the cold-start problem in recommendation systems. Perfect personalization is impossible from the start; precision is built up incrementally.

##### Strategy B: self-reported mental-affliction profiling

A mechanism by which the user voluntarily reports their "recent state of mind":

```
Your recent state (optional, changeable any time):
☐ Strong financial anxiety
☐ Trouble in relationships with spouse or family
☐ Feeling not recognized at work
☐ Carrying strong anger or dissatisfaction
☐ Feeling lonely
☐ Strong health anxiety
☐ Living calmly
```

What is reported is used for personalized judgment at that moment, and is editable / deletable any time. **The act of "putting one's mental afflictions into words" itself is directly connected to the "mirror of self-understanding" function of the ExPFC in §13.** The user contributes to the accuracy of scam detection and at the same time deepens self-understanding.

##### Strategy C: design as a report for the user themselves

The mental-affliction sensitivity profile is positioned not as "data for the AI to judge" but as **"a report by which the user understands themselves":**

- Personalization data is stored, in principle, only on the user's local device
- Only aggregated statistics are stored on the server (privacy first)
- The user can view, edit, and delete their own profile at any time

This design is directly consistent with the fundamental purpose of the research program stated in §0: "a mirror by which the human understands the self."

#### 16.5.3 Remaining issues

- **Complete observation of the inner is in principle impossible**: how to handle depth information that cannot be captured by behavior and self-report (e.g., desires the person is not even aware of, repressed emotions)
- **Time variation**: mental-affliction sensitivity changes with time (life events, health, age, seasons) — the limit of a static profile
- **Ethical issue**: the ethical boundary of an AI "understanding" the inner mind of an individual
- **Misuse potential**: harm from leaks of the mental-affliction sensitivity profile (raising the precision of targeted scams) — the personalized version of the misuse risk discussed in §14.12
- **Connection with the ExPFC in §13**: the ExPFC "substitutes for the dysfunctional PFC," but the precision of the substitution depends on the precision of U
- **Interaction with the hierarchical embedding in §16.2**: should U also be held in the hierarchical structure of three poisons (3-dim) → mid classification → 108-dim?

#### 16.5.4 The author's meta-realization (recorded in v1.7)

This challenge was recognized by me during the work of translating the Concept Record into English. **The meta-observation itself — "if I leave everything to the AI, I am about to overlook something important"** — has the same structure as the fundamental purpose of the research program stated in §0 ("mental afflictions are humanity itself," "mirror of self-understanding").

**The "incompleteness of human understanding"** that the research program addresses is isomorphic to the **"incompleteness of observation"** of the research program itself. That is, my research program has **a self-referential soundness**: it recognizes the limit that human mental-affliction sensitivity cannot be fully captured, and that limit itself becomes the theme of the research.

This suggests, beyond the three-tier structure (Level 1 methodological / Level 2 strategic / Level 3 applied) shown in §0.6, the existence of a **Level 0 = self-reflective tier**. A recursive structure in which the research program includes itself as an object of observation.

### 16.6 Conclusion (§16)

This chapter is not a presentation of complete solutions. It is **the explicit demonstration of the posture that "the challenges are recognized."**

The four challenges discussed in §16 were all touched on at the strategic level in Concept Record v1.4 but were thin on the operational details of the implementation phase. In particular, the personalization problem in §16.5 was first recognized through the English-translation work, and represents an important discovery indicating the self-reflective tier (Level 0) of the research program itself. As long as this program runs on a 20-year span and stands on Economies of Precision (§15), it should not rush into implementation. Consistent with the AI's advice in Appendix D.4 — **"do not aim at perfection; reliably bring out parts"** — the description in this chapter is itself a provisional version, to be improved in precision through verification and dialogue with collaborators.

Each response strategy is **an application of an existing technology** (hierarchical embedding, incremental learning, the Ulysses contract, progressive personalization); none requires new invention. This is consistent with the philosophy of the program (§4.2) to "use mature technology at the necessary and sufficient scale."

Finally, the very writing of this chapter is **evidence of the soundness** of the research program. That I can, immediately after sending the proposal into the world, point to its criticizable holes shows that the program has **a self-critical reflective function built in**. This is an important posture in AI Safety research generally; and the theme of my program — "structuring human vulnerability" — is isomorphic to its own posture of "structuring its own vulnerability." The self-referential structure shown in §16.5 is precisely such an example.

---

## Appendix E: References (works cited in this Concept Record)

The following are the works I cite by author–year in the body, in APA format. I plan to enrich this list in subsequent versions.

1. Anderson, C. (2006). *The Long Tail: Why the Future of Business is Selling Less of More*. Hyperion.
2. Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S. (2021). On the dangers of stochastic parrots: Can language models be too big? *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency (FAccT '21)*, 610–623.
3. Carroll, M., Chan, A., Ashton, H., & Krueger, D. (2023). Characterizing manipulation from AI systems. *Proceedings of the 3rd ACM Conference on Equity and Access in Algorithms, Mechanisms, and Optimization (EAAMO '23)*.
4. Caruana, R. (1997). Multitask learning. *Machine Learning*, 28(1), 41–75.
5. Damasio, A. R. (1994). *Descartes' Error: Emotion, Reason, and the Human Brain*. Putnam.
6. Friston, K. (2010). The free-energy principle: a unified brain theory? *Nature Reviews Neuroscience*, 11(2), 127–138.
7. Fujii, K., et al. (2024). Continual pre-training for cross-lingual LLM adaptation: Enhancing Japanese language capabilities. *arXiv preprint*.
8. Goodfellow, I., Bengio, Y., & Courville, A. (2016). *Deep Learning*. MIT Press.
9. Hamilton, W. L., Ying, R., & Leskovec, J. (2017). Inductive representation learning on large graphs. *Advances in Neural Information Processing Systems*, 30.
10. Kahneman, D. (2011). *Thinking, Fast and Slow*. Farrar, Straus and Giroux.
11. Kingma, D. P., & Welling, M. (2014). Auto-encoding variational Bayes. *International Conference on Learning Representations (ICLR)*.
12. Kipf, T. N., & Welling, M. (2017). Semi-supervised classification with graph convolutional networks. *International Conference on Learning Representations (ICLR)*.
13. Kirkpatrick, J., et al. (2017). Overcoming catastrophic forgetting in neural networks. *Proceedings of the National Academy of Sciences*, 114(13), 3521–3526.
14. Marcus, G., & Davis, E. (2019). *Rebooting AI: Building Artificial Intelligence We Can Trust*. Pantheon.
15. National Police Agency of Japan. (2025). *Statistics on SNS-mediated investment and romance fraud, 2023–2025*.
16. Nickel, M., & Kiela, D. (2017). Poincaré embeddings for learning hierarchical representations. *Advances in Neural Information Processing Systems*, 30.
17. Park, P. S., Goldstein, S., O'Gara, A., Chen, M., & Hendrycks, D. (2024). AI deception: A survey of examples, risks, and potential solutions. *Patterns*, 5(5), 100988.
18. Phelps, E. A., Lempert, K. M., & Sokol-Hessner, P. (2014). Emotion and decision making: Multiple modulatory neural circuits. *Annual Review of Neuroscience*, 37, 263–287.
19. Radford, A., et al. (2021). Learning transferable visual models from natural language supervision. *Proceedings of the 38th International Conference on Machine Learning*, 8748–8763.
20. Shazeer, N., et al. (2017). Outrageously large neural networks: The sparsely-gated mixture-of-experts layer. *International Conference on Learning Representations (ICLR)*.
21. Thaler, R. H., & Sunstein, C. R. (2008). *Nudge: Improving Decisions about Health, Wealth, and Happiness*. Yale University Press.
22. Tom, S. M., Fox, C. R., Trepel, C., & Poldrack, R. A. (2007). The neural basis of loss aversion in decision-making under risk. *Science*, 315(5811), 515–518.
23. Vaswani, A., et al. (2017). Attention is all you need. *Advances in Neural Information Processing Systems*, 30.
24. Veličković, P., et al. (2018). Graph attention networks. *International Conference on Learning Representations (ICLR)*.
25. Whitty, M. T. (2013). The scammers persuasive techniques model: Development of a stage model to explain the online dating romance scam. *British Journal of Criminology*, 53(4), 665–684.
26. Vasubandhu (5th century). *Abhidharmakośa*. Buddhist canonical text on the taxonomy of mental afflictions.

---

## Appendix F: Revision history

- **v1.0** (2026-05-12): first draft. Systematized thought, concept, technology, ethics, and organizational structure. §1–§12 + Appendix.
- **v1.1** (2026-05-12): added §13 "Brain-inspired architecture and the External Prefrontal Cortex concept." Integrated views from neuroscience and cognitive science, formalized the ExPFC concept, the five-senses metaphor, the generality of application, and added related references.
- **v1.2** (2026-05-12): added §14 "Vectorization of mental afflictions and the scam-detection mechanism." Defined the affliction-embedding space, the scam signature (concentrated stimulation of specific afflictions + suppression of cautionary afflictions), composite judgment via source attribution, the strategic advantage at the abstraction level, the incentive structure of SNS operators, countermeasures against overdetection, and ethical considerations. Also expanded the glossary and references.
- **v1.3** (2026-05-13): added §15 "Economies of Scale and Economies of Precision — the strategic positioning of the program." Starting from the author's "AI simply blocks by string match" observation, analyzed how the giants are optimized for Economies of Scale and how a wide "can-but-won't" domain therefore exists. Formalized this program as a strategic positioning standing on Economies of Precision. Organized applicability to isomorphic problems (medicine / law / education / mental health / child protection), connections to §13 / §14 / §7 / §3, and strategic implications. Glossary expanded.
- **v1.3.1** (2026-05-13, same-day supplement): added Appendix E "Notes on a staged-publication strategy." A record of a dialogue in which the author candidly asked an AI (Claude Opus 4.7) about the value of the research. Recorded as a reference observation, not as a decision: the AI's value evaluation, points of caution, the proposed staged-publication strategy of §15 → §14 → §13, and the strategic advice "do not aim at perfection; reliably bring out parts."
- **v1.5** (2026-05-16): added §16 "Implementation challenges and response strategies." Three essential challenges that I re-recognized while reading back through Concept Record v1.4 — (1) orthogonality and sparsity of the 108-dimensional embedding, (2) tracking dynamic changes in scam techniques, (3) the timing paradox of ExPFC intervention — are recorded candidly, together with provisional response strategies (hierarchical embedding structure; separation into invariant and variable layers + incremental learning; graded intervention + Ulysses contract + third-party notification). The chapter explicitly demonstrates the posture that "the challenges that will draw criticism are recognized," and positions the research program as having a self-critical reflective function. Each response strategy is a hypothesis at this stage, to be improved in precision through verification and dialogue with collaborators.
- **v1.6** (2026-05-16, same-day revision): added §0 "The fundamental purpose of the research" at the beginning. Articulated the author's original research intent (a methodological concern about neuroscience-centered approaches, the hypothesis of adopting Buddhism as a coordinate system, the ontological premise that mental afflictions are humanity itself, and the ultimate aim of dynamically analyzing the moment-to-moment weighting of afflictions). This organizes the program into a three-tier structure (Level 1: methodological / Level 2: strategic / Level 3: applied). Anti-scam (§1–§14) is repositioned as "the most pressing application." The center of appeal to the international AI Safety community is shown to be Level 1. This chapter articulates as a single fundamental purpose what had been touched on only fragmentarily through the discussions up to v1.5.
- **v1.7** (2026-05-16, same-day supplement): added §16.4 "Personalization and the individual mental-affliction sensitivity profile." A fundamental insight that I recognized during the English-translation work for a LessWrong post — scam judgment does not close at the level of "text alone," but is a three-way relation among text × context × individual; the same text resonates with different afflictions depending on the recipient's mental-affliction sensitivity profile U. The mapping defined in §14.1 is developed: scam judgment is recaptured as the "resonance" between the text's stimulation profile and the user's sensitivity profile. Three response approaches are presented: progressive personalization, self-reported profiling, and design as a report for the user themselves. Furthermore, the meta-observation that "if everything is left to the AI, something important is about to be overlooked" is shown to be isomorphic to the fundamental purpose of the research program, indicating, in addition to the three-tier structure, the existence of Level 0 (the self-reflective tier). A supplement strengthening the self-referential soundness of the research program.
- **v1.8** (2026-05-17): added §0.4.5 "The implementation starting point — a 3×3 minimum model" and §4.3.0 "The 3×3 minimum model — the shared first implementation step for all architectures." To close the gap that had existed between §0's "108-dimensional final form" and §16's "mathematical independence is a challenge" — namely the lack of a concrete first implementation step — a 9-dimensional minimum model (three poisons × three subcategories) is introduced. The correspondences greed (desire-craving / form-craving / formless-craving → reward and attachment hierarchy), aversion (immediate anger / lasting resentment / inner vexation → error and adversarial time axis), and ignorance (basic / innate / conceptual ignorance → structural and learned bugs) are presented, and how this minimum model embeds into each candidate architecture (GNN / VAE / Transformer / multi-task learning) together with the staged expansion order across Phase 1–3 is made explicit. It is positioned as the concretization of Level 2 within the hierarchical embedding of §16.2.2. This upgrades the proposal from a "philosophical proposal" to a "proposal with an implementation roadmap," providing a concrete footing for dialogue with international AI Safety researchers, domestic Buddhist scholars, and computational psychologists.
- **v1.9** (2026-05-17, same-day revision): a full stylistic sweep across the entire site (Concept Record, two standalone essays, About, top page, contact, and index pages) into a first-person, declarative voice. Third-person, distancing subjects such as "this research program," "this proposal," and "the author" were replaced uniformly with "I / my research program." Bureaucratic frames such as "this chapter," "this section," and "here we present" were dissolved. No changes to argument, data, or references — only to whose voice the writing reads as.
- **v2.0** (2026-05-17, same-day revision): a single-pass consistency sweep against eleven points I identified on a full read-back. (1) Removed the triplicate top metadata block (frontmatter / H1 / created-by block) and replaced it with a single "Position and status" callout. (2) Brought the status statement into line with reality (PYOL Mind Mirror is running; affliction mapping is still in design). (3) Unified §14.1's affliction-embedding map from `f: T → V` to `f: (T, C, U) → V`, consistent with §0.4 / §0.4.5 / §16.5. (4) Normalized §3.4's `exploitation_strength` from 0–10 to [0, 1], aligning with §4.3.0 and §14.1. (5) Added Appendix E (References — 26 works cited in the body), supplying citations such as Bender et al. (2021), Carroll et al. (2023), Park et al. (2024) that had been used inline without a list. (6) Varied the repeated "my program" with "the program" / "this program" across the text to reduce monotony. (7) Updated §15.3 LLM-cost figures to 2026-05 levels (separating low-cost LLMs like GPT-4o mini and Claude Haiku 3.5 from high-end LLMs, with revised arithmetic), keeping the structural argument front and center. (8) Trimmed §14.9's nine application areas to four — clinical psychology, advertising ethics, AI-ethics evaluation, and education — with explicit prioritization. (9) Added cross-references among the three ethics sections (§10.3, §13.11, §14.12), pointing toward a future unified ethical guideline. (10) Merged §13.9 (Relation to existing research programs) and §13.10 (Interdisciplinary positioning) into a single §13.9, renumbering §13.11–§13.13 to §13.10–§13.12. (11) Fixed §16 numbering bug (there were two §16.4 sections), renumbering personalization to §16.5 and Conclusion to §16.6; added a "virus" metaphor note to Appendix A; rationalized Appendix lettering (D = Notes on staged publication, E = References, F = Revision history). No framework changes — only consistency, accuracy, and readability.
- v2.1 onward: updates as implementation progresses, dialogues with external collaborators occur, and validation results come in.

---

**My program is material for a research program; execution is to proceed in stages over the long term. Not short-term outcomes, but a 20-year-span academic and social contribution.**
