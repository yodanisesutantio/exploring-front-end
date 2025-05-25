import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "./logo.webp";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={logo}
        alt="Pokeball Icon"
        width={45}
        quality={100}
        placeholder="blur"
      />
      <h1>Gen 1 Pokedex</h1>
      <Link href={"/"}>Home</Link>
      <Link href={"/pokemons"}>Pokemons</Link>
    </nav>
  );
}
