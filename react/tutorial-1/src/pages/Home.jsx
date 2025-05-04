import React, { useState } from "react";
import PokemonList from "../components/PokemonList";

const Home = () => {
  const [pokemons, setPokemons] = useState([
    {
      no: 494,
      name: "Victini",
      type: "Psychic · Fire",
      thumb:
        "https://img.pokemondb.net/sprites/home/normal/2x/avif/victini.avif",
    },
    {
      no: 495,
      name: "Snivy",
      type: "Grass",
      thumb: "https://img.pokemondb.net/sprites/home/normal/2x/avif/snivy.avif",
    },
    {
      no: 496,
      name: "Servine",
      type: "Grass",
      thumb:
        "https://img.pokemondb.net/sprites/home/normal/2x/avif/servine.avif",
    },
    {
      no: 497,
      name: "Serperior",
      type: "Grass",
      thumb:
        "https://img.pokemondb.net/sprites/home/normal/2x/avif/serperior.avif",
    },
    {
      no: 498,
      name: "Tepig",
      type: "Fire",
      thumb: "https://img.pokemondb.net/sprites/home/normal/2x/avif/tepig.avif",
    },
    {
      no: 499,
      name: "Pignite",
      type: "Fire · Fighting",
      thumb:
        "https://img.pokemondb.net/sprites/home/normal/2x/avif/pignite.avif",
    },
    {
      no: 500,
      name: "Emboar",
      type: "Fire · Fighting",
      thumb:
        "https://img.pokemondb.net/sprites/home/normal/2x/avif/emboar.avif",
    },
    {
      no: 501,
      name: "Oshawott",
      type: "Water",
      thumb:
        "https://img.pokemondb.net/sprites/home/normal/2x/avif/oshawott.avif",
    },
    {
      no: 502,
      name: "Dewott",
      type: "Water",
      thumb:
        "https://img.pokemondb.net/sprites/home/normal/2x/avif/dewott.avif",
    },
    {
      no: 503,
      name: "Samurott",
      type: "Water",
      thumb:
        "https://img.pokemondb.net/sprites/home/normal/2x/avif/samurott.avif",
    },
  ]);

  const handleDelete = (no) => {
    const newPokemons = pokemons.filter((pokemon) => pokemon.no !== no);
    setPokemons(newPokemons);
  };

  return (
    <>
      <div className="home">
        <PokemonList
          pokemons={pokemons}
          title="Pokedex Lists"
          handleDelete={handleDelete}
        />
      </div>
    </>
  );
};

export default Home;
