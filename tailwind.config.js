module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'nature-dark': "url('/public/img/simple.jpg')",
      },
      keyframes: {
        blink: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        'blinking-cursor': 'blink 1s step-end infinite',
      },
    },
  },
  darkMode: 'class',
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
  content: ['./src/**/*.{js,jsx,ts,tsx,html}', './public/index.html'],
}
