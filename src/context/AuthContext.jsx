import { createContext, useEffect, useState, useContext } from "react";
import { userStateChecker } from "../auth/firebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    userStateChecker(setCurrentUser);
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useGlobalContext = () => {
  return useContext(AuthContext);
};
