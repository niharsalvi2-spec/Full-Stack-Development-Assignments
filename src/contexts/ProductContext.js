import React, { createContext, useState } from "react";
import products from "../data/products";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // Use local product data instead of FakeStore API
  const [allProducts] = useState(products);

  return (
    <ProductContext.Provider value={{ products: allProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
