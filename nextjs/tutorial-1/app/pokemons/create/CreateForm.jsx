"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CreateForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [pType, setPType] = useState("Normal");
  const [sType, setSType] = useState("");
  const [description, setDescription] = useState("");
  const [thumb, setThumb] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const resGet = await fetch("http://localhost:4000/pokemons");
      const pokemons = await resGet.json();

      const lastId =
        pokemons.length > 0
          ? Math.max(...pokemons.map((p) => parseInt(p.id)))
          : 0;
      const newId = (lastId + 1).toString().padStart(3, "0");

      const pokemon = {
        id: newId,
        name,
        pType,
        sType,
        description,
        thumb,
      };

      console.log(pokemon);

      const resPost = await fetch("http://localhost:4000/pokemons", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pokemon),
      });

      if (resPost.status === 201) {
        router.refresh();
        router.push("/pokemons");
      }
    } catch (error) {
      console.error("Error creating Pokémon:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Name :</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Pokemon Name"
          required
        />
      </label>

      <label>
        <span>Primary Type :</span>
        <select
          required
          value={pType}
          onChange={(e) => setPType(e.target.value)}
          className="bg-white"
        >
          <option value="Normal">Normal</option>
          <option value="Fire">Fire</option>
          <option value="Water">Water</option>
          <option value="Grass">Grass</option>
          <option value="Electric">Electric</option>
          <option value="Ice">Ice</option>
          <option value="Fighting">Fighting</option>
          <option value="Poison">Poison</option>
          <option value="Ground">Ground</option>
          <option value="Flying">Flying</option>
          <option value="Psychic">Psychic</option>
          <option value="Bug">Bug</option>
          <option value="Rock">Rock</option>
          <option value="Ghost">Ghost</option>
          <option value="Dragon">Dragon</option>
          <option value="Dark">Dark</option>
        </select>
      </label>

      <label>
        <span>Secondary Type :</span>
        <select
          required
          value={sType}
          onChange={(e) => setSType(e.target.value)}
          className="bg-white"
        >
          <option value="">No Secondary Type</option>
          <option value="Normal">Normal</option>
          <option value="Fire">Fire</option>
          <option value="Water">Water</option>
          <option value="Grass">Grass</option>
          <option value="Electric">Electric</option>
          <option value="Ice">Ice</option>
          <option value="Fighting">Fighting</option>
          <option value="Poison">Poison</option>
          <option value="Ground">Ground</option>
          <option value="Flying">Flying</option>
          <option value="Psychic">Psychic</option>
          <option value="Bug">Bug</option>
          <option value="Rock">Rock</option>
          <option value="Ghost">Ghost</option>
          <option value="Dragon">Dragon</option>
          <option value="Dark">Dark</option>
        </select>
      </label>

      <label>
        <span>Description :</span>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter Pokemon Description"
          required
        />
      </label>

      <label>
        <span>Thumb :</span>
        <textarea
          value={thumb}
          onChange={(e) => setThumb(e.target.value)}
          placeholder="Enter Thumb Link"
          required
        />
      </label>

      <button className="btn-primary" disabled={isLoading}>
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add New Pokemon</span>}
      </button>
    </form>
  );
}
