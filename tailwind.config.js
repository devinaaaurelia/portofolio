/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        'xl' : '1020px',
      },
    },
  },
  plugins: [],
};

// buat jalanin node ./node_modules/tailwindcss/lib/cli.js -i ./src/input.css -o ./dist/output.css --watch