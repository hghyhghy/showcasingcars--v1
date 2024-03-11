import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./Reducer";
const AppContext = React.createContext();

const initialState = {
  name: "",
  image: ""
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Subham Technical",
        image: "/public/images/hero.svg"
      }
    });
  };

  const updateAboutPage = () => {
    dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Subham Sarkar",
        image: "/public/images/about1.svg"
      }
    });
  };




  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
