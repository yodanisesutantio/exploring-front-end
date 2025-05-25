import React from "react";
import PokemonLists from "./PokemonLists";

export default function Pokemons() {
  return (
    <main>
      <nav>
        <div className="">
          <h2>Pokemons</h2>
          <p>
            <small>Gen 1 Pokemons</small>
          </p>
        </div>
      </nav>

      <PokemonLists />
    </main>
  );
}
