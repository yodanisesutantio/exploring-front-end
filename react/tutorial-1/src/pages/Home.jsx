import React, { useState, useEffect } from "react";
import PokemonList from "../components/PokemonList";

const Home = () => {
  const [pokemons, setPokemons] = useState(null);

  const [name, setName] = useState("Bianca");

  useEffect(() => {
    fetch("http://localhost:8000/pokemons")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setPokemons(data);
      });
  }, [name]);

  return (
    <>
      <div className="home">
        {pokemons && <PokemonList pokemons={pokemons} title="Pokedex Lists" />}
        <button onClick={() => setName("Cheren")}>Change Name</button>
        <p>{name}</p>
      </div>
    </>
  );
};

export default Home;
