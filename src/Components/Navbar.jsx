import React from "react";
import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import Moon from "../assets/moon-solid.svg";
import Sun from "../assets/sun-solid.svg";

const Navbar = () => {
  const { state, handleTheme } = useContext(ContextGlobal);
  return (
    <>
      <div className="navDiv">
        <h2>Odontologica</h2>
        <nav>
          <div>
            <Link to="/home" className="link-style">
              Home
            </Link>
          </div>
          <div>
            <Link to="/contacto" className="link-style">
              Contact
            </Link>
          </div>
          <div>
            <Link to="/favs" className="link-style">
              Favs
            </Link>
          </div>

          <button onClick={handleTheme}>
            {state.themeClass === "light-theme" ? (
              <img src={Moon} alt="Tema Claro" />
            ) : (
              <img src={Sun} alt="Tema Oscuro" />
            )}
          </button>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
