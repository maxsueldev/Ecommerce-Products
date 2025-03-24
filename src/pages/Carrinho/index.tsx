import { useContext } from "react";
import { CartContext } from "../../context/Cart";
import CardProductCart from "../../components/CardProductCart";
import { formatCurrency } from "../../utils";
import { useNavigate } from "react-router-dom";

export default function Carrinho() {
  const { cart, finalizePurchase } = useContext(CartContext);
  const navigate = useNavigate();

  const handleFinalizePurchase = () => {
    finalizePurchase();
    navigate("/");
  };

  if (cart.products.length === 0) {
    return (
      <div className="w-full text-center text-red-600 text-[1.4rem] mt-[200px]">
        <p>Seu carrinho está vazio</p>
      </div>
    );
  }

  return (
    <>
      <div>
        <ul className="space-y-8 mt-20">
          {cart.products.map((product) => (
            <li key={product.id}>
              <CardProductCart product={product} />
            </li>
          ))}
        </ul>

        <div className="text-xl text-center my-8">
          <p>Valor total: {formatCurrency(cart.price_total)}</p>
          <button
            onClick={handleFinalizePurchase}
            className="bg-blue-500 rounded-[4px] p-2 cursor-pointer mt-1.5"
          >
            Finalizar compra
          </button>
        </div>
      </div>
    </>
  );
}
