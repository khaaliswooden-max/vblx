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

## 6. Also noticed — not in scope, but you should know

- **`public/quick-facts.html`** (served at visionblox.com/quick-facts) is a page built from
  the **old** cut sheet content. It still contains `Meta`, `BASF`, `Walmart`,
  `SOLGENIE / HORIZON GLOBAL`, and
  `evaluated against Fortune 500 SIs and national AI firms`. Everything Part A removes from
  the PDFs is still publicly readable there. Worth a follow-up pass.
- **`visionblox.org` still resolves** (HTTP 200), so the retired domain is live. The v2
  sheets point only at `visionblox.com`, but anyone with an older sheet still lands on the
  old domain.
- The originals in `public/` and `branded_docs/` are untouched. If v2 is approved, those
  are the copies to replace, and `branded_docs/source/*.html` are the v1 sources to retire.
