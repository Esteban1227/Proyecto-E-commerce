import { useContext, useEffect } from "react";
import { loginAndLogOutContext } from "../context/loginAndLogout";

export const useLoginAndLogout = () => {

    const { userId, isLoggedIn, setUserId,  setIsLoggedIn, user, setUser } = useContext(loginAndLogOutContext)

  const handleSimpleLogin = (id) => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("id", id);
    setUserId(localStorage.getItem("id"));
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn) {
      setIsLoggedIn(true);
      setUserId(localStorage.getItem("id"));
    }
  }, []);

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("id");
    localStorage.removeItem("access_token");
  };

  return {
    handleLogout,
    handleSimpleLogin,
    userId,
    isLoggedIn,
    user,
    setUser
  }
} 