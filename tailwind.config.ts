import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // VBX Brand Palette
        'vbx-navy':    '#232D5A',
        'vbx-teal':    '#2EA891',
        'vbx-gold':    '#F7B801',
        'vbx-gray':    '#F0F0F0',
        'vbx-charcoal':'#2E2E2E',
        'vbx-white':   '#F5F5F0',
        'vbx-muted':   '#8892A4',
        // Surface variants
        'vbx-navy-light': '#2A3560',
        'vbx-navy-dark':  '#1B2347',
        // Legacy aliases
        background: {
          primary:  '#232D5A',
          secondary:'#1B2347',
          tertiary: '#1A2140',
          elevated: '#2A3560',
        },
        accent: {
          primary:   '#2EA891',
          secondary: '#F7B801',
          tertiary:  '#F7B801',
          hover:     '#26957F',
        },
        text: {
          primary:   '#F5F5F0',
          secondary: '#8892A4',
          tertiary:  '#6B7589',
          inverse:   '#232D5A',
        },
        // Status Colors
        success: '#10B981',
        warning: '#F59E0B',
        error:   '#EF4444',
        info:    '#3B82F6',
      },
      fontFamily: {
        display: ['DM Serif Display', 'Playfair Display', 'Georgia', 'serif'],
        sans:    ['DM Sans', 'Instrument Sans', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'IBM Plex Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        // Display sizes
        'display-xl': ['6rem',   { lineHeight: '1',   letterSpacing: '-0.01em' }],
        'display-lg': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'display-md': ['3.75rem',{ lineHeight: '1.1', letterSpacing: '0' }],
        'display-sm': ['3rem',   { lineHeight: '1.15', letterSpacing: '0' }],
        // Heading sizes
        'heading-xl': ['2.25rem', { lineHeight: '1.2' }],
        'heading-lg': ['1.875rem',{ lineHeight: '1.3' }],
        'heading-md': ['1.5rem',  { lineHeight: '1.4' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.4' }],
        // Body sizes
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body-md': ['1rem',     { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        'body-xs': ['0.75rem',  { lineHeight: '1.5' }],
      },
      spacing: {
        '18':  '4.5rem',
        '88':  '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in':    'fadeIn 0.5s ease-out both',
        'fade-up':    'fadeUp 0.6s ease-out both',
        'slide-left': 'slideInLeft 0.6s ease-out both',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rotate-slow':'rotateSlow 40s linear infinite',
        'blink':      'blink 0.8s step-end infinite',
        'dot-pulse':  'dotPulse 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        rotateSlow: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        dotPulse: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.3' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern':
          'linear-gradient(rgba(46,168,145,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(46,168,145,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      boxShadow: {
        'glow-teal-sm': '0 0 10px rgba(46, 168, 145, 0.25)',
        'glow-teal-md': '0 0 20px rgba(46, 168, 145, 0.35)',
        'glow-teal-lg': '0 0 40px rgba(46, 168, 145, 0.45)',
        card:       '0 2px 8px rgba(0,0,0,0.3)',
        'card-hover':'0 8px 24px rgba(0,0,0,0.45)',
      },
      borderRadius: {
        // Max 4px per brief — no large rounded corners
        DEFAULT: '2px',
        sm:      '2px',
        md:      '2px',
        lg:      '4px',
        xl:      '4px',
        '2xl':   '4px',
        full:    '9999px',
      },
    },
  },
  plugins: [],
}

export default config
