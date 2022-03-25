module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'bounce-once': "bounce 0.5s"
      }
    },
    backgroundImage: {
      'pokedex': "url('../src/assets/bg-image.png')",
    }
  },
  plugins: [],
};
