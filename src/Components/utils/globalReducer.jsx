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

    case "ADD_FAVORITE": {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }

    case "REMOVE_FAVORITE": {
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav.id !== action.payload),
      };
    }

    default:
      return state;
  }
};

export default GlobalReducer;
