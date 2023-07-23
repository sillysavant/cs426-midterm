import React, { createContext, useState } from "react";

export const GlobalArrayContext = createContext();

export const GlobalArrayProvider = ({ children }) => {
  const [myCart, setMyCart] = useState([]);

  return (
    <GlobalArrayContext.Provider value={{ myCart, setMyCart }}>
      {children}
    </GlobalArrayContext.Provider>
  );
};
