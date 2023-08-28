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

  return (
    <stateContext.Provider value={{ activeMenu, setActiveMenu }}>
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
