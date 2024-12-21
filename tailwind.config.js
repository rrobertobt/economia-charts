//const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    fontFamily: {
      sans: "Mona Sans, sans-serif",
      // mono: "DM Mono, ui-monospace",
      mono: "Hubot Sans, ui-monospace",
    },
    extend: {},
  },
  /*plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],*/
}