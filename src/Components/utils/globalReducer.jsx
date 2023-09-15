export const GlobalReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        themeClass:
          state.themeClass === "light-theme" ? "dark-theme" : "light-theme",
      };
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
      };

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

export const ACTION_TYPE = {
  TOGGLE_THEME: "TOGGLE_THEME",
  SET_DATA: "SET_DATA",
  ADD_FAVORITE: "ADD_FAVORITE",
  REMOVE_FAVORITE: "REMOVE_FAVORITE",
};

export default GlobalReducer;
