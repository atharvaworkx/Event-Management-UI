/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#090A0D',
        surface: {
          DEFAULT: '#0F1117',
          subtle: '#141721',
          muted: '#1A1E2B',
          border: '#232838',
          hover: '#1F2433'
        },
        gold: {
          50: '#FBF8EE',
          100: '#F5EDD3',
          200: '#ECDAA6',
          300: '#DFC274',
          400: '#D4AF37', /* Primary antique gold */
          500: '#C59B27',
          600: '#A37B1B',
          700: '#7B5A14',
          800: '#533B10',
          900: '#2C1E07',
          muted: '#C5A059',
          antique: '#D4AF37',
          deep: '#8E6E28',
        },
        charcoal: {
          800: '#15171F',
          900: '#0C0E14',
          950: '#06070A',
        },
        paper: '#F5F3EF',
        mutedText: '#8D93A5',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        serif: ['"Cinzel"', 'serif'],
      },
      boxShadow: {
        'gold-sm': '0 2px 8px -2px rgba(212, 175, 55, 0.15)',
        'gold-md': '0 4px 20px -2px rgba(212, 175, 55, 0.22)',
        'gold-lg': '0 10px 30px -4px rgba(212, 175, 55, 0.28)',
        'inner-gold': 'inset 0 1px 0 rgba(212, 175, 55, 0.3)',
      },
      letterSpacing: {
        widest_pro: '0.2em',
      },
    },
  },
  plugins: [],
}

