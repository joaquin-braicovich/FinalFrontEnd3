import React, { createContext, useReducer, useState, useEffect } from "react";

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  function reducer(state, action) {
    switch (action.type) {
      case "toggleTheme":
        return {
          ...state,
          themeClass:
            state.themeClass === "light-theme" ? "dark-theme" : "light-theme",
        };
      case "setAllUsers":
        return {
          ...state,
          allUsers: action.payload,
        };
      case "setUserById":
        return {
          ...state,
          allUser: action.payload,
        };

      default:
        return state;
    }
  }

  useEffect(() => {
    const getData = async () => {
      const usuarios = await getUsers();
      handleUsers(usuarios);
    };
    getData();
  }, []);

  const initialValue = {
    allUsers: {},
    allUser: {},
    themeClass: "light-theme",
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleTheme = () => {
    dispatch({ type: "toggleTheme" });
  };

  const handleUsers = (data) => {
    dispatch({ type: "setAllUsers", payload: data });
  };

  const handleUserById = (data) => {
    dispatch({ type: "setUserById", payload: data });
  };

  // returns una lista de usuarios
  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  const getUserById = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Datos obtenidos:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <ContextGlobal.Provider
      value={{
        state,
        handleTheme,
        handleUsers,
        handleUserById,
        getUsers,
        getUserById,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};
