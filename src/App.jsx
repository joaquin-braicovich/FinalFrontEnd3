import "./App.css";
import Rutas from "./Routes/Rutas";
import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ContextProvider } from "./Components/utils/global.context";

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Rutas />
      <Footer />
    </ContextProvider>
  );
}
export default App;
