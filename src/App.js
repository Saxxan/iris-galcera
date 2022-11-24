import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Commercials from "./components/pages/Commercials/Commercials";
import Film from "./components/pages/Film/Film";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/commercials" element={<Commercials />} />
        <Route path="/film" element={<Film />} />
      </Routes>
    </div>
  );
}

export default App;
