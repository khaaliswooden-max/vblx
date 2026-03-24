export default function MissionBlock() {
  return (
    <section className="bg-vbx-navy section-padding">
      <div className="container-wide">
        <div className="max-w-[680px] mx-auto text-center">
          <blockquote
            className="font-display text-vbx-white mb-8"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', lineHeight: '1.35' }}
          >
            &ldquo;Healthcare data is not a product problem.
            <br />It is a systems problem. We solve the systems.&rdquo;
          </blockquote>

          <p className="font-sans text-vbx-muted" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
            Every Visionblox engagement begins with the same question: what does the
            institution need to see? From there, we build the integration layer, the
            compliance architecture, and the data pipelines that make the answer
            visible. We have done this at Kaiser Permanente, at California DHCS,
            and at Cigna. We are prepared to do it for the federal agencies and state
            authorities that govern American healthcare.
          </p>
        </div>
      </div>
    </section>
  )
}
