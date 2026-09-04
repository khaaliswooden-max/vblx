import type { Config } from 'tailwindcss'

/**
 * The colour scale mirrors the eight brand tokens defined in app/globals.css.
 * Every value here is `var(--vbx-*)` so the stylesheet stays the single source
 * of truth — changing a brand colour is a one-line edit in globals.css.
 *
 * Legacy aliases (background.*, accent.*, text.*, vbx-white) are retained so
 * older components keep compiling, but they now resolve to the light-ground
 * system rather than the old dark palette.
 */
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ---- The eight brand tokens ----
        'vbx-navy':       'var(--vbx-navy)',
        'vbx-navy-light': 'var(--vbx-navy-light)',
        'vbx-teal':       'var(--vbx-teal)',
        'vbx-teal-light': 'var(--vbx-teal-light)',
        'vbx-teal-tint':  'var(--vbx-teal-tint)',
        'vbx-gold':       'var(--vbx-gold)',
        'vbx-muted':      'var(--vbx-muted)',
        'vbx-offwhite':   'var(--vbx-offwhite)',

        // ---- Derived inks (tints of a token, not new colours) ----
        'vbx-ink':        'var(--vbx-ink)',
        'vbx-rule':       'var(--vbx-rule)',

        // ---- Legacy aliases, remapped to the light-ground system ----
        'vbx-white':      'var(--vbx-offwhite)',
        'vbx-gray':       'var(--vbx-teal-tint)',
        'vbx-charcoal':   'var(--vbx-navy-light)',
        'vbx-navy-dark':  'var(--vbx-navy)',
        background: {
          primary:   'var(--vbx-offwhite)',
          secondary: 'var(--vbx-teal-tint)',
          tertiary:  'var(--vbx-offwhite)',
          elevated:  'var(--vbx-teal-tint)',
          band:      'var(--vbx-navy)',
        },
        accent: {
          primary:   'var(--vbx-teal)',
          secondary: 'var(--vbx-gold)',
          tertiary:  'var(--vbx-gold)',
          hover:     'var(--vbx-navy)',
        },
        text: {
          primary:   'var(--vbx-navy)',
          secondary: 'var(--vbx-ink)',
          tertiary:  'var(--vbx-ink)',
          inverse:   'var(--vbx-offwhite)',
        },
        // Status colours resolve to brand tokens — no off-palette signal colours.
        success: 'var(--vbx-teal)',
        warning: 'var(--vbx-gold)',
        error:   'var(--vbx-navy)',
        info:    'var(--vbx-navy)',
      },
      fontFamily: {
        // Two families maximum (Step 2). Display resolves to the sans stack.
        display: ['DM Sans', 'Arial', 'Helvetica', 'system-ui', 'sans-serif'],
        sans:    ['DM Sans', 'Arial', 'Helvetica', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'ui-monospace', 'Courier New', 'monospace'],
      },
      fontSize: {
        'display-xl': ['5rem',    { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['4rem',    { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-md': ['3.25rem', { lineHeight: '1.1',  letterSpacing: '-0.015em' }],
        'display-sm': ['2.5rem',  { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'heading-xl': ['2.25rem', { lineHeight: '1.2' }],
        'heading-lg': ['1.875rem',{ lineHeight: '1.3' }],
        'heading-md': ['1.5rem',  { lineHeight: '1.4' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body-md': ['1rem',     { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'body-xs': ['0.75rem',  { lineHeight: '1.5' }],
      },
      spacing: { '18': '4.5rem', '88': '22rem', '128': '32rem' },
      animation: {
        'fade-in':    'fadeIn 0.5s ease-out both',
        'fade-up':    'fadeUp 0.6s ease-out both',
        'slide-left': 'slideInLeft 0.6s ease-out both',
        'rotate-slow':'rotateSlow 40s linear infinite',
        'blink':      'blink 0.8s step-end infinite',
        'dot-pulse':  'dotPulse 2s infinite',
      },
      keyframes: {
        fadeIn:      { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeUp:      { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideInLeft: { '0%': { opacity: '0', transform: 'translateX(-24px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        rotateSlow:  { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        blink:       { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
        dotPulse:    { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0.3' } },
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(46,168,145,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(46,168,145,0.08) 1px, transparent 1px)',
      },
      backgroundSize: { grid: '48px 48px' },
      boxShadow: {
        card:         '0 1px 2px rgba(35,45,90,0.06), 0 1px 3px rgba(35,45,90,0.10)',
        'card-hover': '0 2px 6px rgba(35,45,90,0.08), 0 4px 12px rgba(35,45,90,0.12)',
      },
      borderRadius: {
        // Step 2: maximum radius is 4px. No pills, no large rounded cards.
        DEFAULT: '2px',
        none: '0px',
        sm:   '2px',
        md:   '2px',
        lg:   '4px',
        xl:   '4px',
        '2xl':'4px',
        '3xl':'4px',
        // `full` is retained ONLY for genuinely circular elements (radio
        // controls, status dots). It must never be used on a button or card.
        full: '9999px',
      },
    },
  },
  plugins: [],
}

export default config
