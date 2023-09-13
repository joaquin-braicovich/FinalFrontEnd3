import React from "react";
import Card from "../Components/Card";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

const Home = () => {
  const { state } = useContext(ContextGlobal); // Obtén el estado del contexto global

  return (
    <main className={` ${state.themeClass}`}>
      <div className="card-grid">
        {/* Pasa los datos 'data' del estado global al componente Card */}
        <Card data={state.data} />
      </div>
    </main>
  );
};

export default Home;
