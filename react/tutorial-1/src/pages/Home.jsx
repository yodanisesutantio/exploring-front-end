import React, { useState, useEffect } from "react";
import PokemonList from "../components/PokemonList";

const Home = () => {
  const [pokemons, setPokemons] = useState(null);
  // const [name, setName] = useState("Bianca");
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/pokemons")
        .then((res) => {
          // console.log(res);
          if (!res.ok) {
            throw Error("Could not reach data source");
          }
          return res.json();
        })
        .then((data) => {
          // console.log(data);
          setPokemons(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          // console.log(err.message);
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

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
