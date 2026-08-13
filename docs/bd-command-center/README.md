# VBX BD Command Center

Internal business-development command center for Visionblox LLC — the
authoritative in-repo record of pipeline state, firm/partner intake, gate
decisions, and deadline tracking.

**CONFIDENTIAL — internal BD work product. Not for external distribution.**

## Structure

| Path | Purpose |
|---|---|
| `TRACKER.md` | Current-state tracker: live pursuits, partner firms, opportunity rows, deadline stack, open flags. Updated in place — this file always reflects the latest known state. |
| `updates/YYYY-MM-DD.md` | Dated command-center updates, archived verbatim as issued. These are the historical record; `TRACKER.md` is the rollup. |

## Conventions

- **Gate 0** = SAM/DSBS/VetCert (or equivalent) verification of a partner
  firm's self-reported credentials. No classification advances until Gate 0
  passes.
- **Classification bands** for partner firms and opportunities follow the
  visionblox-capture scoring model (score/band, Pwin, PURSUE / WATCH /
  NO-BID / KILLED statuses).
- **KILLED records are authoritative** — a killed opportunity row is never
  regenerated or re-scored unless a new solicitation supersedes it.
- **Model C pre-conditions** (partner-channel pursuits): Gate 0 pass → NDA →
  teaming instrument with workshare floor + reference rights, before any
  proposal volume is drafted. Citability = $0 until the floor is negotiated.
