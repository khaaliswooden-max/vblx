# Never-Brand Guardrail — detection & edge cases

VBX branding goes on **company-authored, VBX-owned collateral**. It must NOT be
applied to formal, evaluated, or third-party-governed documents. When a document
matches the signals below, **STOP and ask the user** before branding or skipping.

## Never-brand types

1. **Solicitation responses** — Sources Sought, RFI, RFP, RFQ, RFO responses.
2. **IEEE / academic / standards whitepapers**, peer-reviewed or conference
   submissions, arXiv/SSRN preprints.
3. **Government / state forms** — SF-330, SF-1449, SF-33, OF-347, DD forms, and
   any agency-provided fillable template or fixed layout.
4. **Past-performance / CPARS** narratives and questionnaires on a customer's
   template or submitted into a government system.
5. **Teaming / partner-governed** — teaming agreements, subcontracts, NDAs with a
   prime, docs where a partner's or prime's branding governs.
6. **Legal & compliance instruments** — contracts, MSAs, SSPs / security
   attestations (SOC 2, HITRUST, NIST packages), certifications.

## Detection signals

- **Filename / title:** `SourcesSought`, `RFI`, `RFP`, `RFQ`, `SF-330`,
  `SF330`, `SF-1449`, `CPARS`, `whitepaper`, `IEEE`, `Teaming`, `NDA`,
  `Subcontract`, `SSP`, `MSA`, a solicitation number (e.g. `SPB-RFP-2026-0608GW`).
- **Content:** "in response to the above-referenced solicitation", "Offeror
  shall", standards-body headers/footers, a customer's logo/letterhead already
  present, form field controls, evaluator scoring language.
- **Context:** the user says it's going to an evaluator, a standards body, a
  prime, or into a government portal.

## Edge cases

- **Résumé template vs. populated résumé:** the VBX *template* is fine to brand.
  A *populated* résumé submitted in a proposal follows the proposal's own
  in-document standard (e.g. name + page number header, no photos) — do not add
  the running-logo header to submitted résumés.
- **Capability statement / pitch deck / one-pager / internal brief:** eligible —
  these are VBX collateral.
- **A branded template that will be filled with response content later:** brand
  the template chrome only if the user confirms the final artifact is not a
  formal submission.
- **Mixed document** (VBX cover wrapping a formal attachment): brand only the VBX
  cover, never the governed attachment — and confirm first.

Default when unsure: **ask.** Do not silently brand, and do not silently skip.
