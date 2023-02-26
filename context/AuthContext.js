
import React, { useContext, useState } from "react";
import { createContext } from "react";

const defaultValues = {
  confirmation : null,
  setConfirmation: ()=> { },
  phoneNumber: null,
  setPhoneNumber: () => { },
  code: null,
  setCode: () => { },
  verificationId: null,
  setVerificationId: () => { },
};

const AuthContext = createContext(defaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthContextProvider({ children }) {



  return (
    <AuthContext.Provider value={{ phoneNumber, setPhoneNumber, code, setCode, verificationId, setVerificationId, sendVerification, confirmCode, confirmation, setConfirmation }}>
      {children}
    </AuthContext.Provider>
  );
}