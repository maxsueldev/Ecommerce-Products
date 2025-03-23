import { useContext } from "react";
import { CartContext } from "../../context/Cart";

export default function Carrinho() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <ul>
        {cart.products.map((product) => (
          <li>
            {product.name}
            {product.qtd}
          </li>
        ))}
      </ul>
    </div>
  );
}
