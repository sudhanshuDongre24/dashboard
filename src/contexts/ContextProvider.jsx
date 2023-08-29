import React, { createContext, useContext, useState } from "react";

const stateContext = createContext();

const initalState = {
  chart: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initalState);

  const handleClick = (clicked) => {
    setIsClicked({ ...initalState, [clicked]: true });
  };

  const [screenSize, setScreenSize] = useState(undefined);
  return (
    <stateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
