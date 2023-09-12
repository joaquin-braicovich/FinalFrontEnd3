import "./App.css";
import Rutas from "./Routes/Rutas";
import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import { useContext } from "react";
import { ContextGlobal } from "./Components/utils/global.context";

function App() {
  const { state } = useContext(ContextGlobal);

  return (
    <div id="appDiv" className={state.themeClass}>
      <Navbar />
      <Rutas />
      <Footer />
    </div>
  );
}

export default App;
