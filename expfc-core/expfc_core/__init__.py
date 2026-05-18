"""ExPFC Core — Reference implementation in Python.

See: https://research.pyol.net/concept/bonno-virus-mapping/#17

This is the v0.1 spec release. Algorithmic implementations of
`bonno_embed`, `detect_signatures`, `check_source_attribution`, and `judge`
arrive in v0.2 or later.
"""

__version__ = "0.1.0"

from expfc_core.types import (
    Context,
    UserProfile,
    BonnoVector,
    BonnoDimension,
    SignatureFireReport,
    SourceAttributionResult,
    JudgmentResult,
    AlertLevel,
    SignatureType,
)

__all__ = [
    "Context",
    "UserProfile",
    "BonnoVector",
    "BonnoDimension",
    "SignatureFireReport",
    "SourceAttributionResult",
    "JudgmentResult",
    "AlertLevel",
    "SignatureType",
]
