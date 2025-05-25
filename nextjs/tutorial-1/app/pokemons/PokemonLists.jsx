import Image from "next/image";
import React from "react";

async function getPokemons() {
  const res = await fetch("http://localhost:4000/pokemons", {
    next: {
      revalidate: 30,
    },
  });

  return res.json();
}

export default async function PokemonLists() {
  const pokemons = await getPokemons();
  return (
    <>
      {pokemons.map((pokemon) => (
        <div className="card my-5" key={pokemon.id}>
          <Image
            src={pokemon.thumb}
            alt="Pokemon Sprite"
            width={120}
            height={120}
            quality={80}
          />
          <h3>
            {pokemon.name}{" "}
            <span className="text-gray-500 font-light">#{pokemon.id}</span>
          </h3>
          <p>{pokemon.description}</p>
          <div className="flex justify-end gap-1 mt-3">
            <div className={`pill ${pokemon.pType}`}>{pokemon.pType}</div>
            {pokemon.sType && (
              <div className={`pill ${pokemon.sType}`}>{pokemon.sType}</div>
            )}
          </div>
        </div>
      ))}
      {pokemons.length === 0 && (
        <div className="card my-5">
          <h3>No Pokemons Found</h3>
          <p>There are no pokemons available at the moment.</p>
        </div>
      )}
    </>
  );
}
