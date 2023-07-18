const { screens } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main': '#222831',
        'secondary': '#393E46',
        'smoke': '#eeeeee',
        'greenish': '#00ADB5',
      },
    },
    screens: {
      'smmd': '600px', //small medium
      ...screens
    },
    container: {
      center: true,
    }
  },
  plugins: [
  ],
  corePlugins: {
    preflight: false,
  },
  important: '#root',
}
