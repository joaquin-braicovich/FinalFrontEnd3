import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import Dentist from "../assets/dentist.png";
import EmptyHeart from "../assets/heart-regular.svg";
import FullHeart from "../assets/heart-solid.svg";

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
          src={Dentist}
          alt="Dentist Ilustration"
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
          {isFavorite ? (
            <img className="corazon" src={FullHeart} alt="Corazon lleno" />
          ) : (
            <img src={EmptyHeart} alt="Corazon vacio" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;
