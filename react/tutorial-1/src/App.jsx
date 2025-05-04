// import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </>
  );
}

export default App;
