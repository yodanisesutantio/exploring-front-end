import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getPokemons(id) {
  const res = await fetch("http://localhost:4000/pokemons/" + id, {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
}

export default async function PokemonDetails({ params }) {
  const pokemon = await getPokemons(params.id);
  const id = params.id;
  return (
    <main>
      <nav>
        <h2>Pokemon Details</h2>
      </nav>

      <div className="flex gap-4">
        <div className="card">
          <Image
            src={pokemon.thumb}
            alt="Pokemon Sprite"
            width={200}
            height={200}
            quality={100}
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="card h-full">
            <div className="flex gap-1">
              <div className={`pill ${pokemon.pType}`}>{pokemon.pType}</div>
              {pokemon.sType && (
                <div className={`pill ${pokemon.sType}`}>{pokemon.sType}</div>
              )}
            </div>
            <h3>
              {pokemon.name}{" "}
              <span className="text-gray-500 font-light">#{pokemon.id}</span>
            </h3>
          </div>
          <div className="card h-full">
            <h4 className="font-bold text-lg">Description</h4>
            <p>{pokemon.description}</p>
          </div>
        </div>

        <Link className="" href={"#"}>
          <button className="flex justify-center items-center btn-primary h-full w-48 text-center rounded-md">
            Full Details &nbsp; ▶
          </button>
        </Link>
      </div>
    </main>
  );
}
