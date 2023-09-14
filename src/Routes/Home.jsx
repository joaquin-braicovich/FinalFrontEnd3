import React from "react";
import Card from "../Components/Card";
import { useContext, useEffect } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

const Home = () => {
  const { state, getUsers } = useContext(ContextGlobal); // Obtén el estado del contexto global

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <main className={` ${state.themeClass}`}>
      <div className="card-grid">
        {/* Pasa los datos 'data' del estado global al componente Card */}
        <div className={`card-container ${state.themeClass}`}>
          {state.data.map((user) => (
            <Card user={user} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
