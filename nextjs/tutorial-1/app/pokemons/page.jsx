import React, { Suspense } from "react";
import PokemonLists from "./PokemonLists";
import Loading from "../loading";

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

      <Suspense fallback={<Loading />}>
        <PokemonLists />
      </Suspense>
    </main>
  );
}
