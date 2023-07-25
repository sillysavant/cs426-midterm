import React, { createContext, useState } from "react";

export const GlobalArrayContext = createContext();

export const GlobalArrayProvider = ({ children }) => {
  const [myCart, setMyCart] = useState([]);
  const [profile, setProfile] = useState({
    name: "Anderson",
    phoneNo: "+60134589525",
    email: "Anderson@email.com",
    address: "3 Addersion Court Chino Hills, HO56824, United State",
    point: 0,
    loyalty: 0,
  });

  return (
    <GlobalArrayContext.Provider
      value={{ myCart, setMyCart, profile, setProfile }}
    >
      {children}
    </GlobalArrayContext.Provider>
  );
};
