import { createContext, useState } from "react";

export const loginAndLogOutContext = createContext();

export const LoginAndLogOutProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userId, setUserId] = useState(null);

  const [user, setUser] = useState({id:null, password:null})

  
  
  return (
    <loginAndLogOutContext.Provider
      value={{ userId, isLoggedIn, setIsLoggedIn, setUserId,user, setUser }}
    >
      {children}
    </loginAndLogOutContext.Provider>
  );
};
