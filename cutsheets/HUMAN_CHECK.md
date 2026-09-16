# HUMAN_CHECK — Visionblox cut sheets v2

Items a person has to confirm. I could not verify any of these from the source files,
the repository, or visionblox.com. Everything here is **on the printed sheets right now**,
so each unconfirmed item is a live claim going out to evaluators.

Owner: Khaalis Wooden · Sheets: `VBX_CutSheet_HC_IT_v2.pdf`, `VBX_CutSheet_GEN_IT_v2.pdf`

---

## 1. Engagement dates (HC sheet) — CONFIRM

The two sources disagreed. I used the values from your Decisions block; the old cut sheet
said something different in both cases.

| Engagement | Old cut sheet | Capability statement | **On v2 now** |
|---|---|---|---|
| Kaiser / leading national integrated healthcare system | 2019–2023 | 2022–2023 | **2022–2023** |
| California DHCS | 2022 | 2021–2022 | **2021–2022** |

Confirm the capability-statement dates are the correct ones. If Kaiser really was
2019–2023, the sheet currently understates a four-year engagement by two years.

## 2. Contracting party on every "Proven with" engagement — CONFIRM

This is the highest-risk item on both sheets. Each card below is presented as Visionblox
past performance. Confirm for each one that **Visionblox LLC was the contracting party** —
not a team member's work at a prior employer. Anything that was personal experience rather
than a VBX contract has to move to a "key personnel experience" framing, because past
performance that VBX did not hold is a CPARS and responsibility-determination problem.

| Sheet | Card | Value shown | VBX was the contracting party? |
|---|---|---|---|
| HC | Leading national integrated healthcare system | $1.2M · 2022–2023 | ☐ |
| HC | California DHCS | $2.1M · 2021–2022 | ☐ |
| HC | National health insurer | Millions of claims / day | ☐ |
| GEN | Hyperscale technology company | $3.5M · 2022–23 | ☐ |
| GEN | Multinational chemical manufacturer | $2.4M · 2022–23 | ☐ |
| GEN | Fortune 1 global retailer | Multi-year | ☐ |
| GEN | HCPSS | $550K · 2026– | ☐ |
| both | State of Montana — MAPS | Fully executed, Aug 2026 | PRIME — stated as confirmed |

Related: I tagged the GEN sheet's HCPSS card **SUB**, inferred from your note that prime
AJACE approved the reference. Confirm SUB is right. The MAPS card is tagged **PRIME** per
your Decisions block. The other cards carry a neutral sector tag (`HEALTH SYSTEM`,
`STATE AGENCY`, `COMMERCIAL`) rather than PRIME/SUB, because I had no basis to assert
either — fill those in if you know them.

## 3. "Teaming integration in 5 business days" — CONFIRM

Appears twice on the GEN sheet (the "Who we serve" strip and the SUBCONTRACT-READY
differentiator). It reads as a performance commitment to a prime, not marketing. Confirm
Visionblox can actually onboard and badge staff in five business days, including whatever
background-check and security-onboarding time the prime imposes. If it is aspirational,
say so and I will soften it.

## 4. "HITRUST-audited security staff" — CONFIRM

On both sheets as a compliance chip, and on the HC sheet as
*"HITRUST auditor on staff, with CISA, CISM, and CRISC credentials."*

Confirm this person is **currently employed** by Visionblox and that the CISA / CISM /
CRISC credentials are **currently active** (all three require annual CPE and maintenance
fees; they lapse quietly). The wording claims a credentialed auditor is resident staff,
which is exactly the kind of statement a contracting officer will ask you to substantiate.
Related: the HC sheet also claims *"13 years healthcare security leadership on staff"* —
same person, presumably. Confirm that too.

## 5. MAPS cooperative use — PENDING VERIFICATION, live site conflict

**visionblox.com currently says**, in the August 2026 award block:

> "Available to Montana agencies and, through cooperative purchasing, to public entities
> **nationwide**."

Per your instruction, **no nationwide or other-state availability language appears on
either v2 cut sheet**, and I added none. But the live site still carries it, so the two
now disagree.

Action needed: read the cooperative-use / intergovernmental-purchasing clause in
SPB26-0608GW-VSNBLX and confirm whether non-Montana public entities may actually buy from
it. Then reconcile — either the site line comes down, or the sheets can carry it.
Until that is settled, treat the sheets as correct and the website as the outlier.

## 6. v2 PDFs are now live — sections 1-4 are now LIVE CLAIMS

**Status: done, on your instruction.** The v2 sheets were copied over the originals,
keeping the same filenames so existing URLs, QR codes, emailed links and printed
references keep working and now resolve to corrected content:

| Path | Now contains |
|---|---|
| `public/VBX_CutSheet_HC_IT.pdf` | v2 Healthcare sheet |
| `public/VBX_CutSheet_GEN_IT.pdf` | v2 IT Services sheet |
| `branded_docs/VBX_CutSheet_HC_IT.pdf` | v2 Healthcare sheet |
| `branded_docs/VBX_CutSheet_GEN_IT.pdf` | v2 IT Services sheet |

Verified: the files served from the capability card's own download links are 1 page,
carry none of the prohibited strings and all of the required ones. The previous versions
remain in git history and can be restored with
`git checkout 6d666a6 -- public/VBX_CutSheet_HC_IT.pdf` (and the other three paths).

**This raises the urgency of sections 1-4.** Those claims are no longer drafts awaiting
review — they are published and downloadable. The engagement-ownership question in
section 2 in particular should be closed out now rather than at leisure.

## 7. The capability statements are still uncorrected — SAME EXPOSURE, NOT YET FIXED

Swapping the cut sheets closed one door. The button directly beside it on the same
capability card, **"Full Capability Statement (PDF)"**, is still open:

| File | Prohibited strings it still contains |
|---|---|
| `public/CapStatement_Visionblox_HC_v2.pdf` | `visionblox.org`, `GSA MAS`, `54151HEAL`, `Kaiser`, `Cigna`, `nationwide` |
| `public/VBX_CapStatement_IT.pdf` | `visionblox.org`, `GSA MAS`, `SPRINGBOARD`, `CMMC READY`, `Kaiser`, `Meta`, `BASF`, `Walmart`, `SolGenie`, `Horizon Global`, `nationwide` |

The IT capability statement is the worst single document in the repository on this
measure. Both also carry the `nationwide` MAPS cooperative-use language that section 5
flags as unverified, and both still point at the retired domain.

I have not touched these — they are a separate deliverable from the cut sheets, they are
authored from `.docx` sources in `branded_docs/`, and rebuilding them was not in scope.
But the cut sheet corrections are substantially undercut while these remain live. Worth
queueing as the next pass.

## 8. Also noticed

- **`visionblox.org` still resolves** (HTTP 200), so the retired domain is live. All the
  rebuilt material now points only at `visionblox.com`, but anyone holding an older sheet
  or a previously-scanned QR still lands on the old domain.
- `branded_docs/source/*.html` are the v1 cut sheet sources. They are superseded by
  `cutsheets/src/` and should be retired.
