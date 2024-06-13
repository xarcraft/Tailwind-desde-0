/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        /* podemos personalizar una paleta de colores de manera global en nuestra aplicacion */
        "indigoP-200": "#ead2ff",
        "indigoP-900": "#5b148f",
      },
      /* con la propiedad spacing el valor que creemos es genericos para h y w si se quiere limitar a uno
      de los dos en especifico se deberia reemplazar spacing por width o height */
      spacing: {
        /* podemos personalizar medidas globales para nuestros componentes */
        42: "170px",
      },
    },
  },
  plugins: [],
};
