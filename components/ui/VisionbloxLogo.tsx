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
      {/* Purple block — upper-left */}
      <polygon points="37,0 111,0 76,63 0,63"        fill="#6456A2" />
      <polygon points="0,63 76,63 111,130 37,130"     fill="#9182BC" />
      {/* Salmon block — upper-right */}
      <polygon points="143,0 218,0 181,65 107,65"     fill="#F8A98C" />
      <polygon points="218,0 255,65 218,130 181,65"   fill="#F58D63" />
      {/* Teal block — bottom */}
      <polygon points="166,95 201,155 166,217 130,155" fill="#63C3A7" />
      <polygon points="54,160 130,155 166,217 89,222"  fill="#1DB588" />
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
        viewBox="0 0 256 224"
        width={w}
        height={Math.round(w * 224 / 256)}
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
        viewBox="0 0 340 60"
        width={w}
        height={Math.round(w * 60 / 340)}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Visionblox"
      >
        <g transform="translate(2,2) scale(0.25)">
          <Mark />
        </g>
        <Text x={70} y={42} size={32} />
      </svg>
    )
  }

  // ── Full (icon stacked above wordmark) — footer / hero ────────────────────
  const w = width ?? 160
  return (
    <svg
      viewBox="0 0 256 300"
      width={w}
      height={Math.round(w * 300 / 256)}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Visionblox"
    >
      <Mark />
      <text
        x="128"
        y="272"
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
