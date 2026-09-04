export default function MissionBlock() {
  return (
    <section className="bg-vbx-offwhite section-padding">
      <div className="container-wide">
        <div className="max-w-[720px] mx-auto text-center">
          <blockquote
            className="font-display text-vbx-navy font-semibold mb-8"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: '1.35' }}
          >
            &ldquo;Healthcare data is not a product problem.
            <br />It is a systems problem. We solve the systems.&rdquo;
          </blockquote>

          <span aria-hidden="true" className="block w-10 h-[3px] bg-vbx-teal mx-auto mb-8" />

          {/* Punctuation corrected: the source read "...at California DHCS, We are
              prepared..." — a comma splice into a capitalised word. Wording is
              otherwise unchanged. */}
          <p className="text-vbx-navy-light" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
            Every Visionblox engagement begins with the same question: what does the
            institution need to see? From there, we build the integration layer, the
            compliance architecture, and the data pipelines that make the answer
            visible. We have done this at a leading national integrated healthcare
            system and at California DHCS. We are prepared to do it for the federal
            agencies and state authorities that govern American healthcare.
          </p>
        </div>
      </div>
    </section>
  )
}
