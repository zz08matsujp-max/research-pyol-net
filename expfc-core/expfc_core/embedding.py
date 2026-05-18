"""Bonnō embedding function f: (T, C, U) → V.

Reference implementation arrives in v0.2.
The signature is fixed in v0.1; the body raises NotImplementedError.
"""

from typing import Optional

from expfc_core.types import BonnoVector, Context, UserProfile


def bonno_embed(
    text: str,
    user_profile: UserProfile,
    context: Optional[Context] = None,
    *,
    level: int = 2,
) -> BonnoVector:
    """Map (text, context, user_profile) to a bonnō-stimulation vector.

    Args:
        text: text under analysis (T).
        user_profile: individual sensitivity profile (U). Required.
        context: situational context (C). Optional.
        level: 1 (3-dim), 2 (9-dim, default), or 3 (108-dim).

    Returns:
        BonnoVector of the requested level's dimensionality.
    """
    raise NotImplementedError("v0.2")
