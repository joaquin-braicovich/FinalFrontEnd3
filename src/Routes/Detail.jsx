import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

const Detail = () => {
  const { id } = useParams();
  const { state, getUserById } = useContext(ContextGlobal);

  useEffect(() => {
    getUserById(id);
  }, []);

  return (
    <div className={`detail ${state.themeClass}`}>
      <h1>Detail Dentist id {id}</h1>
      {state.data && state.data.length > 0 ? (
        state.data.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
