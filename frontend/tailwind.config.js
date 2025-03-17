// tailwind.config.js
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        white: 'FDFDFD',
        'light- blue': '8BB9E3',
        'lighter- blue': 'A9CAE7',
        'bright-orange': 'F07B3E',
        'grey': '8898A6',
        'rose': 'D2AF9E',
      },
    },
    plugins: [],
  };
