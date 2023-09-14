export const GlobalReducer = (state, action) => {
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
      setDataUserById;
    case "ADD_FAVORITE": {
      const newFavorites = [...state.favorites, action.payload];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));

      return {
        ...state,
        favorites: newFavorites,
      };
    }

    case "REMOVE_FAVORITE": {
      const newFavorites = state.favorites.filter(
        (fav) => fav.id !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(newFavorites));

      return {
        ...state,
        favorites: newFavorites,
      };
    }

    default:
      return state;
  }
};

export default GlobalReducer;
