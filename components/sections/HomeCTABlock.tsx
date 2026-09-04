export default function HomeCTABlock() {
  return (
    <section className="bg-vbx-teal-tint border-t border-vbx-rule section-padding">
      <div className="container-wide">
        <div className="max-w-[680px] mx-auto text-center">
          <h2
            className="font-display text-vbx-navy font-bold mb-5"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', lineHeight: '1.25' }}
          >
            If you are evaluating healthcare IT capacity, we are prepared to brief you.
          </h2>

          <p className="text-vbx-navy-light mb-8" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
            Visionblox provides technical briefings for contracting officers,
            program managers, and teaming partners evaluating healthcare IT
            capacity for federal and SLED requirements.
          </p>

          <a
            href="mailto:services@visionblox.com?subject=Healthcare%20IT%20Capability%20Briefing"
            className="btn-primary"
          >
            Request a capability briefing
          </a>
        </div>
      </div>
    </section>
  )
}
