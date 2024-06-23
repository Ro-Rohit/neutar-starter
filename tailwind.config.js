/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#55c57a',
          light: '#7ed56f',
          dark: '#28b485',
        },
        secondary: {
          light: '#ffb900',
          dark: '#ff7730'
        },
        tertiary: {
          light: '#2998ff',
          dark: '#5643fa'
        },
        grey: {
          "light-1": '#f7f7f7',
          "light-2": '#eee',
          "dark-1": '#777',
          "dark-2": '#999',
          "dark-3": '#333',
        },

        romanfirst: {
          DEFAULT: '#eb2f64',
          light: '#FF3366',
          dark: '#BA265D'
        },
        romanSecond: {
          "grey-light-1": '#faf9f9',
          "grey-light-2": '#f4f2f2',
          "grey-light-3": '#f0eeee',
          "grey-light-4": '#ccc',
          "grey-dark-1": '#333',
          "grey-dark-2": '#777',
          "grey-dark-3": '#999',
        },


        greekfirst: {
          DEFAULT: '#c69963',
          dark: '#B28451'
        },
        greekSecond: {
          DEFAULT: '#101d2c',
        },
        greekThird: {
          "light-1": '#f9f7f6',
          "light-2": '#aaa',
          "dark-1": '#54483A',
          "dark-2": '#6D5D4B',
        },
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        opensans: ["open Sans", "sans-serif"],
        josephin: ["josephin Sans", "sans-serif"],

      },
      backgroundImage: {
        "hero": "url('../src/img/hero.jpg')",
        "hero-small": "url('../src/img/hero-small.jpg')",
        "hero-gradient": 'Linear-gradient(to bottom, #7ed56f, #28b485)',
        "service": "url('../src/img/nat-4.jpg')",
        "card-1": "url('../src/img/nat-5.jpg')",
        "card-2": "url('../src/img/nat-6.jpg')",
        "card-3": "url('../src/img/nat-7.jpg')",
        "contact": "url('../src/img/nat-10.jpg')",
        "header-house": "url('../src/assets/nexter-img/hero.jpeg')",


      },
      clipPath: {
        "hero": 'polygon(0 0, 100% 0, 100% 90%, 0 100%)',
        "card": 'polygon(0 0, 100% 0, 100% 85%, 60% 90%, 0 100%)',

      },
      keyframes: {
        SlideLeft: {
          "0%": { transform: 'translateX(-100%)', opacity: '0' },
          "100%": { transform: 'translateX(0%)', opacity: '1' },
        },
        SlideLeftRev: {
          "0%": { transform: 'translateX(100%)', opacity: '1' },
          "100%": { transform: 'translateX(-100%)', opacity: '0' },
        },
        SlideRight: {
          "0%": { transform: 'translateX(100%)', opacity: '0' },
          "100%": { transform: 'translateX(0%)', opacity: '1' },
        },
        SlideTop: {
          "0%": { transform: 'translateY(100%)', opacity: '0' },
          "100%": { transform: 'translateY(0%)', opacity: '1' },
        },
      },
      animation: {
        SlideLeft: 'SlideLeft 1s ease-out',
        SlideLeftRev: 'SlideLeftRev 1s ease-out',
        SlideRight: 'SlideRight 1.4s ease-out',
        SlideTop: 'SlideTop 1.4s ease-out',
      },
      animationDelay: {
        '0': '0s',
        '200': '0.2s',
        '500': '0.5s',
        '1000': '1s',
      },
    },
  },
  variants: {
    extend: {
      fill: ['hover', 'group-hover'],
      transform: ['checked', 'not-checked'],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    function ({ addUtilities, theme, e }) {
      const animationDelay = theme('animationDelay');


      const utilities = Object.keys(animationDelay).map(key => ({
        [`.${e(`animation-delay-${key}`)}`]: {
          'animation-delay': animationDelay[key],
        },
      }));


      const newUtilities = {
        '.clip-hero': {
          clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)',
        },
        '.clip-card': {
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 60% 90%, 0 100%)',
        },
      };

      addUtilities(newUtilities, utilities['responsive', 'hover']);
    },


    function ({ addVariant, e }) {
      addVariant('not-checked', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`not-checked${separator}${className}`)}:not(:checked)`;
        });
      });
    },

  ],
}

