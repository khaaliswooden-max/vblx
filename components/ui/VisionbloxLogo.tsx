import Image from 'next/image'

/**
 * The Visionblox lockup.
 *
 * ASSETS IN THIS REPOSITORY
 *
 *   public/visionblox-logo.png           Full-colour lockup — mark + navy
 *                                        wordmark, 1002x422, transparent.
 *                                        LIGHT GROUNDS ONLY.
 *   public/visionblox-logo-knockout.png  Knockout lockup — mark + offwhite
 *                                        wordmark, 1002x422, transparent.
 *                                        NAVY GROUNDS ONLY.
 *   public/visionblox-logo-mark.svg      The mark alone, no wordmark.
 *
 * Both lockups keep the mark in full colour; only the wordmark changes. The
 * mark's own fills (lavender, salmon, mint) are intentionally not among the
 * eight brand tokens — the mark is the mark, and it is never recoloured.
 *
 * RULES
 *  - Never typeset the word "visionblox" as text in place of the wordmark.
 *  - Never CSS-invert or filter one variant to fake the other. Pick the right
 *    asset for the ground.
 *  - The knockout is for NAVY. It is not for teal: the mark's mint block sits
 *    close enough to --vbx-teal that the lockup loses definition there.
 *  - The knockout's wordmark is #F5F5F0, i.e. --vbx-offwhite exactly, giving
 *    12.04:1 on navy.
 *
 * Both lockups are the canonical copies kept in
 * .claude/skills/vbx-branding/assets/. Keep them in sync with that directory
 * rather than editing either copy in isolation.
 */

const LOCKUP_LIGHT = { src: '/visionblox-logo.png', w: 1002, h: 422 }
const LOCKUP_KNOCK = { src: '/visionblox-logo-knockout.png', w: 1002, h: 422 }
const MARK = { src: '/visionblox-logo-mark.svg', w: 272, h: 231 }

interface Props {
  /**
   * `lockup`   — mark + navy wordmark, for light grounds (default).
   * `knockout` — mark + white wordmark, for navy grounds.
   * `mark`     — the mark alone, reads on either ground.
   */
  variant?: 'lockup' | 'knockout' | 'mark'
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
  const asset =
    variant === 'knockout' ? LOCKUP_KNOCK : variant === 'mark' ? MARK : LOCKUP_LIGHT
  const w = width ?? (variant === 'mark' ? 40 : 180)

  return (
    <Image
      src={asset.src}
      alt={alt}
      width={w}
      height={Math.round((w * asset.h) / asset.w)}
      className={className}
      priority={priority}
    />
  )
}
