import React from "react";
import { useContext, useState } from "react";
import { ContextGlobal } from "./utils/global.context";

const Form = ({ onAddUser }) => {
  const { state } = useContext(ContextGlobal);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  //Aqui deberan implementar el form completo con sus validaciones
  const validarCampos = (fullName, email) => {
    const camposValidos =
      fullName.trim().length >= 3 && email.trim().length >= 3;
    const sonNumeros = !isNaN(fullName.trim());
    const formatoEmailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    return camposValidos && !sonNumeros && formatoEmailValido;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const camposValidos = validarCampos(fullName, email);
    if (!camposValidos) {
      setError("Por favor chequea que la información sea correcta");
    } else {
      setError("");
      onAddUser({ fullName, email });
      setFullName("");
      setEmail("");
    }
  };

  return (
    <main className={` card-grid ${state.themeClass}`}>
      <div className="card-form">
        <h2>Want to know more?</h2>
        <p>Send us your cuestions and we will contact you</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            className="myInput"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="myInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
      </div>
    </main>
  );
};

export default Form;
