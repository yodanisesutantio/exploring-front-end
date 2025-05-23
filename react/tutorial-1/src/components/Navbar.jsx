import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <h1>Gen 5 Pokedex</h1>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/add">Add New Pokemon</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
