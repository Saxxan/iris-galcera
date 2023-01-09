// Basic styles
import "./App.css";

//Dependencies
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages components
import Home from "./components/pages/Home/Home";
import Commercials from "./components/pages/Commercials/Commercials";
import Film from "./components/pages/Film/Film";
import Project from "./components/pages/Project/Project";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/commercials" element={<Commercials />} />
        <Route path="/film" element={<Film />} />
        <Route path="/film/:id" element={<Project />} />
        <Route path="/commercial/:id" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
