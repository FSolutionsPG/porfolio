import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0A192F',
        'accent': '#00D4FF',
        'cta': '#FFC107',
        'light-bg': '#F8FAFC',
        'light-alt': '#F1F5F9',
        'text-light': '#334155',
        'text-dark': '#E2E8F0',
      },
      fontFamily: {
        'heading': ['var(--font-montserrat)', 'sans-serif'],
        'body': ['var(--font-nunito)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
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
        glowPulse: {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(0, 212, 255, 0.3)' },
          '50%': { 'box-shadow': '0 0 40px rgba(0, 212, 255, 0.5)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
