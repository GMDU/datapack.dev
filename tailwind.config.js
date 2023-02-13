const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.html', './src/**/*.md'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        minecraft: ['Minecraft', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        'header-start': '#af4890',
        'header-end': '#4b51b5',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
