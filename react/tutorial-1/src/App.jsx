// import { useState } from "react";
import Navbar from "./components/Navbar";
import Create from "./pages/Create";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Create />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
