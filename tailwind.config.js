/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
      mono: ['var(--font-plex-mono)', 'monospace'],
    },
    extend: {
      keyframes: {
        'bounce-x': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(6px)' },
        },
        'bounce-x-left': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-6px)' },
        },
      },
      animation: {
        'bounce-x': 'bounce-x 1.5s ease-in-out infinite',
        'bounce-x-left': 'bounce-x-left 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
