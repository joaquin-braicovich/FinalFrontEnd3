import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";

export const AppContext = () => {
  const context = useContext(ContextGlobal);

  const [state, dispatch] = context;

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

  return {
    handleTheme,
    getUsers,
    addFavorite,
    removeFavorite,
    state,
    dispatch,
  };
};
