import React, { createContext, useReducer } from "react";
import GlobalReducer from "./globalReducer";
export const ContextGlobal = createContext(undefined);

const initialValue = {
  data: [],
  themeClass: "light-theme",
  favorites: [],
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialValue);

  const handleTheme = () => {
    dispatch({ type: "toggleTheme" });
  };

  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const data = await response.json();

      dispatch({ type: "setData", payload: data });
    } catch (error) {
      throw error;
    }
  };

  const addFavorite = (data) => {
    dispatch({ type: "ADD_FAVORITE", payload: data });
  };

  const removeFavorite = (id) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: id });
  };

  return (
    <ContextGlobal.Provider
      value={{
        state,
        handleTheme,
        getUsers,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};
