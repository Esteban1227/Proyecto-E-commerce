import { createContext, useState } from "react";

export const AddressUserContext = createContext();

export const AddressUserProvider = ({ children }) => {

  const [addressUser, setAddressUser] = useState([]);
  
  return (
    <AddressUserContext.Provider
      value={{ addressUser, setAddressUser }}
    >
      {children}
    </AddressUserContext.Provider>
  );
};