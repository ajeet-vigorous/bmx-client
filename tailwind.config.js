module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      colors: {
        dark: {
          '400': '#16181D',
          DEFAULT: '#0E0F12',
        },
        shine: {
          '400': '#F9B707',
          DEFAULT: '#C29A2D',
        },
      },

      fontFamily: {
        sans: ["'Poppins'", 'ui-sans-serif', 'system-ui', 'sans-serif', 'Arial']

      },

    },
  },
  variants: {
    extend: {},
  },
//   plugins: [
//     require('flowbite/plugin')
//   ],
//   content: [
//     // ...
//     'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
// ]
}
