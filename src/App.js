import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import dataPlanets from "./data.json";
import Mercury from "./pages/Mercury";
import Planet from "./pages/Planet";
import { useState } from "react";

function App() {
  const [mobileOn, setMobileOn] = useState(false);

  return (
    <div className="container" style={{height:mobileOn ? "600px" : ""}}>
      <Header setMobileOn={setMobileOn} mobileOn={mobileOn} />
      <Routes>
        <Route path="/" element={<Mercury mainData={dataPlanets[0]} mobileOn={mobileOn}  setMobileOn={setMobileOn}/>} />
        <Route path="/:id" element={<Planet dataPlanets={dataPlanets} mobileOn={mobileOn}  setMobileOn={setMobileOn}/>} />
      </Routes>
    </div>
  );
}

export default App;
