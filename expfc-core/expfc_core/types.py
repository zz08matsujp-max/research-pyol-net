"""Type definitions for ExPFC Core v0.1.

Mirrors the JSON Schemas in schemas/ at the Python type level.
See: https://research.pyol.net/concept/bonno-virus-mapping/#17
"""

from __future__ import annotations

from dataclasses import dataclass, field
from datetime import datetime
from typing import Literal, Optional, Union


# ────────────────────────────────────────────────────────
# Enumerated string literals
# ────────────────────────────────────────────────────────

AlertLevel = Literal["none", "info", "caution", "warning", "danger"]

SignatureType = Literal["concentration", "suppression", "incompatibility"]

Medium = Literal[
    "sms", "line", "kakaotalk", "email", "browser",
    "imessage", "telegram", "whatsapp", "other",
]

MoneyConcern = Literal[
    "retirement_savings", "investment_growth",
    "debt", "education_costs", "none",
]

HealthConcern = Literal[
    "self_health", "family_health", "dementia_concern", "none",
]

ContactCircleSize = Literal["small", "medium", "large"]

TrustedContactType = Literal["family", "friend", "professional", "none"]

MissingItem = Literal[
    "company_name", "registration_number", "address",
    "phone_number", "fsa_registration",
    "tokushoho_disclosure", "privacy_policy",
]

JudgmentOutcome = Literal[
    "accepted_warning", "dismissed_warning", "no_warning",
]


# ────────────────────────────────────────────────────────
# Input types
# ────────────────────────────────────────────────────────

@dataclass
class SenderInfo:
    identifier: Optional[str] = None
    is_known_contact: Optional[bool] = None
    first_contact_days_ago: Optional[int] = None


@dataclass
class Context:
    """C: situational context. All fields optional."""
    medium: Optional[Medium] = None
    timestamp: Optional[datetime] = None
    sender_info: Optional[SenderInfo] = None
    conversation_history: Optional[list[str]] = None


@dataclass
class TrustedContact:
    type: TrustedContactType = "none"
    email: Optional[str] = None
    name: Optional[str] = None


@dataclass
class SetupResponses:
    """Q1-Q5 answers from the initial 5-minute setup."""
    money_concerns: list[MoneyConcern] = field(default_factory=list)
    loneliness_level: float = 0.0  # [0, 1]
    health_concerns: list[HealthConcern] = field(default_factory=list)
    contact_circle_size: ContactCircleSize = "medium"
    trusted_contact: Optional[TrustedContact] = None


@dataclass
class EpisodicUpdate:
    """A single episodic-question response captured at judgment time."""
    timestamp: datetime
    busy: Optional[bool] = None
    money_worry_now: Optional[bool] = None
    in_a_hurry: Optional[bool] = None
    judgment_outcome: Optional[JudgmentOutcome] = None


@dataclass
class UserProfile:
    """U: individual mental-affliction sensitivity profile.

    Storage: on-device only. Cloud synchronization is prohibited.
    """
    schema_version: str = "0.1"
    setup_responses: SetupResponses = field(default_factory=SetupResponses)
    episodic_updates: list[EpisodicUpdate] = field(default_factory=list)
    last_updated: Optional[datetime] = None
    anonymous_baseline: bool = False


# ────────────────────────────────────────────────────────
# Output types
# ────────────────────────────────────────────────────────

@dataclass
class BonnoDimension:
    """A single dimension of the bonnō vector V."""
    dimension_id: str   # e.g. "greed_desire" — matches bonno_ontology.yaml
    intensity: float    # [0, 1]


# Type alias: the affliction-stimulation vector V is a list of dimensions.
# Length is 3 (Level 1), 9 (Level 2), or 108 (Level 3).
BonnoVector = list[BonnoDimension]


@dataclass
class SignatureFireReport:
    """Detection result for one of the three scam fingerprints."""
    signature_type: SignatureType
    score: float       # [0, 1]
    fired: bool        # threshold exceeded


@dataclass
class SourceAttributionResult:
    """Law-grounded source-attribution check result."""
    score: float                       # [0, 1]; 1.0 = fully attributed
    missing_items: list[MissingItem] = field(default_factory=list)


@dataclass
class JudgmentMeta:
    core_version: str = "0.1.0"
    level_used: int = 2                # 1 / 2 / 3
    anonymous_baseline_used: bool = False


@dataclass
class JudgmentResult:
    """Top-level output of judge()."""
    bonno_vector: BonnoVector
    scam_probability: float            # [0, 1]
    confidence: float                  # [0, 1]
    alert_level: AlertLevel
    fired_signatures: list[SignatureFireReport]
    source_attribution: SourceAttributionResult
    meta: Optional[JudgmentMeta] = None


# ────────────────────────────────────────────────────────
# Function signatures (stubs — implementations come in v0.2+)
# ────────────────────────────────────────────────────────

def bonno_embed(
    text: str,
    user_profile: UserProfile,
    context: Optional[Context] = None,
    *,
    level: int = 2,
) -> BonnoVector:
    """Map text to an affliction-stimulation vector.

    This is the core mapping function f: (T, C, U) → V.
    Reference implementation arrives in v0.2.
    """
    raise NotImplementedError(
        "Reference implementation of bonno_embed will be released in v0.2. "
        "See: https://research.pyol.net/concept/bonno-virus-mapping/#175"
    )


def detect_signatures(
    vector: BonnoVector,
    text: str,
) -> list[SignatureFireReport]:
    """Detect the three scam fingerprints from V and text.

    Reference implementation arrives in v0.2.
    """
    raise NotImplementedError(
        "Reference implementation of detect_signatures will be released in v0.2."
    )


def check_source_attribution(
    text: str,
    context: Optional[Context] = None,
) -> SourceAttributionResult:
    """Check law-grounded source-attribution explicitness.

    Reference implementation arrives in v0.2.
    """
    raise NotImplementedError(
        "Reference implementation of check_source_attribution will be released in v0.2."
    )


def judge(
    text: str,
    user_profile: UserProfile,
    context: Optional[Context] = None,
) -> JudgmentResult:
    """Integrate f → detect → check → g into a final JudgmentResult.

    Reference implementation arrives in v0.2.
    """
    raise NotImplementedError(
        "Reference implementation of judge will be released in v0.2."
    )
