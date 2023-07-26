/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        emphasis: ["Athelas", "sans-serif"],
      },
      colors: {
        main_theme: "#212e58",
        emphasis: "#00608d",
      },
      boxShadow: {
        card: "0 3px 15px 1px rgba(0,0,0,0.3)",
      },
    },
  },
  plugins: [],
};
