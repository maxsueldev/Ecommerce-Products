import React, { createContext, useState } from "react";
import ICart from "../interfaces/ICart";
import IProduct from "../interfaces/IProduct";

interface ICartContext {
  cart: ICart;
  setCart: React.Dispatch<React.SetStateAction<ICart>>;
  addProductToCart: (product: IProduct) => void;
  increaseQuantity: (product: IProduct) => void;
  decreaseQuantity: (product: IProduct) => void;
  finalizePurchase: () => void;
}

const CartContext = createContext<ICartContext>({
  cart: {
    products: [],
    qtd_total: 0,
    price_total: 0,
  },
  setCart: () => {},
  addProductToCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  finalizePurchase: () => {},
});

CartContext.displayName = "cart";

const CartProvider = ({ children }: React.PropsWithChildren) => {
  const [cart, setCart] = useState<ICart>({
    products: [],
    qtd_total: 0,
    price_total: 0,
  });

  const addProductToCart = (product: IProduct) => {
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

    const updateQtdTotal = cart.qtd_total + 1;
    const updatePriceTotal = cart.price_total + product.price;

    setCart({
      products: updateProducts,
      qtd_total: updateQtdTotal,
      price_total: updatePriceTotal,
    });
  };

  const increaseQuantity = (product: IProduct) => {
    const updateProducts = cart.products.map((prod) =>
      prod.name === product.name ? { ...prod, qtd: prod.qtd + 1 } : prod
    );
    const updateQtdTotal = cart.qtd_total + 1;
    const updatePriceTotal = cart.price_total + product.price;

    setCart({
      products: updateProducts,
      qtd_total: updateQtdTotal,
      price_total: updatePriceTotal,
    });
  };

  const decreaseQuantity = (product: IProduct) => {
    let updateProducts;

    if (product.qtd === 1) {
      updateProducts = cart.products.filter((prod) => prod.id !== product.id);
    } else {
      updateProducts = cart.products.map((prod) =>
        prod.name === product.name ? { ...prod, qtd: prod.qtd - 1 } : prod
      );
    }

    const updateQtdTotal = cart.qtd_total - 1;
    const updatePriceTotal = cart.price_total - product.price;

    setCart({
      products: updateProducts,
      qtd_total: updateQtdTotal,
      price_total: updatePriceTotal,
    });
  };

  const finalizePurchase = () => {
    setCart({
      products: [],
      qtd_total: 0,
      price_total: 0,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addProductToCart,
        increaseQuantity,
        decreaseQuantity,
        finalizePurchase,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
