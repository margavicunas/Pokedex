module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'bounce-once': "bounce 0.5s"
      }
    },
    backgroundImage: {
      'pokedex': "url('https://assets.pokemon.com/static2/_ui/img/chrome/body_bg.png')",
    }
  },
  plugins: [],
};
