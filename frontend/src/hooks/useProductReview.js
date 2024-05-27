import { useContext, useEffect } from "react";

import { ProductReviewContext } from "../context/productReview";
import axios from "axios";

export const useProductReview = () => {
  const {
    setProductReview,
    productReview,
    productReviewId,
    setProductReviewId,
  } = useContext(ProductReviewContext);

  const fetchProductReviews = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/api/get/resenas/${productReviewId}`
      );

      if (response.status === 200) {
        const data = response.data;
        setProductReview(data);
      }
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    fetchProductReviews();
  }, [productReviewId]);

  return {
    setProductReview,
    productReview,
    productReviewId,
    setProductReviewId,
    fetchProductReviews,
  };
};
