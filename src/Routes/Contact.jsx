import React, { useState } from "react";
import Form from "../Components/Form";
import FormCard from "../Components/FormCard";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(true);
  const addUsuario = (user) => {
    setUsuarios((prevUsuarios) => {
      const updatedUsuarios = [...prevUsuarios, user];
      console.log(updatedUsuarios); // Aquí verás el valor actualizado
      return updatedUsuarios;
    });
    setMostrarFormulario(false);
  };

  return (
    <div>
      {mostrarFormulario && <Form onAddUser={addUsuario} />}
      <FormCard usuarios={usuarios} />
    </div>
  );
};

export default Contact;
