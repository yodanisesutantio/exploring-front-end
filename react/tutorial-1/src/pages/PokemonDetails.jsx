import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const PokemonDetails = () => {
  const { id: currentId } = useParams();
  const {
    data: pokemons,
    error,
    isPending,
  } = useFetch("http://localhost:8000/pokemons/" + currentId);
  const formattedType = pokemons?.sType
    ? `${pokemons.pType} · ${pokemons.sType}`
    : pokemons?.pType;

  const [prevPokemon, setPrevPokemon] = useState(null);
  const [nextPokemon, setNextPokemon] = useState(null);

  const id = Number(currentId);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch previous and next pokemon by ID
    fetch(`http://localhost:8000/pokemons/${id - 1}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setPrevPokemon(data))
      .catch(() => setPrevPokemon(null));

    fetch(`http://localhost:8000/pokemons/${id + 1}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setNextPokemon(data))
      .catch(() => setNextPokemon(null));
  }, [id]);

  const handleDelete = () => {
    fetch("http://localhost:8000/pokemons/" + pokemons.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="pokemon-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {pokemons && (
        <div className="wrapper">
          <div className="navigate">
            {prevPokemon && (
              <Link to={`/pokemon/${prevPokemon.id}`}>
                &lt;&lt; #{prevPokemon.id} {prevPokemon.name}
              </Link>
            )}

            {nextPokemon && (
              <Link to={`/pokemon/${nextPokemon.id}`}>
                #{nextPokemon.id} {nextPokemon.name} &gt;&gt;
              </Link>
            )}
          </div>
          <article>
            <small>Pokemon Entry #{pokemons.id}</small>
            <h2>{pokemons.name}</h2>
            <p>{formattedType}</p>
            <img src={pokemons.thumb} alt="Pokemon Sprite" />
          </article>
          <button onClick={handleDelete}>Release Pokemon</button>
        </div>
      )}
    </div>
  );
};

export default PokemonDetails;
