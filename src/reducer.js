const initialAppState = {
  activePageLink: 0,
  selectedLanguage: "en",
  subActiveMenuLink: 0
};

export const reducer = (state = initialAppState, action) => {
  switch (action.type) {
    case "ACTIVE_LINK": {
      return { ...state, activePageLink: action.payload };
    }
    case "SELECTED_LANG":
      return { ...state, selectedLanguage: action.payload };
    case "ACTIVE_SUB_MENU_LINK":
      return { ...state, subActiveMenuLink: action.payload };
    default:
      return { ...state };
  }
};
