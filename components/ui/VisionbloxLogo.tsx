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
 * Geometry: flat-top hexagon (r=88) centred at (100,95), split into three
 * 120° sectors with a two-tone shading to suggest depth.
 */
export default function VisionbloxLogo({
  variant = 'horizontal',
  width,
  className,
  textColor = '#3A4677',
}: Props) {
  // ── Icon mark ─────────────────────────────────────────────────────────────
  //
  // Hexagon vertices (0 °=right, CCW):
  //   0°  (188,95)  60°  (144,19)  120° (56,19)
  //  180° (12,95)  240° (56,171)  300° (144,171)
  //
  // Sector boundaries (rays at 90°/210°/330° from centre 100,95):
  //   90°  → (100,19)   210° → (34,133)   330° → (166,133)
  //
  // Each sector is split by a line from centre → opposite vertex to give
  // a lighter "lit" face and a darker "shadow" face.

  const Mark = () => (
    <g>
      {/* Purple — upper-left ------------------------------------------ */}
      {/* lighter: upper-right triangle */}
      <polygon points="100,95 100,19 56,19"          fill="#9070C4" />
      {/* darker:  lower-left quad */}
      <polygon points="100,95 56,19 12,95 34,133"    fill="#6448A0" />

      {/* Orange — upper-right ----------------------------------------- */}
      {/* lighter: right quad */}
      <polygon points="100,95 144,19 188,95 166,133"  fill="#F4A880" />
      {/* darker:  upper-left triangle */}
      <polygon points="100,95 100,19 144,19"          fill="#D87055" />

      {/* Teal — bottom ------------------------------------------------ */}
      {/* lighter: right quad */}
      <polygon points="100,95 100,171 144,171 166,133" fill="#35CC9A" />
      {/* darker:  left quad */}
      <polygon points="100,95 34,133 56,171 100,171"   fill="#18A070" />
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
        viewBox="0 0 200 190"
        width={w}
        height={Math.round(w * 190 / 200)}
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
    // Icon scaled ×0.25 → 50×47.5, with 4px top-pad to centre in 56px height
    return (
      <svg
        viewBox="0 0 320 56"
        width={w}
        height={Math.round(w * 56 / 320)}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Visionblox"
      >
        <g transform="translate(3,4) scale(0.25)">
          <Mark />
        </g>
        <Text x={62} y={40} size={32} />
      </svg>
    )
  }

  // ── Full (icon stacked above wordmark) — footer / hero ────────────────────
  const w = width ?? 160
  return (
    <svg
      viewBox="0 0 200 270"
      width={w}
      height={Math.round(w * 270 / 200)}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Visionblox"
    >
      <Mark />
      <text
        x="100"
        y="248"
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
