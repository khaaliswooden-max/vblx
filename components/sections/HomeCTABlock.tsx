export default function HomeCTABlock() {
  return (
    <section className="bg-vbx-navy section-padding">
      <div className="container-wide">
        <div className="data-line mb-12"/>

        <div className="max-w-[680px] mx-auto text-center">
          <h2
            className="font-display text-vbx-white mb-6"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: '1.25' }}
          >
            If you are evaluating healthcare IT capacity,
            we are prepared to brief you.
          </h2>

          <p className="font-sans text-vbx-muted mb-10" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
            Visionblox provides technical briefings for contracting officers,
            program managers, and teaming partners evaluating healthcare IT
            capacity for federal and SLED requirements.
          </p>

          <a
            href="mailto:khaalis.wooden@visionblox.com?subject=Healthcare%20IT%20Capability%20Briefing"
            className="btn-gold"
          >
            REQUEST A CAPABILITY BRIEFING
          </a>
        </div>

        <div className="data-line mt-12"/>
      </div>
    </section>
  )
}
