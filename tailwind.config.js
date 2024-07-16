/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-in-out forwards',
      },
      screens: {
        mlg: { max: '1023px' },
        mmd: { max: '767px' },
        msm: { max: '639px' },
      },
    },
  },
  plugins: [],
};
