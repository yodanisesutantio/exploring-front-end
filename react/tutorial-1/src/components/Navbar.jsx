import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h1>Gen 5 Pokedex</h1>

        <div className="links">
          <a href="/">Home</a>
          <a href="/add">Add New Pokemon</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
