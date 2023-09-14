import "./App.css";
import Rutas from "./Routes/Rutas";
import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Rutas />
      <Footer />
    </div>
  );
}

export default App;
