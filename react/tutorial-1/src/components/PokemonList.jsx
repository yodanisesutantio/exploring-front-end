import React from "react";

const PokemonList = ({ pokemons, title, handleDelete }) => {
  //   const pokemons = props.pokemons;
  //   const title = props.title;

  return (
    <>
      <h1>{title}</h1>
      <div className="pokemon-preview-wrapper">
        {pokemons.map((pokemon) => (
          <div className="pokemon-preview" key={pokemon.no}>
            <img src={pokemon.thumb} alt="Pokemon Sprite" />
            <small>#{pokemon.no}</small>
            <h2>{pokemon.name}</h2>
            <p>{pokemon.type}</p>
            <button onClick={() => handleDelete(pokemon.no)}>
              Release Pokemon
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default PokemonList;
