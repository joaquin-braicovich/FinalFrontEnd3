import React, { useContext, useState } from "react";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ user }) => {
  const {
    addFavorite,
    removeFavorite,
    state: { favorites, themeClass },
  } = useContext(ContextGlobal);

  const isFavFunction = () => {
    return favorites.some((fav) => fav.id === user.id);
  };

  // esto es una state local no interfiere en el state que tenes en el context, se usa solo para mostrar el mensaje
  const [isFavorite, setIsFavorite] = useState(isFavFunction());

  const onFavButtonClick = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      removeFavorite(user.id);
      setIsFavorite(false);
      //Este return hace que salga de la funcion (onFavButtonClick). Para no poner un else y tener tantos de estos {}
      return;
    }
    addFavorite(user);
    setIsFavorite(true);
  };

  return (
    <div style={{ paddingBottom: "1rem" }} className="card" key={user.id}>
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
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default Card;
