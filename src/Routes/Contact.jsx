import React, { useState } from "react";
import Form from "../Components/Form";
import FormCard from "../Components/FormCard";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const [usuarios, setUsuarios] = useState([]);
  const addUsuario = (user) => {
    setUsuarios([...usuarios, user]);
    console.log(usuarios);
  };

  return (
    <div>
      <Form onAddUser={addUsuario} />
      <FormCard usuarios={usuarios} />
    </div>
  );
};

export default Contact;
