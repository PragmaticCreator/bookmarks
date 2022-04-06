module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      display: ['Rubik', 'sans-serif'],
      body: ['Rubik', 'sans-serif'],
      sans: ['Rubik', 'sans-serif'],
    },
    extend: {
      colors: {
        blue: {
          soft: 'hsl(231, 69%, 60%)',
          grayish: 'hsl(229, 8%, 60%)',
          dark: 'hsl(229, 31%, 21%)',
        },
        red: {
          soft: 'hsl(0, 94%, 66%)',
        },
      },
      animation: {
        'slide-in': 'slide-in 350ms ease-in',
      },
      keyframes: {
        'slide-in': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0%)',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
