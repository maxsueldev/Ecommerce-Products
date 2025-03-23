import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../../context/Cart";
import { useContext } from "react";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <div className="px-16 py-4 flex justify-between bg-black text-white text-xl">
      <nav>
        <ul className="flex gap-x-12">
          <li>
            <Link to="/" className="hover:text-red-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/carrinho" className="hover:text-red-600">
              Carrinho
            </Link>
          </li>
        </ul>
      </nav>
      <Link to="/carrinho" className="flex gap-2 justify-center cursor-pointer">
        <ShoppingCart />
        <p>{cart.qtd_total}</p>
      </Link>
    </div>
  );
}
