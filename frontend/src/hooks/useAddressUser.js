import { useContext, useEffect } from "react";

import { AddressUserContext } from "../context/addressUser";

import { useLoginAndLogout } from "./useLoginAndLogout"
import axios from "axios";

export const useAddresUser = () => {
  const { setAddressUser, address } = useContext(AddressUserContext);

  const { userId } = useLoginAndLogout()

  const fetchProductReviews = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/api/get/direcciones/${userId}`
      );

      if (response.status === 200) {
        const data = response.data;
        setAddressUser(data);
      }
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    fetchProductReviews();
  }, [address]);

  return {
    setAddressUser,
    address
  };
};
