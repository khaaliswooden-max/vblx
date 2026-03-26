interface Props {
  variant?: 'full' | 'horizontal' | 'icon'
  width?: number
  className?: string
  /** Text fill colour — use '#F5F5F0' on dark backgrounds */
  textColor?: string
}

/**
 * Visionblox brand logo.
 *
 * variant="horizontal"  icon left + wordmark right  (navbar default)
 * variant="full"        icon stacked above wordmark  (hero / footer)
 * variant="icon"        icon mark only               (favicon / avatars)
 *
 * Geometry: three separate pointy-top hexagons (r=50) in a pinwheel
 * arrangement, each split into a lighter outer face and darker inner face.
 * Purple center ~(48,60), Salmon center ~(152,60), Teal center (100,150).
 * Mark viewBox: 0 0 200 210.
 */
export default function VisionbloxLogo({
  variant = 'horizontal',
  width,
  className,
  textColor = '#3A4677',
}: Props) {
  // ── Icon mark ─────────────────────────────────────────────────────────────
  const Mark = () => (
    <g>
      {/* Purple — upper-left */}
      <polygon points="5,85 5,35 48,10 91,35"       fill="#9070C4" />
      <polygon points="91,35 91,85 48,110 5,85"      fill="#6448A0" />
      {/* Salmon — upper-right */}
      <polygon points="109,85 109,35 152,10 195,35"  fill="#F4A880" />
      <polygon points="195,35 195,85 152,110 109,85" fill="#D87055" />
      {/* Teal — bottom */}
      <polygon points="57,125 100,100 143,125"                      fill="#35CC9A" />
      <polygon points="57,125 57,175 100,200 143,175 143,125"       fill="#18A070" />
    </g>
  )

  // ── Wordmark ───────────────────────────────────────────────────────────────
  const Text = ({ x, y, size }: { x: number; y: number; size: number }) => (
    <text
      x={x}
      y={y}
      fontFamily="DM Sans, Instrument Sans, system-ui, sans-serif"
      fontSize={size}
      fontWeight="600"
      fill={textColor}
      letterSpacing="-0.5"
    >
      visionblox
    </text>
  )

  // ── Icon only ──────────────────────────────────────────────────────────────
  if (variant === 'icon') {
    const w = width ?? 40
    return (
      <svg
        viewBox="0 0 200 210"
        width={w}
        height={Math.round(w * 210 / 200)}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Visionblox"
      >
        <Mark />
      </svg>
    )
  }

  // ── Horizontal (icon left, wordmark right) — navbar ───────────────────────
  if (variant === 'horizontal') {
    const w = width ?? 180
    // Icon scaled ×0.25 → 50×52.5, centred in 58px height
    return (
      <svg
        viewBox="0 0 320 58"
        width={w}
        height={Math.round(w * 58 / 320)}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Visionblox"
      >
        <g transform="translate(3,3) scale(0.25)">
          <Mark />
        </g>
        <Text x={62} y={41} size={32} />
      </svg>
    )
  }

  // ── Full (icon stacked above wordmark) — footer / hero ────────────────────
  const w = width ?? 160
  return (
    <svg
      viewBox="0 0 200 280"
      width={w}
      height={Math.round(w * 280 / 200)}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Visionblox"
    >
      <Mark />
      <text
        x="100"
        y="258"
        textAnchor="middle"
        fontFamily="DM Sans, Instrument Sans, system-ui, sans-serif"
        fontSize="34"
        fontWeight="600"
        fill={textColor}
        letterSpacing="-0.5"
      >
        visionblox
      </text>
    </svg>
  )
}
