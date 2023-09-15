import React from "react";
import Card from "../Components/Card";
import { useContext, useEffect } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

const Home = () => {
  const { state, getUsers } = useContext(ContextGlobal);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <main className={` ${state.themeClass}`}>
      <div className="card-grid">
        <div className={`card-container ${state.themeClass}`}>
          {state.data &&
            state.data.length > 0 &&
            state.data.map((user) => <Card key={user.id} user={user} />)}
        </div>
      </div>
    </main>
  );
};

export default Home;
