import React, { createContext, useContext, useState } from "react";

export const Context = createContext({
  useres_involved: [],
  setuseres_involved: () => {},
  usersResponded : [],
  setusersResponded : () =>{}
});

export const ContextProvider = ({ children }) => {
  const [useres_involved, setuseres_involved] = useState([]);
  const [usersResponded,setusersResponded] = useState([]);

  return (
    <Context.Provider value={{ useres_involved, setuseres_involved,usersResponded,setusersResponded }}>
      {children}
    </Context.Provider>
  );
};
