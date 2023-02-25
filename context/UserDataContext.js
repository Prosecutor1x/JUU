
import React, { useContext, useState } from "react";
import { createContext } from "react";

const defaultValues = {
  userData: null,
  setUserData: () => {},
};

const userDataContext = createContext(defaultValues);

export function useUser() {
  return useContext(userDataContext);
}

export function userDataContextProvider({ children }) {
  const [userData, setUserData] = useState(defaultValues.userData);

  

  return (
    <userDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </userDataContext.Provider>
  );
}