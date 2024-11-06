import styles from "./styles.module.scss";
import { ProductCard } from "./ProductCard";
import { useEffect, useState } from "react";
import { hardwareApi } from "../../../../service/api";
import { LoadingSpinner } from "../../../LoadingSpinner";

export type Product = {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  img: string;
};

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setIsLoading(true);
        const { data } = await hardwareApi.get("/hardwares");
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ul className={styles.productList}>
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </ul>
      )}
    </>
  );
};
