/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        animation: {
            'fade-in': 'fadeIn 0.6s ease-out forwards'
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0, transform: 'translateY(10px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' }
          }
        },
            colors: {
        sidiag: {
          dark: "#1f5d3e", //Vert foncé
          medium: "#3a7c5a", //Vert moyen
          mediumLight: "#88b24a", //Vert moyen clair
          light: "#a4cf57", //Vert clair
        }
      },
      screens: {
      'xl-sm': '1180px',
      '4xl': '2300px',
    }
    },
  },
  plugins: [],
}
