import React from "react";
import PokemonList from "../components/PokemonList";
import useFetch from "../useFetch";

const Home = () => {
  const {
    data: pokemons,
    isPending,
    error,
  } = useFetch("http://localhost:8000/pokemons");

  return (
    <>
      <div className="home">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {pokemons && <PokemonList pokemons={pokemons} title="Pokedex Lists" />}
        {/* <button onClick={() => setName("Cheren")}>Change Name</button>
        <p>{name}</p> */}
      </div>
    </>
  );
};

export default Home;
