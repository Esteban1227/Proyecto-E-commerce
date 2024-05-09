import { createContext, useState } from "react";

export const LoginAndLogOutContext = createContext();

export const LoginAndLogOutProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userId, setUserId] = useState(null);

  const [user, setUser] = useState({id:null, password:null})
  
  return (
    <LoginAndLogOutContext.Provider
      value={{ userId, isLoggedIn, setIsLoggedIn, setUserId,user, setUser }}
    >
      {children}
    </LoginAndLogOutContext.Provider>
  );
};
