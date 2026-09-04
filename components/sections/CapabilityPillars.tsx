import Link from 'next/link'

/**
 * The three capability pillars.
 *
 * The "[ 01 ] [ 02 ] [ 03 ]" markers were removed: this content is not a
 * sequence, so the numbering was decoration rather than meaning.
 */
const PILLARS = [
  {
    headline: 'Healthcare data systems',
    body: 'Epic EMR integration, HL7 data pipelines, MITA-compliant Medicaid architecture, and patient portal infrastructure — delivered at a leading national integrated healthcare system and California DHCS.',
  },
  {
    headline: 'Compliance and security architecture',
    body: 'HIPAA, HITRUST audits, 21st Century Cures Act, Section 508 ADA, FedRAMP-aware deployment on AWS GovCloud and Azure Government. 13 years of healthcare security leadership on staff.',
  },
  {
    headline: 'Healthcare AI and document intelligence',
    body: 'NLP, OCR, and ML pipelines purpose-built for healthcare data. Delivered 96% document processing accuracy and 60% labor reduction at a state Medicaid agency. Python, Spark, Kafka, Snowflake.',
  },
]

export default function CapabilityPillars() {
  return (
    <section className="bg-vbx-offwhite section-padding" aria-labelledby="capabilities-heading">
      <div className="container-wide">

        <h2 id="capabilities-heading" className="sr-only">Capabilities</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {PILLARS.map((pillar) => (
            <div key={pillar.headline} className="flex flex-col gap-4">
              <span aria-hidden="true" className="block w-10 h-[3px] bg-vbx-teal" />
              <h3 className="font-display text-vbx-navy text-xl font-semibold leading-snug">
                {pillar.headline}
              </h3>
              <p className="text-vbx-navy-light text-sm leading-relaxed">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/healthcare-it#capabilities" className="link">
            Full capability matrix
            <span className="link-arrow" aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
