/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    container: false
  },  
  theme: {
    extend: {
      colors: {
        "purpleHeart": "#7232BD",
        "dodgerBlue": "#1DA1F2",
        "scienceBlue": "#0A66C2",
        "jade": "#02B875"
      },
      fontFamily: {
        inter: ['inter', 'sans-serif']
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '940px',
          }
        }
      })
    }
  ]
}
