import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">We Hit a Brick Wall</h2>
      <p>We could not find the page you were looking for.</p>

      <p>
        Go back to <Link href={"/"}>pokemon list</Link>
      </p>
    </main>
  );
}
