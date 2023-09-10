import React from "react";
import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

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
              <img
                src="https://images.vexels.com/media/users/3/273011/isolated/preview/bac1c9f19d573ed4d8ec48233952c870-icono-de-luna-de-juego-de-rol.png"
                alt="Tema Claro"
              />
            ) : (
              <img
                src="https://cdn-icons-png.flaticon.com/256/4457/4457060.png"
                alt="Tema Oscuro"
              />
            )}
          </button>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
