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
                color: '#446688',
                textDecoration: 'none',
                borderBottom: '1px solid #bcd',
                '&:hover': {
                  color: '#2d3939',
                  borderBottom: '1px solid #dd9922',
                },
              },
              'span.favorite-star': {
                fontSize: '14px', 
                color: '#ffb800',
                verticalAlign: 'middle',
                marginLeft: '0.25em',
              },
              'a.font-bold': {
                fontWeight: '700',
              },
              strong: {
                fontWeight: '700',
                color: 'inherit',
              },
              'h1': {
                color: '#517AA3',
                marginTop: '2.5rem',
                marginBottom: '2.5rem',
                '&:first-child': {
                  marginTop: '2.5rem',
                }
              },
              'h2': {
                color: '#517AA3',
              },
              'code::before': {
                content: 'none !important',
              },
              'code::after': {
                content: 'none !important',
              },
              'tbody td:last-child': {
                textAlign: 'right',
              },
              'thead th:last-child': {
                textAlign: 'right',
              },
              code: {
                backgroundColor: '#f2ede8',
                padding: '0.25rem',
              },
              'pre code::before': {
                content: 'none !important',
              },
              'pre code::after': {
                content: 'none !important',
              },
            },
          },
        },
        fontFamily: {
          sans: ['Instrument Sans', 'sans-serif'],
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }