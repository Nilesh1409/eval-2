import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authContext,setAuthContext] = React.useState(false);

  let handleAuthContext = () => {
    setAuthContext(!authContext);
  }
  
  return <AuthContext.Provider value={{authContext,handleAuthContext}} >{children}</AuthContext.Provider>;
};
