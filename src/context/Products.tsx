import React, { createContext, ReactNode, useEffect, useState } from "react";
import IProduct from "../interfaces/IProduct";

interface IProductsContext {
  products: IProduct[];
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

const ProductsContext = createContext<IProductsContext>({
  products: [],
  setProducts: () => {},
});

ProductsContext.displayName = "products";

const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      await fetch("http://localhost:8000/products")
        .then((resp) => resp.json())
        .then((data) => setProducts(data));
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
