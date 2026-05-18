"""Integrated judgment function g.

Composes bonno_embed → detect_signatures → check_source_attribution
into a final JudgmentResult, then computes the discrete alert_level.
"""

from typing import Optional

from expfc_core.types import Context, JudgmentResult, UserProfile


def judge(
    text: str,
    user_profile: UserProfile,
    context: Optional[Context] = None,
) -> JudgmentResult:
    """Full pipeline: embed → detect → check → integrate → alert.

    Args:
        text: text under analysis (T).
        user_profile: user's affliction-sensitivity profile (U). Required.
        context: situational context (C). Optional.

    Returns:
        JudgmentResult with bonno_vector, scam_probability, alert_level,
        fired_signatures, and source_attribution.
    """
    raise NotImplementedError("v0.2")
