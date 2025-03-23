import { useContext } from "react";
import { ProductsContext } from "../../context/Products";
import Card from "../../components/Card";

export default function Home() {
  const { products } = useContext(ProductsContext);

  return (
    <main className="p-16">
      <ul className="flex flex-wrap gap-8 justify-center">
        {products.map((product) => (
          <li key={product.id}>
            <Card product={product} />
          </li>
        ))}
      </ul>
    </main>
  );
}
