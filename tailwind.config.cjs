const { tailwindConfig } = require('@storefront-ui/vue/tailwind-config');
const sfTypography = require('@storefront-ui/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [tailwindConfig],
  content: [
    './index.html',
    './**/*.vue',
    './node_modules/@storefront-ui/vue/**/*.{js,mjs}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', 'system-ui'],
      heading: ['Arial', 'Georgia'],
    },
  },
  plugins: [sfTypography],
};
