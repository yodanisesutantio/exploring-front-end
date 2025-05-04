import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Bianca");
  const [age, setAge] = useState(12);

  const handleClick = () => {
    setName("Iris");
    setAge(14);
  };

  return (
    <>
      <div className="home">
        <h2>Pokedex List</h2>
        <p>
          {name} is {age} years old.
        </p>
        <button onClick={handleClick}>Click Me!</button>
      </div>
    </>
  );
};

export default Home;
