import React from "react";
import Card from "../Components/Card";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <main className={` ${state.themeClass}`}>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        <div className={`card-container ${state.themeClass}`}>
          {state.favorites.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Favs;
