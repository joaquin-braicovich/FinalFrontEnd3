import React, { createContext, useReducer, useState, useEffect } from "react";

export const ContextGlobal = createContext(undefined);

const initialValue = {
  data: [],
  themeClass: "light-theme",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "toggleTheme":
      return {
        ...state,
        themeClass:
          state.themeClass === "light-theme" ? "dark-theme" : "light-theme",
      };
    case "setData":
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

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

  return (
    <ContextGlobal.Provider
      value={{
        state,
        handleTheme,
        getUsers,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};
