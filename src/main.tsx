import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RouterApp from "./routes";
import { ProductsProvider } from "./context/Products";
import { CartProvider } from "./context/Cart";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <ProductsProvider>
        <RouterApp />
      </ProductsProvider>
    </CartProvider>
  </StrictMode>
);
