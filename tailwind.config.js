module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'bounce-once': "bounce-up 0.5s ease-out"
      },
    },
    backgroundImage: {
      'pokedex': "url('../src/assets/bg-image.png')",
      'type-flying': "linear-gradient(to bottom, #38bdf8 50% , #a3a3a3 50%);",
      'type-ground': "linear-gradient(to bottom, #fde047 50% , #a3a3a3 50%);"
    }
  },
  plugins: [],
};
