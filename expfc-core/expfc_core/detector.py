"""Three-signature scam detector.

The three signatures (see Concept Record §14.3):
1. concentration  — extreme stimulation of a few specific afflictions
2. suppression    — wording that suppresses cautionary afflictions
3. incompatibility — coexistence of logically incompatible appeals
"""

from expfc_core.types import BonnoVector, SignatureFireReport


def detect_signatures(
    vector: BonnoVector,
    text: str,
) -> list[SignatureFireReport]:
    """Detect the three scam fingerprints.

    Args:
        vector: the bonnō vector computed by bonno_embed().
        text: the original text (needed for suppression/incompatibility
              detection that requires lexical inspection).

    Returns:
        Per-signature firing reports.
    """
    raise NotImplementedError("v0.2")
