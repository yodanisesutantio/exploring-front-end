const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokemonsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Pokemons = mongoose.model("Pokemons", pokemonsSchema);
module.exports = Pokemons;
