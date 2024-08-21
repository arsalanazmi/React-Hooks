import React, { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const userData = {
    name: "Arsalan Raza Azmi",
    age: 32,
  };
  return <AppContext.Provider value={userData}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
