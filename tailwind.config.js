module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bangers: ["Bangers", "cursive"],
      },
      colors: {
        theme: "#181A1B",
      },
    },
  },
  plugins: [],
};
