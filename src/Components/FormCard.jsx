import React, { useState } from "react";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";

function FormCard({ usuarios }) {
  const { state } = useContext(ContextGlobal);

  return (
    <main className={` card-grid ${state.themeClass}`}>
      <div>
        <div>
          {usuarios.map((usuario, index) => (
            <div key={index} className="card-form">
              <h2>Hola! {usuario.fullName}</h2>
              <p>
                En los siguientes dias te enviaremos toda la informacion al
                email:
              </p>
              <h2>{usuario.email}</h2>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default FormCard;
