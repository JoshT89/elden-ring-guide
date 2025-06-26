/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx,mdx}',
    './components/**/*.{js,jsx,mdx}',
    './app/**/*.{js,jsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'fantasy': ['Cinzel', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        elden: {
          50: '#F0F7F3',
          100: '#E1EFE7',
          200: '#C3DFCF',
          300: '#A5CFB7',
          400: '#87BF9F',
          500: '#4A7A5A',
          600: '#3A5F4A',
          700: '#2D4A3D',
          800: '#1F3329',
          900: '#0F1A14',
        },
        erdtree: {
          50: '#FEFCF0',
          100: '#FDF9E1',
          200: '#F8F0B8',
          300: '#F0E68C',
          400: '#E6D85A',
          500: '#D4AF37',
          600: '#B8860B',
          700: '#9A7209',
          800: '#7D5E07',
          900: '#5F4805',
        },
        shadow: {
          50: '#F5F2F0',
          100: '#EBE5E1',
          200: '#D7CBC3',
          300: '#C3B1A5',
          400: '#AF9787',
          500: '#8B4513',
          600: '#7D3E11',
          700: '#6F370F',
          800: '#61300D',
          900: '#53290B',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
      },
      backgroundImage: {
        'elden-gradient': 'linear-gradient(135deg, #2D4A3D, #1F3329)',
        'erdtree-gradient': 'linear-gradient(135deg, #D4AF37, #B8860B)',
        'shadow-gradient': 'linear-gradient(135deg, #8B4513, #654321)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};