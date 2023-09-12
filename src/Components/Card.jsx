import React, { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "./utils/global.context";

const Card = () => {
  const { state, getUsers } = useContext(ContextGlobal);

  useEffect(() => {
    getUsers();
  }, []);

  const data = Array.isArray(state.data) ? state.data : [];

  console.log("Datos de la API:", data);

  return (
    <div className={`card-container ${state.themeClass}`}>
      {data.map((user) => (
        <div className="card" key={user.id}>
          <img
            style={{
              width: "100%",
              height: "100%",
            }}
            src="https://vetic-img.s3.ap-south-1.amazonaws.com/website/landing+page/ezgif.com-gif-maker+(1).webp"
            alt=""
          />
          <h2>Name: {user.name}</h2>
          <p>Username: {user.username}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
