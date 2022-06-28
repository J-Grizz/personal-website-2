module.exports = {
  theme: {
    extend: {
      colors: {
        'burnt-orange': '#c76454',
        twilight: '#84526d',
        space: '#343865',
      },
      backgroundImage: {
        'landing-background-dark': "url('/public/img/simple.jpg')",
        'home-background-dark': "url('/public/img/elk.jpg')",
        'projects-background-dark': "url('/public/img/goonies.png')",
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
