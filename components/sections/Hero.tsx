import Link from 'next/link'

/**
 * Homepage hero.
 *
 * Deliberately quiet: the Montana award band immediately below is the single
 * bold visual moment on this page, so everything here stays disciplined.
 *
 * Removed in the brand conformance pass:
 *  - A four-image crossfade slideshow (/slides/slide-1..4.png). Those images
 *    are AI-generated stock carrying a visible generation watermark and, in
 *    slide-3, garbled text ("Huntsville Generalleel", a fabricated camera EXIF
 *    string). They also introduced red/orange/yellow/green and cyan behind the
 *    hero, none of which are brand colours.
 *  - A character-by-character typewriter effect on the <h1>, which meant the
 *    headline was absent from the initial DOM for crawlers and was announced
 *    incrementally to screen readers.
 *  - A decorative rotating SVG data-grid and a pulsing 36-node grid.
 *  - Slide indicator <button>s that were focusable while inside an
 *    aria-hidden="true" container and carried no accessible name.
 *
 * The headline, supporting paragraph, identity codes and both calls to action
 * are unchanged.
 */
export default function Hero() {
  return (
    <section className="bg-vbx-offwhite border-b border-vbx-rule">
      <div className="container-wide">
        <div className="max-w-[880px] pt-28 pb-16 md:pt-40 md:pb-24">

          <p className="eyebrow">Healthcare data infrastructure</p>

          <h1
            className="font-display text-vbx-navy font-bold"
            style={{
              fontSize: 'clamp(2.25rem, 5vw, 4rem)',
              lineHeight: '1.08',
              letterSpacing: '-0.02em',
            }}
          >
            Healthcare data infrastructure for the institutions that govern it.
          </h1>

          <p
            className="text-vbx-navy-light mt-6"
            style={{ fontSize: '1.125rem', lineHeight: '1.7', maxWidth: '620px' }}
          >
            Visionblox builds the systems that move patient data, process Medicaid
            claims, and integrate EMR infrastructure — engineered to the standards
            that federal and state agencies evaluate, audit, and award.
          </p>

          {/* Identity codes as a definition list, not a slash-joined string */}
          <dl className="id-list mt-8 max-w-[520px]">
            <dt>CAGE</dt>
            <dd>9Z4X2</dd>
            <dt>UEI</dt>
            <dd>H4X2Z7R9E3E3</dd>
            <dt>Designation</dt>
            <dd>Minority-owned small business</dd>
            <dt>Vehicle</dt>
            <dd>State of Montana MAPS AI contract</dd>
          </dl>

          <div className="flex flex-wrap gap-3 mt-10">
            <Link href="/healthcare-it" className="btn-primary">
              View healthcare portfolio
            </Link>
            <a
              href="mailto:services@visionblox.com?subject=Healthcare%20IT%20Capability%20Briefing"
              className="btn-secondary"
            >
              Request a briefing
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
