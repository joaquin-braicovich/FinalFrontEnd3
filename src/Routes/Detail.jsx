import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

const Detail = () => {
  const { id } = useParams();
  const { state, getUserById } = useContext(ContextGlobal);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const user = await getUserById(id);
        setUser(user);
      }
    };

    fetchData();
  }, [id]);

  return (
    <main className="card-grid">
      <div className={`card-details ${state.themeClass}`}>
        {user ? (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
};

export default Detail;
