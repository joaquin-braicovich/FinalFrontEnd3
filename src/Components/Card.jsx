import React, { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";

const Card = () => {
  const { state } = useContext(ContextGlobal);
  const users = Array.isArray(state.allUsers) ? state.allUsers : [];

  return (
    <div className="card-container">
      {users.map((user) => (
        <div className="card" key={user.id}>
          <img
            style={{
              width: "100%",
              height: "100%",
            }}
            src="https://vetic-img.s3.ap-south-1.amazonaws.com/website/landing+page/ezgif.com-gif-maker+(1).webp"
            alt=""
          />
          <h2>{user.name}</h2>
          <p>{user.username}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
