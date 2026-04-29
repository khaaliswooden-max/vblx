interface Props {
  variant?: 'full' | 'horizontal' | 'icon'
  width?: number
  className?: string
  /** Text fill colour — use '#F5F5F0' on dark backgrounds */
  textColor?: string
}

const MARK_SRC = '/visionblox-logo-mark.svg'
const MARK_W = 272
const MARK_H = 231

export default function VisionbloxLogo({
  variant = 'horizontal',
  width,
  className,
  textColor = '#3A4677',
}: Props) {
  if (variant === 'icon') {
    const w = width ?? 40
    return (
      <img
        src={MARK_SRC}
        width={w}
        height={Math.round((w * MARK_H) / MARK_W)}
        className={className}
        alt="Visionblox"
      />
    )
  }

  if (variant === 'horizontal') {
    const w = width ?? 180
    const markH = 50
    const markW = Math.round((markH * MARK_W) / MARK_H)
    return (
      <svg
        viewBox="0 0 340 60"
        width={w}
        height={Math.round((w * 60) / 340)}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Visionblox"
      >
        <image href={MARK_SRC} x={0} y={5} width={markW} height={markH} preserveAspectRatio="xMidYMid meet" />
        <text
          x={markW + 12}
          y={42}
          fontFamily="DM Sans, Instrument Sans, system-ui, sans-serif"
          fontSize={32}
          fontWeight="600"
          fill={textColor}
          letterSpacing="-0.5"
        >
          visionblox
        </text>
      </svg>
    )
  }

  const w = width ?? 160
  const markW = 220
  const markH = Math.round((markW * MARK_H) / MARK_W)
  return (
    <svg
      viewBox="0 0 256 300"
      width={w}
      height={Math.round((w * 300) / 256)}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Visionblox"
    >
      <image
        href={MARK_SRC}
        x={(256 - markW) / 2}
        y={20}
        width={markW}
        height={markH}
        preserveAspectRatio="xMidYMid meet"
      />
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
