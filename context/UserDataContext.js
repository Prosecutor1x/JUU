
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

  const addUserData = async (uid)=>{
    const userSnapshot = await getDoc(doc(db, 'users', uid));

  if (!userSnapshot.exists()) {
    await setDoc(doc(db, 'users', `${uid}`), {
      uid: uid,
      name: displayName,
      email: email,
      phoneNumber: phoneNumber
    });
  } else {
  }
  }

  

  return (
    <userDataContext.Provider value={{ userData, setUserData, addUserData }}>
      {children}
    </userDataContext.Provider>
  );
}