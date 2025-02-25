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
              'blockquote': {
                fontStyle: 'normal',
                quotes: 'none',
                backgroundColor: '#f8fafc',
                borderLeft: '3px solid #e2e8f0',
                padding: '0.5rem 1.0rem',
                margin: '1.5rem 0',
              },
              'blockquote p:first-of-type::before': {
                content: 'none',
              },
              'blockquote p:last-of-type::after': {
                content: 'none',
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
              'ul, ol': {
                marginTop: '0.25rem',
                marginBottom: '0.25rem',
                '& ul, & ol': {
                  marginTop: '0.25rem',
                  marginBottom: '0.25rem',
                }
              },
              'li': {
                marginTop: '0.25rem',
                marginBottom: '0.25rem',
              },
              'h1': {
                color: '#517AA3',
                marginTop: '1.25rem',
                marginBottom: '1.25rem',
                '@screen nav': {
                  marginTop: '2.5rem',
                  marginBottom: '2.5rem',
                },
                '&:first-child': {
                  marginTop: '1.25rem',
                  '@screen nav': {
                    marginTop: '2.5rem',
                  }
                }
              },
              '.caption': {
                display: 'block',
                textAlign: 'center',
                color: '#666666',
                fontSize: '0.875rem',
              },
              'figure': {
                margin: '1.5rem 0',
                '& img': {
                  marginBottom: '0.5rem',
                  marginTop: '0',
                }
              },
              '.image-grid': {
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: '1rem',
                '&.single-image': {
                  display: 'block',
                  maxWidth: '100%',
                },
                '& img': {
                  margin: '0',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                },
                '& > div': {
                  margin: '0',
                  height: '100%',
                },
                '&.odd-images div:first-child': {
                  gridColumn: '1 / span 2',
                }
              },
              'h2': {
                color: '#517AA3',
              },
              '.index-first-h2': {
                marginTop: '1.25rem',
                '@screen nav': {
                  marginTop: '3rem',
                }
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
              '.book-date-completed': {
                width: '6.5rem',
                whiteSpace: 'nowrap',
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
              '.posts h2:first-of-type': {
                marginTop: '1.25rem',
                '@screen nav': {
                  marginTop: '3rem',
                }
              },
            },
          },
        },
        fontFamily: {
          sans: ['Instrument Sans', 'sans-serif'],
        },
        screens: {
          'nav': '800px',
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }