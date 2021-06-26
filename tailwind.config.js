module.exports = {
  purge: {
    enabled: true,
    content: [
      './docs/*.html'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        kaushan: ['"Kaushan Script"', 'cursive']
      },
      spacing: {
        136: '34em',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
