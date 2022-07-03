module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'roboto-mono': ['"Roboto Mono"', 'cursive'],
      },
      colors: {
        'burnt-orange': '#c76454',
        twilight: '#84526d',
        space: '#343865',
      },
      backgroundImage: {
        'landing-background-dark': "url('/public/img/simple.jpg')",
        'home-background-dark': "url('/public/img/elk.jpg')",
        'about-background-dark': "url('/public/img/camp.jpg')",
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
      fontSize: {
        '10xl': '10rem',
        '12xl': '12rem',
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
