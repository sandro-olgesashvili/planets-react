import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import dataPlanets from "./data.json";
import Mercury from "./pages/Mercury";
import Planet from "./pages/Planet";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Mercury dataMercury={dataPlanets[0]} />} />
        <Route path="/:id" element={<Planet dataPlanets={dataPlanets} />} />
      </Routes>
    </div>
  );
}

export default App;
