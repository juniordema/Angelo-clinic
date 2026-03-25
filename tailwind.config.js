/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#f0f4ff',
          100: '#dde6f9',
          200: '#b3c6f0',
          600: '#1a3a6b',
          700: '#122d58',
          800: '#0d2145',
          900: '#081632',
        },
        mint: {
          400: '#4fd1a5',
          500: '#2fb88a',
          600: '#1fa070',
        },
        cream: '#f7f5f0',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px rgba(13,33,69,0.08)',
        'card-hover': '0 8px 40px rgba(13,33,69,0.16)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      }
    }
  },
  plugins: []
}
