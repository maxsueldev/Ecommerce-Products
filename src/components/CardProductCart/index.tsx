import { useContext } from "react";
import IProduct from "../../interfaces/IProduct";
import { formatCurrency } from "../../utils";
import { CartContext } from "../../context/Cart";

interface CardProductCartProps {
  product: IProduct;
}

export default function CardProductCart({ product }: CardProductCartProps) {
  const { increaseQuantity, decreaseQuantity } = useContext(CartContext);

  const handleIncreaseQuantity = () => {
    increaseQuantity(product);
  };

  const handleDecreaseQuantity = () => {
    decreaseQuantity(product);
  };

  return (
    <div className="flex justify-start gap-8 border-1 w-2xl m-auto rounded-[4px]">
      <img src={product.imgUrl} alt={product.name} className="w-[160px]" />
      <div className="text-2xl flex gap-4 justify-between items-center w-full px-8">
        <div>
          <h3>{product.name}</h3>
          <p className="text-red-500">{formatCurrency(product.price)}</p>
        </div>
        <div>
          <button
            onClick={handleDecreaseQuantity}
            className="bg-red-600 px-4 rounded-[4px] text-white cursor-pointer"
          >
            -
          </button>
          <span className="px-2">{product.qtd}</span>
          <button
            onClick={handleIncreaseQuantity}
            className="bg-red-600 px-4 rounded-[4px] text-white cursor-pointer"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
