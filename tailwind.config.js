/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        darkCyan: 'hsl(158, 36%, 37%)',
        cream: 'hsl(30, 38%, 92%)',
        darkBlue: 'hsl(212, 21%, 14%)',
        grayishBlue: 'hsl(228, 12%, 48%)',
        White: 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        'Montserrat': ["Montserrat"],
        'Fraunces': ["Fraunces"]
    },
  },
  plugins: [],
}
}
