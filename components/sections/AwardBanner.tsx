import Link from 'next/link'
import VisionbloxLogo from '@/components/ui/VisionbloxLogo'

/**
 * The State of Montana Master AI Products & Services Contract award.
 *
 * This is the single bold visual moment on the homepage — the one navy band on
 * an otherwise light page. Everything around it stays quiet by design.
 *
 * Gold appears here as a rule and a badge outline only, never as a fill:
 * gold-on-navy measures 7.41:1, while gold as a background would force navy or
 * offwhite text onto it and gold-on-offwhite is 1.63:1.
 *
 * This is the only navy surface on the site, so it is the only place the
 * knockout lockup belongs. The full-colour lockup must never appear here — its
 * wordmark is navy and would measure 1.61:1 against this ground.
 *
 * The lockup carries alt="" deliberately: the heading directly beneath it
 * already opens with "Visionblox awarded...", so an accessible name here would
 * announce the company twice in a row.
 */
export default function AwardBanner() {
  return (
    <section
      className="band relative"
      style={{ borderTop: '3px solid var(--vbx-gold)' }}
      aria-labelledby="montana-award-heading"
    >
      <div className="container-wide relative">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 py-10">

          <div className="flex-1 min-w-0">
            <VisionbloxLogo
              variant="knockout"
              width={148}
              alt=""
              className="h-auto w-[124px] md:w-[148px] mb-6"
            />

            <p className="eyebrow eyebrow-on-dark">New award — August 2026</p>

            <h2
              id="montana-award-heading"
              className="font-display font-bold"
              style={{
                fontSize: 'clamp(1.375rem, 2.6vw, 2rem)',
                lineHeight: '1.25',
                maxWidth: '820px',
              }}
            >
              Visionblox awarded the State of Montana Master AI Products &amp;
              Services Contract — selected on both tracks.
            </h2>

            <p
              className="mt-4 max-w-[760px]"
              style={{ fontSize: '1rem', lineHeight: '1.65', color: 'var(--vbx-offwhite)' }}
            >
              A fully executed statewide AI contract vehicle. Available to Montana
              agencies and, through cooperative purchasing, to public entities
              nationwide.
            </p>

            <dl className="id-list mt-5 max-w-[460px]">
              <dt>Contract</dt>
              <dd>SPB26-0608GW-VSNBLX</dd>
              <dt>Status</dt>
              <dd>Fully executed, August 2026</dd>
            </dl>
          </div>

          <div className="flex-shrink-0">
            <Link
              href="/pastperformance/montana-maps-master-contract"
              className="btn-primary inline-flex items-center whitespace-nowrap"
            >
              Read the contract profile
              <span className="link-arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
