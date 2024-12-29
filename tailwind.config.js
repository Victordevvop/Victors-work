export default {
  theme: {
    extend: {
      colors: {
        primary: "#EE2607",
        background: "rgba(var(--background))",
        on__background: "rgba(var(--on__background))",
      },
    },

    fontFamily: {
      eudoxus: ["Eudoxus Sans", "sans-serif"],
    },
  },
  plugins: [],
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`,
  ],
};
