import "./App.css";
import Rutas from "./Routes/Rutas";
import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Card from "./Components/Card";

import { useContext } from "react";
import { ContextGlobal } from "./Components/utils/global.context";

function App() {
  const { state, handleTheme } = useContext(ContextGlobal);

  return (
    <div id="appDiv" className={state.themeClass}>
      <Rutas />
      <Navbar />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
