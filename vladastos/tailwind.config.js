/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e11d48",

          secondary: "#00f7bb",

          accent: "#0069db",

          neutral: "#44403c",

          "base-100": "#fcfcfc",

          info: "#0062f4",

          success: "#009b35",

          warning: "#facc15",

          error: "#ed003e",
        },
      },
      "dark",
    ],
  },
};
