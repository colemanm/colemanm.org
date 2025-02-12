/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './_includes/**/*.{html,md}',
      './_layouts/**/*.{html,md}',
      './_posts/**/*.{html,md}',
      './*.{html,md}'
    ],
    theme: {
      extend: {
        typography: {
          DEFAULT: {
            css: {
              a: {
                color: '#517AA3',
                '&:hover': {
                  color: '#3d5d7d',
                },
              },
              h1: {
                color: '#517AA3',
              },
              h2: {
                color: '#517AA3',
              },
            },
          },
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }