# Relian™ Capabilities (External) — Speaker Notes

Source of truth for the notes embedded in each slide's Notes pane of
`VBX_Relian_Capabilities_External.pptx`. Re-apply with
`python scripts/add_relian_speaker_notes.py`.

**Slide 1 — Cover (Verifiable Software Modernization)**
Open here. Frame the whole conversation around proof, not migration. Suggested opener: "Everyone can convert legacy code — Relian is the only way to modernize it and walk away with independent, cryptographic proof that the new system behaves exactly like the old one." Name the three audiences on the slide and tell them you'll focus on the one that fits — Commercial, State/Local/Education, or Federal. Keep the promise concrete: we don't ask you to trust us; we hand you evidence you can verify yourself.

**Slide 2 — The Problem**
Establish the pain, then reframe it. The problem isn't that COBOL exists — it's that no one can prove a modernized system is equivalent, so projects stall at the board or audit gate. Use the three data points as context (federal legacy systems run 8–51 years; roughly 80% of federal IT spend just keeps existing systems alive; COBOL still runs core systems while its workforce retires — all GAO). Land the key line: every board, examiner, and auditor asks "how do you know the new system does the same thing?" Traditional tools answer "trust us." Relian answers with proof. Tailor the gatekeeper to the room — a board and external auditor in commercial; an IG, GAO, or legislature in government.

**Slide 3 — What Relian Is**
Define the category — this is the conceptual core. Walk the three layers as a causal chain, not a feature list: (1) the transform is deterministic and rule-based, which is what makes proof possible — you can only sign what you can reproduce; (2) the benchmark is committed cryptographically before the solution exists, so results can't be gamed; (3) attestation turns that into a signed, portable proof anyone can re-derive. Anchor on the one-liner in the box. If asked about AI: the transform path has no black-box AI; optional analysis can use a local, disclosed, open-weight model, and customer source never goes to a generative model. Close on the tagline — the product is the proof, not the pipeline.

**Slide 4 — How It Works**
Walk the pipeline left to right and keep returning to the boundary. The single most important point: your source code never leaves your perimeter — only the signed proof artifact travels, and that artifact is the equivalence proof plus the measured metrics plus the inventory of exactly what was and wasn't transformed. Emphasize durability: because it's signed and re-derivable, it stays verifiable even if we're not involved later. For regulated buyers, this is the slide that resolves the "we can't send our source anywhere" objection before they raise it.

**Slide 5 — Substrate vs SaaS**
This is the differentiation centerpiece — spend time here. Read the rows as a story that builds: trust, reproducibility, data residency, then the two that close deals — auditability (non-repudiable evidence, not just an output and an SLA) and independence (we can vouch for anyone's work, not only our own). Land the bottom line: the difference isn't hosting, it's where trust comes from and what you're left holding — a subscription versus an evidence asset you own. Objection to expect: "isn't this just on-prem software?" Answer: on-prem is table stakes; the differentiator is the portable, independently verifiable proof and the referee capability on the next slide.

**Slide 6 — The Referee Model**
This is the category expansion — use it to enlarge the opportunity. Because attestation is decoupled from the transform, Relian can referee any modernization, including one another vendor or tool produced. Concrete hooks: verify a systems integrator's output, provide neutral assurance across a multi-vendor program, or independently confirm a migration a customer already paid for. Position this as an assurance layer and an architectural capability — if pressed on packaging or SLAs, say we can serve as the independent referee and scope it to their program rather than quoting a fixed product.

**Slide 7 — Proof, Measured**
This is the credibility slide — the honesty is the sell. Say the scope out loud on the first pillar: 100% behavioral equivalence is measured on the sealed RELIAN-BENCH held-out suite, across supported COBOL constructs — don't generalize it beyond that. Then determinism (byte-for-byte reproducible), the signed re-derivable ledger, and the discipline that ties it together: every number is measured or withheld, never estimated. Frame "measured or withheld" as a feature auditors love, and note that the same evidence record satisfies an auditor, an IG, and a board — the evidence discipline is the compliance program.

**Slide 8 — Commercial**
Commercial audience. Lead with the two things they care about most: your source and IP stay in-house (critical for banks, insurers, and ISVs), and you get evidence a board or examiner will accept instead of a vendor's assertion. The M&A / technology-due-diligence use case is a differentiated wedge — attesting that an acquired codebase's modernization preserved behavior is something no migration tool offers. Close on the value line: replace "trust the vendor" with evidence you own.

**Slide 9 — SLED (State · Local · Education)**
State, Local, and Education audience. The accelerator here is cooperative purchasing — public-sector buyers can start fast through the Montana MAPS vehicle without running a full competition, and that extends to other states, locals, tribal governments, and federal agencies. Pair that with the data-residency story: US-only, on-premise, which maps directly to CJIS, PII, and FERPA obligations. Walk whichever of the three use cases fits the room — benefits/eligibility, courts/DMV/licensing, or school-district SIS and payroll. Keep procurement claims to "cooperative purchasing available"; the fixed-fee assessment is the low-friction entry point.

**Slide 10 — Federal**
Federal audience. The driver is oversight: position attestation as audit evidence an IG or GAO can independently verify — non-repudiable, not a vendor's word. The air-gap point matters: source never leaves the enclave and never touches a generative-AI model. Tie supply-chain integrity to a zero-trust posture. Important guardrail: say the evidence discipline SUPPORTS FISMA, CMMC, and FedRAMP programs — do not claim we hold any of those certifications. If asked directly about certification status, say our posture is available on request and move to the assessment.

**Slide 11 — Start Here: Two Fixed-Fee Assessments**
This is the call to action — make it easy to say yes. Both assessments are fixed-fee, signed-report diagnostics that de-risk the decision: the $8K Legacy Code Assessment inventories and scores the code and writes the migration scope; the $12K Data Discovery maps the data behind it. The pitch: prove the model on your real code before committing to a full migration. For public-sector buyers, point to the cooperative vehicle for streamlined purchasing; for commercial, it's a straightforward fixed-fee engagement. The assessment output becomes the scope and price for any follow-on work — it pays for itself.

**Slide 12 — Why Relian + CTA (Prove it. Don't just promise it.)**
Recap and drive to action. The four pillars are the one-breath summary of the whole deck: Provable, Portable, Private, Independent. The single ask is: start with an assessment — it's low-cost, low-risk, and proves everything on their own code. Leave the contact details and identifiers (CAGE, UEI, NAICS, veteran-owned small business) visible for the procurement or contracting person in the room. Close with the line on the slide: prove it — don't just promise it.

**Slide 13 — References**
For technical evaluators and due-diligence reviewers. These sources back the specific claims: Ed25519 and NIST FIPS 186-5 for the signature scheme behind the attestation; the reproducible-builds paper for determinism as a software-integrity property; and the GAO reports for the legacy-systems and COBOL context on slide 2. Offer this list to any technical or security reviewer who wants to verify the underpinnings.
