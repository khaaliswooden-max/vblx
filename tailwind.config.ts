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
        // Core Palette (Visionblox Light Theme - Logo Colors)
        background: {
          primary: '#FFFFFF',
          secondary: '#F8F9FA',
          tertiary: '#F1F3F5',
          elevated: '#FFFFFF',
        },
        accent: {
          primary: '#51C7A8',    // Teal/Mint Green - CTAs, highlights
          secondary: '#8A67B4',  // Purple - links, secondary
          tertiary: '#F79462',  // Coral/Orange - highlights, warnings
          hover: '#3DB896',      // Darker teal for hover
        },
        text: {
          primary: '#344669',    // Dark Blue/Slate - main text
          secondary: '#5A6B8A',
          tertiary: '#8A95B0',
          inverse: '#FFFFFF',
        },
        // Status Colors
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
      },
      fontFamily: {
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Display sizes for heroes
        'display-xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-lg': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display-sm': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        // Heading sizes
        'heading-xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-lg': ['1.875rem', { lineHeight: '1.3' }],
        'heading-md': ['1.5rem', { lineHeight: '1.4' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.4' }],
        // Body sizes
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body-md': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'body-xs': ['0.75rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(81, 199, 168, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(81, 199, 168, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(rgba(52, 70, 105, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(52, 70, 105, 0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(81, 199, 168, 0.2)',
        'glow-md': '0 0 20px rgba(81, 199, 168, 0.3)',
        'glow-lg': '0 0 40px rgba(81, 199, 168, 0.4)',
        'card': '0 2px 8px rgba(52, 70, 105, 0.08), 0 1px 3px rgba(52, 70, 105, 0.12)',
        'card-hover': '0 8px 24px rgba(52, 70, 105, 0.12), 0 4px 8px rgba(52, 70, 105, 0.16)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

export default config
