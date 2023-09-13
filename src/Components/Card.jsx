import React, { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ data }) => {
  const {
    state,
    getUsers,
    addFavorite,
    removeFavorite,
    state: { favorites },
  } = useContext(ContextGlobal);

  const { id } = data || {};

  const isFav = favorites.some((fav) => fav.id === id);

  const [isFavorite, setIsFavorite] = useState(isFav);

  const onFavButtonClick = (e) => {
    e.stopPropagation();

    if (!isFavorite) {
      addFavorite(data);
    } else {
      removeFavorite(id);
    }

    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const datos = Array.isArray(state.data) ? state.data : [];

  return (
    <div className={`card-container ${state.themeClass}`}>
      {datos.map((user) => (
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
          <button onClick={onFavButtonClick}>
            {isFav ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
