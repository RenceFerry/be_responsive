/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bg1: 'var(--bg1)',
        color1: 'var(--color1)',
        bg2: 'var(--bg2)',
        color2: 'var(--color2)',
        color3: 'var(--color3)',
        color4: 'var(--color4)',
        bg3: 'var(--bg3)',
      },
    },
  },
  plugins: [],
}