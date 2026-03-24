import Link from 'next/link'

const PILLARS = [
  {
    index: '01',
    headline: 'Healthcare Data Systems',
    body: 'Epic EMR integration, HL7 data pipelines, MITA-compliant Medicaid architecture, and patient portal infrastructure — delivered at Kaiser Permanente, California DHCS, and VCare Urgent Care.',
  },
  {
    index: '02',
    headline: 'Compliance & Security Architecture',
    body: 'HIPAA, HITRUST audits, 21st Century Cures Act, Section 508 ADA, FedRAMP-aware deployment on AWS GovCloud and Azure Government. 13 years of healthcare security leadership on staff.',
  },
  {
    index: '03',
    headline: 'Healthcare AI & Document Intelligence',
    body: 'NLP, OCR, and ML pipelines purpose-built for healthcare data. Delivered 96% document processing accuracy and 60% labor reduction at a state Medicaid agency. Python, Spark, Kafka, Snowflake.',
  },
]

export default function CapabilityPillars() {
  return (
    <section className="bg-vbx-navy section-padding">
      <div className="container-wide">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-px">
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.index}
              className="flex flex-col gap-5 px-0 md:px-8 py-8 md:py-0"
              style={{
                borderLeft: i > 0 ? '1px solid rgba(46,168,145,0.15)' : 'none',
                borderTop: i > 0 ? undefined : 'none',
              }}
            >
              <p className="font-mono text-vbx-teal text-sm tracking-[0.1em]">
                [ {pillar.index} ]
              </p>
              <h3 className="font-display text-vbx-white text-xl leading-snug">
                {pillar.headline}
              </h3>
              <div className="data-line pt-4">
                <p className="font-sans text-vbx-muted text-sm leading-relaxed pt-4">
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/healthcare-it#capabilities"
            className="font-sans text-vbx-teal text-sm hover:text-vbx-white transition-colors tracking-wide"
          >
            → Full Capability Matrix
          </Link>
        </div>
      </div>
    </section>
  )
}
