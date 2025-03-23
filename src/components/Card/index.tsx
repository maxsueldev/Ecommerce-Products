import { useContext } from "react";
import IProduct from "../../interfaces/IProduct";
import { formatCurrency } from "../../utils";
import { CartContext } from "../../context/Cart";

interface ICardProps {
  product: IProduct;
}

export default function Card({ product }: ICardProps) {
  const { addProductToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addProductToCart(product);
  };

  return (
    <div className="flex border-2 rounded-[4px] w-xl">
      <img
        className="w-[20rem] h-[17rem]"
        src={product.imgUrl}
        alt={product.name}
      />
      <div className="flex flex-col justify-between text-center">
        <div className="p-2 py-6">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="m-[20px]">{product.description}</p>
          <p className="text-[1.2rem] text-blue-500">
            {formatCurrency(product.price)}
          </p>
        </div>
        <button
          onClick={handleAddToCart}
          className="bg-red-600 text-white py-4 cursor-pointer"
          type="button"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
