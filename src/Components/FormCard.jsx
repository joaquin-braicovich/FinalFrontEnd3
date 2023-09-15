import React from "react";

function FormCard({ usuarios }) {
  return (
    <div>
      {usuarios.map((usuario, index) => (
        <div key={index} className="card">
          <h3>
            Hola {usuario.fullName} {usuario.email}!
          </h3>
        </div>
      ))}
    </div>
  );
}

export default FormCard;
