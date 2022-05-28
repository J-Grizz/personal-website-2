module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'nature-dark': "url('/public/img/simple.jpg')",
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
