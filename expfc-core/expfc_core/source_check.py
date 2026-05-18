"""Law-grounded source-attribution checker.

See Concept Record §14.6. Checks for presence of legally required
sender-disclosure items in the text (e.g., company name, registration
number, FSA registration, etc.).
"""

from typing import Optional

from expfc_core.types import Context, SourceAttributionResult


def check_source_attribution(
    text: str,
    context: Optional[Context] = None,
) -> SourceAttributionResult:
    """Check whether the text contains the legally-required
    source-attribution items.

    Args:
        text: text under analysis.
        context: situational context. The check may differ by medium
                 (e.g. SMS vs email vs LINE).

    Returns:
        Source-attribution score [0, 1] and the list of missing items.
    """
    raise NotImplementedError("v0.2")
