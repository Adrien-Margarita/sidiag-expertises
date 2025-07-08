/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidiag: {
          dark: "#1f5d3e", //Vert foncé
          medium: "#3a7c5a", //Vert moyen
          mediumLight: "#88b24a", //Vert moyen clair
          light: "#a4cf57", //Vert clair

        }
      }
    },
  },
  plugins: [],
}
