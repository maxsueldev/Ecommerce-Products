import React, { createContext, useState } from "react";
import ICart from "../interfaces/ICart";
import IProduct from "../interfaces/IProduct";

interface ICartContext {
  cart: ICart;
  setCart: React.Dispatch<React.SetStateAction<ICart>>;
  addProductToCart: (product: IProduct) => void;
}

const CartContext = createContext<ICartContext>({
  cart: {
    products: [],
    qtd_total: 0,
    price_total: 0,
  },
  setCart: () => {},
  addProductToCart: () => {},
});

CartContext.displayName = "cart";

const CartProvider = ({ children }: React.PropsWithChildren) => {
  const [cart, setCart] = useState<ICart>({
    products: [],
    qtd_total: 0,
    price_total: 0,
  });

  function addProductToCart(product: IProduct) {
    let updateProducts;

    const existeProduto = cart.products.find(
      (prod) => prod.name === product.name
    );

    if (existeProduto) {
      updateProducts = cart.products.map((prod) =>
        prod.name === product.name ? { ...prod, qtd: prod.qtd + 1 } : prod
      );
    } else {
      updateProducts = [...cart.products, { ...product, qtd: 1 }];
    }

    const updteQtdTotal = cart.qtd_total + 1;
    const updatePriceTotal = cart.price_total + product.price;

    setCart({
      products: updateProducts,
      qtd_total: updteQtdTotal,
      price_total: updatePriceTotal,
    });
  }

  return (
    <CartContext.Provider value={{ cart, setCart, addProductToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
