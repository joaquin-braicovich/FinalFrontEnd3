import React from "react";
import Card from "../Components/Card";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  return (
    <main className="">
      <div className="card-grid">
        {/* Aqui deberias renderizar las cards */}
        <Card />
      </div>
    </main>
  );
};

export default Home;
