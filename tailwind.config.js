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
      secondary: '#E4BF56'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    backgroundImage: {
      bg: 'url("/src/lib/images/bg.png")'
    }
  },
  plugins: [],
}

