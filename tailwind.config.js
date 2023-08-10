/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        pattern: 'url("../src/assets/img/Vector.svg")',
      },
      colors: {
        PrimaryPurple: '#30237B',
        SecondaryPurple: '#EEECF8',
        StrokeColor: '#DBDBDB',
        SecondaryFontColor: '#666476',
      },
      gridTemplateColumns: {
        content: '100px 1fr',
        process: '1fr 2fr',
        advantages: '2fr 1fr',
      },
    },
  },
  plugins: [],
};
