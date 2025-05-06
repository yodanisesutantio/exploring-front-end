import React, { useState } from "react";

const Create = () => {
  // const [entry, setEntry] = useState("");
  const [name, setName] = useState("");
  const [pType, setPType] = useState("");
  const [sType, setSType] = useState("");
  const [thumb, setThumb] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsPending(true);

    fetch("http://localhost:8000/pokemons")
      .then((res) => res.json())
      .then((data) => {
        const maxId = Math.max(...data.map((p) => Number(p.id)));
        const newPokemon = {
          id: maxId + 1,
          name,
          pType: pType === "" ? "Normal" : pType,
          sType: sType === "" ? null : sType,
          thumb,
        };
        return fetch("http://localhost:8000/pokemons", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newPokemon),
        });
      })
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ New Pokémon added:", data);
        setIsPending(false);
      })
      .catch((err) => {
        console.error("❌ Failed to add Pokémon:", err);
      });
  };

  return (
    <div className="create">
      <h2>Add New Pokemon</h2>

      <form onSubmit={handleSubmit}>
        {/* <label>Entry No.</label>
        <input
          type="number"
          required
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
        /> */}

        <label>Pokemon Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Primary Type</label>
        <select
          required
          value={pType}
          onChange={(e) => setPType(e.target.value)}
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

        <label>Secondary Type</label>
        <select value={sType} onChange={(e) => setSType(e.target.value)}>
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

        <label>Image Thumb:</label>
        <textarea
          required
          value={thumb}
          onChange={(e) => setThumb(e.target.value)}
        ></textarea>

        {!isPending && <button>Add Pokemon</button>}
        {isPending && <button disabled>Registering New Pokemon...</button>}
      </form>
    </div>
  );
};

export default Create;
