/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Green1':'#49DF49',
        'Green2':'#008000',
        'Green3':'#91C982',
        'Yellow':'#FFD700',
        'Red':'#FF0000',
        'Gray':'#D9D9D9',
      },
      padding:{
        '15':'15px',
        '10':'10px',
        '30':'30px',
      },
      gap:{
        '15':'15px',
        '10':'10px',
        '30':'30px',
      },
    },
  },
  plugins: [],
}
