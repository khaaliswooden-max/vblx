import Image from 'next/image'

/**
 * The Visionblox lockup.
 *
 * IMPORTANT — asset reality, do not "fix" this by improvising:
 *
 *   public/visionblox-logo.png       the real full-colour lockup (mark +
 *                                    wordmark, navy ink, 1002x422). This is
 *                                    the same asset embedded in the Visionblox
 *                                    capability statement. LIGHT GROUNDS ONLY.
 *   public/visionblox-logo-mark.svg  the mark alone, no wordmark.
 *
 * There is NO knockout (light-wordmark) lockup in this repository. Until one
 * is produced, the lockup must not be placed on a navy band. Do not CSS-invert
 * or filter the full-colour mark to fake one, and do not typeset the word
 * "visionblox" as text in place of the wordmark — both were previously done
 * here and both misrepresent the brand.
 *
 * If you need the logo on navy, use `variant="mark"` (the mark reads on dark)
 * or place the full-colour lockup on an offwhite chip.
 */

const LOCKUP_SRC = '/visionblox-logo.png'
const LOCKUP_W = 1002
const LOCKUP_H = 422

const MARK_SRC = '/visionblox-logo-mark.svg'
const MARK_W = 272
const MARK_H = 231

interface Props {
  /** `lockup` = mark + wordmark (light grounds only). `mark` = mark alone. */
  variant?: 'lockup' | 'mark'
  /** Rendered width in px. Height is derived from the asset's aspect ratio. */
  width?: number
  className?: string
  priority?: boolean
  /**
   * Accessible name. Pass `''` when the logo sits inside a link that already
   * carries its own label, so the name is not announced twice.
   */
  alt?: string
}

export default function VisionbloxLogo({
  variant = 'lockup',
  width,
  className,
  priority = false,
  alt = 'Visionblox',
}: Props) {
  if (variant === 'mark') {
    const w = width ?? 40
    return (
      <Image
        src={MARK_SRC}
        alt={alt}
        width={w}
        height={Math.round((w * MARK_H) / MARK_W)}
        className={className}
        priority={priority}
      />
    )
  }

  const w = width ?? 180
  return (
    <Image
      src={LOCKUP_SRC}
      alt={alt}
      width={w}
      height={Math.round((w * LOCKUP_H) / LOCKUP_W)}
      className={className}
      priority={priority}
    />
  )
}
