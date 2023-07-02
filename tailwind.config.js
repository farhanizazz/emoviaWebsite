/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      menu: ['Bebas Neue', 'sans-serif'],
      content: ['Montserrat', 'sans-serif']
    },
    colors: {
      main: '#002446',
      secondary: '#E4BF56',
    },
    screens: {
      'sm': '0px',
      // => @media (min-width: 640px) { ... }

      'md': '767px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    backgroundImage: {
      bg: 'url("/src/lib/images/bg.png")',
      bgContact: 'url("/src/lib/images/bgContact.png")',
      bgVid: 'url("/src/lib/images/bg.mp4")',
      bgMini: 'url("/src/lib/images/bgMini.png")'
    }
  },
  plugins: [],
}

