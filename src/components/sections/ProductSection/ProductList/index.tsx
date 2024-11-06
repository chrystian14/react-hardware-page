import styles from "./styles.module.scss";
import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";

export type Product = {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  img: string;
};

const productsArray: Product[] = [
  {
    id: 1,
    name: "PROCESSADOR INTEL CORE I9-14900, 24-CORE, 32-THREADS, 3.6GHZ (5.8GHZ TURBO), CACHE 36MB, LGA1700, BX8071514900",
    brand: "Intel",
    category: "Processador",
    price: 4728.23,
    img: "https://hardware-fake-api.onrender.com/_id1.jpg",
  },
  {
    id: 2,
    name: "PROCESSADOR AMD RYZEN 7 8700G, 8-CORE, 16-THREADS, 4.2GHZ (5.1GHZ TURBO), CACHE 24MB, AM5, 100-100001236BOX",
    brand: "AMD",
    category: "Processador",
    price: 2235.28,
    img: "https://hardware-fake-api.onrender.com/_id2.jpg",
  },
  {
    id: 3,
    name: "PROCESSADOR INTEL CORE I3-14100F, 4-CORE, 8-THREADS, 3.5GHZ (4.7GHZ TURBO), CACHE 12MB, LGA1700, BX8071514100F",
    brand: "Intel",
    category: "Processador",
    price: 964.69,
    img: "https://hardware-fake-api.onrender.com/_id3.jpg",
  },
  {
    id: 4,
    brand: "Gigabyte",
    name: "PLACA MAE GIGABYTE B650M S2H, DDR5, SOCKET AMD AM5, M-ATX, CHIPSET AMD B650, B650M-S2H",
    category: "Placa Mãe",
    price: 1082.34,
    img: "https://hardware-fake-api.onrender.com/_id4.jpg",
  },
];

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>(productsArray);

  useEffect(() => {
    setProducts(productsArray);
  }, []);

  return (
    <>
      <ul className={styles.productList}>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </ul>
    </>
  );
};
