/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          c1: '#183E56', // Azul marinho
          c2: '#3A7FA9', // Verde-azulado
          c3: '#182128', // Azul céu
          c4: '#E4E4E4', // Cinza claro
        },
        secondary: {
          c1: '#FSF9FF', // Branco
          lightblue: '#CCD6E5', // Azul claro
        },
        neutral: {
          black: '#1A1A1A', // Preto
          darkgray: '#E2E2E2', // Cinza escuro
          mediumgray: '#4D4D4D', // Cinza médio
          slategray: '#6B6B6B', // Cinza ardósia
          lightgray: '#878787', // Cinza claro
          purewhite: '#FFFFFF', // Branco puro
          offwhite: '#D1D1D1', // Branco acinzentado
          softgray: '#4D4D4D', // Cinza suave
          mediumsoftgray: '#B3B3B3', // Cinza médio suave
          palegray: '#A3A3A3', // Cinza pálido
        },
      },
    },
  },
  fontFamily: {
    sans: ['Roboto', 'sans-serif'],  // Define Roboto como fonte principal
  },
  plugins: [],
};

