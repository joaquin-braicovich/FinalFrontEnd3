import React, { createContext, useReducer } from "react";
import GlobalReducer, { ACTION_TYPE } from "./globalReducer";
export const ContextGlobal = createContext(undefined);

const storedFavorites = localStorage.getItem("favorites");

const initialValue = {
  data: [],
  themeClass: "light-theme",
  favorites: storedFavorites ? JSON.parse(storedFavorites) : [],
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialValue);

  const handleTheme = () => {
    dispatch({ type: ACTION_TYPE.TOGGLE_THEME });
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

      dispatch({ type: ACTION_TYPE.SET_DATA, payload: data });
    } catch (error) {
      throw error;
    }
  };

  const getUserById = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
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
        dispatch,
        handleTheme,
        getUsers,
        getUserById,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};
