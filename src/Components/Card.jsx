import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ user }) => {
  const {
    state,
    addFavorite,
    removeFavorite,
    state: { favorites },
  } = useContext(ContextGlobal);

  const isFavFunction = () => {
    return favorites.some((fav) => fav.id === user.id);
  };

  const [isFavorite, setIsFavorite] = useState(isFavFunction());

  const onFavButtonClick = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      removeFavorite(user.id);
      setIsFavorite(false);
      return;
    }
    addFavorite(user);
    setIsFavorite(true);
  };

  return (
    <div className={`card ${state.themeClass}`} key={user.id}>
      <div>
        <img
          style={{
            width: "100%",
            height: "100%",
          }}
          src="https://vetic-img.s3.ap-south-1.amazonaws.com/website/landing+page/ezgif.com-gif-maker+(1).webp"
          alt=""
        />
      </div>
      <div>
        <p>Name:</p>
        <h4>
          <Link to={`/dentist/${user.id}`}>{user.name}</Link>
        </h4>
        <p>Username:</p>
        <h4>
          <Link to={`/dentist/${user.id}`}>{user.username}</Link>
        </h4>
        <button className="button-card" onClick={onFavButtonClick}>
          <img
            src={
              isFavorite
                ? "https://static.vecteezy.com/system/resources/previews/011/729/444/original/red-heart-icon-free-png.png"
                : "https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
            }
            alt="Favorite"
            width="30"
            height="30"
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
