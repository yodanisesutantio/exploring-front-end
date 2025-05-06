import React from "react";
import { Link } from "react-router-dom";

const PokemonList = ({ pokemons, title }) => {
  //   const pokemons = props.pokemons;
  //   const title = props.title;

  return (
    <>
      <h1>{title}</h1>
      <div className="pokemon-preview-wrapper">
        {pokemons.map((pokemon) => {
          // Check if sType exists and format the type string
          const formattedType = pokemon.sType
            ? `${pokemon.pType} · ${pokemon.sType}`
            : pokemon.pType;

          return (
            <Link
              to={`/pokemon/${pokemon.id}`}
              className="pokemon-preview"
              key={pokemon.id}
            >
              <img src={pokemon.thumb} alt="Pokemon Sprite" />
              <small>#{pokemon.id}</small>
              <h2>{pokemon.name}</h2>
              <p>{formattedType}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default PokemonList;
