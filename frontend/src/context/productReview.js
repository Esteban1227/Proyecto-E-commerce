import { createContext, useState } from "react";

export const ProductReviewContext = createContext();

export const ProductReviewProvider = ({ children }) => {

  const [productReviewId, setProductReviewId] = useState(null);
  const [productReview, setProductReview] = useState([]);
  
  return (
    <ProductReviewContext.Provider
      value={{ productReview, setProductReview,productReviewId, setProductReviewId }}
    >
      {children}
    </ProductReviewContext.Provider>
  );
};