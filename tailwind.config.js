module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '15px': '15px',
        '75px': '75px',
      },
      textColor: {
        primary: '#1f1f1f',
      },
      screens: {
        '2xl-max': { max: '1537px' },
        // => @media (max-width: 1535px) { ... }

        'xl-max': { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        'lg-max': { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        'md-max': { max: '767px' },
        // => @media (max-width: 767px) { ... }

        'sm-max': { max: '639px' },
        // => @media (max-width: 639px) { ... }
      },
      backgroundImage: (theme) => ({
        'hero-wave': "url('../assets/images/components/wave.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
